import { Request, Response } from "express";
import { ListQuoteUseCase } from "./listQuoteUseCase";

export class ListQuoteController {
  async handle(request: Request, response: Response) {
    const listQuoteController = new ListQuoteUseCase();
    const listQuote = await listQuoteController.execute();

    return response.json(listQuote);
  }
}
