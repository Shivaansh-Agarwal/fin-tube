import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--section">
        <NavLink
          className="footer--link"
          activeClassName="footer--link-active"
          end
          to="/"
        >
          <span className="material-icons footer--icon">home</span>
          <span>Home</span>
        </NavLink>
      </div>
      <div className="footer--section">
        <NavLink
          className="footer--link"
          activeClassName="footer--link-active"
          to="/playlists"
        >
          <span className="material-icons footer--icon">playlist_play</span>
          <span>My Playlists</span>
        </NavLink>
      </div>
      <div className="footer--section">
        <NavLink
          className="footer--link"
          activeClassName="footer--link-active"
          to="/categories"
        >
          <span className="material-icons footer--icon">category</span>
          <span>Categories</span>
        </NavLink>
      </div>
      <div className="footer--section">
        <NavLink
          className="footer--link"
          activeClassName="footer--link-active"
          to="/watchlater"
        >
          <span className="material-icons footer--icon">watch_later</span>
          <span>Watch Later</span>
        </NavLink>
      </div>
    </footer>
  );
};
