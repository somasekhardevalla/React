import React from 'react';
import{useForm} from 'react-hook-form'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'
import {db} from './Config_firebase'
import {addDoc,collection,getDocs} from 'firebase/firestore'
import {auth} from './Config_firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import {useNavigate} from 'react-router-dom'


const  Form=()=>{
    const [user]=useAuthState(auth)
    const navigate=useNavigate()

    const schema= yup.object().shape({
        Name:yup.string().required("Name should be present"),
        Email: yup.string().required("Email should be present"),
        contactNumber: yup.number().required("contact number should be present")
    });
    const {register,handleSubmit,formState:{errors}} =useForm({
        resolver: yupResolver(schema)
    });
    const postref =collection(db,"posts")
  const postSubmit =async(data)=>
  {
    await addDoc(postref,{
     ...data,
     username:user?.displayName,
     userid:user?.uid
    });
    navigate("/");
    // console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(postSubmit)}>
    <input placeholder='Full Name...' {...register("Name")} />
    <p style={{color:"red"} }>{errors.Name?.message}</p>
    <input type="email"placeholder='Email...'{...register("Email")} />
    <p style={{color:"red"} }>{errors.Email?.message}</p>
    <input type="number" placeholder='Mobile number...'{...register("contactNumber")} />
    <p style={{color:"red"} }> {errors.contactNumber?.message}</p>
    <input type="submit" value="Submit" />
   </form>
  )
};
export default Form
