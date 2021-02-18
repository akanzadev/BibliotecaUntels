import { Fragment } from "react";
import Home from "../Home/Home";
import Nav from "../Nav/Nav";
import "./Header.css";
const Header = () => {
  return (
    <Fragment>
      <header className="header">
        <div className="header-content">
          <Nav />
          <Home />
        </div>
      </header>
    </Fragment>
  );
};

export default Header;
