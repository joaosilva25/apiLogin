import { Request,Response } from "express";
import Users from "../models/Users";
import bcrypt from 'bcrypt'



export const loginUser=async (req:Request,res:Response)=> {
    const {email,password}=req.body;

    try {
        if(email && password) {
            const userExist=await Users.findOne({email});

            if(userExist) {
                const matchPass=await bcrypt.compare(password,userExist.password);
                
                if(matchPass) {
                    res.status(200).json({mensage:'Usuário Logado'});
                }
                else {
                    res.status(401).json({mensage:'Senha incorreta'});
                }
            }
            else {
                res.status(404).json({mensage:'Usuário não encontrado'});
            }
        }
        else {
            res.status(400).json({mensage:'Preencha os campos solicitados'});
        }
    }
    catch(error) {
        res.status(500).json({error:'Problema inesperado com o processo de login'});
    }
}