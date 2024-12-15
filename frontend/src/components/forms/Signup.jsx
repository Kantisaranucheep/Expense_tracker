import React, {useState} from "react";
import axios from "axios"
import "../../styles/components/forms/Signup.css";

function Signup(){
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/auth/signup", {name, surname, email, password});
            alert(response.data.message)
        }catch (err){
            alert(err.response.data.error);
        }
    }
    return (
        <div className="signup-container">
            <form onSubmit={handleSignup}>
                <h3>Signup</h3>
                <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required /> <br />
                <input type="text" placeholder="surname" value={surname} onChange={(e) => setSurname(e.target.value)} required /> <br />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required /><br/>
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>

    );
}

export default Signup;