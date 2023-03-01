import React from "react";
import {useState, useEffect} from "react";
import "../assets/css/components/PasswordGenerator.css"
export default function PasswordGenerator() {
    const lowercaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const uppercaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    const specialArr = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","{","}","[","]","<",">","?","/","|"];
    const numArr = [0,1,2,3,4,5,6,7,8,9];
    let combined = [];
    let randomArr = [];
    let [password, setPassowrd] = useState('');

    const promptUser = (length, lower, upper,special, num) => {
        if(!num && !upper && !lower && !special){
            let didNotChoose = window.confirm("You did not choose any of character options, I will either choose for you or you can choose yourself.")
            if(!didNotChoose) {
                combined = combined.concat(lower);
                combined = combined.concat(num);   
            }
        }
        if(upper){
            combined = combined.concat(uppercaseArr);
        }
        if (lower){
            combined = combined.concat(lowercaseArr);
        }
        if (special){
            combined = combined.concat(specialArr);
        }
        if (num){
            combined = combined.concat(numArr);
        }
        console.log(combined);
        for(let i = 0; i < length; i++){
           let j = Math.floor(Math.random() * combined.length);
           randomArr.push(combined[j]);
        }
        let password = randomArr.join("");
        setPassowrd(password);

    }
    const generatePasswordFN = () => {
        console.log("Click");
        let pLength = prompt("How long do you want your password to be?(8-30 characters)");
        if(parseInt(pLength) < 8 || parseInt(pLength) > 30){
            alert("Please try again with characters between 8-30 characters");
        } else {
            let lowerQ = window.confirm("Would you like to include lowercase letters in your password?")
            let upperQ = window.confirm("Would you like to include uppercase letters in your password?")
            let specialCQ = window.confirm("Would you like to include special characters in your password?")
            let numQ = window.confirm("Would you like to include numbers letters in your password?")
            promptUser(pLength, lowerQ, upperQ,specialCQ, numQ);
        }
    }
    // document.getElementById("passwordBTN").addEventListener(generatePasswordFN);

    return (
        <div className="PasswordContainer boxShadow">
            <button className="passwordBTN" onClick={generatePasswordFN}>NEW PASSWORD</button>
             {password ?<div className="passwordContent"><h3 className="passwordTitle">PASSWORD: </h3> <p className="textInnerShadowBeige">{password}</p></div>: null}
        </div>
    )
}