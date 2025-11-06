import express from "express";
import dotenv from "dotenv";


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use((req, res)=> {
    console.log("Route not found");
    return res.status(404).send("Route not found");
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});