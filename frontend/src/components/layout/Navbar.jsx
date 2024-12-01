import React from "react";
import "../../styles/components/Navbar.css";


function Navbar(){
    return (
        <nav className="homepage-navbar">
            <a href="/" className="Expense-Tracker">Expense Tracker</a>
            <ul>
                <li>
                    <a href="/Home">Home</a>
                </li>
                <li>
                    <a href="/About">About</a>
                </li>
                <li>
                    <a href="/Contact">Contact</a>
                </li>
                <li>
                    <button className="Signin-Button" href="/Sign in">Sign in</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;