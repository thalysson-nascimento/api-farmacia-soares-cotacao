import { Router } from "express";
import { CreateProductController } from "./modules/products/useCase/createProduct/createProductController";
import { ListProductController } from "./modules/products/useCase/listProduct/listProductController";
import { ListProductQuoteIDController } from "./modules/products/useCase/listProductQuoteID/listProductQuoteIDController";
import { CreateQuoteControler } from "./modules/quote/useCase/createQuote/createQuoteController";
import { ListQuoteController } from "./modules/quote/useCase/listQuote/listQuoteController";

const routes = Router();

const createQuoteControler = new CreateQuoteControler();
const createProductController = new CreateProductController();

const listQuoteController = new ListQuoteController();
const listProductController = new ListProductController();
const listProductQuoteIDController = new ListProductQuoteIDController();

routes.post("/quote/", createQuoteControler.handle);
routes.post("/product/", createProductController.handle);

routes.get("/quote", listQuoteController.handle);
routes.get("/product", listProductController.handle);
routes.get("/product-quote-id/:id_quote", listProductQuoteIDController.handle);

export { routes };
