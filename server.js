import express from "express";
import cors from "cors";

import UserRouter from "./api/routes/UserRoutes.js"

const app = express();

app.set("views","views");
app.set("view engine","ejs");

app.use(cors());
app.use(express.json());

// API ROUTE
app.use("/api/user",UserRouter);

// VIEW ROUTE
app.get("/",(req,res)=>{
    res.render("index",{dataUser:""});
})

app.listen(8000,()=>console.log(`Server berjalan di port 8000`));