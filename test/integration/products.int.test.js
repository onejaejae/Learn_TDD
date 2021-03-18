import request from "supertest";
import app from "../../server";
import newProduct from "../data/new-Product.json";

it("POST /api/products", async () => {
  const res = await request(app).post("/api/products").send(newProduct);
  console.log(res.body);

  expect(res.statusCode).toBe(201);
  expect(res.body.name).toBe(newProduct.name);
  expect(res.body.description).toBe(newProduct.description);
});

it("should return 500 on POST /api/products", async () => {
  const res = await request(app).post("/api/products").send({ nane: "phone" });

  console.log(res.body);
  expect(res.statusCode).toBe(500);
  expect(res.body).toStrictEqual({
    message:
      "Product validation failed: description: Path `description` is required., name: Path `name` is required.",
  });
});
