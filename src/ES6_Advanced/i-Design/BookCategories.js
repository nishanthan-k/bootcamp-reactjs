import React, { useState } from "react";

const obj = {};
const BookCategories = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [output, setOutput] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const bookArray = new Array();

  class Books {
    constructor(title, category) {
      this.title = title;
      this.category = category;
    }
  }

  const findCategorycount = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    for (const key in obj) {
      var newObj = {};
      newObj[key] = obj[key];
      bookArray.push(newObj);
    }

    bookArray.map((e) => {
      var arr = Object.entries(e);
      arr.map((ele) => {
        console.log(ele[1].length);
        output.push(`${ele[0]}: ${ele[1].length}  \n`);
      });
    });

    console.log("output", output);
    console.log("typeof output", typeof output[0]);
  };

  const handleAddBooks = (e) => {
    e.preventDefault();

    var classObj = new Books(title, category);

    if (obj.hasOwnProperty(classObj.category)) {
      obj[classObj.category].push(classObj.title);
      console.log("if", classObj.title);
    } else {
      obj[classObj.category] = [classObj.title];
      console.log("else", classObj.title);
    }
    console.log(obj);
    console.log(Object.entries(obj));
  };

  return (
    <>
      <div>
        <form>
          <label>
            Enter the title of the book :
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <label>
            Enter the category :
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          <button onClick={handleAddBooks}>Add Books</button>
          <button onClick={findCategorycount}>Submit</button>
        </form>

        {isSubmitted && (
          <h3>
            Output: {output}
          </h3>
        )}
      </div>
    </>
  );
};

export default BookCategories;
