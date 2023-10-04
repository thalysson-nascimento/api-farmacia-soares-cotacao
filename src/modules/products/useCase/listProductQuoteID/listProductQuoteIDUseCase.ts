import { prismaCliente } from "../../../../database/prismaCliente";

export class ListProductQuoteIDUseCase {
  async execute(id_quote: string) {
    const listProduct = await prismaCliente.quote.findUnique({
      where: {
        id: id_quote,
      },
      select: {
        id: true,
        status: true,
        hashQuote: true,
        createdAt: true,
        product: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    return listProduct;
  }
}
