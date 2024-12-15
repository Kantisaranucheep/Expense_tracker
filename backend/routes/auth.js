import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import User from "../models/User.js"; 

dotenv.config();

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

router.post("/signup", async (req, res) => {
    const { name, surname, email, password } = req.body;
    try {
        if (!name || !surname || !email || !password){
            return res.status(400).json({error: "All fields are required"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({name, surname, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (err) {
        res.status(400).json({ error: "Email already exists" });
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found" });

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) return res.status(401).json({ error: "Invalid password" });

        const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: "1h" });
        res.json({ token,
                   user: { name: user.name, surname: user.surname, email: user.email } 
         });
    } catch (err) {
        res.status(500).json({ error: "Internal server error" });
    }
});

export default router;

//Searches the database for a user with the given email.
//Verifies the password by comparing it with the hashed password stored in the database using bcrypt.compare().
//If valid, generates a JWT token (jwt.sign) and sends it back in the response, along with the user's name and surna
