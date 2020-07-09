import mongoose from "mongoose";

//model(document name), schema(shape)
const VideoSchema = new mongoose.Schema({
    fileUrl:{
        type: String,
        required: 'File URL is required'
    },
    title: {
        type: String,
        required: 'title is required'
    },
    description: String,
    views:{
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default:Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Comment" //model명(어떤 model에서 온건지)
    }]
});

const model = mongoose.model("Video",VideoSchema); //model명, model schema
export default model;