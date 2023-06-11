import React from "react"
export const PromotionImg=(props)=>{
    console.log("keshav3",props.img)
     return(
        <div className="promotionImg-div"> 
          <img className="promotionImg" src={props.img}></img>
        </div>
     )
}