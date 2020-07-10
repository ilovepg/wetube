import express from "express";
import routes from "../routes";
import {deleteVideo, videoDetail, getUpload, postUpload, getEditVideo, postEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares";
const videoRouter = express.Router();
//Upload
videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);
//Edit Video
videoRouter.get(routes.editVideo(),getEditVideo);//와일드카드 라우터는 항상 뒤에 적어주는 것이 좋다.
videoRouter.post(routes.editVideo(),postEditVideo);
// Video Detail
videoRouter.get(routes.videoDetail(),videoDetail);
//Delete Video
videoRouter.get(routes.deleteVideo(),deleteVideo);


export default videoRouter;