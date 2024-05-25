import { AvisClients } from "@/src/features/layout/AvisClients";
import { DataContainer } from "@/src/features/layout/DataContainer";
import { Footer } from "@/src/features/layout/Footer";
import { MapContainer } from "@/src/features/layout/MapContainer";
import Overlay from "@/src/features/layout/Overlay";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";


const dataApp =
{
    title: "LES DIFFERENTS APPAREILLAGES :",
    description: "Votre pédicure podologue, à partir d’un diagnostic préalablement établi aura toute compétence pour traiter les affections épidermiques et unguéales du pied, et vous conseiller sur les bonnes pratiques en fonction de chaque pathologie.",
    subtitle: "L'ORTHONYXIE :",
    descriptionb: "L'orthonyxie est une technique de podologie qui permet de corriger les courbures unguéales (ongles) à l'aide d'une orthèse d'ongle (fils en titane scéllé directemet sur l'ongle a l'aide d'une résine). Cette apppareillage utilisé par votre podologue est indolore et ne provoque aucune gêne pour le patient  :",
    subtitleb: "A QUOI SERT L'ORTHONYXIE",
    info: "",
    list: [
        "Corriger une pousse anormale de l'ongle",
        "Corriger une courbure de l'ongle (provoquant des ongles incarnés",
        "Soulager les conflits entre l'ongle et le sillon",
    ],
    className: "md:flex-row",
}

const dataAppb =
{
    title: "",
    description: "L'orthoplastie est un appareillage qui intervient pour protéger ou corriger des orteilles (griffes, hallux valgus ...). Elle est egalement utilisé suite à une amputaion pour permettre au pied de retrouver une certaine forme d'équilibre en comblant l'espace vide. Cette orthèse s'adapte à chaque patient en fonction de sa pathologie, elle peut être utilisée pour l'adulte ou l'enfant",
    subtitle: "L'ORTHOPLASTIE :",
    descriptionb: "L'orthonyxie est une technique de podologie qui permet de corriger les courbures unguéales (ongles) à l'aide d'une orthèse d'ongle (fils en titane scéllé directemet sur l'ongle a l'aide d'une résine). Cette apppareillage utilisé par votre podologue est indolore et ne provoque aucune gêne pour le patient  :",
    subtitleb: "A QUOI SERT L'ORTHOPLASTIE",
    info: "",
    list: [
        "Corriger une déformation d'orteils",
        "Soulager les conflits",
        "Traiter les récidives de cors",
    ],
    className: "md:flex-row-reverse",
}

const dataAppc =
{
    title: "",
    description: "En fonction des problèmes posés et après avoir effectué les soins qui s’imposent, le podologue peut être amené à isoler la zone de frottement afin de soulager les kératomes (cors, durillons, œil de perdrix.).",
    descriptionb: "Le podologue réalisera une « orthoplastie » : orthèse amovible que le patient doit porter dans la journée.",
    info: "C’est une orthèse souple ou semi rigide de repositionnement d’orteils ou de protection, modelée sur le pied et façonnée en élastomère de silicone L’orthoplastie peut être protectrice (pour une griffe d’orteil irréductible) ou correctrice (pour une griffe réductible)", 
    className: "md:flex-row-reverse",
}


export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <DataContainer img="/media/orthonyxie.jpg" data={dataApp} />

            <DataContainer img="/media/orthoplastie.jpg" data={dataAppb} />

            <DataContainer img="" data={dataAppc} withImg={false} />


            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}

