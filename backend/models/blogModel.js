const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
  image: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically sets the date when the blog is created
  }
})

module.exports = mongoose.model('Blog', blogSchema)