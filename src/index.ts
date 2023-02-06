import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.routes";
import { definitions, options } from "./docs/swaggerConfiguration";
import { serve, setup } from "swagger-ui-express";
import jsdoc from "swagger-jsdoc";

dotenv.config();
class App {
  public app!: express.Application;
  public PORT = process.env.PORT || 3000;

  constructor() {
    this.app = express();
    this.config();
  }

  private async config() {
    this.app.use(cors());

    this.app.listen(this.PORT);
    this.app.use(router);

    this.app.get("/", (req, res) => {
      res.send({ message: "Hello World!" });
    });
    this.app.use("/api/docs", serve, setup(jsdoc(definitions), options));

    console.log(`🚀 listening on port: ${this.PORT}`);
  }
}

export default new App().app;
