import express from "express";
import routes from "../routes";
import { users, editProfile, changePassword, userDetail } from "../controllers/userController";
const userRouter = express.Router();
userRouter.get(routes.editProfile,editProfile);
userRouter.get(routes.changePassword,changePassword);
userRouter.get(routes.userDetail,userDetail); //와일드카드 라우터는 항상 뒤에 적어주는 것이 좋다.
export default userRouter;