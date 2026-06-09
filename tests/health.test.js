const request = require("supertest");
const app = require("../src/app");

describe("CampusOps API", () => {
  test("GET /health deve retornar status healthy", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("healthy");
  });

  test("GET /devops deve retornar benefícios do DevOps", async () => {
    const response = await request(app).get("/devops");

    expect(response.statusCode).toBe(200);
    expect(response.body.beneficios).toContain("Confiabilidade");
  });
});