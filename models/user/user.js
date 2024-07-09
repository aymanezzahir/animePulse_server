const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userinfo = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    friends: {type : [{ type: String }] , default: []},
    picture: { type: String , default: "/unknow.jpg" },
    lastVisited: { type: Date, default: Date.now },
    createIn: { type: Date, default: Date.now },
})


const userSchema = new Schema({
    userId : String,
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true , unique: true},
    userinfo : userinfo,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const User = mongoose.model('User', userSchema)

module.exports = User;
