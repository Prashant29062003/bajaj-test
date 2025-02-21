import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bfhlRoutes from "./src/routes/bfhlRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/bfhl", bfhlRoutes);

// Start Server
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
