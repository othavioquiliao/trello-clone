"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { z } from "zod";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const createBoard = z.object({
  title: z
    .string()
    .min(3, { message: "Título deve conter no mínimo 3 caracteres" }),
});

export async function create(prevState: State, formData: FormData) {
  const validatedFields = createBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message:
        "Campos inválidos, por favor corrija os erros e tente novamente.",
    };
  }
  try {
    const { title } = validatedFields.data;

    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "Erro de database, por favor tente novamente.",
    };
  }
  revalidatePath(`organization/org_2pdIhSMISH45rrAhRADdBLFSRUG`);
  redirect(`/organization/org_2pdIhSMISH45rrAhRADdBLFSRUG`);
}
