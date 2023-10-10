import { prismaCliente } from "../../../../database/prismaCliente";

export class UpdateProductUseCase {
  async execute(
    id: string,
    distributor: string,
    amount: number,
    value: string
  ) {
    const updateProduct = await prismaCliente.products.update({
      where: {
        id: id,
      },
      data: {
        distributor,
        amount,
        value,
      },
    });

    return updateProduct;
  }
}
