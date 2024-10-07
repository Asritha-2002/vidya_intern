import "./App.css";
import image1 from "./images/back4.jpg";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png"
import icon3 from "./images/icon3.png"
import icon4 from "./images/icon4.png"


function App() {


  return (
    <>
      <div className="page1">
        <div className="navbar">
          <h1>Figma</h1>
          <a href="#home" id="a1">
            Home
          </a>
          <a href="shop.html">Shop</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="cart.html">Cart</a>
        </div>
        <section id="home">
          <div className="body">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat,
              corrupti consequatur? Iste culpa fugit in, voluptate delectus
              recusandae quasi hic voluptas, neque, at ipsam beatae asperiores
              quos magni excepturi ea.
              <br />
              <br />
              <button>For More</button>
            </p>

            <img src={image1} alt="just an image" />
          </div>
        </section>
      </div>
      <div className="page2">
  <section id="about">
  <div class="know">
        <h1>#Know Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <hr />

      <div class="about">
        <img src={image1} width="90%" />
        <p>
          <b>Who we are?</b>Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Iure officiis, alias dolorum aut, corrupti amet itaque aliquam
          delectus minus quaerat tenetur suscipit porro excepturi numquam earum
          consectetur? Velit animi aperiam, ea, maxime eveniet magni optio
          maiores aliquid, voluptate vitae rem excepturi facilis. Aliquid fugiat
          officiis, facere ea nemo tempora maiores?Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Aliquam quasi sit reprehenderit suscipit
          quos eveniet? Ad nulla qui sequi voluptatem, et sed rem adipisci
          obcaecati dolores, accusamus atque tempore consequuntur corporis
          quisquam repudiandae optio recusandae, nisi maxime veritatis autem!
          Nostrum dicta omnis modi est ullam doloremque laboriosam harum
          deleniti perspiciatis?Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Nobis ullam neque quae expedita eum vitae minus.
          Sint, exercitationem odit pariatur amet repellendus, voluptate ab
          consectetur obcaecati eum natus illum ducimus?
        </p>
      </div>
  </section>
</div>

<div className="page3">
  <section id="contact">
<div class="know">
            <h1>#Let's Connect</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
       <hr/>
<div className="contact">
 <div className="address">
    <h2>Visit Our Office or Contact Us Today</h2>
    <p>
        Address:   <address>
            D No 1/6/437/2, A/4, Gudi Malkapur Rd, Lakshmi Nagar, Laxmi Nagar Colony, Mehdipatnam, Hyderabad, Telangana 500028
        </address>
    Contact : demoemail@gmail.Coming
    Number:1234567890
</p>
</div>
<div className="form">
<form>
<h2 class="h2">Connect With Us. Fill The Form</h2>
<label >First Name:</label>
    <input type="text" id="firstName" required/><br/>
    <label >Last Name:</label>
    <input type="text" id="lastName" required/><br/>
    <label>Email:</label>
    <input type="email" id="email" required/><br/>
    <label>Number:</label>
    <input type="tel" id="number" required/><br/>
    <label>Address:</label>
    <input type="address" id="address" required/><br/>
    <button id="btn" type="button">Submit</button>
</form>
 
</div>
 
   

</div>

</section>
</div>

      <div className="lastPage">
        <footer id="bottomm">
          <div className="signup">
            <div className="news">
              <h3>Sign Up for NewsLetter</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="email">
              <label id="signupbtn">SignUp</label>
              <input type="email" id="email" placeholder="enter your email" />
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
        <a href=""><img src={icon1} alt="Linkedin account link" /></a>    
         <a href=""><img src={icon2} alt="Linkedin account link" /></a>   
         <a href=""><img src={icon3} alt="Linkedin account link" /></a>   
          <a href=""> <img src={icon4} alt="Linkedin account link" /></a> 

          </div>
          <h3 className="copyright">
            <small>&copy; 2024 all copy rights reserved</small>
          </h3>
        </footer>
      </div>
     
    </>
  );
}

export default App;
