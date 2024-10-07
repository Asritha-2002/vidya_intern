import React from "react"
import {kData} from "../data/kida.jsx";
const Kids=()=>{

    const firstThree=kData.slice(0,6);
    return(
        <div>
            <h1 className="headingC">Kid's Clothing Section</h1>
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
export default Kids;