import { AvisClients } from "@/src/features/layout/AvisClients";
import { DataContainer } from "@/src/features/layout/DataContainer";
import { Footer } from "@/src/features/layout/Footer";
import { Infos } from "@/src/features/layout/Infos";
import { MapContainer } from "@/src/features/layout/MapContainer";
import Overlay from "@/src/features/layout/Overlay";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";

const dataPodoSPort =
{
    title: "PODOLOGIE DU SPORT",
    description: "La podologie du sport est une spécialité de la podologie qui se concentre sur le traitement et la prévention des blessures en lien avec la pratique sportive.",
    subtitle: "QUOI:",
    descriptionb: "Que vous soyez athlète professionnel, sportif amateur ou simplement une personne active, nous sommes là pour vous accompagner dans la prise en charge de vos douleurs, vous conseiller dans votre pratique, votre chaussage, vous aider à la préparation de vos pieds avant un évènement sportif ou vous aider dans l’amélioration de vos performances.",
    subtitleb: "QUI:",
    info: "La pratique sportive ainsi qu’une mauvaise bio-mécanique expose notre organisme à de nombreux micro-traumatismes et chocs répétés à l’origine de multiples pathologies des membres inférieurs.",
    subtitleInfo: "POURQUOI:",
    list: [
        "Tendinopathies",
        "Déchirures",
        "Fractures de fatigue",
        "Périostite",
        "Syndrome de l’essuie-glace",
        "Échauffements et lésions cutanées",
        "Etc.",
    ],
    className: "md:flex-row-reverse",
}

const dataPodoSPortb =
{
    title: "",
    description: "Nous réaliserons un bilan et une étude spécifique de votre pratique sportive permettant votre rééquilibration, l’atténuation de vos douleurs et surtout l’atteinte de vos objectifs en évitant tout risque de blessure.",
    subtitle: "COMMENT:",
    info: "Vos semelles thermoformées avec matériaux spécifiques à chaque pratique sportive vous seront rendues à l’issu de la consultation.",
    list: [
        "Bilan morphostatique",
        "Évaluation ostéo articulaire et musculaire",
        "Analyse dynamique",
        "Analyse et conseil chaussage",
    ],
    className: "md:flex-row",
}


export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <DataContainer img="/media/appareillage.webp" data={dataPodoSPort} />

            <DataContainer img="/media/podoSport.jpg" data={dataPodoSPortb} />

            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}