import { Request, Response } from "express";
import { CriaJogoUseCase } from "../../domain/use-cases/cria-jogo-use-case";
import { IJogo, zodJogoObject, zodNovoJogoObject } from "../../types/cria-jogo.dto";
import z from "zod";

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
      const jogo = z.safeParse(zodNovoJogoObject, req.body)
      if(!jogo.success){
        return res.status(400).send(jogo.error.message)
      }
      await this.criaJogoUseCase.execute(jogo.data)
      res.status(201).send()
  }

}