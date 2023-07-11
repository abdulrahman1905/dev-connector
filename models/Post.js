const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({})

const Post = mongoose.model('post', PostSchema)

module.exports = Post
