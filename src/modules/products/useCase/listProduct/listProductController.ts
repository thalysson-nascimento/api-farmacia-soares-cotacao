import { Request, Response } from "express";
import { ListProductUseCase } from "./lsitProductUseCase";

export class ListProductController {
  async handle(request: Request, response: Response) {
    const { id_quote } = request.body;
    const listQuoteController = new ListProductUseCase();
    const listQuote = await listQuoteController.execute(id_quote);

    return response.json(listQuote);
  }
}
