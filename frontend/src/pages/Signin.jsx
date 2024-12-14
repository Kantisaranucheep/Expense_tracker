import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Login from "../components/forms/Login";

function Signin() {
    return (
        <>
        <Navbar/>
        <div>
            <Login/>
        </div>
        <Footer/>
        </>
    );
}

export default Signin;