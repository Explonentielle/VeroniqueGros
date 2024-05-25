import { FC } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import LucideIcons, { IconName } from "./LucideIcons";
import { Button } from "./ui/button";
import { LayoutTitle } from "./Layout";

interface MapCardProps {
    title: string;
    info: string;
    adress?: string;
    iframe: string,
}

export const MapCard: FC<MapCardProps> = ({ title, info, adress, iframe }) => {
    return (
        <div className="mt-10 flex flex-col-reverse md:flex-row">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5055.763492214056!2d2.8751285999999996!3d50.685019999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd68e4e437f27%3A0x8422db9e2eea7fef!2sMme%20Gros%20Hourdry%20V%C3%A9ronique!5e0!3m2!1sfr!2sfr!4v1716248117016!5m2!1sfr!2sfr"
                className="w-full md:w-[50vw] h-[40vh]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="ml-0 md:ml-6 flex flex-col justify-center items-center">
                <LayoutTitle className="mb-4 text-customColor text-center">Le cabinet d Armentieres</LayoutTitle>
                <p className="mb-4 text-center">
                    Un espace dédié pour une prise en charge adaptée et de qualité en Podologie, Podologie du
                    sport, Posturologie et Pédicurie.
                </p>
                <p className="mt-4 text-center">
                    78 rue Saidi Carnot 59 280 ARMENTIERES tel 06 33 48 66 53
                </p>
                <Button className="my-4" variant={'outline'}>prendre rendez vous</Button>
            </div>
        </div>
    );
};