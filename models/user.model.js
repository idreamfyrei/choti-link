import mongoose, { trusted } from "mongoose";

const userSchema = new mongoose.Schema({
    shortId:{
        type: String,
        required: true,
        unique: true
    },
    redirectURL:{
        type: String,
        required: true
    },
    visitHistory:[{
        timestamp: {type: Number}
    }]
}, {
    timestamps: true
})

const User = mongoose.model("User", userSchema);

export default User;