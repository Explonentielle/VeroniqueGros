import Overlay from "@/src/features/layout/Overlay";
import { AvisClients } from "@/src/features/layout/AvisClients";
import { Tarifs } from "@/src/features/layout/Tarifs";
import { HeroBanner } from "@/src/features/layout/HeroBanner";
import { Footer } from "@/src/features/layout/Footer";
import { DataContainer } from "@/src/features/layout/DataContainer";
import { MapContainer } from "@/src/features/layout/MapContainer";

const dataHome =
{
  title: "Pourquoi consulter un Pédicure Podologue ?",
  description: "1 français sur 5 souffre de maux de pieds et de trouble musculo-squelettique. Nous sommes là pour y apporter une solution.",
  info: "Le pied est un organe complexe supportant à lui seul le poids du corps et permettant de se tenir debout et de se déplacer. Nous faisons chaque jour 5 à 6000 pas et pourtant nos pieds, si « sollicités » et « malmenés » sont les grands oubliés de notre santé. Leurs maux sont multiples et ont une répercussion directe sur tout le reste de notre corps.",
  className: "md:flex-row-reverse",
}


export default function Home() {
  return (
    <main className="w-full ">

      <Overlay />

      <HeroBanner />

      <DataContainer img="/media/pourquoi.webp" data={dataHome} />

      <AvisClients />

      <Tarifs />

      <MapContainer />

      <Footer />


    </main>
  );
}
