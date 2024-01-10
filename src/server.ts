import express,{Request,Response} from 'express';
import dotenv from 'dotenv';
import path from 'path';
import ApiRoutes from './routes/apiRoutes';
import { mongoConnect } from './database/mongo';
import cors from 'cors'


dotenv.config();
const app = express();

mongoConnect();

app.use(cors())
app.use(express.static(path.join(__dirname,"./public")));
app.use(express.urlencoded({extended:true}));

app.use(ApiRoutes);

app.use((req:Request,res:Response)=> {
    res.status(404);
    res.json({message:"Endpoint not found"});
})



app.listen(process.env.PORT);