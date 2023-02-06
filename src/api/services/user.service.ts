import axios from "axios";
import { GITHUB_BASE_URL } from "../../utils/github.util";
import {
  IFindUserGitHub,
  IFindUserReposGitHub,
  IFindUsersGitHub,
} from "../../utils/interfaces/github.interfaces.util";

class UserService {
  private axiosInstance = axios.create({
    baseURL: GITHUB_BASE_URL,
  });

  findUsersGitHub(since: number): Promise<IFindUsersGitHub[]> {
    return new Promise(async (resolve, reject) => {
      try {
        const usersGitHub = await this.axiosInstance.get("/users", {
          params: {
            since,
          },
        });

        resolve(usersGitHub.data as IFindUsersGitHub[]);
      } catch (err: any) {
        reject(err);
      }
    });
  }

  findUserGitHub(username: string): Promise<IFindUserGitHub> {
    return new Promise(async (resolve, reject) => {
      try {
        const userGitHub = await this.axiosInstance.get(`/users/${username}`);

        resolve(userGitHub.data as IFindUserGitHub);
      } catch (err) {
        reject(err);
      }
    });
  }

  findUserReposGitHub(username: string): Promise<IFindUserReposGitHub> {
    return new Promise(async (resolve, reject) => {
      try {
        const userGitHub = await this.axiosInstance.get(
          `/users/${username}/repos`
        );

        resolve(userGitHub.data);
      } catch (err) {
        reject(err);
      }
    });
  }
}

export default UserService;
