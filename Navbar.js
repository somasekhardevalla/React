import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import{auth} from'./Config_firebase'
import{useAuthState}from 'react-firebase-hooks/auth'



 const Navbar=()=> {
  // const logout=async()=>
  // {
  //    await signOut(auth);
  // }
  const [user]=useAuthState(auth)
  return (
    <div>
        <div className="bg">
          
            <ol className='center'>
                <Link to="/"><li><a href='' className="Active">Home</a></li></Link>
                <Link to="/Resume"><li><a href=''>Resume</a></li></Link>
                <Link to="/demo"><li><a href=''>{user?"signout":"signin"}{/*signin/out*/}</a></li></Link>
                {user &&
                  <Link to="/post"><li><a href=''>post</a></li></Link>
                }
                
            </ol>
        <div> 
          {user &&
          (
            <>
            <p className='para'>{user?.displayName}</p>
            {/* <img src={user?.photoURL} alt=""  width="40" height="40"/> */}
            </>
            )
          }
       </div>
       </div>
        <Outlet/>
    </div>
  )
}
export default Navbar
