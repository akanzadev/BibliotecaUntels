import React from "react";
import "./Book.css"
import Book from "./Book";
import { useEffect, useState } from "react";
const Books = () => {
    const [books,setbooks] = useState([]);
    const url="https://api.jikan.moe/v3/search/anime?q=sword"

    useEffect(() => {
        fetch(url)
        .then((body)=>body.json())
        .then((data)=>setbooks(data.results))
        .catch((e)=>console.log("error al hacer la peticion"))
    }, []);

    return (
        <div>
            <div className="grid-book">
                <h2>Libros Clásicos</h2>
                {books.map((book)=>(
                        <Book titulo={book.title} key={book.id} episode={book.episodes} imagen={book.image_url} description={book.synopsis}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Books;