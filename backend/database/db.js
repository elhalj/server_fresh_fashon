import mongoose from "mongoose";





// export async function connectDB() {
//     try {
//         await mongoose.set("strictQuery",false);
//         // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
//         await mongoose.connect("mongodb://localhost:27017/produit");
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } catch (error) {
//         console.log('erreur de connection ', error)
//     }
// }

export const connectDB = async () => {
    try {
        console.log('uri mongo: ', process.env.MONGO_URI)
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDb connected: ${db.connection.host}`)
    } catch (error) {
        console.log('erreur de connection ', error)
        process.exit(1)
    }
}


// class Database {
//     constructor(){
//         this._connect()
//     }

//     _connect(){
//         mongoose.connect(process.env.MONGO_URI)
//             .then(() => {
//                 console.log("conneter a la base de donnee avec succes");
//             })
//             .catch((error) => {
//                 console.log(error.message);
//             })
//     }
// }

// export default Database;