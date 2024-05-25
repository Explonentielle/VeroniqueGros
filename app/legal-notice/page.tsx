import { Layout, LayoutTitle } from "@/src/components/Layout";
import { AvisClients } from "@/src/features/layout/AvisClients";
import { Footer } from "@/src/features/layout/Footer";
import { MapContainer } from "@/src/features/layout/MapContainer";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";



export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Layout className="flex flex-col justify-center items-center">
                <LayoutTitle className="mt-36 text-primary font-bold text-4xl">Mentions légales</LayoutTitle>
                <p> Nouveau En vertu de l'article 6 de la loi n 2004-575 du 21 juin 2004 pour la confiance dans l'économie numérique, il est précisé aux utilisateurs du site Internet  www.pedicure-podologue-gerard.fr l'identité des différents intervenants dans le cadre de sa réalisation et de son suivi :</p>
                <p> Éditeur : Madame Veronique Gros Hourdry -</p>
                <p> Capital social de : 1000 €</p>
                <p> TVA : - </p>
                <p> SIREN :  424 761 419 -</p>
                <p> Responsable de publication : Madame Veronique Gros Hourdry –  06 33 48 66 53</p>
                <p> Délégué à la protection des données :  Madame Veronique Gros Hourdry  –  veronique.gros59@gmail.com  - 06 33 48 66 53</p>
                <p> Webmaster : ADB dev  – 140 Avenue saint maure 59 110 la Madeleine– Téléphone : 07 44 84 79 92</p>
                <p> Hébergeur : Vercel</p>

            </Layout>
            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />
        </div>
    );
}

