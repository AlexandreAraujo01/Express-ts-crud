import { PrismaClient } from "../../generated/prisma";
import { CriaLogService } from "../../services/cria-log-service";
import { prismaService } from "../../services/prisma-service";
import { Acao } from "../../types/acoes-log";
import { IJogo } from "../../types/cria-jogo.dto";

export class RetornaJogosUseCase {
  private constructor(private prisma: PrismaClient, private criaLogService: CriaLogService){}
  private static instance: RetornaJogosUseCase | null = null

  static getInstance(){
    if(!this.instance){
      const criaLogService = new CriaLogService(prismaService)
      this.instance = new RetornaJogosUseCase(prismaService, criaLogService)
    }
    return this.instance
  }
  async execute(): Promise<IJogo[]>{
    const results = await this.prisma.jogo.findMany({
      orderBy: {
        id: "asc"
      }
    })
    this.criaLogService.execute({acao: Acao.listagem, data: new Date(), idjogo: null})
    return results
  }
}