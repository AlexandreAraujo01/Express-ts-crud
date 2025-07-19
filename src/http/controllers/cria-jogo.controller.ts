import { Request, Response } from "express";
import { CriaJogoUseCase } from "../../domain/use-cases/cria-jogo-use-case";
import { INovoJogo } from "../../types/cria-jogo.dto";

export class CriaJogoController {
  private constructor(private criaJogoUseCase: CriaJogoUseCase){}
  private static instance: CriaJogoController | null = null
  static  getInstance(){
    if(!this.instance){
      const criaJogoUseCase = CriaJogoUseCase.getInstance()
      this.instance = new CriaJogoController(criaJogoUseCase)
    }
    return this.instance
  }

  async handle(req: Request, res: Response){
      const jogo = req.body as unknown as INovoJogo
      await this.criaJogoUseCase.execute(jogo)
      res.status(201).send()
  }

}