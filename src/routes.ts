import { Router } from "express";
import { CreateProductController } from "./modules/products/useCase/createProduct/createProductController";
import { DeleteProductController } from "./modules/products/useCase/deleteProduct/deleteProductController";
import { ListProductController } from "./modules/products/useCase/listProduct/listProductController";
import { ListProductQuoteIDController } from "./modules/products/useCase/listProductQuoteID/listProductQuoteIDController";
import { UpdateProductController } from "./modules/products/useCase/updateProduct/updateProductController";
import { CreateQuoteControler } from "./modules/quote/useCase/createQuote/createQuoteController";
import { ListQuoteController } from "./modules/quote/useCase/listQuote/listQuoteController";

const routes = Router();

const createQuoteControler = new CreateQuoteControler();
const createProductController = new CreateProductController();

const listQuoteController = new ListQuoteController();
const listProductController = new ListProductController();
const listProductQuoteIDController = new ListProductQuoteIDController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController();

routes.post("/quote/", createQuoteControler.handle);
routes.post("/product/", createProductController.handle);

routes.get("/quote", listQuoteController.handle);
routes.get("/product", listProductController.handle);
routes.get("/product-quote-id/:id_quote", listProductQuoteIDController.handle);

routes.delete("/product/:id_product", deleteProductController.handle);

routes.patch("/product", updateProductController.handle);

export { routes };
