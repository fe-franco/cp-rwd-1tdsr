import { PrestadorForm } from "@/components/prestador";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page({ params }) {
  const id = params.id === "new" ? null : params.id;

  return (
    <main className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 py-8">
        <h1 className="text-3xl font-semibold leading-none tracking-tight">
          {id ? "Editar Prestador" : "Criar Prestador"}
        </h1>
        <h2 className="text-sm font-semibold leading-none tracking-tight text-muted-foreground">
          {id ? "Atualizar dados abaixo." : "Entre os dados abaixo."}
        </h2>
      </div>
      <PrestadorForm id={id} />
    </main>
  );
}
