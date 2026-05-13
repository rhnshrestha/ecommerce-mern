import express from "express";
import dotenv from "dotenv";
import connectDB from "../backend/config/db.js";

dotenv.config();
const app = express();


app.get('/',(req, res)=>{
  res.send("hello")
})
connectDB();

app.listen(process.env.PORT, () => {
  console.log("server started running");
});
