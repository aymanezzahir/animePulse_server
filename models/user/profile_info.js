const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileinfo = new Schema({
    userId: String,
    bio: { type: String, default: "" },
    location: { type: String, default: "" },
    website: { type: String, default: "" },
    followers: [{ type: String, default: "" }],
    following: [{ type: String, default: "" }],
})
const Profileinfo = mongoose.model('profileinfo', profileinfo)

module.exports = Profileinfo;
