import { AvisClients } from "@/src/features/layout/AvisClients";
import { DataContainer } from "@/src/features/layout/DataContainer";
import { Footer } from "@/src/features/layout/Footer";
import { MapContainer } from "@/src/features/layout/MapContainer";
import Overlay from "@/src/features/layout/Overlay";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";


const dataPodo =
{
    title: "PODOLOGIE",
    description: "QUOI:  La podologie est une approche médicale relative à l’étude, la prévention, le diagnostic et la prise en charge adaptée des pathologies de l’appareil locomoteur.",
    descriptionb: "POURQUOI:  Un Bilan podologique permet une évaluation complète du système locomoteur en tenant compte de l’état général du patient, de ses habitudes et contextes de vie. (Profession, activité, sport…).",
    info: "COMMENT:  Ce bilan fera l’objet d’une évaluation complète :",
    list: [
        "Analyse de l’état des pieds, de leur fonctionnalité",
        "Analyse morphostatique (pied, genoux, bassin, rachis)",
        "Analyse quantifiée de la marche et de la posture. (plateforme)",
        "Analyse du chaussage",
    ],
    className: "md:flex-row-reverse",
}

const dataPodob =
{
    title: "",
    description: "L’objectif étant la mise en évidence des problèmes et facteurs de risques responsables des douleurs, À l’issu de ce bilan un traitement adapté vous sera proposé :",
    info: "",
    list: [
        "Thérapie manuelle, K-taping",
        "Exercice, étirement",
        "Orthèses plantaires",
        "Orientation et conseils",
        "Les orthèses plantaires seront réalisées à l’issu de votre bilan et directement adaptées à vos chaussures (ville, sport, sécurité)"
    ],
    className: "md:flex-row",
}


export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <DataContainer img="/media/appareillage.webp" data={dataPodo} />

            <DataContainer img="/media/podologie.webp" data={dataPodob} />


            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}

