import { Request, Response } from "express";
import { RetornaJogoPorIdUseCase } from "../../domain/use-cases/retorna-jogo-por-id-use-case";
import { IRetornaJogo } from "../../types/retorna-jogo.dto";

export class RetornaJogoPorIdController {
  private constructor(private retornaJogoPorIdUseCase: RetornaJogoPorIdUseCase){}
  private static instance: RetornaJogoPorIdController | null = null

  static getInstance(){
    if(!this.instance){
      const retornaJogoPorIdUseCase = RetornaJogoPorIdUseCase.getInstance()
      this.instance = new RetornaJogoPorIdController(retornaJogoPorIdUseCase)
    }
    return this.instance
  }

  async handle(req: Request<IRetornaJogo>, res: Response){
    const { id } = req.params
    const jogo = await this.retornaJogoPorIdUseCase.execute(Number(id))
    if(!jogo){
      return res.status(400).send({"message": "Id invalido!"})
    }
    return res.status(200).send({ jogo })
  }
}