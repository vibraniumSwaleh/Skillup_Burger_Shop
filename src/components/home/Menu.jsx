// Write all the code here
import React from "react";
import MenuCard from "./MenuCard";
import Burger1 from "../../assets/burger1.png";
import Burger2 from "../../assets/burger2.png";
import Burger3 from "../../assets/burger3.png";

function Menu() {
  
  const menuItems = [
    {
      itemNum: 1,
      burgerSrc: Burger1,
      price: 2560,
      title: "Cheeseburger",
    },
    {
      itemNum: 2,
      burgerSrc: Burger2,
      price: 4920,
      title: "Veggie Burger",
    },
    {
      itemNum: 3,
      burgerSrc: Burger3,
      price: 2560,
      title: "Chicken Burger",
    },
  ];

  const handleBuyNow = (itemNum) => {
    alert(`Item number ${itemNum} has been added to the cart.`);
  };

  return (
    <div id="menu">
    <h1>Menu</h1>
        <div>
        {menuItems.map((item, index) => (
            <MenuCard
            key={index}
            itemNum={item.itemNum}
            burgerSrc={item.burgerSrc}
            price={item.price}
            title={item.title}
            handler={(itemNum) => handleBuyNow(itemNum)}
            />
        ))}
        </div>
        </div>
  );
}

export default Menu;
