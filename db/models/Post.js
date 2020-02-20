import mongoose, { Schema } from "mongoose";
const PostSchema = new Schema({
    description: {
        type: String
    },
    photo: {
        type: String
    },
    likedBy: {
        type: [],
        default: []
    },
    comments: {
        type: [],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    by: {
        type: {},
        required: true
    }
});

const Post = mongoose.model("Post", PostSchema);
export default Post;
