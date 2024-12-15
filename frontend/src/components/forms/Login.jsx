import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import "../../styles/components/forms/Login.css";

function Login(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/auth/login", {email, password});
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("userName", response.data.user.name);
            localStorage.setItem("userSurname", response.data.user.surname);
            navigate("/main");
            alert("Login Successful!");
        }catch (err){
            alert(err.response.data.error);
        }
    }

    return (
        <div className="login-container">
            <form onSubmit={handleLogin}>
                <h3>Login</h3>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
        </div>

    );
}

export default Login;