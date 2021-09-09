import React from "react";
import { Link } from "react-router-dom"
function Navbar () {

        return (
            <nav id="nav-bar">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/giphy">Giphy</Link></li>
                </ul>
            </nav>
        );
    
}

export default Navbar;


//to start our queries we do a "?" sign
// if we watned to add multiple PARAMETERS we use the "&"
// api.giphy.com/v1/gifs/random?api_key=Ri0444lzgmNfo7bUXHSVm0EB7RwGT1qA