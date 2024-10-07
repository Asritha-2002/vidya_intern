import React from "react"
import {menData} from "../data/men.jsx";
const Mens=()=>{

    const firstThree=menData.slice(0,6);
    return(
        <div>
            <h1 className="headingC">Men's Clothing Section</h1>
        <div className="cloths">
 {

firstThree.map((item,index)=>{

    return(
        <li key={index} className="cList" >
 <div className="clothsImg">
            <img src={item.image} alt=""/>
            </div>
        </li>
       
    )
})

}
</div>
        </div>
    )
}
export default Mens;