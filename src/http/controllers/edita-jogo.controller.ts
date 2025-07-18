import { Request, Response } from "express";
import { EditaJogoUseCase } from "../../domain/use-cases/edita-jogo-use-case";
import { zodJogoObject } from "../../types/cria-jogo.dto";
import z from "zod";

export class EditaJogoController {
  private constructor(private editaJogoUseCase: EditaJogoUseCase){}
  static instance: EditaJogoController | null = null

  static getInstance(){
    if(!this.instance){
      const editaJogoUseCase = EditaJogoUseCase.getInstance()
      this.instance =  new EditaJogoController(editaJogoUseCase)
    }
    return this.instance
  }

  async handle(req: Request, res: Response){
    const jogo = z.safeParse(zodJogoObject, req.body)
    if(!jogo.success){
      return res.status(400).send(jogo.error.message)
    }

    const result = await this.editaJogoUseCase.execute(jogo.data)
    return res.status(200).send(result)
  }
}