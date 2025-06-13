import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDb Connected!');
    } catch (error) {
        console.error('DB connection failed',error);
        process.exit(1);
    }
}


export default connectDB;