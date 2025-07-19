import { PrismaClient } from "../../../generated/prisma"
import { CriaLogService } from "../../../services/cria-log-service"
import { prismaService } from "../../../services/prisma-service"
import { Acao } from "../../../types/acoes-log"
import { IJogo } from "../../../types/cria-jogo.dto"


export class RetornaJogoPorIdUseCase {
  private constructor(private prisma: PrismaClient, private criaLogService: CriaLogService){}
  private static instance: RetornaJogoPorIdUseCase | null = null

  static getInstance(){
    if(!this.instance){
      const criaLogService = new CriaLogService(prismaService)
      this.instance = new RetornaJogoPorIdUseCase(prismaService, criaLogService)
    }
    return this.instance
  }

  async execute(idJogo: number): Promise<IJogo | null> {
    const jogo = await this.prisma.jogo.findUnique({
      where: {
        id : idJogo
      }

    })
    await this.criaLogService.execute({acao: Acao.obtencao, data: new Date(), idjogo: idJogo})
    return jogo
  }
}