import { Request, Response } from "express";
import { EditaJogoUseCase } from "../../domain/use-cases/edita-jogo-use-case";
import { IJogo, zodJogoObject } from "../../types/cria-jogo.dto";
import z from "zod";
import { RetornaJogoPorIdUseCase } from "../domain/use-cases/retorna-jogo-por-id-use-case";

export class EditaJogoController {
  private constructor(private editaJogoUseCase: EditaJogoUseCase, private retornaJogoPorIdUseCase: RetornaJogoPorIdUseCase){}
  static instance: EditaJogoController | null = null

  static getInstance(){
    if(!this.instance){
      const editaJogoUseCase = EditaJogoUseCase.getInstance()
      const retornaJogoPorIdUseCase = RetornaJogoPorIdUseCase.getInstance()
      this.instance =  new EditaJogoController(editaJogoUseCase, retornaJogoPorIdUseCase)
    }
    return this.instance
  }

  async handle(req: Request, res: Response){
    const jogo = req.body as unknown as IJogo
    const jogoJaRegistrado = await this.retornaJogoPorIdUseCase.execute(jogo.id)
    if(!jogoJaRegistrado){
      return res.status(400).send({message: "Id Invalido"})
    }
    const result = await this.editaJogoUseCase.execute(jogo)
    return res.status(200).send(result)
  }
}