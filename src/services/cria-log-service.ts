import { PrismaClient } from "../generated/prisma";
import { ILogDto } from "../types/log.dto";
import { prismaService } from "./prisma-service";

export class CriaLogService {
  constructor(private prisma: PrismaClient){}
  static instance: CriaLogService | null = null

  static getInstance() {
    if(!this.instance){
      this.instance = new CriaLogService(prismaService)
    }
    return this.instance
  }

  async execute(data: ILogDto){
    await this.prisma.log.create({
      data
    })
  }
}