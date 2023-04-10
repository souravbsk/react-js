import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
import ActiveLink from "../ActiveLink/ActiveLink";

const Header = () => {
  return (
    <div>
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/about">About</ActiveLink>
      <ActiveLink to="/friend">Friends</ActiveLink>
      <ActiveLink to="/posts">Post</ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink>
    </div>
  );
};

export default Header;
