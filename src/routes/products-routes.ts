import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middlewares";

const productsRoutes = Router();

productsRoutes.get("/", (request, response) => {
  const { page, limit } = request.query;

  response.send(`Pagina ${page} de ${limit}`);
});

productsRoutes.post("/", myMiddleware, (request, response) => {
  const { name, price } = request.body;

  //response.send(`Produto: ${name} Valor: R$ ${price}`)

  response.status(201).json({ name, price, user_id: request.user_id });
});

export { productsRoutes };
