import { FC } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import LucideIcons, { IconName } from "./LucideIcons";
import { Button } from "./ui/button";
import { LayoutTitle } from "./Layout";
import Link from "next/link";

type MapCardProps = {
    title: string;
    info: string;
    adress: string;
    iframe: string,
    className: string
}

export const MapCard: FC<MapCardProps> = ({ title, info, adress, iframe, className }) => {
    return (
        <div className={`mt-10 flex flex-col-reverse md:flex-row ${className}`}>
            <iframe
                src={iframe}
                className="w-full md:w-[50vw] h-[40vh]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="ml-0 md:ml-6 flex flex-col justify-center items-center">
                <LayoutTitle className="mb-4 text-customColor text-center">{title}</LayoutTitle>
                <p className="mb-4 text-center">
                   {info}
                </p>
                <p className="mt-4 text-center">
                    {adress}
                </p>
                
                <Button className="my-4" variant={'outline'}><Link target="blank" href="https://www.doctolib.fr/pedicure-podologue/armentieres/veronique-hourdry/booking/places?specialityId=8&telehealth=false&bookingFunnelSource=profile">prendre rendez vous</Link></Button>
            </div>
        </div>
    );
};