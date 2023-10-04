import { Request, Response } from "express";
import { CreateProductUseCase } from "./createproductUseCase";

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const { id_quote, name } = request.body;
    const createQuoteUseCase = new CreateProductUseCase();

    const result = createQuoteUseCase.execute({ id_quote, name });
    return response.json(result);
  }
}
