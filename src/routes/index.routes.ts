import express from "express";
import userRouter from "./user.routes";

const router = express.Router();

router.get("/api", (_, response) => {
  response.redirect("/api/docs/swagger.json");
});

router.use("/api/users", userRouter);

export default router;
