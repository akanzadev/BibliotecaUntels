import React from "react";
import "./Book.css"
import Book from "./Book";
const Books = () => {
    let books =[
        {
            id:2,
            titulo:"titulo 2 La venganza de cristian y su grupo de ads aprobarán xd",
            img:"https://i.pinimg.com/originals/21/e1/7b/21e17ba115e4dd814cb1de44ac484533.jpg",
        },
        {
            id:3,
            titulo:"titulo 2",
            img:"https://cdn.tunovelaligera.com/wp-content/uploads/2017/05/kumochanSS.jpeg",
        },
        {
            id:4,
            titulo:"titulo 3",
            img:"https://somoskudasai.com/wp-content/uploads/2020/11/EnPD7x-W8AIUrIP.jpg",
        },
        {
            id:5,
            titulo:"titulo 4",
            img:"https://files.libero.pe/Libero/2020/03/03/shingeki-no-kyojin-cover-31-1583252990.png",
        },
        {
            id:6,
            titulo:"titulo 5",
            img:"http://pm1.narvii.com/7313/c2a5d8daec76caafd2bb1cb059031a6a58cbe169r1-1200-1776v2_uhq.jpg",
        },
        {
            id:7,
            titulo:"titulo 6",
            img:"http://pm1.narvii.com/7386/2e4f1e7a9829ac5a48bf54549033f27ca3e4c141r1-1200-1776v2_uhq.jpg",
        },
        {
            id:8,
            titulo:"titulo 7",
            img:"https://www.animefagos.com/wp-content/uploads/2020/11/kumodesu05.jpg",
        },
        {
            id:9,
            titulo:"titulo 8",
            img:"https://pm1.narvii.com/6360/06cbeab9e98db5542c9ff86b36f41298bcf0343c_hq.jpg",
        },
    ]
    return (
        <div>
            <div className="grid-book">
                <h2>Libros Clásicos</h2>
                {books.map((book)=>(
                        <Book titulo={book.titulo} key={book.id} imagen={book.img}/>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Books;