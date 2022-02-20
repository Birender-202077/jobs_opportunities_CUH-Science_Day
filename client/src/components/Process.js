import React from "react";
import './Process.css';
import image from './image/img1.png'
function Process() {
    return (
        <div>
      <div className="image">
          <div className="Floating-caption">
             <p className="float_head"> INTERNSHIP PROCESS </p>
             <p className="float_txt"> 
             <span>→ Pre Internship Talk</span> <br></br> <hr></hr>
             <span>→ Submission of CV's</span> <br></br>  <hr></hr>
             <span>→ Group Discussions and Tests</span> <br></br> <hr></hr>
             <span>→ Interviews</span> <br></br> <hr></hr>
             <span>→ Final Offer</span>
              </p>
          </div>
      </div>   
           <div className="roadmap">
             <img src={image}/>
           </div>
          
           </div>
    );
  }
  
  export default Process;

 