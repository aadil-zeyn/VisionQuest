const express = require('express');
const router = express.Router();

router.get("/",(req,res)=>{
    console.log("Ping pong")
    res.json({message:"healthy"});
})

module.exports = router;
