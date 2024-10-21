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
    descriptionc: "Les principales affections épidermiques sont :",
    descriptionb: " Les soins sont donc des soins médicaux à part entière, préventifs ou curatifs adaptés à chaque patient selon l’affection dont il souffre.",
    info: "Ses affections sont localisées au niveau des ongles, orteils, et plante des pieds.",
    listb: [
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

const dataPedib =
{
    title: "Pourquoi consulter un Pédicure Podologue ?",
    description: "Prise en charge des patients diabétiques Votre podologue est agréée pour votre prise en charge. 1 bilan initial permettant la gradation de votre diabète et la prescription de séances de soin sera établi, et transmis à votre médecin.",
    descriptionb: "Seron réalisé alors à chaque séance des soins adaptés avec un crontrol particulier de l'état cutané vasculaire de vos pieds, ainsi que conseil de chaussures afin de minimiser tous risques de blessure.",
    info: "Votre podologue vous apprendra à faire un auto controle de vos pieds et chaussures, ainsi que préserver une hygienne parfaite de vos pieds.",
    className: "md:flex-row",
}


export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <br/>
            

            <DataContainer img="/media/pedicurie.webp" data={dataPedi} />

            <DataContainer img="/media/pedicurie.webp" data={dataPedib} />

            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}

