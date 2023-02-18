import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/components/Navbar.css";
const Navbar = () => {
  const [searchBar, setSearchBar] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };
  return (
    <nav className="navContainer">
      <h1>w.</h1>
      
      <div className="searchContainer">
        <input
          placeholder="San Diego"
          onChange={handleChange}
          value={searchBar}
          className="citySearch"
        ></input>
        <button className="searchBttn">Search</button>
      </div>
    </nav>
  );
};

export default Navbar;
