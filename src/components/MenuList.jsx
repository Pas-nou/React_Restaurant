import { useState } from "react";
import MenuItem from "./MenuItem";

function MenuList({ foodItems }) {
  
  return (
    <>
        {foodItems.map((item, index) => (
            <MenuItem
              key={index} 
              itemName={item.itemName}
              foodImage={item.foodImage}
              description={item.description}
              price={item.price}
              isFavorite={item.isFavorite} 
              />
        ))}
    </>
  );
}

export default MenuList;