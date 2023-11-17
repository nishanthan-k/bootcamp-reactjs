import React, { useState } from "react";
import "../css/QuantityOfItemPurchased.css";
import ItemQuantity from "./ItemQuantity";

const ItemList = () => {
  const [itemListState, SetItemListState] = useState({
    vegetables: [
      "Carrot",
      "Beans",
      "Tomato",
      "Potato",
      "Beetroot",
      "Onion",
      "Radish",
    ],

    fruits: ["Apple", "Banana", "Grapes", "Orange", "Mango"],

    pulses: ["Green peas", "Bengal gram", "Horse gram", "Beaten rice"],

    cereals: ["Rice", "wheat", "Barley"],
  });

  // Object.entries(itemListState).map((e) => console.log(e[0], e[1]));

  return (
    <>
      <div className="ItemList">
        <div className="ItemListContent">
          {Object.entries(itemListState).map((e) => {
            return (
              <div className="Items">
                <p className="ItemsTitle">
                  {e[0].charAt(0).toUpperCase() +
                    e[0].substring(1).toLowerCase()}
                </p>
                <ul className="ItemListList">
                  {e[1].map((ele) => (
                    <li className="ItemListItems">{ele}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <ItemQuantity itemListState={itemListState} />
      </div>
    </>
  );
};

const QuantityOfItemPurchased = () => {
  return (
    <>
      <div className="ItemPurchased">
        <header className="ItemPurchasedHeader">Shopping Cart</header>
        <ItemList />
      </div>
    </>
  );
};

export default QuantityOfItemPurchased;
