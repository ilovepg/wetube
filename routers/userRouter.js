import express from "express";
import routes from "../routes";
const userRouter = express.Router();
userRouter.get(routes.users,(req,res)=>res.send('users'));
userRouter.get(routes.editProfile,(req,res)=>res.send('editProfile'));
userRouter.get(routes.changePassword,(req,res)=>res.send('changePassword'));
userRouter.get(routes.userDetail,(req,res)=>{res.send('userDetail'); console.log('dd');}); //와일드카드 라우터는 항상 뒤에 적어주는 것이 좋다.
export default userRouter;