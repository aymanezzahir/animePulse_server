const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    likes: [{ type: Schema.Types.ObjectId, ref: 'User' }],
    comments: [{
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        content: { type: String, required: true },
        createdAt: { type: Date, default: Date.now },
    }],
    tags: [{ type: String }], // Array of tags associated with the post
    image: { type: String } // URL to the image associated with the post
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
