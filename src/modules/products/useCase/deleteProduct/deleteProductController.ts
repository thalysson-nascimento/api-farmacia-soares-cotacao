import { Request, Response } from "express";
import { DeleteProductUseCase } from "./deleteProductUseCase";

export class DeleteProductController {
  async handle(request: Request, response: Response) {
    const { id_product } = request.params;
    const deleteProductUseCase = new DeleteProductUseCase();
    const listProduct = await deleteProductUseCase.execute(id_product);

    return response.json(listProduct);
  }
}
