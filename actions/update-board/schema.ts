import { z } from "zod";

export const UpdateBoard = z.object({
  title: z
    .string({
      required_error: "Título é obrigatório",
      invalid_type_error: "Título é obrigatório",
    })
    .min(3, {
      message: "Título é muito curto",
    }),
  id: z.string(),
});
