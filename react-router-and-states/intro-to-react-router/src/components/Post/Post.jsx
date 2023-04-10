import React from "react";
import "./post.css";
import { Link, useNavigate } from "react-router-dom";

const Post = ({ post }) => {
  const navigate = useNavigate();
  const handlePostDetails = () => {
    navigate(`/posts/${post.id}`);
  };
  return (
    <div className="post">
      <h3>{post.name}</h3>
      <p>{post.username}</p>
      <p>{post.email}</p>
      <button className="postBtn">
        <Link to={`/posts/${post.id}`}>postDetail</Link>
      </button>
      <button onClick={handlePostDetails}>singlePost</button>
    </div>
  );
};

export default Post;
