import { promises as fs } from "fs";
import path from "path";

import { columns } from "@/components/table/columns";
import { DataTable } from "@/components/table/data-table";

export const metadata = {
  title: "Porto ResQ | Prestadores de Serviço",
  description: "uma plataforma para gerenciar motoristas de guincho",
};

async function getPrestadores() {
  const data = await fs.readFile(
    path.join(process.cwd(), "./src/data/prestadores.json")
  );

  return JSON.parse(data.toString());
}

export default async function TaskPage() {
  const tasks = await getPrestadores();

  return (
    <main className="h-full flex-1 flex-col space-y-8 p-8 md:flex max-w-7xl mx-auto">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Bem-vindo de volta!
          </h2>
          <p className="text-muted-foreground">
            Aqui está uma lista de prestadores de serviço cadastrados.
          </p>
        </div>
      </div>
      <DataTable data={tasks} columns={columns} />
    </main>
  );
}
