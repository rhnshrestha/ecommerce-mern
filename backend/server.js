import express from "express";
import dotenv from "dotenv";
import connectDB from "../backend/config/db.js";
import authRoutes from "./routes/authRoutes.js"

dotenv.config();
const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("hello");
});

connectDB();

app.listen(process.env.PORT, () => {
  console.log("server started running");
});
