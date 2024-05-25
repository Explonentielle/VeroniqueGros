import { AvisClients } from "@/src/features/layout/AvisClients";
import { Footer } from "@/src/features/layout/Footer";
import { Infos } from "@/src/features/layout/Infos";
import { MapContainer } from "@/src/features/layout/MapContainer";
import Overlay from "@/src/features/layout/Overlay";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";


export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <Overlay />

            <AvisClients />

            <Tarifs />

            <MapContainer />

            <Footer />

        </div>
    );
}