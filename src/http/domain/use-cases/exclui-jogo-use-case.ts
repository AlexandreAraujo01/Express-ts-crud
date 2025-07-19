import { PrismaClient } from "../../../generated/prisma";
import { CriaLogService } from "../../../services/cria-log-service";
import { prismaService } from "../../../services/prisma-service";
import { Acao } from "../../../types/acoes-log";


export class ExcluiJogoUseCase {
  private constructor(private prisma: PrismaClient, private criaLogService: CriaLogService){}
  private static instance: ExcluiJogoUseCase | null = null

  static getInstance(){
    if(!this.instance){
      const criaLogService = new CriaLogService(prismaService)
      this.instance = new ExcluiJogoUseCase(prismaService, criaLogService)
    }
    return this.instance
  }

  async execute(id: number): Promise<boolean>{
    try {
        await this.prisma.jogo.delete({
          where: { id: id } // não existe
        });
        await this.criaLogService.execute({acao: Acao.exclusao, data: new Date(), idjogo: id})
        return true
      } catch (error) {
        await this.criaLogService.execute({acao: Acao.exclusao, data: new Date(), idjogo: id})
        return false
      }
  }
}