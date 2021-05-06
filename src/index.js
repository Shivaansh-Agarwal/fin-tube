import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./App";
import { setupMockServer } from "./mock-backend/server.js";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./contexts/video-context.jsx";
import { PlaylistProvider } from "./contexts/playlist-context.jsx";
import { CategoriesProvider } from "./contexts/categories-context.jsx";

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <VideoProvider>
      <PlaylistProvider>
        <CategoriesProvider>
          <Router>
            <App />
          </Router>
        </CategoriesProvider>
      </PlaylistProvider>
    </VideoProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
