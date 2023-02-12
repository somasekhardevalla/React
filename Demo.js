import React from 'react';
import { useState,useEffect } from 'react';
import {auth,provider} from './Config_firebase'
import {signInWithPopup, signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import {getDocs,collection} from 'firebase/firestore'
import {db} from './Config_firebase'
import{useAuthState}from 'react-firebase-hooks/auth'

const Demo=()=>{
// use state by arrow function
   //  const [data,setData]=useState(null);
   //  let [num,setNum]=useState(0);
   //  let [input,setInput]=useState("")
    // let [fet,setFet]=useState(null)
    // useEffect(()=>{
    //   fetch("https://jsonplaceholder.typicode.com/todos").then((res)=>res.json()).then((fet)=>setFet(fet));
    //   console.log("mounted");
    // },[]);
   //  const update=()=>
   //     {
   //       setData(data+1)
   //       setNum(num+1)
   //     }
   //     const change=(event)=>{
   //        setInput(event.target.value)
   //     }
// function update()
// {
//     setData("Devalla")
// }
const [user]=useAuthState(auth)
const[postlist,setPostList]=useState([])
const postref =collection(db,"posts")
const navigate=useNavigate()
const googlesignin=async()=>{
const signin =await signInWithPopup(auth,provider)
console.log(signin);
navigate('/');
}
const logout=async()=>
{
  await signOut(auth);
  navigate('/')
}


  const getpost=async()=>{
    const data=await getDocs(postref);
    // console.log(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
   setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
 }
 useEffect(()=>{
  getpost();
 },[]);

    

  return(
   
   
      //   <div>
      //        <div>

      //          {/* <h1>Hello {props.name}</h1> */}
      //            <h1>Hello {data} {num}</h1>
      //           <button onClick={update}>click</button>
      //        </div>
      //        <div>
      //           <input type="text"placeholder='name' onChange={change}/>
               
      //           {input};
      //        </div>
            //  <div>
            //</div>   {fet && fet.map((item)=> 
            //    {return <center><p key={item.id}>{item.title}</p></center>})}
            //  </div>
            
       // </div>
       <div className='demo'>
        <br />
        <br />
        <br />
        <p className='gsignin' style={{fontSize:"20px",fontWeight:"bold"}}>Sign in with google</p>
        <button onClick={googlesignin}><i className="fa-brands fa-google" style={{color:"green",fontSize:"25px"}}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sign in</button>
        <br />
        <br />
        <button onClick={logout}>signout</button>
        <br />
        <br />
          <div className='post'>
            {user &&
             <button onClick={getpost}>get posts</button> 
            }
            {postlist?.map((post)=>
           {
            return <div className='data' >
              <h1>{post.Name}</h1>
              <h2>{post.Email}</h2>
              <h3>{post.contactNumber}</h3>
            </div>
            })}
          </div>
       </div>
       
    );
}
export default Demo
