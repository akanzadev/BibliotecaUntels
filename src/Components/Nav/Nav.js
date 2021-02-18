import { Fragment } from "react";
import "./Nav.css";
const Nav = () => {
  return (
    <Fragment>
      <nav className="nav">
        <figure className="nav-logo">
          <img
            src="./assets/logo-untels.png"
            alt="Biblioteca virtual Untels"
            title="biblioteca"
          />
        </figure>
        <ul className="nav-list">
          <li className="nav-list__item">
            <a href="#">Home</a>
          </li>
          <li className="nav-list__item">
            <a href="#">Search</a>
          </li>
          <li className="nav-list__item">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Nav;
