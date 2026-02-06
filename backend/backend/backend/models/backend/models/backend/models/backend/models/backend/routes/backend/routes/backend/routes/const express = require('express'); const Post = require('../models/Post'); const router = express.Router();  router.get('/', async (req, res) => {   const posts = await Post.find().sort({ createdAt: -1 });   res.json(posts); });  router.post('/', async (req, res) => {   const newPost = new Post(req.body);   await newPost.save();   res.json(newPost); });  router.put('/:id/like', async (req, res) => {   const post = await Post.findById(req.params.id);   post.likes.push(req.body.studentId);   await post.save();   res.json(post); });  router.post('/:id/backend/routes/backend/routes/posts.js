const express = require('express');
const Post = require('../models/Post');
const router = express.Router();

router.get('/', async (req, res) => {
  const posts = await Post.find().sort({ createdAt: -1 });
  res.json(posts);
});

router.post('/', async (req, res) => {
  const newPost = new Post(req.body);
  await newPost.save();
  res.json(newPost);
});

router.put('/:id/like', async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.likes.push(req.body.studentId);
  await post.save();
  res.json(post);
});

router.post('/:id/comment', async (req, res) => {
  const post = await Post.findById(req.params.id);
  post.comments.push(req.body);
  await post.save();
  res.json(post);
});

module.exports = router;
