import React from "react";
import { Routes, Route } from "react-router-dom";
import Modal from "react-modal";
import "./styles/app.css";
import { Topbar, Footer } from "./components";
import {
  Home,
  Watch,
  PlaylistsListing,
  PlaylistOpen,
  CategoriesListing,
  CategoryOpen,
  WatchLaterListing,
} from "./pages";

Modal.setAppElement("#root");

function App() {
  return (
    <div className="App">
      <Topbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watch/:id" element={<Watch />} />
          <Route path="/playlists" element={<PlaylistsListing />} />
          <Route path="/playlists/:id" element={<PlaylistOpen />} />
          <Route path="/categories" element={<CategoriesListing />} />
          <Route path="/categories/:id" element={<CategoryOpen />} />
          <Route path="/watchlater" element={<WatchLaterListing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
