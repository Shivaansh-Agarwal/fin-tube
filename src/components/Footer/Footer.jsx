import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--section">
        <Link className="footer--link" to="/">
          <span className="material-icons footer--icon">home</span>
          <span>Home</span>
        </Link>
      </div>
      <div className="footer--section">
        <Link className="footer--link" to="/playlists">
          <span className="material-icons footer--icon">playlist_play</span>
          <span>My Playlists</span>
        </Link>
      </div>
      <div className="footer--section">
        <Link className="footer--link" to="/categories">
          <span className="material-icons footer--icon">category</span>
          <span>Categories</span>
        </Link>
      </div>
      <div className="footer--section">
        <Link className="footer--link" to="/watchlater">
          <span className="material-icons footer--icon">watch_later</span>
          <span>Watch Later</span>
        </Link>
      </div>
    </footer>
  );
};
