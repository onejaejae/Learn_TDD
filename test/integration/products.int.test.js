import request from "supertest";
import app from "../../server";
import newProduct from "../data/new-Product.json";

let firstProduct;
const updatedProduct = {
  name: "updated name",
  description: "updated description",
};

it("POST /api/products", async () => {
  const res = await request(app).post("/api/products").send(newProduct);

  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe(newProduct.name);
  expect(res.body.description).toBe(newProduct.description);
});

it("should return 500 on POST /api/products", async () => {
  const res = await request(app).post("/api/products").send({ nane: "phone" });

  expect(res.statusCode).toBe(500);
  expect(res.body).toStrictEqual({
    message:
      "Product validation failed: description: Path `description` is required., name: Path `name` is required.",
  });
});

it("GET /api/products", async () => {
  const res = await request(app).get("/api/products");

  expect(res.statusCode).toBe(201);
  expect(Array.isArray(res.body)).toBeTruthy();

  // description, name은 required true이므로 toBeDefined()로 undefinde가 아닌지를 확인한다
  expect(res.body[0].description).toBeDefined();
  expect(res.body[0].name).toBeDefined();

  // eslint-disable-next-line prefer-destructuring
  firstProduct = res.body[0];
});

it("GET /api/products/:productId", async () => {
  const res = await request(app).get(`/api/products/${firstProduct._id}`);

  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe(firstProduct.name);
  expect(res.body.description).toBe(firstProduct.description);
});

it("PUT /api/products/:productId", async () => {
  const res = await request(app)
    .put(`/api/products/${firstProduct._id}`)
    .send(updatedProduct);

  expect(res.statusCode).toBe(200);
  expect(res.body.name).toBe(updatedProduct.name);
  expect(res.body.description).toBe(updatedProduct.description);
});
