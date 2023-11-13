import { PrestadorForm } from "@/components/prestador";
import PrestadorModal from "@/components/prestador-modal";

export default function Page({ params }) {
  return (
    <PrestadorModal id={params.id}>
      <PrestadorForm id={params.id} />
    </PrestadorModal>
  );
}
