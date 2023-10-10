import { Request, Response } from "express";
import { UpdateProductUseCase } from "./updateProductUseCase";

export class UpdateProductController {
  async handle(request: Request, response: Response) {
    const { id, distributor, amount, value } = request.body;
    const updateProductUseCase = new UpdateProductUseCase();
    const updateProduct = await updateProductUseCase.execute(
      id,
      distributor,
      amount,
      value
    );

    return response.json(updateProduct);
  }
}
