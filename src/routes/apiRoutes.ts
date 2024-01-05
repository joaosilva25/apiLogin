import { Router } from "express";
import * as registerControllers from "../controllers/registerControllers";
import * as loginControllers from "../controllers/loginControllers";


const routes= Router();


routes.post('/register',registerControllers.registerUser);
routes.post('/login',loginControllers.loginUser);






export default routes