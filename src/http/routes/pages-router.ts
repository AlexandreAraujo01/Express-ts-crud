import { Request, Response, Router } from "express";
import path from "node:path";
import { RetornaJogoPorIdUseCase } from "../domain/use-cases/retorna-jogo-por-id-use-case";
import zodMiddlewareValidator from "../middlewares/zod-middleware-validator";
import { IRetornaJogoZodSchema, retornaJogoZodSchema } from "../../types/retorna-jogo.dto";
import { EditaJogoControllerHtml } from "../controllers/html-controllers/edita-jogo-controller.html";

export const pagesRouter = Router()

const editaJogoControllerHtml = EditaJogoControllerHtml.getInstance()

pagesRouter.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

pagesRouter.get('/registrar', async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'create.html'));
});

pagesRouter.get(
  '/edit/:id',
  zodMiddlewareValidator(retornaJogoZodSchema, 'params'),
  async (req: Request, res: Response) => {
    editaJogoControllerHtml.handle(req, res)
  }
);