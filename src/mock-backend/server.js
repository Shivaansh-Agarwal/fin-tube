import { createServer } from "miragejs";
import videoData from "./data/videos-data.js";
import playlistData from "./data/playlists-data.js";
import categoriesData from "./data/categories-data.js";
import watchLaterData from "./data/watchlater-data.js";

export function setupMockServer() {
  createServer({
    routes() {
      this.namespace = "api";
      this.timing = 2000;

      this.get("/videos", (schema, request) => {
        return videoData;
      });
      this.get("/videos/:id", (schema, request) => {
        let id = request.params.id;
        return videoData.filter((item) => item.id === id);
      });

      this.get("/playlists", (schema, request) => {
        return playlistData;
      });
      this.put("/playlists/:id", (schema, request) => {
        const body = JSON.parse(request.requestBody);
        return { playlist: body };
      });
      this.post("/playlists", (schema, request) => {
        let body = JSON.parse(request.requestBody);
        return { playlist: body };
      });
      this.del("/playlists/:id", (schema, request) => {
        const id = request.params.id;
        return { playlistId: id };
      });

      this.get("/categories", (schema, request) => {
        return categoriesData;
      });

      // this.get("/watchlater", (schema, request) => {
      //   return watchLaterData.watchLaterList;
      // });
      // this.patch("/watchlater", (schema, request) => {
      //   let body = JSON.parse(request.requestBody);
      //   return { videoId: body };
      // });
    },
  });
}
