import { Fragment } from "react";

import "./Home.css";
const Home = () => {
  return (
    <Fragment>
      <div className="home">
        <div className="home-text">
          <h1>
            ONLINE<strong>LIBRERIA</strong>
            <span>LANDING PAGE DESGIN</span>
          </h1>
          <p>
            LANDING LANDING LANDING LANDING LANDING LANDING LANDING LANDING
            LANDING LANDING LANDING LANDING LANDING LANDING LANDING LANDING
          </p>
          <button type="button">JOIN NOW</button>
        </div>
        <div className="home-img">
          <figure className="home-img__item">
            <img src="./assets/Online_education_SVG.svg" alt="Educacion Online" />
          </figure>
          <figure className="home-img__item">
            <img src="./assets/Books_SVG.svg" alt="Libros Electronicos" />
          </figure>
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
