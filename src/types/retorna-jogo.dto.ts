import z from "zod"

export interface IRetornaJogo {
  id: string
}

export const retornaJogoZodSchema = z.object({
  id: z.coerce.number()
})

export type IRetornaJogoZodSchema = z.infer<typeof retornaJogoZodSchema>;
