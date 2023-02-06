import {
  IFindUserGitHub,
  IFindUserReposGitHub,
  IFindUsersGitHub,
} from "../../utils/interfaces/github.interfaces.util";
import UserService from "../services/user.service";

class UserController {
  userService = new UserService();

  findGitHubUsers(
    since: number
  ): Promise<{ nextPage: string; users: IFindUsersGitHub[] }> {
    return new Promise(async (resolve, reject) => {
      try {
        const usersGitHub = await this.userService.findUsersGitHub(since);

        resolve({
          nextPage: `${process.env.URL}/api/users?since=${
            usersGitHub[usersGitHub.length - 1].id
          }`,
          users: usersGitHub,
        });
      } catch (err) {
        reject(err);
      }
    });
  }

  findGitHubUser(username: string): Promise<IFindUserGitHub> {
    return new Promise(async (resolve, reject) => {
      try {
        const userGitHub = await this.userService.findUserGitHub(username);

        resolve(userGitHub);
      } catch (err) {
        reject(err);
      }
    });
  }

  findGitHubUserRepos(username: string): Promise<IFindUserReposGitHub> {
    return new Promise(async (resolve, reject) => {
      try {
        const userGitHub = await this.userService.findUserReposGitHub(username);

        resolve(userGitHub);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default UserController;
