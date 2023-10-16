import { prismaCliente } from "../../../../database/prismaCliente";

export class UpdateStatusQuoteUseCase {
  async execute(id: string, status: string) {
    const updateProduct = await prismaCliente.quote.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });

    return updateProduct;
  }
}
