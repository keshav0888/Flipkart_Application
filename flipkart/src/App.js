import React from "react";
import "./App.css";
import Flipkart from "./image/flipkart.png";
function App() {
  return (
    <div className="header">
      <div className="top-bar">
        <div className="item top-bar-start"></div>
        <div className="item top-bar-img">
          <img className="img-top-img" src={Flipkart}></img>
        </div>
        <div className="item top-bar-input">
          <input
            className="input-top-bar"
            placeholder="Search For products, brands, and more"
          />
        </div>
        <div className="item top-bar-img-button">
          <button className="button-top-bar">Login</button>
        </div>
        <div className="item top-bar-img-seller">
          <span>Become a Seller</span>
        </div>
        <div className="item top-bar-img-more">
          <span>More</span>
        </div>
        <div className="item top-bar-img-cart">
          <span>Cart</span>
        </div>
        <div className="item top-bar-end"></div>
      </div>
    </div>
  );
}

export default App;
