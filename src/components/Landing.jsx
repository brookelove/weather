
import React, {useState} from "react";
import "../assets/css/components/Landing.css"
const Landing = () => {
    
    return(
        <div className="landingContainer">
            <div className="header">
            <h1 className="landingPageH1">w.</h1>
            {/* possibly geolocate the name of the local city */}
                <h3 className="link">GET WEATHER</h3>
            </div>
            
        </div>
    )
}
export default Landing;
