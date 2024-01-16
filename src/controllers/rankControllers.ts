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