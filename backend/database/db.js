import mongoose from "mongoose";







export const connectDB = async () => {
    try {
        const db = await mongoose.connect(process.env.MONGO_URL)
        console.log(`MongoDb connected: ${db.connection.host}`)
    } catch (error) {
        console.log('erreur de connection ', error)
        process.exit(1)
    }
}

