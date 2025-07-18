import { Request, Response, Router } from "express";
import { CriaJogoController } from "../controllers/cria-jogo.controller";
import { RetornaJogosController } from "../controllers/retorna-jogos.controller";
import { RetornaJogoPorIdController } from "../controllers/retorna-jogo-por-id.controller";
import { IRetornaJogo } from "../../types/retorna-jogo.dto";
import { EditaJogoController } from "../controllers/edita-jogo.controller";
import { ExcluiJogoController } from "../controllers/exclui-jogo.controller";

export const jogosRouter = Router();

const criaJogoController = CriaJogoController.getInstance();
const retornaJogosController = RetornaJogosController.getInstance();
const retornaJogoPorIdController = RetornaJogoPorIdController.getInstance();
const editaJogoController = EditaJogoController.getInstance();
const excluiJogoController = ExcluiJogoController.getInstance();

jogosRouter.get('/jogo', async (req: Request, res: Response) => {
  await retornaJogosController.handle(req, res);
});

jogosRouter.post('/jogo', async (req: Request, res: Response) => {
  await criaJogoController.handle(req, res);
});

jogosRouter.put('/jogo', async (req: Request, res: Response) => {
  await editaJogoController.handle(req, res);
});

jogosRouter.get('/jogo/:id', async (req: Request<IRetornaJogo>, res: Response) => {
  await retornaJogoPorIdController.handle(req, res);
});

jogosRouter.delete('/jogo/:id', async (req: Request<IRetornaJogo>, res: Response) => {
  await excluiJogoController.handle(req, res);
});
