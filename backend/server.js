import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDB } from './database/db.js';
// import path from 'path';
import dotenv from 'dotenv';
import { routes } from './routes/routes.js';

dotenv.config();



const app = express();
const port = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
connectDB()


app.use(routes);

// if(process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, "/frontend/build")));

//     app.get("*", (req, res) => {
//         res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
//     })
// }

app.listen(port, () => {

    console.log(`vous etes connecte au server avec succes http//:localhost:${port}`);
})