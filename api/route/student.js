const express=require('express');
const route=express.Router();
route.get('/',(req,res,next)=>{
    res.status(200).json({
        msg:'this is a student get request for local host'
    })
})
route.post('/',(req,res,next)=>{
    console.log(req.body);
})
module.exports=route;