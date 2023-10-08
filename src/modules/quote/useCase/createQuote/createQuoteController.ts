import { Request, Response } from "express";
import { CreateQuoteUseCase } from "./createQuoteUseCase";

export class CreateQuoteControler {
  async handle(request: Request, response: Response) {
    const { type_quote } = request.body;
    const createQuoteUseCase = new CreateQuoteUseCase();

    const result = createQuoteUseCase.execute(type_quote);
    return response.json(result);
  }
}
