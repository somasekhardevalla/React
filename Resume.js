import React from 'react'
import pdfFile from './images/updated_resume.pdf'

const Resume=()=>
{
    return(
        <div>
           <center className="res_bg">
            
           <div className="row">
            <div className="col-md-4 res">
                <div className="card bg-res">
                   <div className="imge">

                   </div>
                   <div className="cont">
                   {/* <h2>My resume</h2> */}
                    <a className="resume" href="https://myportimg6may.s3.amazonaws.com/updated_resume.pdf" target="_blank"><button className='r_bt'>Open Resume</button></a>
                   </div>
                </div>
            </div>
           </div>
           </center>
        </div>
    )
}
export default Resume;