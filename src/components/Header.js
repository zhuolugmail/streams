import React from "react";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

const Header = () => {
  return (
    <div className="header ui secondary pointing menu">
      <Link to="/" className="item">
        Streamy
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
      </div>
      <GoogleAuth></GoogleAuth>
    </div>
  );
};

export default Header;
