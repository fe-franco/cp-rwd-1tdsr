import { PrestadorForm } from "@/components/prestador";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { redirect } from "next/navigation";

export default function PrestadorModal({ children, id }) {
  return (
    <Dialog
      defaultOpen
      // onOpenChange={(open) => {
      //   if (!open) {
      //     redirect("/");
      //   }
      // }}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {id === "new" ? "Criar Prestador" : "Editar Prestador"}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
