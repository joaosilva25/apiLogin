import {ConnectOptions, connect} from "mongoose";
import dotenv from "dotenv";


dotenv.config();

export const mongoConnect=async()=> {
    console.log('String de Conexão:', process.env.MONGO_DB);

    try {
        await connect(process.env.MONGO_DB as string)
        console.log("MONGODB Conectado");
    }
    catch (err) {
        console.log(err);
    }
}

