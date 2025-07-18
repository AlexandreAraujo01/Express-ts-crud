import { Acao } from "./acoes-log"

export interface ILogDto {
  "idjogo": number | null,
  "acao": Acao,
  "data": Date
}