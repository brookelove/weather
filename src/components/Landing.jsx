
import React, {useState} from "react";
import "../assets/css/components/Landing.css"
import { DateTime } from "luxon";
const Landing = () => {
    let now = DateTime.now()
    const dateTime = now.toLocaleString(DateTime.DATETIME_MED);

    // console.log(navigator.geolocation);
    return(
        <div className="landingContainer">
            <div className="header">
            <h1 className="landingPageH1">w.</h1>
            <h4>{dateTime}</h4>
            <h3 className="link">GET WEATHER</h3>
            </div>
            
        </div>
    )
}
export default Landing;
