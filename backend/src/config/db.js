import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect(
            process.env.Mongo_uri || "mongodb://localhost:27017/thinkboard"
        );
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("Error in connecting MongoDB", error);
        process.exit(1);
    }
};