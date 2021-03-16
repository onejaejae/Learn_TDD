import httpMocks from "node-mocks-http";
import { createProduct } from "../../controllers/product";
import Product from "../../models/Product";
import newProduct from "../data/new-Product.json";

// mongoose와의 의존성을 없애기 위해 jest.fn()을 이용해 Product.create가 잘될것이다 라고 가정한다는 뜻
Product.create = jest.fn();

let req;
let res;
let next;

// 중복 제거
beforeEach(() => {
  // node-mocks-http를 이용해서 req, res 객체 할당
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

describe("Product Controller Create", () => {
  beforeEach(() => {
    req.body = newProduct;
  });

  it("should have a create product function", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("should call ProductModel.create", async () => {
    // createProduct가 호출이 될때, Product model의 create method가 호출이 되는지
    await createProduct(req, res, next);
    expect(Product.create).toBeCalledWith(newProduct);
  });

  it("should return 201 response code", async () => {
    await createProduct(req, res, next);
    expect(res.statusCode).toBe(201);
    // _isEndCalled(node-mocks-http 제공)
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should return json body response", async () => {
    // mongoose는 정상적으로 작동된다고 가정 => Product.create = jest.fn();
    // mockReturnValue를 사용해서 return 값을 임의로 지정해줌
    // Product.create method를 실행했을 때 return 되는 값은 newProduct이다.
    Product.create.mockReturnValue(newProduct);
    await createProduct(req, res, next);
    // _getJSONData(node-mocks-http 제공)
    expect(res._getJSONData()).toStrictEqual(newProduct);
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "description property missing" };
    const rejectedPromise = Promise.reject(errorMessage);
    Product.create.mockReturnValue(rejectedPromise);
    await createProduct(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});
