import { Fragment } from "react";
import { useState } from "react";
import "./Nav.css";
const Nav = () => {
  const [show, setshow] = useState(false);
  const showMenu = () => {
    setshow(!show);
  };

  return (
    <Fragment>
      <div id="nav">
        <nav className="nav">
          <figure className="nav-logo">
            <img
              src="./assets/logo-untels.png"
              alt="Biblioteca virtual Untels"
              title="biblioteca"
            />
          </figure>
          <div className="nav-hamburger">
            <i
              className={show ? `fas fa-times` : `fas fa-bars`}
              onClick={showMenu}
            ></i>
          </div>
          <ul className={show ? `nav-list show` : `nav-list`}>
            <li className="nav-list__item">
              <a href="#">
                <i className="fas fa-home"></i>Home
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#">
                <i className="fas fa-book"></i>Search
              </a>
            </li>
            <li className="nav-list__item">
              <a href="#">
                <i className="fas fa-address-card"></i>About
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </Fragment>
  );
};

export default Nav;
