"use server";
import { promises as fs } from "fs";
import path from "path";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { redirect } from "next/navigation";
import Link from "next/link";
import { upsertArray } from "./action";

async function getInitialPrestador(id) {
  if (!id) {
    return {
      nome: "",
      email: "",
      senha: "",
      modeloGuincho: "",
    };
  }

  const data = await fs.readFile(
    path.join(process.cwd(), "./src/data/prestadores.json")
  );

  const parsed = JSON.parse(data.toString());

  const prestador = parsed.find(
    (prestador) => Number(prestador.id) === Number(id)
  );

  if (!prestador) {
    redirect("/prestador/new");
  }

  return prestador;
}

export async function PrestadorForm({ id }) {
  const prestador = await getInitialPrestador(id);

  return (
    <form action={upsertArray}>
      {/* hidden field with id */}
      <input type="hidden" name="id" defaultValue={id} />

      <div className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" name="nome" defaultValue={prestador.nome} />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" defaultValue={prestador.email} />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="senha">Senha</Label>
          <Input id="senha" name="senha" defaultValue={prestador.senha} />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="modeloGuincho">Modelo Guincho</Label>
          <Input
            id="modeloGuincho"
            name="modeloGuincho"
            defaultValue={prestador.modeloGuincho}
          />
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <Link
          className="px-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground"
          href="/"
        >
          Cancel
        </Link>
        <Button type="submit">{id ? "Save" : "Create"}</Button>
      </div>
    </form>
  );
}
