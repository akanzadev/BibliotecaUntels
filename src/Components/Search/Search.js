import React, { useState } from "react";
import "./Search.css";
//rafc
const Search = () => {
  const [book, setbook] = useState("");
  const [alert, setalert] = useState(false);
  const HandleSubmit = (e) => {
    e.preventDefault();
    if (book === "") {
      console.log("Ingrese valores");
      setalert(true);
    } else {
      console.log("todo ok");
      setalert(false);
    }
  };

  const OnChangeInput = (e) => {
    let book = e.target.value;
    setbook(book);
    console.log(book);
  };
  return (
    <section className="book-search">
      <form className="form-book" onSubmit={HandleSubmit}>
        <div className="form-book__control">
          <input
            id="book"
            type="text"
            placeholder="Search Book Here..."
            value={book}
            onChange={OnChangeInput}
          ></input>
          <label for="book">
            <i className="fa fa-search" aria-hidden="true"></i>
          </label>
        </div>
        {alert ? (
          <div className="alert">
            <span>Error!</span> Ingrese el libro que desea buscar :)
          </div>
        ) : null}
      </form>
    </section>
  );
};

export default Search;
