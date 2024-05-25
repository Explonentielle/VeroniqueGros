import { AvisClients } from "@/src/features/layout/AvisClients";
import { Footer } from "@/src/features/layout/Footer";
import { MapContainer } from "@/src/features/layout/MapContainer";
import { Tarifs } from "@/src/features/layout/Tarifs";
import type { PageParams } from "@/src/types/next";



export default function RouteParams(props: PageParams<{}>) {
    return (
        <div>
            <AvisClients />

            <Tarifs />

            <MapContainer />
            
            <Footer />
        </div>
    );
}

