import React, { useState } from "react";

var obj = {};
const BooksAvailable = () => {
  class Book {
    constructor(name, count) {
      this.name = name;
      this.count = count;
    }
  }

  let books = new Array();
  books[0] = new Book("Hatchet", 50);
  books[1] = new Book("Graceling", 5);
  books[2] = new Book("Mossflower", 100);
  books[3] = new Book("Coraline", 25);
  books[4] = new Book("kidnapped", 18);

  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookName, setBookName] = useState([
    books[0].name,
    books[1].name,
    books[2].name,
    books[3].name,
    books[4].name,
  ]);
  const [bookCount, setBookCount] = useState([
    books[0].count,
    books[1].count,
    books[2].count,
    books[3].count,
    books[4].count,
  ]);

  const addStatus = (e) => {
    e.preventDefault();

    var index = bookName.indexOf(title);
    if (status === "Return") {
      var arr = bookCount;
      console.log(typeof arr[index], typeof books[index].count);
      // if (arr[index] < books[index].count) {
        arr[index] = arr[index] + 1;
        setBookCount((prev) => (prev = arr));
      // }
    } else if (status === "Rent") {
      var arr = bookCount;
      // if (arr[index] < books[index].count && arr[index] >= 0) {
        arr[index] = arr[index] - 1;
        setBookCount((prev) => (prev = arr));
      // }
    }
  };

  const calculate = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    bookName.map((ele, i) => {
      if (!obj.hasOwnProperty(ele)) {
        obj[ele] = bookCount[i];
      }
    });

    // console.log(obj);
    // Object.entries(obj).map(([x, y]) => console.log(`${x} : ${y}`));
  };
  return (
    <>
      <div>
        <h2>Books List</h2>
        {books.map((e) => (
          <p>
            Book name: {e.name} ; Total book count: {e.count}
          </p>
        ))}
        <form>
          <label>
            Enter the Book name:
            <select value={title} onChange={(e) => setTitle(e.target.value)}>
              <option value="none">Select the book</option>
              {books.map((e) => (
                <option>{e.name}</option>
              ))}
            </select>
          </label>

          <label>
            Enter the status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="none">Select the choice</option>
              <option>Rent</option>
              <option>Return</option>
            </select>
          </label>

          <div id="submit-btns">
            <button onClick={addStatus}>Add Status</button>
            <button onClick={calculate}>Calculate</button>
          </div>
        </form>
      </div>

      {isSubmitted && Object.entries(obj).map(([x, y]) => `${x} : ${y};  `)}
    </>
  );
};

export default BooksAvailable;
