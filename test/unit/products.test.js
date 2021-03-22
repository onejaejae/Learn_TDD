import httpMocks from "node-mocks-http";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
} from "../../controllers/product";
import Product from "../../models/Product";

import newProduct from "../data/new-Product.json";
import allProduct from "../data/all-Product.json";

// mongoose와의 의존성을 없애기 위해 jest.fn()을 이용해 Product.create가 잘될것이다 라고 가정한다는 뜻
Product.create = jest.fn();
Product.find = jest.fn();
Product.findById = jest.fn();
Product.findByIdAndUpdate = jest.fn();

let req;
let res;
let next;

const productId = "12asdsdv";
const updatedProduct = {
  name: "updated name",
  description: "updated description",
};

// 중복 제거
beforeEach(() => {
  // node-mocks-http를 이용해서 req, res 객체 할당
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();

  // mock 함수를 사용해 next를 추적할 수 있게 만듬
  next = jest.fn();
});

describe("Product Controller Create", () => {
  beforeEach(() => {
    req.body = newProduct;
  });

  it("should have a create product function", () => {
    expect(typeof createProduct).toBe("function");
  });

  it("should call Product.create", async () => {
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

describe("Product Controller Get", () => {
  it("should have a getProducts", () => {
    expect(typeof getProducts).toBe("function");
  });

  it("should call Product.find({})", async () => {
    await getProducts(req, res, next);
    expect(Product.find).toHaveBeenCalledWith({});
  });

  it("should return 201 response code", async () => {
    await getProducts(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled).toBeTruthy();
  });

  it("should return json body in response", async () => {
    Product.find.mockReturnValue(allProduct);
    await getProducts(req, res, next);
    expect(res._getJSONData()).toStrictEqual(allProduct);
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "Error finding product data" };
    const rejectedPromise = Promise.reject(errorMessage);
    Product.find.mockReturnValue(rejectedPromise);
    await getProducts(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
});

describe("Product Controller GetById", () => {
  it("should have a getProductById", () => {
    expect(typeof getProductById).toBe("function");
  });

  it("should call Product.findById", async () => {
    req.params.productId = productId;
    await getProductById(req, res, next);
    expect(Product.findById).toBeCalledWith(productId);
  });

  it("should return json body and response code 200", async () => {
    Product.findById.mockReturnValue(newProduct);
    await getProductById(req, res, next);

    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual(newProduct);
    expect(res._isEndCalled).toBeTruthy();
  });

  it("should return 400 when item doesnt exist", async () => {
    Product.findById.mockReturnValue(null);
    await getProductById(req, res, next);

    expect(res.statusCode).toBe(400);
    expect(res._isEndCalled).toBeTruthy();
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "error" };
    const rejectedPromise = Promise.reject(errorMessage);
    Product.findById.mockReturnValue(rejectedPromise);

    await getProductById(req, res, next);
    expect(next).toHaveBeenCalledWith(errorMessage);
  });
});

describe("Product Controller Update", () => {
  it("should have an updateProduct", () => {
    expect(typeof updateProduct).toBe("function");
  });

  it("should call updateProduct.findByIdAndUpdate", async () => {
    req.params.productId = productId;
    req.body = updatedProduct;

    await updateProduct(req, res, next);
    expect(Product.findByIdAndUpdate).toHaveBeenCalledWith(
      productId,
      updatedProduct,
      {
        new: true,
      }
    );
  });

  it("should return json body and response code 200", async () => {
    req.params.productId = productId;
    req.body = updatedProduct;
    Product.findByIdAndUpdate.mockReturnValue(updatedProduct);

    await updateProduct(req, res, next);
    expect(res._isEndCalled()).toBeTruthy();
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual(updatedProduct);
  });

  it("should handle 404 when item doesnt exist", async () => {
    Product.findByIdAndUpdate.mockReturnValue(null);

    await updateProduct(req, res, next);
    expect(res.statusCode).toBe(404);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should handle errors", async () => {
    const errorMessage = { message: "Error" };
    const rejectedPromise = Promise.reject(errorMessage);
    Product.findByIdAndUpdate.mockReturnValue(rejectedPromise);

    await updateProduct(req, res, next);
    expect(next).toBeCalledWith(errorMessage);
  });
});

descripbe("Product Controller Delete", () => {
  it("should have a deleteProduct function", () => {});
});
