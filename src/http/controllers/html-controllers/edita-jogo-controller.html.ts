import { Request, Response } from "express";
import path from "path";
import { RetornaJogoPorIdUseCase } from "../../domain/use-cases/retorna-jogo-por-id-use-case";
import { IRetornaJogoZodSchema } from "../../../types/retorna-jogo.dto";

export class EditaJogoControllerHtml {
  private constructor() {}
  private static instance: EditaJogoControllerHtml | null = null;

  static getInstance() {
    if (!this.instance) {
      this.instance = new EditaJogoControllerHtml();
    }
    return this.instance;
  }

  async handle(req: Request, res: Response) {
    
    const { id } = req.params as unknown as IRetornaJogoZodSchema;

    const retornaJogoPorIdUseCase = RetornaJogoPorIdUseCase.getInstance();
    const jogo = await retornaJogoPorIdUseCase.execute(id);

    res.sendFile(path.join(__dirname, '..', '..', 'views', 'edit.html'));
  }
}
