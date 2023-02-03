import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [searchBar, setSearchBar] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };
  //   if (searchBar.length > 0) {
  //     return searchBar;
  //   }
  //   console.log(searchBar);
  return (
    <nav>
      <h1>w.</h1>
      <input
        // type={search}
        placeholder="San Diego"
        onChange={handleChange}
        value={searchBar}
      ></input>
      <button>Search</button>
    </nav>
  );
};

export default Navbar;
