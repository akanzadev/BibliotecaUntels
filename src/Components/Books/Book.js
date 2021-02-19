import React, { Fragment } from "react";
import "./Book.css"
const Book = ({titulo,imagen}) => {
    return (
    <div className="card-book">
        <h3>{titulo}</h3>
        <figure>
            <img src={imagen} alt="book"/>
        </figure>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, natus.</h4>
    </div> 
);
};
 
export default Book;