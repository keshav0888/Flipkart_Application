import "../style/menuBar.css";
import { MenuItem } from "./menuItem";

export const MenuBar = () => {
  const menuList = [
    {
      name: "Grocery",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    },
    {
      name: "Mobiles",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    },
    {
      name: "Fashion",
      img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/0d75b34f7d8fbcb3.png?q=100",
    },
    {
      name: "Electronics",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    },
    {
      name: "Home",
      img: "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    },
    {
        name: "Appliances",
        img: "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
      },
      {
        name: "Traval",
        img: "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
      },
    ,{
       name:"Top Offers", 
       img: "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100"
    },
    ,{
        name:"Beauty,Toys & More", 
        img: "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100"
     },
     ,{
        name:"Two Whee", 
        img: "https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100"
     }
  ];
  return (
    <div className="menu">
      {menuList.map((value, index) => (
        <MenuItem key={index} menu={value} />
      ))}
    </div>
  );
};
