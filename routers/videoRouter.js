import express from "express";
import routes from "../routes";
import { videos, upload, editVideo, deleteVideo, videoDetail } from "../controllers/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,upload);
videoRouter.get(routes.editVideo,editVideo);//와일드카드 라우터는 항상 뒤에 적어주는 것이 좋다.
videoRouter.get(routes.deleteVideo,deleteVideo);
videoRouter.get(routes.videoDetail,videoDetail);

export default videoRouter;