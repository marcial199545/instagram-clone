import mongoose, { Schema } from "mongoose";
import gravatar from "gravatar";
import bcrypt from "bcrypt";
const UserSchema = new Schema({
    usrName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    avatar: {
        type: String
    },
    description: {
        type: String
    },
    bio: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    password: {
        type: String,
        required: true
    },
    posts: {
        type: [],
        default: []
    },
    following: {
        type: [],
        default: []
    },
    followers: {
        type: [],
        default: []
    }
});

//NOTE  Hash password before saving
UserSchema.pre("save", async function(next) {
    const user = this;
    if (user.isModified("password")) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    if (user.isModified("email")) {
        const avatar = gravatar.url(user.email, {
            s: "200",
            r: "pg",
            d: "identicon"
        });
        user.avatar = avatar;
    }
    next();
});
const User = mongoose.model("User", UserSchema);
export default User;
