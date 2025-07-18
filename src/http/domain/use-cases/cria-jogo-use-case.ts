import { PrismaClient } from "../../generated/prisma";
import { CriaLogService } from "../../services/cria-log-service";
import { prismaService } from "../../services/prisma-service";
import { Acao } from "../../types/acoes-log";
import { IJogo, INovoJogo } from "../../types/cria-jogo.dto";

export class CriaJogoUseCase {
  private constructor(private prisma: PrismaClient, private criaLogService: CriaLogService) {}

  private static instance: CriaJogoUseCase | null = null;

  static getInstance(): CriaJogoUseCase {
    if (!this.instance) {
      const criaLogService = CriaLogService.getInstance()
      this.instance = new CriaJogoUseCase(prismaService, criaLogService);
    }
    return this.instance;
  }

  async execute(jogo: INovoJogo): Promise<number> {
    const jogoCriado = await this.prisma.jogo.create({
      data: jogo,
    });
    await this.criaLogService.execute({acao: Acao.criacao, data: new Date(), idjogo: jogoCriado.id})
    return jogoCriado.id;
  }
}
