"use server";
import { promises as fs } from "fs";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import path from "path";

export const upsertArray = async (formData) => {
  // get form data
  const id = formData.get("id");
  const nome = formData.get("nome");
  const email = formData.get("email");
  const senha = formData.get("senha");
  const modeloGuincho = formData.get("modeloGuincho");

  // write edited data to file

  const data = await fs.readFile(
    path.join(process.cwd(), "./src/data/prestadores.json")
  );

  const parsed = JSON.parse(data.toString());

  const prestador = parsed.findIndex(
    (prestador) => Number(prestador.id) === Number(id)
  );

  if (prestador === -1) {
    // append new entry
    parsed.push({
      id: parsed.length + 1,
      nome,
      email,
      senha,
      modeloGuincho,
    });
  } else {
    parsed[prestador] = {
      id,
      nome,
      email,
      senha,
      modeloGuincho,
    };
  }

  await fs.writeFile(
    path.join(process.cwd(), "./src/data/prestadores.json"),
    JSON.stringify(parsed)
  );

  // redirect to home page
  redirect("/");
};

export const deleteArray = async (formData) => {
  console.log("deleteArray");

  // get form data
  const id = formData.get("id");

  // write edited data to file

  const data = await fs.readFile(
    path.join(process.cwd(), "./src/data/prestadores.json")
  );

  const parsed = JSON.parse(data.toString());

  const prestador = parsed.findIndex(
    (prestador) => Number(prestador.id) === Number(id)
  );

  if (prestador !== -1) {
    parsed.splice(prestador, 1);
  } else {
    console.log("prestador não encontrado");
    console.log("id: " + id);
  }

  await fs.writeFile(
    path.join(process.cwd(), "./src/data/prestadores.json"),
    JSON.stringify(parsed)
  );

  revalidatePath("/");
};
