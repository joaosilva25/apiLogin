import {connect} from "mongoose";
import dotenv from "dotenv"


dotenv.config()

export const mongoConnect=async()=> {
    try {
        await connect(process.env.MONGO_DB as string)
        console.log("MONGODB Conectado")
    }
    catch (err) {
        console.log("Não conectado ao MONGODB")
    }
}