const { server } = require("../src/app");
const session = require("supertest");
const agent = session(server);

describe("Test de RUTAS", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      const { statusCode } = await agent.get("/rickandmorty/character/1");
      expect(statusCode).toBe(200);
    });
    it(`Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"`, async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      expect(body).toHaveProperty(
        "id" &&
          "name" &&
          "species" &&
          "gender" &&
          "status" &&
          "origin" &&
          "image"
      );
    });
    it("Si hay un error responde con status: 500", async () => {
      const { statusCode } = await agent.get("/rickandmorty/character/1000");
      expect(statusCode).toBe(404);
    });
  });

  describe("GET /rickandmorty/login", () => {
    it("Si las credenciales que pasan por query son correctas el access deberia ser true", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=gdfeli05@gmail.com&password=felipe1"
      );
      expect(body).toEqual({ access: true });
    });
    it("Si las credenciales que pasan por query son incorrectas el access deberia ser false", async () => {
      const { body } = await agent.get(
        "/rickandmorty/login?email=messi@gmail.com&password=campeon3"
      );
      expect(body).toEqual({ access: false });
    });
  });

  describe("POST /rickandmorty/fav", () => {
    const Rick = {
      id: 1,
      name: "Rick Sanchez",
    };
    const Morty = {
      id: 2,
      name: "Morty Sanchez",
    };
    it("Lo que envíes por body debe ser devuelto en un arreglo", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(Rick);
      expect(body).toContainEqual(Rick);
    });
    it("Devuelve el previo elemento y el actual", async () => {
      const { body } = await agent.post("/rickandmorty/fav").send(Morty);
      expect(body).toContainEqual(Rick);
      expect(body).toContainEqual(Morty);
    });
  });
  describe("Delete", () => {
    const Rick = {
      id: 1,
      name: "Rick Sanchez",
    };
    const Morty = {
      id: 2,
      name: "Morty Sanchez",
    };
    it("Devuelve", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/88");
      expect(body).toContainEqual(Rick);
      expect(body).toContainEqual(Morty);
    });
    it("Elimina correctamente al personaje que se especifica por el ID", async () => {
      const { body } = await agent.delete("/rickandmorty/fav/1");
      expect(body).toContainEqual(Rick);
    });
  });
});
