import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import expenseRoutes from "./routes/expenseRoutes.js";
import authRoutes from "./routes/auth.js";

dotenv.config(); // Load environment variables
connectDB(); // Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// Routes
app.use("/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
