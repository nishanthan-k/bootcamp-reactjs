import React from "react";
import "../css/ItemQuantity.css"

const ItemQuantity = (props) => {
  Object.entries(props.itemListState).map(e => console.log(e[0], e[1].length))
  return (
    <>
      <div className="ItemQuantity">
        <table className="ItemQuantityTable">
          <thead>
            <tr>
              <th>Items</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
          {Object.entries(props.itemListState).map(e => (
              <tr>
                <td>{e[0].charAt(0).toUpperCase() + e[0].substring(1).toLowerCase()}</td>
                <td>{e[1].length}</td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemQuantity;
