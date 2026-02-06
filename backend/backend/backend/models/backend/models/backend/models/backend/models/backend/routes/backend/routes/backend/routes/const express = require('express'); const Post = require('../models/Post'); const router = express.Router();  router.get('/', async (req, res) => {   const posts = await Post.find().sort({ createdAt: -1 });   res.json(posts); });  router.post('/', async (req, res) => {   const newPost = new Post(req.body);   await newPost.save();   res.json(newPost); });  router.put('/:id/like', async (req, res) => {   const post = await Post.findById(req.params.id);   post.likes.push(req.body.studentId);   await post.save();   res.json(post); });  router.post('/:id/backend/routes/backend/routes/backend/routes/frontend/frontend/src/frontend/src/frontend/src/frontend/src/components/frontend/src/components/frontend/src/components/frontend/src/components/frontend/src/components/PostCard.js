import React, { useState } from 'react';
import axios from 'axios';
import { Heart, MessageCircle } from 'lucide-react';

const PostCard = ({ post, user }) => {
  const [likes, setLikes] = useState(post.likes.length);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');

  const handleLike = async () => {
    await axios.put(`/api/posts/${post._id}/like`, { studentId: user._id });
    setLikes(likes + 1);
  };

  const handleComment = async () => {
    await axios.post(`/api/posts/${post._id}/comment`, { studentId: user._id, content: newComment });
    setComments([...comments, { studentId: user._id, content: newComment }]);
    setNewComment('');
  };

  return (
    <div className="glass p-4 mb-4">
      <p>{post.content}</p>
      <div className="flex items-center mt-2">
        <button onClick={handleLike} className="flex items-center mr-4
