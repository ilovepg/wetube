import mongoose from "mongoose";
import dotenv from "dotenv";
import "./models/Video";
import "./models/Comment";
dotenv.config();

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useFindAndModify:false
});

const db = mongoose.connection;
const handleOpen = () => console.log("Connected to DB");
const handleError = (error) => console.log(`Error on DB Connection:${error}`);

db.once("open",handleOpen);
db.on("error",handleError);

/*export const videos = [
    {
        id:324234,
        title: 'Video awesome',
        description: 'This is something I love',
        views: 24,
        videoFile: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
        creator: {
            id:123213,
            name:"ilovepc",
            email:"ilovepc_@naver.com"
        }
    },
    {
        id:323232,
        title: 'Video Super',
        description: 'This is something I love',
        views: 24,
        videoFile: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
        creator: {
            id:123213,
            name:"ilovepc",
            email:"ilovepc_@naver.com"
        }
    },
    {
        id:213213213,
        title: 'Video Nice',
        description: 'This is something I love',
        views: 24,
        videoFile: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
        creator: {
            id:123213,
            name:"ilovepc",
            email:"ilovepc_@naver.com"
        }
    },
    {
        id:32323,
        title: 'Video Perfect',
        description: 'This is something I love',
        views: 24,
        videoFile: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm",
        creator: {
            id:123213,
            name:"ilovepc",
            email:"ilovepc_@naver.com"
        }
    }
]*/