import React from "react";
import { Switch, Route } from "react-router-dom";
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
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/watch/:id" component={Watch} />
          <Route path="/playlists" exact component={PlaylistsListing} />
          <Route path="/playlists/:id" component={PlaylistOpen} />
          <Route path="/categories" exact component={CategoriesListing} />
          <Route path="/categories/:id" component={CategoryOpen} />
          <Route path="/watchlater" component={WatchLaterListing} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
