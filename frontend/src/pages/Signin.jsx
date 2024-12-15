import React, {useState} from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Login from "../components/forms/Login";
import Signup from "../components/forms/Signup";
import "../styles/pages/Signin.css";

function Signin() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <>
        <Navbar/>
            <div className="auth-container">
                {isLogin ? (
                    <>
                        <Login/>
                        <p className="auth-toggle-text">
                            Don't have an account? 
                        </p>
                        <button className="auth-toggle-button" onClick={() => setIsLogin(false)}>
                            Sign up here
                        </button>
                    </>
                ):(
                    <>
                        <Signup/>
                        <p className="auth-toggle-text">
                            Already have an account?
                        </p>
                        <button className="auth-toggle-button" onClick={() => setIsLogin(true)}>
                            Login here
                        </button>
                    </>
                )}
            </div>
        <Footer/>
        </>
    );
}

export default Signin;