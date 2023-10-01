import { prismaCliente } from "../../../../database/prismaCliente";

export class ListQuoteUseCase {
  async execute() {
    const listQuote = await prismaCliente.quote.findMany();
    return listQuote;
  }
}
