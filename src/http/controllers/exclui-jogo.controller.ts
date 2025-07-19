import { Request, Response } from "express";
import { ExcluiJogoUseCase } from "../../domain/use-cases/exclui-jogo-use-case";
import { IRetornaJogo } from "../../types/retorna-jogo.dto";

export class ExcluiJogoController {
  private constructor(private excluiJogoUseCase: ExcluiJogoUseCase){}
  private static instance: ExcluiJogoController | null = null

  static getInstance(){
    if(!this.instance){
      const excluiJogoUseCase = ExcluiJogoUseCase.getInstance()
      this.instance = new ExcluiJogoController(excluiJogoUseCase)
    }
    return this.instance
  }

  async handle(req: Request, res: Response){
    const { id } = req.params as unknown as IRetornaJogo
    const boolean = await this.excluiJogoUseCase.execute(Number(id))
    if(!boolean){
      return res.status(400).send({"message": "Id invalido!"})
    }
    return res.status(200).send(boolean)
  }
}