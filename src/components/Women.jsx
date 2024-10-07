import React from "react";
import {data} from "../data/women.jsx";

const Women=()=>{

    const firstThreeImgs=data.slice(0,6);
    return(

        <div>
            <h1 className="headingC">Women's Clothing Section</h1>
        <div className="cloths">
           
            {

firstThreeImgs.map((item,index)=>{

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
export default Women