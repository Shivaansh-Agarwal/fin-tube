import React from "react";
import { Routes, Route } from "react-router-dom";
import "./app.css";
import {
  Topbar,
  Footer,
  Home,
  Watch,
  PlaylistsListing,
  PlaylistOpen,
  CategoriesListing,
  CategoryOpen,
  WatchLaterListing,
} from "./components";

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
