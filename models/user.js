const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animeMangaSchema = new Schema(
     {
        rate: { type: Number, max: 100 },
        isfavorite: { type: Boolean },
        order: { type: Number }
    });

const otakuinfo = new Schema({
    bestChar: {type: [animeMangaSchema] , default: []},
    animeFav: {type: [animeMangaSchema] , default: []},
    mangaFav: {type: [animeMangaSchema] , default: []},
    watchLIst: {type: [animeMangaSchema] , default: []},
    bestGenre: [Number],
    bestQuote: { type: String },
})
const userinfo = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    friends: {type : [{ type: String }] , default: []},
    picture: { type: String , default: "/unknow.jpg" },
    lastVisited: { type: Date, default: Date.now },
    createIn: { type: Date, default: Date.now },
})

const profileinfo = new Schema({
    bio: { type: String },
    location: { type: String },
    website: { type: String },
    followers: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

const userSchema = new Schema({
    
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true , unique: true},
    userinfo : userinfo,
    otakuinfo : otakuinfo,
    profileinfo : profileinfo,
    posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
