import React, { useState } from "react";

let pName = [];
let pPrice = [];
let pCount = [];
let pStatus = [];
let totalCost = 0;
const ShoppingCart = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productCount, setProductCount] = useState('');
  const [isSubmittted, setIsSubmitted] = useState(false);


  const handleAddProduct = (e) => {
    e.preventDefault();
    setIsSubmitted(false);
    // totalCost = 0;
    if (pName.indexOf(productName) < 0) {
      pName.push(productName);
      pPrice.push(productPrice);
      pCount.push(productCount);
      pStatus.push(true);
    } else {
      let index = pName.indexOf(productName);
      pPrice[index] = pPrice[index] + productPrice;
      pCount[index] = pCount[index] + productCount;
      pStatus[index] = true;
    }
  }

  const calculate = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(pName, pPrice, pCount);
    pPrice.map((e, i) => {
      if (pStatus[i] === true) {
        // console.log(pStatus[i]);
        let currProdCount = pCount[i];
        pStatus[i] = false;

        if (currProdCount > 3) {
          currProdCount -= Math.floor(currProdCount / 3);
        }
        console.log(pName[i], pPrice[i], pCount[i], e*currProdCount);
  
        totalCost += e*currProdCount;
  
        if (pName.length >= 5) {
          totalCost -= (totalCost/100) * 10;
        }
      }
    });
    totalCost = Math.round(totalCost);
    console.log('totalCost = ', totalCost);
  }

  return (
    <>
      <div>
        <form>
          <label>
            Enter the product : 
            <input
              type="text"
              value={productName}
              onChange={(e => setProductName(e.target.value))}
            />
          </label>
          <label>
            Enter the price : 
            <input
              type="number"
              value={productPrice}
              onChange={(e => setProductPrice(e.target.value))}
            />
          </label>
          <label>
            Enter the count : 
            <input
              type="number"
              value={productCount}
              onChange={(e => setProductCount(e.target.value))}
            />
          </label>

          <div id="submit-btns">
            <button onClick={handleAddProduct}>Add Product</button>
            <button onClick={calculate}>Calculate</button>
          </div>
        </form>
        
        {isSubmittted && (
          <div>Total Cost = {totalCost}</div>
        )}
      </div>
    </>
  );
};

export default ShoppingCart;
