import {Request,Response} from 'express';
import bcryptjs from 'bcryptjs';
import Users from '../models/Users';

export const registerUser = async(req: Request, res: Response) => {
    const {userName,email,password}=req.body;


    try {   
        if(userName && email && password) {
            const searchUser=await Users.findOne({email,userName});
            const hashPassword=bcryptjs.hashSync(password,10);

            if(!searchUser) {
                const newUser=await Users.create({
                    userName,
                    email,
                    password:hashPassword
                })
                res.status(201).json({user:newUser});
            }
            else {
                res.status(409).json({mensage:"Usuario já registrado"});
            }
        }
        else {
            res.json(400).json({mensage:"Preencha os campos solicitados"})
        }

    }
    catch (error) {
        res.status(500).json({error:"Erro na criação do usuario"});
    }


}