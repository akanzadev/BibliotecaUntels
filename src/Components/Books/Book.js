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
        <h3>{titulo}</h3>
        <figure>
            <img src={imagen} alt="book"/>
        </figure>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, natus. 56 3287498327</h4>
    </div> 
);
};
 
export default Book;