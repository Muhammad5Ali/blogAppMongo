const express = require('express');
const Blog = require('../models/Blog');
const router = express.Router();

// Get all blogs or by category
router.get('/', async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};

  try {
    const blogs = await Blog.find(filter);
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

// Get blog by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
});

// Create a new blog
router.post('/', async (req, res) => {
  try {
    const newBlog = new Blog(req.body);
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Failed to create blog' });
  }
});

module.exports = router;