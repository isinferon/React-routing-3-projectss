import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="ui three item menu">
      <Link className="item " to="/">
        <li className="item">Translate</li>
      </Link>
      <Link className="  item " to="/search">
        <li className="item">Search</li>
      </Link>
      <Link className="  item " to="/dropdown">
        <li className="item">Dropdown</li>
      </Link>
    </div>
  );
};

export default Nav;
