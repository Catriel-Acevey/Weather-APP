import React from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">
            <img
              id="logo"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            Weather App
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarSupportedContent"
        >
          <Link to="/about">
            <span className="navbar-brand">About</span>
          </Link>
        </div>
        <div
          className="collapse navbar-collapse justify-content-md-end"
          id="navbarSupportedContent"
        >
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
