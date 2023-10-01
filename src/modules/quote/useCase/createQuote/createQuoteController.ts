import { Request, Response } from "express";
import { CreateQuoteUseCase } from "./createQuoteUseCase";

export class CreateQuoteControler {
  async handle(request: Request, response: Response) {
    const {} = request.body;
    const createQuoteUseCase = new CreateQuoteUseCase();

    const result = createQuoteUseCase.execute();
    return response.json(result);
  }
}
