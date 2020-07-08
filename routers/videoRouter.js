import express from "express";
import routes from "../routes";
import {editVideo, deleteVideo, videoDetail, getUpload, postUpload } from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,postUpload);
videoRouter.get(routes.editVideo,editVideo);//와일드카드 라우터는 항상 뒤에 적어주는 것이 좋다.
videoRouter.get(routes.deleteVideo,deleteVideo);
videoRouter.get(routes.videoDetail(),videoDetail);

export default videoRouter;