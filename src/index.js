import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { setupMockServer } from "./mock-backend/server.js";
import { BrowserRouter as Router } from "react-router-dom";
import { VideoProvider } from "./contexts/video-context.jsx";
import { PlaylistProvider } from "./contexts/playlist-context.jsx";
import { CategoriesProvider } from "./contexts/categories-context.jsx";
import { ModalProvider } from "./contexts/modal-context.jsx";

setupMockServer();

ReactDOM.render(
  <React.StrictMode>
    <ModalProvider>
      <VideoProvider>
        <PlaylistProvider>
          <CategoriesProvider>
            <Router>
              <App />
            </Router>
          </CategoriesProvider>
        </PlaylistProvider>
      </VideoProvider>
    </ModalProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
