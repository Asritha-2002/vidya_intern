import React, { useState } from "react";
import { data } from "../data/women.jsx";
import { menData } from "../data/men.jsx";
import { kData } from "../data/kida.jsx";

const Shop = () => {
  const [womensWear, setWomensWear] = useState([]);

  const handleWomens = () => {
    setWomensWear(data);
  };
  const handleMens = () => {
    setWomensWear(menData);
  };
  const handleKids = () => {
    setWomensWear(kData);
  };

  let cart=[];

  const storeItem=(id)=>{
   const sItem=womensWear.find(item=>item.id === id);
   console.log(sItem);
   const cartItem={
    id:sItem.id,
    product:sItem.product,
    image:sItem.image,
    price:sItem.price,
    quantity:1
   }
   alert(`${sItem.type} added to cart`)
   cart.push(cartItem);
   console.log(cart);
   
  }

  return (
    <div>
      <div className="sHeading">SHOPPING TIME🤩</div>
      <div className="categoryBtns">
        <button onClick={handleWomens}>Women's Wear</button>
        <button onClick={handleMens}>Men's Wear</button>
        <button onClick={handleKids}> Kid's Wear</button>
      </div>

      <div className="elements">
        <ul typeof="none" className="productsList">
          {womensWear.map((item) => {
            const {id,product,image,type,brand,model,price,category,description} = item;
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

                <button className="cart" onClick={()=>storeItem(id)}>Add to Cart</button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Shop;
