import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();
console.log(process.env.Mongo_uri);
const port = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173",
}));
app.use(express.json());
app.use(rateLimiter); 
// app.use((req, res, next) => {
//     console.log(`Req method is ${req.method} and req url is ${req.url}`);
//     next();
// });


app.use("/api/notes", notesRoutes);
connectDB().then(()=>{
    app.listen(port, () => {
        console.log("Server is running on port ",port);
    });
});



