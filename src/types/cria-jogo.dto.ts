import z from "zod"

export interface IJogo {
  id: number,
  nome: string,
  descricao: string,
  produtora: string,
  ano: number,
  idadeMinima: number
}

export interface INovoJogo {
  nome: string,
  descricao: string,
  produtora: string,
  ano: number,
  idadeMinima: number
}

export const zodJogoObject = z.object({
  id: z.number(),
  nome: z.string(),
  descricao: z.string(),
  produtora: z.string(),
  ano: z.number(),
  idadeMinima: z.number()
})

export const zodNovoJogoObject = zodJogoObject.omit({ id: true });



