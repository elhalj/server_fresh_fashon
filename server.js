import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './backend/database/db.js';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { routes } from './backend/routes/routes.js';

dotenv.config();



const app = express();
const port = process.env.PORT || 8000;



app.use(express.json());
// app.get("/", (req,res) => {
//     res.send("Bienvenu sur mon backend");
// })
connectDB()

// mongoose.connect("mongodb+srv://:Qybc6x72JynP@backend.pahry.mongodb.net/back?retryWrites=true&w=majority&appName=backend")
//     .then(() => console.log("Connexion à la base de données réussie"))
//     .catch(() => console.log("Connexion à la base de données échouée"));

app.use(routes);
app.use(bodyParser.json());
app.use(cors());


app.listen(port, () => {

    console.log(`vous etes connecte au server avec succes http//:localhost:${port}`);
})