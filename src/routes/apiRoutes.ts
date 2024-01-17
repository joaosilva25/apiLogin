import { Router } from "express";
import * as registerControllers from "../controllers/registerControllers";
import * as loginControllers from "../controllers/loginControllers";
import * as rankControllers from "../controllers/rankControllers";


const routes= Router();

routes.get('/usersRank',rankControllers.usersRank)
routes.post('/register',registerControllers.registerUser);
routes.post('/login',loginControllers.loginUser);
routes.post('/saveRank',rankControllers.saveRank)





export default routes