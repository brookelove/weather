
import React, {useState} from "react";
import "../assets/css/components/Landing.css"
import { DateTime } from "luxon";
import GetWeather from "./GetWeather";
// import Forcast from "./Forcast";
const Landing = () => {
    let now = DateTime.now()
    const dateTime = now.toLocaleString(DateTime.DATETIME_MED);

    // console.log(navigator.geolocation);
    return(
        <div className="landingContainer">
            <div className="header">
            <h3 className="landingPageH1">the w.</h3>
            <h4>{dateTime}</h4>
            {/* <a href="/forcast" className="link">GET WEATHER</a> */}
            </div>
            <GetWeather/>
        </div>
    )
}
export default Landing;
