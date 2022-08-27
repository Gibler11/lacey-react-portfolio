import React from "react";
import Navigation from "../Navigation";
import laceyprofile from "../../assets/images/laceyprofile.jpg";

function Header() {
    return (
        <header>
        <Navigation/>
            <h1> Lacey Gibler </h1>
            <img src= {laceyprofile} alt="Lacey Gibler headshot" ></img>
        </header>
    )
}

export default Header;