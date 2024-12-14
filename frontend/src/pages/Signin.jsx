import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Login from "../components/forms/Login";
import Signup from "../components/forms/Signup";
function Signin() {
    return (
        <>
        <Navbar/>
        <div>
            <Signup/>
        </div>
        <Footer/>
        </>
    );
}

export default Signin;