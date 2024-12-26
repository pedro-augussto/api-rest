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

    if(!name){
      throw new AppError("Nome do produto é obrigatorio!")
    }
    
    if(name.trim().length < 6){
      throw new AppError("Nome do produto precisa ter pelo menos 6 caracter")
    }

    if(!price){
      throw new AppError("Preço do produto é obrigatorio!")
    }

    if(price<0){
      throw new AppError("Preço do produto não pode ser menor que zero")
    }

    //throw new Error("ERRO DE EXEMPLO!");
    //throw new AppError("ERRO DE EXEMPLO!");

    response.status(201).json({ name, price, user_id: request.user_id });
  }
}

export { ProductsController };
