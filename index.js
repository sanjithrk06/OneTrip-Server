import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";
<<<<<<< HEAD
import destinationRoute from './routes/destination.route.js'
=======
>>>>>>> origin/dev

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// Middlewares
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
<<<<<<< HEAD
app.use("/api/destinationPage", destinationRoute);
=======
>>>>>>> origin/dev

// Start server
app.listen(PORT, () => {
  connectDB();
  console.log("Server is running on port", PORT);
<<<<<<< HEAD
});
=======
});
>>>>>>> origin/dev
