import "../style/App.css";
import Flipkart from "../image/flipkart.png";
export const Header=()=>{
    return(
        <div className="header">
      <div className="top-bar">
        <div className="item top-bar-start"></div>

        <div className="item top-bar-img">
          <a><img className="img-top-bar" src={Flipkart}></img></a>
          <a className="flipkart-explore" href="/plus">Explore <span className="flipkart-explore-span">Plus</span>
          <img className="flipkart-plus-img" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png"/></a>
        </div>

        <div className="item top-bar-input">
          <input
            className="input-top-bar"
            placeholder="Search For products, brands, and more"
          />
        </div>
        <div className="item top-bar-button">
          <button className="button-top-bar">Login</button>
        </div>
        <div className="item top-bar-seller">
          <span className="span-header">Become a Seller</span>
        </div>
        <div className="item top-bar-more">
          <span className="span-header">More</span>
        </div>
        <div className="item top-bar-cart">
          <span className="span-header">Cart</span>
        </div>
        <div className="item top-bar-end"></div>
      </div>
    </div>
    )
}
