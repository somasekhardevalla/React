import React from 'react'
import {useState} from 'react';

 function Body() {
  const [count,setCount]=useState(0);
  const update=()=>
  {
      setCount(count+1);
      
  }
  return (
    <div>
        <div className="body">
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                   <div className="image">
                   </div>
                    <button className="btn" id='butt' onClick={()=>update()}><a href="https://www.linkedin.com/in/devalla-soma-sekhar-reddy-8b97b5228/">Connect</a></button>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="right">
                  <button className="btn"><a href="#">Gmail</a></button>
                  <button className="btn"><a href="#">whatsapp</a></button>
                  <button className="btn"><a href="#">mobile</a></button>
                </div>

              </div>
            </div>
          </div>
          <h5>No.of times connect button is clicked: {count}</h5>
        </div>
    </div>
  )
}
export default Body