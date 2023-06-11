import React from "react"
import "../style/App.css"
import { PromotionImg } from "./promotionImg"
export const Promotion=()=>{
    const images=["https://rukminim1.flixcart.com/fk-p-flap/960/960/image/32655c2ae11bea21.jpg?q=50","https://rukminim1.flixcart.com/fk-p-flap/960/960/image/0e2442f1a34ac836.jpeg?q=50","https://rukminim1.flixcart.com/fk-p-flap/960/960/image/7864b554c3872f6a.jpg?q=50","https://rukminim1.flixcart.com/fk-p-flap/960/960/image/e8890c77e9f2f7de.jpg?q=50","https://rukminim1.flixcart.com/fk-p-flap/960/960/image/6e74ed329e25136b.jpg?q=50","https://rukminim1.flixcart.com/fk-p-flap/960/960/image/66c1732610e30e41.jpg?q=50"]
     return(
        <div className="promotion" >
          {
             images.map((value, index) => (
               <PromotionImg img={value}></PromotionImg>
              ))
          }
        </div>
     )
}