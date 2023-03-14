
import React from "react";
import "../assets/css/components/Landing.css"
import { DateTime } from "luxon";
// import Music from "./Music";
import ToDo from "./ToDo";
import PasswordGenerator from "./PasswordGenerator";
import Footer from "./Footer";
import OneCallForecast from "./ONeCallForecast";
const Landing = () => {
    let now = DateTime.now()
    const dateTime = now.toLocaleString(DateTime.DATETIME_MED);

    // console.log(navigator.geolocation);
    return(
        <div className="landingContainer">
            <div className="header">
            <h3 className="landingPageH1">the w.</h3>
            <h4 className="landingPageH1 dateTime">{dateTime}</h4>
            {/* <a href="/forcast" className="link">GET WEATHER</a> */}
            <span className="divider"></span>
            </div>
            <div className="WeatherNotes">
                {/* <GetWeather/> */}
                <OneCallForecast/>
                <div className="ToDoPass">
                    {/* <Music/> */}
                    <ToDo/>
                    <PasswordGenerator/>
                </div>
            </div>
            {/* <Music/> */}
            <Footer/>
        </div>
    )
}
export default Landing;
