import { AvisClients } from "@/src/features/layout/AvisClients";
import { DataContainer } from "@/src/features/layout/DataContainer";
import { Footer } from "@/src/features/layout/Footer";
import { MapContainer } from "@/src/features/layout/MapContainer";
import Overlay from "@/src/features/layout/Overlay";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";


const dataPedi =
{
    title: "Pourquoi consulter un Pédicure Podologue ?",
    description: "Votre pédicure podologue, à partir d’un diagnostic préalablement établi aura toute compétence pour traiter les affections épidermiques et unguéales du pied, et vous conseiller sur les bonnes pratiques en fonction de chaque pathologie.",
    descriptionb: " Les soins sont donc des soins médicaux à part entière, préventifs ou curatifs adaptés à chaque patient selon l’affection dont il souffre. Ses affections sont localisées au niveau des ongles, orteils, et plante des pieds.",
    info: "Prise en charge des patients diabétiques Votre podologue est agréée pour votre prise en charge. 1 bilan initial permettant la gradation de votre diabète et la prescription de séances de soin sera établi, et transmis à votre médecin.",
    list: [
        "Cors",
        "Durillons",
        "Œil de perdrix",
        "Callosité",
        "Ongles épaissis",
        "hypertrophiés",
        "Ongles incarnés",
        "Verrues plantaires",
        "Mycoses unguéales et cutanées",
        "Plaie",
        "Troubles sudoraux",
    ],
    className: "md:flex-row-reverse",
}


export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <DataContainer img="/media/appareillage.webp" data={dataPedi} />

            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}

