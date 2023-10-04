import { prismaCliente } from "../../../../database/prismaCliente";

interface Product {
  id?: string;
  product?: string;
  id_quote: string;
  name: string;
  distributor?: string;
  amount?: number;
  value?: number;
  status?: string;
}

export class CreateProductUseCase {
  async execute({ id_quote, name }: Product) {
    const product = await prismaCliente.products.create({
      data: {
        id_quote,
        name,
      },
    });

    return product;
  }
}
