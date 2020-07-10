import routes from "../routes";
import Video from "../models/Video";

export const home = async (req,res) => {
    try{
        const videos = await Video.find({}); //DB에 있는 모든 VIDEO 가져오기
        console.log(videos);
        res.render("home",{pageTitle: "Home",videos});
    }catch(error){
        console.log(error);
        res.render("home",{pageTitle: "Home",videos:[]});
    }
};
export const search = (req,res) => {
    //const searchingBy=req.query.term; //ES6 이전방식에는 이렇게 사용했다.
    const { //ES6 문법 : req.query.term을 한것과 같다.
        query:{term:searchingBy}
    } = req; 
    res.render('search',{pageTitle:"Search",searchingBy,videos});
};
export const getUpload = (req,res) => res.render('upload',{pageTitle:"Upload"});
export const postUpload = async (req,res) => {
    const {
        body:{title,description},
        file:{path}
    }=req;
    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    });
    console.log(newVideo);
    res.redirect(routes.videoDetail(newVideo.id)); //id는 MongoDB가 자동으로 부여
}

export const videoDetail = (req,res) => res.render('videoDetail',{pageTitle:"Video Detail"});
export const editVideo = (req,res) => res.render('editVideo',{pageTitle:"Edit Video"});
export const deleteVideo = (req,res) => res.render('deleteVideo',{pageTitle:"Delete Video"});