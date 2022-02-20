import React from 'react'
import './Footer.css'

const Footer = () => {
return (
    <div className= "main-footer">
    <div className="container">
     <div className="row">

 {/* /* col 1 */}
 <div className="col-1"> 
 
 <h3>Central University of Haryana</h3>

 
 </div>
 {/* col 2 */}
 <div className="col-2">
     <h4>About Us</h4>
     <ul className="list-unstyled">
         <li>Privacy Policy</li>
         <li>Terms and Conditions</li>
         <li>Services</li>
         <li>Campus Safety</li>
     </ul>
 </div>
 {/* col 3  */}
 <div className="col-3">
     <h4 >Explore</h4>
     <ul className="list-unstyled">
         <li>Home</li>
         <li>About</li>
         <li>Capabilities </li>
         <li>Careers</li>
              </ul>
            </div>
          </div>
          <br></br>
          <br></br>
          <hr/>
          <br></br>
          <div className="row">
           <p className="col-small">
               Copyright &copy;{new Date().getFullYear()} CUH | All right reserved <br></br>
              </p>
              <p className="birender">Website Designed and Maintained by BytecodeLearners</p>
          </div> 
           
      </div>
   </div>
)
}   

export default Footer;