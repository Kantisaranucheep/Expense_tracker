import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/components/Navbar.css";

function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=> {
        const token = localStorage.getItem("token");
        setIsLoggedIn(!!token);
    }, []);

    const handlelogout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/")
    }
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
                {isLoggedIn ? (
                    <li>
                        <Link to="/main">Dashboard</Link>
                    </li>
                ): (
                    <></>
                )}
                <li>
                    {isLoggedIn ? (
                        <button className="Signin-Button" onClick={handlelogout}>Sign Out</button>
                    ):(
                        <Link to="/signin"><button className="Signin-Button">Login</button></Link>
                    )}
                    
                </li>
                
            </ul>
        </nav>
    )
}

export default Navbar;