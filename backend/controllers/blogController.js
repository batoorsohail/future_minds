const Blog = require('../models/blogModel')
const mongoose = require('mongoose')

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({})
    res.status(200).json(blogs)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const getBlog = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such blog'})
  }

  const blog = await Blog.findById(id)

  if (!blog) {
    return res.status(404).json({error: 'No such blog'})
  }

  res.status(200).json(blog)
}

const createBlog = async (req, res) => {
  const { image, title, content, createdAt } = req.body

  let emptyFields = []

  if (!image) {
    emptyFields.push('image')
  }
  if (!title) {
    emptyFields.push('title')
  }
  if (!content) {
    emptyFields.push('content')
  }
  if (emptyFields.length > 0) {
    res.status(400).json({error: 'Please fill in all the fields', emptyFields})
  }

  try {
    const workout = await Blog.create({image, title, content, createdAt})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const deleteBlog = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such blog'})
  }

  const blog = await Blog.findOneAndDelete({_id: id})

  if (!blog) {
    return res.status(404).json({error: 'No such blog'})
  }

  res.status(200).json(blog)
}

const updateBlog = async (req, res) => {
  const {id} = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such blog'})
  }

  const blog = await Blog.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!blog) {
    return res.status(404).json({error: 'No such blog'})
  }

  res.status(200).json(blog)
}

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  deleteBlog,
  updateBlog
}