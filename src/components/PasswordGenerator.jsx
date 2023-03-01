import React from "react";
import {useState, useEffect} from "react";

export default function PasswordGenerator() {
    const generatePasswordFN = () => {

    }
    document.getElementById("passwordBTN").onclick(generatePasswordFN)

    return (
        <div className="PasswordContainer">
            <button className="passwordBTN" id="passwordBTN">Generate Password</button>
        </div>
    )
}