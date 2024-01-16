import { Schema,model,connection} from 'mongoose';

type UserType = {
    userName:string,
    email:string,
    password:string
    points:number
}

const schema=new Schema<UserType>({
    userName:String,
    email:String,
    password:String,
    points: {
        type:Number,
        default:0
    }
})


const modelName:string = 'Users';

export default (connection && connection.models[modelName]) ?? model<UserType>(modelName,schema,'users');