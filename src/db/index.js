import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
//mongoose.set("strictQuery", true) ;

const connectDB = async()=>{

    try {
       const connectionInstance= await mongoose.connect(`mongodb+srv://manalibabar:manali1234@cluster0.tucyby9.mongodb.net/youtube`);
       console.log(`\n MongoDB Connected !! DB:HOST: ${connectionInstance.connection.host}`);
        
    } catch (error) {
        console.log("MONGODB connetion error",error);
        process.exit(1);
    }
}

export default connectDB;