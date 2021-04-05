import React, { useState } from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

/**
 * TODOs:
 * 1. Implement Search Functionality
 * 2. onScroll show and hide the Topbar
 */

export const Topbar = () => {
  const [isSearch, setIsSearch] = useState(false);
  function toggleSearchBar() {
    setIsSearch((isSearch) => !isSearch);
  }
  return (
    <div className="topbar">
      {!isSearch && (
        <div className="topbar__main">
          <Link className="topbar__main__left" to="/">
            <div className="topbar--logo">
              <i className="fas fa-piggy-bank"></i>
            </div>
            <div className="topbar--appname">FinTube</div>
          </Link>
          <div className="topbar__main__right">
            <div
              className="topbar--icon"
              onClick={() => {
                toggleSearchBar();
              }}
            >
              <span className="material-icons">search</span>
            </div>
            <a className="topbar--avatar" href="/">
              <img src="https://picsum.photos/50/50" alt="" />
            </a>
          </div>
        </div>
      )}
      {isSearch && (
        <div className="topbar__search">
          <div
            className="topbar--icon"
            onClick={() => {
              toggleSearchBar();
            }}
          >
            <span className="material-icons">arrow_back</span>
          </div>
          <div className="topbar--searchBox">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              autoFocus={true}
            />
          </div>
          <div className="topbar--icon">
            <span className="material-icons">search</span>
          </div>
        </div>
      )}
    </div>
  );
};
