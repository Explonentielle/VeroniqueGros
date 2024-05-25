import { AvisClients } from "@/src/features/layout/AvisClients";
import { DataContainer } from "@/src/features/layout/DataContainer";
import { Footer } from "@/src/features/layout/Footer";
import { MapContainer } from "@/src/features/layout/MapContainer";
import Overlay from "@/src/features/layout/Overlay";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";

const dataPosturo =
{
    title: "PODOPEDIATRIE :",
    description: "Notre expertise au service des enfants.",
    descriptionb: "Envie que nos enfants restent en bonne santé, qu’ils se développent dans les meilleures conditions ? Un bilan dès 4 ans est vivement conseillé.",
    subtitleb: "« JE NE VEUX PLUS !!! = J’AI MAL »",
    info: "Votre enfant subit de nombreux changement bio mécaniques au cours de san croissance et ce jusqu’à l’Age adulte. Il est donc sujet à de nombreuses contraintes parfois exacerbée par la pratique sportive.",
    subtitleInfo: "A QUOI SERT LA POSTUROLOGIE :",
    className: "md:flex-row-reverse",
}

const dataPosturob =
{
    title: "",
    description: "Nous vous proposons d’accompagner votre enfant tout au long de sa croissance.",
    descriptionb: "De quoi peuvent souffrir nos enfants :",
    info: "",
    className: "md:flex-row",
    list: [
        "Maladie de Sever",
        "Syndrome d’Osgood Schlatter",
        "Scoliose idiopathique",
        "Pied plat valgus",
        "Marche sur la pointe des pieds",
        "Marche les pieds en dedans",
        "Chute fréquente",
    ]
}


const dataPosturoc =
{
    title: "",
    description: "Nous vous conseillerons sur le choix de leurs chaussures",
    descriptionb: "73% des enfants portent des chaussures trop petites",
    info: "",
    className: "md:flex-row",
}



export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <DataContainer img="/media/podopedo.jpg" data={dataPosturo} />

            <DataContainer img="/media/server.avif" data={dataPosturob} />

            <DataContainer img="" data={dataPosturoc} withImg={false} />


            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}