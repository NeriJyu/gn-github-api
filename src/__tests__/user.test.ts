import request from "supertest";
import app from "../index";

describe("User", () => {
  it("should be able to find a list of users and the link for the next page", async () => {
    const response = await request(app).get("/api/users?since=50");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data.nextPage");
    expect(response.body).toHaveProperty("data.users");
    expect(response.body.status).toBe("SUCCESS");
  });

  it("should be able to find user", async () => {
    const response = await request(app).get("/api/users/NeriJyu/details");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.status).toBe("SUCCESS");
  });

  it("should be able to find user repositories", async () => {
    const response = await request(app).get("/api/users/NeriJyu/repos");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("data");
    expect(response.body.status).toBe("SUCCESS");
  });
});
