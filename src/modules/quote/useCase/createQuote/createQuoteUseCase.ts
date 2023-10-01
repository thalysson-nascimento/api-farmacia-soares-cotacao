import crypto from "crypto";
import { prismaCliente } from "../../../../database/prismaCliente";

export class CreateQuoteUseCase {
  async execute() {
    const hashQuote = crypto.randomBytes(3);
    const hash = hashQuote.toString("hex");

    const quote = await prismaCliente.quote.create({
      data: {
        hashQuote: hash,
      },
    });

    return quote;
  }
}
