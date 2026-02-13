const request = require("supertest");
const app = require("./index");

test("GET should return message", async () => {
    
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("CI/CD is awesome!");
})