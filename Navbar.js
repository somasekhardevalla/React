import React from 'react'

import {Outlet,Link} from 'react-router-dom'


 const Navbar=()=> {
  return (
    <div>
        <div className="bg">
            <ol className='center'>
                <Link to="/"><li><a href='' className="Active">Home</a></li></Link>
                <Link to="/Resume"><li><a href=''>Resume</a></li></Link>
                <Link to="*"><li><a href=''>about</a></li></Link>
                <Link to="*"><li><a href=''>contact</a></li></Link>
            </ol>
        </div>
        <Outlet/>
    </div>
  )
}
export default Navbar
