import express from "express";

export const userRouter = express.Router(); //export하면 이녀석을 보내는 것.

userRouter.get("/",(req,res)=>res.send('user index'))
userRouter.get("/edit",(req,res)=>res.send('user edit'))
userRouter.get("/password",(req,res)=>res.send('user password'))

 