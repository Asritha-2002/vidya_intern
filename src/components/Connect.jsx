import React from "react";
import { useState } from "react";
const Connect=()=>{


   const handleSubmit=()=>{
    alert('we will connect back through email or mobile soon...')

   }
    return(
        <div>
<div className="page3">
  <section id="contact">
<div className="know">
            <h1>#Let's Connect</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       <hr/>
<div className="contact">
 <div className="address">
    <h2>Visit Our Office or Contact Us Today</h2>
    <p>
        Address:  
            D No 1/6/437/2, A/4, Gudi Malkapur Rd, Lakshmi Nagar, Laxmi Nagar Colony, Mehdipatnam, Hyderabad, Telangana 500028
       
    Contact : demoemail@gmail.Coming
    Number:1234567890
</p>
</div>
<div className="form">
<form>
<h2 className="h2">Connect With Us. Fill The Form</h2>
<label >First Name:</label>
    <input 
    type="text" 
    id="firstName"
    required/><br/>
    <label >Last Name:</label>
    <input type="text" id="lastName"  required/><br/>
    <label>Email:</label>
    <input type="email" id="email" required/><br/>
    <label>Number:</label>
    <input type="tel" id="number" required/><br/>
    <label>Address:</label>
    <input type="address" id="address" required/><br/>
    <button id="btn"  onClick={handleSubmit}>Submit</button>
</form> 
</div>
</div>
</section>
</div></div>
    )
}

export default Connect