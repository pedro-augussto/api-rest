import { Request, Response } from "express";
import { AppError } from "../utils/AppError";

class ProductsController {
  /**
   * index - GET para listar varios registros.
   * show - GET para exibir um registro especifico.
   * create - POST para criar um registro.
   * update - PUT pra atualizar um registro.
   * remove - DELETE para delar um registro.
   */
  index(request: Request, response: Response) {
    const { page, limit } = request.query;

    response.send(`Pagina ${page} de ${limit}`);
  }

  create(request: Request, response: Response) {
    const { name, price } = request.body;

    if(!name || !price){
      throw new AppError("Nome e preço do produto são obrigatorio!")
    }

    //throw new Error("ERRO DE EXEMPLO!");
    //throw new AppError("ERRO DE EXEMPLO!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
