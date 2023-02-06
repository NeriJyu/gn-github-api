import app from "./index";
import router from "./routes/index.routes";

class Server {
  private app = app;

  constructor() {
    this.init();
  }

  init() {
    this.app.use(router);
  }
}

new Server();
