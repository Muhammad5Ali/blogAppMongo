const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  content: String,
  fullContent: String,
  category: String,
  author: String,
  date: String,
  tags: [String],
  image: String
});

module.exports = mongoose.model('Blog', blogSchema);
