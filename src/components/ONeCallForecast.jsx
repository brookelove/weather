import {React, useState, useEfect}from 'react'
import {getData} from "../data/onecall";

const OneCallForecast = () => {
    const [city, setCity] = (useState(""));
    
    const handleClickEvent = (e) => {
            setCity(e.target.value);
    }
    const searchCity = () => {
        console.log(city);
        getData(city);
    }
    return (
    <>
    <div>ForeCast</div>
    {/* //search box */}
    <input type="text" placeholder='City' onChange={handleClickEvent}></input>
    <button onClick={searchCity}>SEARCH</button>
    {/* //location */}
    {/* //cards that hold one through 5 */}
    {/* //temp */}
    </>


  )
}

export default OneCallForecast