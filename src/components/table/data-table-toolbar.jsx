"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "@/components/table/data-table-view-options";

import Link from "next/link";

export function DataTableToolbar({ table }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Pesquisar nomes..."
          value={table.getColumn("nome")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("nome")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
      </div>
      <DataTableViewOptions table={table} />
      <Link href="/prestador/new" className="pl-2">
        {/* <Button variant="default" size="sm"> */}
        Criar Prestador
        {/* </Button> */}
      </Link>
    </div>
  );
}
