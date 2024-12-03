"use client";

import { create } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";

export const Form = () => {
  const initialState = { message: "", errors: {} } as const;
  const [state, dispatch] = useFormState(create, initialState);

  return (
    <form action={dispatch}>
      <input
        required
        name="title"
        id="title"
        placeholder="Digite um título"
        className="border-black border p-2"
      />
      <Button type="submit">Salvar</Button>
    </form>
  );
};
