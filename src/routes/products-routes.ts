import { Router } from "express";
import { myMiddleware } from "../middlewares/my-middlewares";
import { ProductsController } from "../controllers/ProductsController";

const productsRoutes = Router();
const productsController = new ProductsController();

productsRoutes.get("/", productsController.index);

productsRoutes.post("/", myMiddleware,productsController.create);

export { productsRoutes };
