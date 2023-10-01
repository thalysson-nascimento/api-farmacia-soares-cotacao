import { Router } from "express";
import { CreateQuoteControler } from "./modules/quote/useCase/createQuote/createQuoteController";
import { ListQuoteController } from "./modules/quote/useCase/listQuote/listQuoteController";

const routes = Router();

const createQuoteControler = new CreateQuoteControler();
const listQuoteController = new ListQuoteController();

routes.post("/quote/", createQuoteControler.handle);
routes.get("/quote", listQuoteController.handle);

export { routes };
