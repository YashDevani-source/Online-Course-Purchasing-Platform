import express from "express";
import dotenv from "dotenv";


import authRouter from './src/route/auth.route.js'


dotenv.config();

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 3000;

app.use("/api", authRouter)


app.use((req, res)=> {
    console.log("Route not found");
    return res.status(404).send("Route not found");
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});