import express from "express";

import { myMiddleware} from "./middlewares/my-middlewares"

const PORT = 3333;

const app = express();
app.use(express.json());

// Middleware Global
//app.use(myMiddleware)

app.get("/products", (request, response) => {
  const { page, limit } = request.query;

  response.send(`Pagina ${page} de ${limit}`);
});

app.post("/products", myMiddleware, (request, response) => {
  const { name, price } = request.body;

  //response.send(`Produto: ${name} Valor: R$ ${price}`)

  response.status(201).json({ name, price , user_id: request.user_id});
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
