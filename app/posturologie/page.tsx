import { AvisClients } from "@/src/features/layout/AvisClients";
import { DataContainer } from "@/src/features/layout/DataContainer";
import { Footer } from "@/src/features/layout/Footer";
import { MapContainer } from "@/src/features/layout/MapContainer";
import Overlay from "@/src/features/layout/Overlay";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";

const dataPosturo =
{
    title: "BILAN POSTURAL :",
    description: "Discipline étudiant la position et l’équilibre de l’homme debout en statique et en mouvement. Pour se tenir debout l’être humain lutte continuellement contre la gravité et adapte en permanence sa position afin de garder l’équilibre. Cela se fait de façon autonome sans douleur et faible dépense énergétique grâce à différents capteurs sensoriels tels que le pied, la mâchoire et L’œil.",
    subtitle: "LA POSTUROLOGIE :",
    descriptionb: "Pour se tenir debout l’être humain lutte continuellement contre la gravité et adapte en permanence sa position afin de garder l’équilibre. Cela se fait de façon autonome sans douleur et faible dépense énergétique grâce à différents capteurs sensoriels tels que le pied, la mâchoire et L’œil.",
    info: "IL s’agit d’un bilan clinique qui cherche les CAUSES de vos symptômes. Bien souvent il s’agit de douleurs chroniques qui s’installent dans le temps, avec des bilans radiologiques souvent insignifiant ",
    subtitleInfo: "A QUOI SERT LA POSTUROLOGIE :",
    className: "md:flex-row-reverse",
}

const dataPosturob =
{
    title: "",
    description: "Tout arrive par un défaut de posture qui engendre des contraintes musculaires au niveau des articulations. Ce sont nos contractures musculaires qui sont douloureuses.",
    subtitle: "COMMENT CELA FONCTIONNE ? :",
    descptionb: "C’est donc parce que nous nous tenons mal que ces contractures et nos douleurs arrivent.",
    info: "Un mauvais fonctionnement de la mécanique musculaire de nos pieds , de l’œil et de la mâchoire, des dents, des cicatrices, un dysfonctionnement de la 1ère cervicale et enfin de notre sphère émotionnelle entrainera un déséquilibre de notre posture, des tensions musculaires et l’arrivée de douleurs chroniques",
    className: "md:flex-row",
}

const dataPosturoc =
{
    title: "",
    description: "Dès l’Age de 4 ans et avant 9 ans, surtout en cas de difficultés scolaires Adolescents de 11 à 17 ans (dépistage scoliose); Adulte dès les 1ers symptômes d’une douleur mécanique articulaire, vertiges, instabilité, céphalées, fatigue chronique, troubles du sommeil, difficulté de concentration …",
    subtitle: "POUR QUI ?",
    descptionb: "Un bilan complet permettra la rééquilibration de votre posture et la libération des contraintes et donc de vos douleurs :",
    subtitleb: "COMMENT :",
    info: "",
    className: "md:flex-row-reverse",
    list: [
        "Bilan morphostatique",
        "Test d’équilibration",
        "Enregistrement sur plateforme de vos oscillations et de la marche.",
        "Testing des différentes entrées sensorielles (œil et mâchoire, oreille interne). A l’issu du bilan :",
        "Réalisation d’orthèses plantaires de reprogrammation posturale",
        "Orientation orthoptiste, ostéopathe, occluso dentiste",
    ],
    descriptionc: "A l’issu du bilan :",
    listb: [
        "Réalisation d’orthèses plantaires de reprogrammation posturale",
        "Orientation orthoptiste, ostéopathe, occluso dentiste",
    ]
}

const dataPosturod =
{
    title: "",
    description: " Réalisation d’orthèses plantaires de reprogrammation posturale, Orientation orthoptiste, ostéopathe, occluso dentiste",
    subtitle: " A l’issu du bilan :",
    info: "",
    className: "md:flex-row-reverse",
}


export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <DataContainer img="" data={dataPosturo} withImg={false} />

            <DataContainer img="/media/podologie.webp" data={dataPosturob} />

            <DataContainer img="/media/posturo.jpg" data={dataPosturoc} />

            <DataContainer img="" data={dataPosturod} withImg={false}/>


            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}