//const express = require('express') //node module을 어딘가에서 가져오는 것이다. (include같은..)
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express()
//arrow function 
const handleHome = (req,res)=>{
    res.send('Hello from Home!');
}
const handleProfile = (req,res) =>{
    res.send('You are on my profile');
}

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet()); //그냥 보안을 위한것.

app.get("/profile",handleProfile);
app.get("/",handleHome); // '/' URL에 GET방식으로 접근하면 handleHome 호출
export default app; //누군가 내 파일을 불러올 때 app object를 주겠다.