import crypto from "crypto";
import { prismaCliente } from "../../../../database/prismaCliente";

export class CreateQuoteUseCase {
  async execute(type_quote: string) {
    const hashQuote = crypto.randomBytes(3);
    const hash = hashQuote.toString("hex");

    const quote = await prismaCliente.quote.create({
      data: {
        hashQuote: hash,
        typeQuote: type_quote,
      },
    });

    return quote;
  }
}
