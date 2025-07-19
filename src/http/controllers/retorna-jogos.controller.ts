import { Request, Response } from "express";
import { RetornaJogosUseCase } from "../../domain/use-cases/retorna-jogos-use-case";

export class RetornaJogosController {
    private constructor(private retornaJogosUseCase: RetornaJogosUseCase){}
    private static instance: RetornaJogosController | null = null

    static getInstance(){
      if(!this.instance){
        const retornaJogosUseCase = RetornaJogosUseCase.getInstance()
        this.instance = new RetornaJogosController(retornaJogosUseCase)
      }
      return this.instance
    }

    async handle(req: Request, res: Response){
      const games = await this.retornaJogosUseCase.execute()
      res.status(200).send(games)
    }
}