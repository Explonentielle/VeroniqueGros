import { FC } from "react";
import { Card, CardDescription, CardTitle } from "./ui/card";
import LucideIcons, { IconName } from "./LucideIcons";
import { Button } from "./ui/button";

interface InfoCardProps {
    title: string;
    info: string;
    data?: string;
    bg: string,
    icon: string,
}

export const InfoCard: FC<InfoCardProps> = ({ title, info, data, bg, icon }) => {
    return (
        <Card className={`${bg} w-full md:w-1/4 h-auto my-4 mx-0 md:mx-4 pt-2 md:pt-0 flex items-center justify-center flex-col`}>
            <LucideIcons name={icon as IconName} size={36} color="background" />
            <CardTitle className="my-6 text-background">{title}</CardTitle>
            {title === "Téléphone" ? <Button variant={"outline"}>{info}</Button> : <CardDescription className="text-background my-2 max-w-xs text-center">{info}</CardDescription>}
            <CardDescription className="text-background my-2 max-w-xs text-center">{data}</CardDescription>
        </Card>
    );
};