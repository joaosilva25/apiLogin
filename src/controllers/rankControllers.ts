import Users from "../models/Users";
import {Request,Response} from "express"


export const saveRank=async(req:Request,res:Response)=> {
    const {email,points}=req.body
     try{
        const saveRank=await Users.findOne({email})
        if(points>saveRank.points) {
            saveRank.points=points
            await saveRank.save()
            res.status(201).json({message:"Saved Points"})
        }
        else {
            res.status(409).json({message:"Pontos inferiores aos já salvos"})
        }
    }
    catch(error) {
        res.status(500).json({error:"Unexpected error"})
    }


}


export const usersRank=async(req:Request,res:Response)=> {
    try {
        const users= await Users.find({
        }).sort({points:-1})

        if(users) {
            res.status(201).json({mensage:users})
        }
        else {
            res.status(404).json({mensage:"No users found"})
        }
    }
    catch(error) {
        res.status(500).json({mensage:'Unexpected error'})
    }

}