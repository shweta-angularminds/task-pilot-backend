import express from "express";
import userRoutes from "./user.route.js";



const router = express.Router();

router.use("/user",userRoutes);
router.get('/',(req,res)=>{
    res.send('API is running...');
});


export default router;