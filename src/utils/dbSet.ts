import { log } from "console";
import mongoose from "mongoose";

mongoose.set('strictQuery', true)

async function dbConnection(url: string ) {

    try{
        const dbaction = await mongoose.connect(url)
        log("DATABASE CONNECTED")
    }catch(err){
        log(err)
    }

}

export default dbConnection