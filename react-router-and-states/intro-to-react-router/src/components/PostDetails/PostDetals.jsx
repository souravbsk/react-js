import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetals = () => {
  const postDetail = useLoaderData();
  const { name, username, email } = postDetail;
  const navigate = useNavigate();
  const handleBackToPage = () => {
    navigate(-1)
  }
  return (
    <div>
      <h2>{name}</h2>
      <h2>{username}</h2>
      <h2>{email}</h2>
      <button onClick={handleBackToPage}>back to page</button>
    </div>
  );
};

export default PostDetals;
