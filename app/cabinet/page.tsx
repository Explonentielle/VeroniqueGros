import { AvisClients } from "@/src/features/layout/AvisClients";
import { DataContainer } from "@/src/features/layout/DataContainer";
import { Footer } from "@/src/features/layout/Footer";
import { MapContainer } from "@/src/features/layout/MapContainer";
import Overlay from "@/src/features/layout/Overlay";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";
import { Diplomes } from "@/src/features/layout/Diplomes";

const dataCabinet =
{
    title: "LE CABINET D'ARMENTIERES:",
    description: "1 espace dédié pour une prise en charge adaptée et de qualité en Podologie, Podologie du sport , Posturologie et Pédicurie",
    descriptionb: "78 rue Saidi Carnot 59280 ARMENTIERES tel 0633486653",
    info: "Horaires Du Lundi au Vendredi de 8h à 19h Sur rendez-vous uniquement Soins à domicile possible",
    className: "md:flex-row-reverse",
}

const dataCabinetb =
{
    title: "LE CABINET DE SAILLY:",
    description: "1 espace dédié pour une prise en charge adaptée et de qualité en Podologie, Podologie du sport , Posturologie et Pédicurie",
    descriptionb: "2390 rue de la lys 62 840 SAILLY SUR LA LYS",
    info: "Horaires Du Lundi au Vendredi de 8h à 19h Sur rendez-vous uniquement Soins à domicile possible",
    className: "md:flex-row",
}


const dataCabinetc =
{
    title: "DIPLOMES ET CERTIFICATIONS:",
    description: "Plus de 15 ans d’expériences, de nombreuses formations, je mets mon expertise à votre services :",
    descriptionb: " ",
    info: "",
    className: "md:flex-row",
    list: [
        "D.I.U de Posturologie clinique",
        "D.U de podologie du sport",
        "Thérapie Manuelle et Ktaping",
        "Podopédiatrie",
        "Membre actif de l’association de podologues du sport « Podoxygene »",
        "Soins de terrains (ultra trail)",
    ],
}

export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <br />
            <br />

            <section id="sailly">
                <DataContainer img="/media/sailly.png" data={dataCabinetb} />
            </section>

            <section id="armentieres">
                <DataContainer img2="/media/cabinetarm.jpeg" img="/media/images/cabinet1.jpeg" withImg2={true} data={dataCabinet} />
            </section>

            <br />

            <section id="parcour">
                <DataContainer img="/media/images/cabinet.jpeg" data={dataCabinetc} />
            </section>

            <Diplomes />

            <br />

            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}

