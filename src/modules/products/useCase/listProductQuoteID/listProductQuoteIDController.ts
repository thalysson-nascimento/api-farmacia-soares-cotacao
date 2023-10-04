import { Request, Response } from "express";
import { ListProductQuoteIDUseCase } from "./listProductQuoteIDUseCase";

export class ListProductQuoteIDController {
  async handle(request: Request, response: Response) {
    const { id_quote } = request.params;
    const listProductQuoteIDUseCase = new ListProductQuoteIDUseCase();
    const listProduct = await listProductQuoteIDUseCase.execute(id_quote);

    return response.json(listProduct);
  }
}
