import React, { Fragment,useEffect } from "react";
import "./Book.css"
const Book = ({titulo,imagen,description,episode}) => {
    window.addEventListener('scroll',()=>{
    
        let card=document.getElementsByClassName('card-book');
        for (let i = 0; i < card.length; i++) {
            let posic= card[i].getBoundingClientRect().top;
            let scp1= window.innerHeight/1.3;
            if(scp1<posic){
                card[i].classList.add('active4');
            }else{
                card[i].classList.remove('active4');
            }  
        }
    });
    
    return (
    <div className="card-book">
        <h3 className="title">{titulo}</h3>
        <figure>
            <img src={imagen} alt="book"/>
        </figure>
        <div className="content-card">
                <h3 className="autor">{episode}</h3>
                <h4 className="description">{description}</h4>
        </div>
    </div> 
);
};
 
export default Book;