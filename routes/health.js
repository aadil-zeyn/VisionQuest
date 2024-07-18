import { Router } from 'express';
const router = Router();

router.get("/",(req,res)=>{
    console.log("Ping pong")
    res.json({message:"healthy"});
})

export default router;
