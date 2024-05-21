import { InfoCard } from "@/src/components/InfoCard"


export const Infos = async () => {

    return (
        <div className="flex flex-col md:flex-row justify-center h-full md:h-[45vh] p-4">
            <InfoCard icon="Phone" bg ="bg-primary" title="Téléphone" info="07 06 05 04 03" />
            <InfoCard icon="AlarmClock" bg ="bg-accent" data="Sur rendez-vous uniquement Soins à domicile possible" title="Horaires" info="Du Lundi au Vendredi de 8h à 19h" />
            <InfoCard icon="MapPin" bg ="bg-primary" data="62 840 SAILLY SUR LA LYS" title="Adresse" info="2390 rue de la lys" />
        </div>
    )
}
