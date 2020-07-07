//const express = require('express') //node module을 어딘가에서 가져오는 것이다. (include같은..)
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
//import {userRouter} from "./routers/userRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";

const app = express()
app.set('view engine',"pug");

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(helmet()); //그냥 보안을 위한것.
//라우터
app.use(routes.home,globalRouter); //join, /search, /home, / 등등을 다룸.
app.use(routes.users,userRouter); //누군가 /user 경로로 접근하면 이 router 전체를 사용하겠다는 의미
app.use(routes.videos,videoRouter);
export default app; //누군가 내 파일을 불러올 때 app object를 주겠다.