

import { BentoCard, BentoGrid } from "@/src/components/magicui/BentoGrid";
import { AlarmClock, Bone, BriefcaseMedical, Footprints, MapPin, Phone } from "lucide-react";

const features = [
    {
        Icon: Footprints,
        name: "PÉDICURIE",
        description: " Soins au cabinet : 36 €",
        descriptionb: " Soins a domicile : 40 €",
        descriptionc: "Conventionné par la sécurité social pour les soins de pédicurie pour les diabétiques.",
        href: "/pedicurie",
        cta: "Learn more",
        background: <img src="/media/pourquoi.webp" className="absolute h-full opacity-20" />,
        className: "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: Bone,
        name: "PODOLOGIE",
        description: " Semelles orthopédique : 94 €",
        descriptionb: "Semelles orthopédique + Bilan : 130 €",
        href: "/podologie",
        cta: "Learn more",
        background: <img src="/media/podologie.webp" className="absolute h-full opacity-20" />,
        className: "lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-2",
    },
    {
        Icon: BriefcaseMedical ,
        name: "PETIT APPAREILLAGE :",
        description: "Orthoplastie : 40 à 70€",
        descriptionb: "Orthonyxie : 45€ ",
        descriptionc: "Variable selon le nombres de montage ou d'orteille traité.",
        href: "/appareillage",
        cta: "Learn more",
        background: <img src="/media/orthoplastie.jpg" className="absolute h-full opacity-20" />,
        className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-3",
    },
    {
        Icon: MapPin,
        name: "Cabinet d'armentieres",
        description:"78 rue Saidi Carnot 59 280 ARMENTIERES",
        txtColor: "light",
        href: "/cabinet",
        cta: "Learn more",
        background: "",
        className: "bg-customColor lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2",
    },
    // {
    //     Icon: MapPin,
    //     name: "Cabinet de Sailly",
    //     description:" 2390 rue de la lys  62 840 SAILLY SUR LA LYS",
    //     txtColor: "light",
    //     href: "/cabinet",
    //     cta: "Learn more",
    //     background: <img className="absolute -right-20 -top-20 opacity-60" />,
    //     className: "bg-primary text-background lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3",
    // },
    {
        Icon: Phone,
        name: "Téléphone",
        description:"06 33 48 66 53",
        descriptionb:"03 21 25 79 45",
        txtColor: "light",
        href: "/cabinet",
        cta: "Learn more",
        background: "",
        className: "bg-primary text-background lg:col-start-3 lg:col-end-4 lg:row-start-3 lg:row-end-4",
    },
    {
        Icon: AlarmClock ,
        name: "Horaires",
        description:"Du Lundi au Vendredi de 8h à 19h",
        descriptionb:"Sur rendez-vous uniquement Soins à domicile possible",
        txtColor: "light",
        href: "/cabinet",
        cta: "Learn more",
        background:"",
        className: "bg-customColor text-background lg:col-start-1 lg:col-end-3 lg:row-start-3 lg:row-end-4",
    },
];

export async function Tarifs() {
    return (
        <div className="w-full md:w-2/3 mx-auto p-4">
            <BentoGrid className="lg:grid-rows-3">
                {features.map((feature) => (
                    <BentoCard key={feature.name} {...feature} />
                ))}
            </BentoGrid>
        </div>

    );
}