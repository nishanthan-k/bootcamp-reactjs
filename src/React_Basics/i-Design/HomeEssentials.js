import React from "react";
import './HomeEssentials.css'

const HomeEssentials = () => {
  const kitchenItemsPurchased = [
    "Paper Towel Holder",
    "Cups",
    "Drawer Organizers",
    "Water Filtration",
    "Placemats",
    "Cutting Board",
    "Shelf Liners",
    "Placemats",
    "Cutting Board",
    "Shelf Liners",
  ];
  const utilityItemsPurchased = [
    "Light Bulbs",
    "Extension Cords",
    "Batteries",
    "First Aid Kit",
    "Flashlights",
    "Candles",
    "Matches",
  ];
  const homeDecortemsPurchased = [
    "Toss Pillows",
    "Slipcovers",
    "Picture Frames",
    "Wall Art",
    "Door Mats",
    "Lighting",
    "Wall Hanging Kits",
  ];
  const bedroomItemsPurchased = [
    "Mattress Pad",
    "Mattress Protector",
    "Air Mattress",
    "Pillow Protectors",
    "Pillows",
    "Blankets",
    "Quilts",
  ];
  return (
    <>
      <div id="home-component">
        <h1>Home Essentials</h1>

        <div className="item-row">
          <div className="item-col">
            <h3 id="kitchen-items">Kitchen Essentials</h3>
            <ul>
              {kitchenItemsPurchased.map((ele, i) => (
                <li key={`kitchenitems${i}`} id={`kitchenitems${i}`}>{ele}</li>
              ))}
            </ul>
          </div>

          <div className="item-col">
            <h3 id="utility-items">Utility</h3>
            <ul>
              {utilityItemsPurchased.map((ele, i) => (
                <li key={`utilityitems${i}`} id={`utilityitems${i}`}>{ele}</li>
              ))}
            </ul>
          </div>

          <div className="item-col">
            <h3 id="decorative-items">Decorative Items</h3>
            <ul>
              {homeDecortemsPurchased.map((ele, i) => (
                <li key={`decorativeitems${i}`} id={`decorativeitems${i}`}>{ele}</li>
              ))}
            </ul>
          </div>

          <div className="item-col">
            <h3 id="decorative-items">Bedroom Essential</h3>
            <ul>
              {bedroomItemsPurchased.map((ele, i) => (
                <li key={`bedroomitems${i}`} id={`bedroomitems${i}`}>{ele}</li>
              ))}
            </ul>
          </div>  
        </div>
      </div>
    </>
  );
};

export default HomeEssentials;
