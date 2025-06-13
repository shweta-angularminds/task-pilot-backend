import { Router } from "express";
import { validate } from "../middlewares/validate.js";
import { registerUserSchema ,LoginUserSchema} from "../validations/userValidation.js";
import { registerUser, loginUser,getProfile} from "../controllers/user.controller.js";
import { authenticateToken } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/register",validate(registerUserSchema),registerUser);
router.post("/login", validate(LoginUserSchema), loginUser);
router.get("/self", authenticateToken, getProfile);


export default router;