import { prismaCliente } from "../../../../database/prismaCliente";

export class ListQuoteUseCase {
  async execute() {
    const listQuote = await prismaCliente.quote.findMany({
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
