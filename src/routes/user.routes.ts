import express from "express";
import UserController from "../api/controllers/user.controller";
import { handleError } from "../utils/err.util";

const userRouter = express.Router();
const userController = new UserController();

//This endpoint must return a list of GitHub users and the link for the next page.
userRouter.get("/", async (req, res) => {
  try {
    const since = req.query.since;

    if (!Number(since)) throw "Since was not informed";

    const usersGitHub = await userController.findGitHubUsers(Number(since));

    res.send({
      status: "SUCCESS",
      data: usersGitHub,
    });
  } catch (err) {
    handleError(err, res, "There was an error finding users");
  }
});

//This endpoint must return the details of a GitHub user
userRouter.get("/:username/details", async (req, res) => {
  try {
    const username = req.params.username;

    const userGitHub = await userController.findGitHubUser(username);

    res.send({
      status: "SUCCESS",
      data: userGitHub,
    });
  } catch (err: any) {
    handleError(err, res, "There was an error finding user details");
  }
});

//This endpoint must return a list with all user repositories
userRouter.get("/:username/repos", async (req, res) => {
  try {
    const username = req.params.username;

    const userReposGitHub = await userController.findGitHubUserRepos(username);

    res.send({
      status: "SUCCESS",
      data: userReposGitHub,
    });
  } catch (err: any) {
    handleError(err, res, "There was an error finding user repos");
  }
});

export default userRouter;
