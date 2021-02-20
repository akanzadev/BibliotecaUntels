import React, { Fragment,useEffect } from "react";
import VanillaTilt from "vanilla-tilt";
import "./Book.css"
const Book = ({titulo,imagen}) => {
    useEffect(() => {
        VanillaTilt.init(document.querySelectorAll(".card-book"), {
            max: 25,
            speed: 400,
            glare:true,
            "max-glare":1,
            });
    }, [])
    
    return (
    <div className="card-book">
        <h2>hola</h2>
        <h3>{titulo}</h3>
        <figure>
            <img src={imagen} alt="book"/>
        </figure>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, natus.</h4>
    </div> 
);
};
 
export default Book;