import { Request, Response } from "express";
import { UpdateStatusQuoteUseCase } from "./updateStatusQuoteUseCase";

export class UpdateStatusQuoteController {
  async handle(request: Request, response: Response) {
    const { id, status } = request.body;
    const updateStatusQuoteUseCase = new UpdateStatusQuoteUseCase();
    const updateProduct = await updateStatusQuoteUseCase.execute(id, status);

    return response.json(updateProduct);
  }
}
