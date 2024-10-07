import React from "react";
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'
import { useState } from "react";
const Footer=()=>{

    const [dataa,setData]=useState({
        text:"",
        id:""
    })
    const changeData=(e)=>{
        setData({
            ...dataa,
            text:e.target.value,
            
        })
       
        
    }
    const handleSubmit=()=>{
        alert('We will Connect through Email')
        setData({
            ...dataa,
            text:''
        })
    }
    return(
        <div>
<div className="lastPage">
        <footer id="bottomm">
          <div className="signup">
            <div className="news">
              <h3>Sign Up for NewsLetter</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="email">
              <button id="signupbtn" onClick={handleSubmit}>SignUp</button>
              <input type="email" 
              id="email"
               placeholder="enter your email" 
               value={dataa.text}
               onChange={changeData}
               required
               />
            </div>
          </div>
          <hr className="hr2" />
          <div className="data">
            <div>
              <h3>Med+</h3>
              <p>Service</p>
              <p>Customer</p>
              <p>Satisfaction</p>
            </div>
            <div>
              <h3>About Us</h3>
              <p>
                Address: Lorem ipsum dolor sit amet consectetur, adipisicing
                elit.
              </p>
              <p>Service</p>
              <p>Customer</p>
              <p>Satisfaction</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p>1234567890</p>
              <p>Customer</p>
              <p>Coming Up</p>
              <p>New Arrival</p>
            </div>
            <div>
              <h3>Trending</h3>
              <p>Service</p>
              <p>Customer</p>
              <p>Shops</p>
            </div>
          </div>
          <div className="icons">
        <a href="https://www.linkedin.com/company/figma/" target="blank"><img src={icon1} alt="Linkedin account link" /></a>    
         <a href="https://www.figma.com/community/file/1138164721044478859/facebook-login" target="blank"><img src={icon2} alt="Facebook account link" /></a>   
         <a href="https://www.figma.com/community/file/1013470200889674140/twitter-desktop-pages-feed-sigup-login-profile" target="blank"><img src={icon3} alt="Twitter account link" /></a>   
          <a href="https://www.instagram.com/figma/" target="blank"> <img src={icon4} alt="Instagram account link" /></a> 

          </div>
          <h3 className="copyright">
            <small>&copy; 2024 all copy rights reserved</small>
          </h3>
        </footer>
        </div>
        </div>
    )
}
export default Footer