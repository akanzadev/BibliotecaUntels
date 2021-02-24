import React from "react";
// import "./Book.css";
import "./Books.scss"
import Book from "./Book";
import { useEffect, useState } from "react";
const Books = ({books}) => {

    return (
        <div className="container-book">
            
            <div className="grid-book">
                <h2>Libros Clásicos</h2>
                {books.map((book)=>(
                        <Book titulo={book.title} key={book.mal_id} episode={book.episodes} imagen={book.image_url} description={book.synopsis}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Books;