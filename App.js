import React from 'react'
import { useState } from 'react'
import './App.css'
import backend from './components/Backend'
import Demo from './components/Demo'
import Navbar from './components/Navbar'
import Body from './components/Body'
import PageNotFound from './components/Page_not_found'
import Resume from './components/Resume'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Post from "./components/Post"

function App(props) {
  
  return(
    <div>
        <BrowserRouter>
           <Navbar/> 
           {/* <Body/> */}
          <Routes>
              {/* <Route path="/" element={<Navbar />}> */}
              {/* <Navbar/> */}
                 <Route index element={<Body/>} />
                 <Route path="Resume" element={<Resume/>} />
                 <Route path="post" element={<Post/>} />
                 <Route path="demo" element={<Demo/>} />
                 <Route path="*" element={<PageNotFound/>} />
    
              {/* </Route> */}
          </Routes>

          
            
        </BrowserRouter>
    </div>
  );
}

export default App;
