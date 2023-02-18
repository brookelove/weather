
import React, {useState} from "react";
import "../assets/css/components/Landing.css"
const Landing = () => {
    const [searchBar, setSearchBar] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setSearchBar(e.target.value);
  };
    return(
        <div className="landingContainer">
            <h1 className="landingPageH1">w.</h1>
            <div className="searchContainer">
                <input
                placeholder="San Diego"
                onChange={handleChange}
                value={searchBar}
                className="citySearch"
                ></input>
                <button className="searchBttn">SEARCH</button>
            </div>
        </div>
    )
}
export default Landing;
