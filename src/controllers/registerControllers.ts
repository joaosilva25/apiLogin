import {Request,Response} from 'express';
import bcrypt from 'bcryptjs';
import Users from '../models/Users';
import validator from "validator";

export const registerUser = async(req: Request, res: Response) => {
    const {userName,email,password}=req.body;


    try {   
        if(userName && email && password) {

            const searchUser=await Users.findOne({email,userName});
            const hashPassword=bcrypt.hashSync(password,10);

            if(!searchUser) {
                if(validator.isEmail(email)) {
                    const newUser=await Users.create({
                        userName,
                        email,
                        password:hashPassword
                    })
                    res.status(201).json({user:newUser});
                }
                else {
                    res.status(422).json({mensage:"Endereço de Email Inválido"})
                }
            }
            else {
                res.status(409).json({mensage:"Usuario já registrado"});
            }
        }
        else {
            res.status(400).json({mensage:"Preencha os campos solicitados"})
        }

    }
    catch (error) {
        res.status(500).json({error:"Erro na criação do usuario"});
    }


}