import React from "react";
import { Link } from "react-router-dom";
import "../../styles/components/Navbar.css";


function Navbar(){
    return (
        <nav className="homepage-navbar">
            <a href="/" className="Expense-Tracker">Expense Tracker</a>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/signin"><button className="Signin-Button">Sign in</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;