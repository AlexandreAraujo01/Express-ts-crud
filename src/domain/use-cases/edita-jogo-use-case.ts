import { PrismaClient } from "../../generated/prisma";
import { CriaLogService } from "../../services/cria-log-service";
import { prismaService } from "../../services/prisma-service";
import { Acao } from "../../types/acoes-log";
import { IJogo } from "../../types/cria-jogo.dto";

export class EditaJogoUseCase {
  private constructor(private prisma: PrismaClient,private criaLogService: CriaLogService){}
  private static instance: EditaJogoUseCase | null = null

  static getInstance(){
    if(!this.instance){
      const criaLogService = CriaLogService.getInstance()
      this.instance = new EditaJogoUseCase(prismaService,criaLogService)
    }
    return this.instance
  }
  
  async execute(jogo: IJogo): Promise<true>{
      const {id, ano, descricao, idadeMinima, nome,produtora} = jogo
      const result = await this.prisma.jogo.update({
        data: {
          ano,
          descricao,
          idadeMinima,
          nome,
          produtora
        },
        where: {
          id
        }
      })
      await this.criaLogService.execute({acao: Acao.edicao, data: new Date(), idjogo: id})
      return true
  }
}