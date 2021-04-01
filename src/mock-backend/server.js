import { createServer } from "miragejs";
import videoData from "./videoData.js";

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
    },
  });
}
