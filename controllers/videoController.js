import routes from "../routes";
import Video from "../models/Video";

export const home = async (req,res) => {
    try{
        const videos = await Video.find({}).sort({_id:-1}); //DB에 있는 모든 VIDEO 가져오기 (sort -1은 위 아래 순서를 바꾸겠다는 의미(?))
        console.log(videos);
        res.render("home",{pageTitle: "Home",videos});
    }catch(error){
        console.log(error);
        res.render("home",{pageTitle: "Home",videos:[]});
    }
};
export const search = async(req,res) => {
    //const searchingBy=req.query.term; //ES6 이전방식에는 이렇게 사용했다.
    const { //ES6 문법 : req.query.term을 한것과 같다.
        query:{term:searchingBy}
    } = req; 
    let videos = [];
    try{
        videos = await Video.find({title:{$regex:searchingBy, $options: "i" }});
        console.log("sdf");
    }catch(error){
        console.log(error);
    }
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

export const videoDetail = async (req,res) => {
    const {
        params:{id}
    }=req;
    try{
        const video = await Video.findById(id);
        res.render('videoDetail',{pageTitle:video.title,video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}
export const getEditVideo = async (req,res) => {
    const {
        params:{id}
    }=req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo",{pageTitle:`Edit ${video.title}`, video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}
export const postEditVideo = async (req,res) => {
    const {
        params:{id},
        body:{title, description}
    }=req;
    try{
        await Video.findOneAndUpdate({_id:id}, {title,description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}

export const deleteVideo = async(req,res) => {
    const {
        params:{id}
    }=req;
    try{
        await Video.findOneAndRemove({_id:id});
    }catch(error){
        console.log(error);
    }
    res.redirect(routes.home);
}