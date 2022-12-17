import React from 'react'
import { Link,Outlet } from 'react-router-dom'


const PageNotFound=()=>{
    return(
    <div>
        <center >
        <h3 className="page">OOps Something Went Wrong or Page Under Construction</h3>
        </center>
        <div>
            <Link to='/'><button className='bt'>Back</button></Link>
        </div>
        <div className='pageimage'>
        </div>
    </div>
    )
}
export default PageNotFound
