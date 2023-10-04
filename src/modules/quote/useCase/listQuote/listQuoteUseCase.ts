import { prismaCliente } from "../../../../database/prismaCliente";

export class ListQuoteUseCase {
  async execute() {
    const listQuote = await prismaCliente.quote.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        status: true,
        hashQuote: true,
        createdAt: true,
      },
    });
    return listQuote;
  }
}
