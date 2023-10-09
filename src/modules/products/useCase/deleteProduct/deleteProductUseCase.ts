import { prismaCliente } from "../../../../database/prismaCliente";

export class DeleteProductUseCase {
  async execute(id_product: string) {
    const listProduct = await prismaCliente.products.delete({
      where: {
        id: id_product,
      },
    });

    return listProduct;
  }
}
