import { prismaCliente } from "../../../../database/prismaCliente";

export class ListProductUseCase {
  async execute(id_quote: string) {
    const listQuote = await prismaCliente.products.findMany({
      orderBy: {
        createdAt: "desc",
      },
      where: {
        id_quote,
      },
    });
    return listQuote;
  }
}
