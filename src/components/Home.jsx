import React, { useState } from "react";
import image1 from "../images/back.jpg";
import image2 from "../images/back2.jpg";

import Connect from "./Connect.jsx";
import Products from "./Products.jsx";
import { data } from "../data/women.jsx";
import { menData } from "../data/men.jsx";
import { kData } from "../data/kida.jsx";
import Footer from "./Footer.jsx";

const Home = () => {

  let count=0;
  const [about, setAbout] = useState(
    "Iste culpa fugit in, voluptate delectus recusandae quasi hic voluptas, neque, at ipsam beatae asperiores quos magni excepturi ea..."
  );
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const handleAbout = () => {
    setAbout(
      "voluptate delectus recusandae quasi hic voluptas, neque, at ipsam beatae asperiores quos magni excepturi ea.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat, corrupti consequatur? Iste culpa fugit in, voluptate delectus recusandae quasi hic voluptas, neque, at ipsam beatae asperiores quos magni excepturi ea."
    );
    setIsButtonClicked(true); // Hide the button after it's clicked
  };

  const [clothing, setClothing] = useState([]);
  const [cart, setCart] = useState([]); 
  const [quantities, setQuantities] = useState({}); 
  const [formVisible, setFormVisible] = useState(false); // State for showing the form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  }); 

  const handleWomens = () => {
    setClothing(data);
  };
  const handleMens = () => {
    setClothing(menData);
  };
  const handleKids = () => {
    setClothing(kData);
  };

  const handleQuantityChange = (id, value) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: value, 
    }));
  };

  const storeItem = (id) => {
    const sItem = clothing.find((item) => item.id === id);
    const quantity = quantities[id] || 1; 

    const cartItem = {
      id: sItem.id,
      product: sItem.product,
      image: sItem.image,
      price: sItem.price,
      quantity: parseInt(quantity, 10), 
    };

    alert(`${sItem.type} added to cart`);
    setCart((prevCart) => [...prevCart, cartItem]);
  };

  const clearItems = () => {
    setCart([]);
  };

  const adrForm = () => {
    setFormVisible(true); // Show the form when "Place Order" is clicked
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
const choosePay=()=>{
  alert('Your Address Saved Successfully.Select Pay option to proceed');
  setFormVisible(false)
  prompt("Cash on delivery-1 \n Debit/Credit Cards-2 \n Wallet-3 \n Pay By any UPI App-4\n");
  alert("Order Placed Successfully.Continue Shopping😉")
  
}

  return (
    <>
      <div className="page1">
        <div className="navbar">
          <h1>Figma Fashion</h1>
          <a href="#home" id="a1">
            Home
          </a>
          <a href="#shop">Shop</a>
          <a href="#about">About Us</a>
          <a href="#contact">Contact Us</a>
          <a href="#cart" className="cartImg"><img src="/assets/cart2.png" alt="" width={20} height={20} className="cartImg"/></a>
        </div>

        <section id="home">
          <div className="body">
            <p>
              {about}
              <br />
              <br />
              {!isButtonClicked && (
                <button onClick={handleAbout}>For More</button>
              )}
            </p>
<div className="banner">
<img src={image1} alt="" className="one"/>
<img src={image2} alt="" className="two"/>
</div>
           
          </div>

          <Products />
        </section>

        <div className="page2">
          <section id="about">
            <div className="know">
              <h1>#Know Us</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <hr />

            <div className="about">
              <img src={image1} width="90%" />
              <p>
                <b>Who we are?</b>Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Iure officiis, alias dolorum aut, corrupti amet
                itaque aliquam delectus minus quaerat tenetur suscipit porro
                excepturi numquam earum consectetur? Velit animi aperiam, ea,
                maxime eveniet magni optio maiores aliquid, voluptate vitae rem
                excepturi facilis. Aliquid fugiat officiis, facere ea nemo
                tempora maiores?Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aliquam quasi sit reprehenderit suscipit quos
                eveniet? Ad nulla qui sequi voluptatem, et sed rem adipisci
                obcaecati dolores, accusamus atque tempore consequuntur corporis
                quisquam repudiandae optio recusandae, nisi maxime veritatis
                autem! Nostrum dicta omnis modi est ullam doloremque laboriosam
                harum deleniti perspiciatis?Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Nobis ullam neque quae expedita eum
                vitae minus. Sint, exercitationem odit pariatur amet repellendus,
                voluptate ab consectetur obcaecati eum natus illum ducimus?
              </p>
            </div>
          </section>
        </div>

        <Connect />

        <div className="page4">
          <section id="shop">
            <div>
              <div className="sHeading">SHOPPING TIME🤩</div>
              <div className="categoryBtns">
                <button onClick={handleWomens}>Women's Wear</button>
                <button onClick={handleMens}>Men's Wear</button>
                <button onClick={handleKids}>Kid's Wear</button>
              </div>

              <div className="elements">
                <ul typeof="none" className="productsList">
                  {clothing.map((item) => {
                    const {
                      id,
                      product,
                      image,
                      type,
                      brand,
                      model,
                      price,
                      category,
                      description,
                    } = item;

                    return (
                      <li key={id} className="eachItem">
                        <img src={image} alt="" className="iImage" />
                        <h3>{product}</h3>
                        <h4>{type}</h4>
                        <p>{brand}</p>
                        <p>{model}</p>
                        <h3>{price}$</h3>
                        <p>{category}</p>
                        <p>{description}</p>
                        <input
                          type="number"
                          placeholder="Quantity"
                          min="1"
                          value={quantities[id] || 1} 
                          onChange={(e) => handleQuantityChange(id, e.target.value)}
                        />
                        <br/>
                        <button className="cart" onClick={() => storeItem(id)}>
                          Add to Cart
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="page5">
          <section id="cart">
            <h1 className="cartHead">Happy Shopping</h1>
            {
            cart.length === 0 ? (
              <p className="subHead">Your Cart is empty</p>
            ) : (
              <ul className="cartItems">
                {cart.map((item) => {
                  const { id, image, product, price, quantity } = item;
                  count+=(quantity*price)
                  return (
                   
                      <li key={id} className="lstItems">
                      <img src={image} alt={product} width="50" />
                      <h2>{product}</h2>
                      <p>Price: {price}$</p>
                      <p>Quantity: {quantity}</p>
                      <h4>Total: {quantity * price}$</h4>
                  
                    </li>
                   
                    
                  );
                })}
                <button onClick={adrForm} className="cBtn">Continue</button>
                <button onClick={clearItems}>Clear</button>
                <h2 className="totalCost">Total cost of the products:{count}$</h2>
              </ul>
              
            )
            
            }


            {formVisible && (
              <div className="addrForm">
                <h2 className="formHead">Enter your details to complete the purchase:</h2>
                <form>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  /><br/><br/>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  /><br/><br/>
                  <input
                    type="text"
                    name="address"
                    placeholder="Enter your address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                  /><br/><br/>
                  <button type="button" onClick={choosePay}>Submit</button>
                </form>
              </div>
            )}


          
           
          </section>
        </div>


        <Footer />
      </div>
    </>
  );
};

export default Home;
