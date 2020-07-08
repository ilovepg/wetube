export const home = (req,res) => res.render("home",{pageTitle: "Home"});
export const search = (req,res) => {
    //const searchingBy=req.query.term; //ES6 이전방식에는 이렇게 사용했다.
    const { //ES6 문법 : req.query.term을 한것과 같다.
        query:{term:searchingBy}
    } = req; 
    
    res.render('search',{pageTitle:"Search",searchingBy});
}
export const upload = (req,res) => res.render('upload',{pageTitle:"Upload"});
export const videoDetail = (req,res) => res.render('videoDetail',{pageTitle:"Video Detail"});
export const editVideo = (req,res) => res.render('editVideo',{pageTitle:"Edit Video"});
export const deleteVideo = (req,res) => res.render('deleteVideo',{pageTitle:"Delete Video"});