import { FC } from "react";
import { LayoutTitle } from "./Layout";

interface DataCardProps {
    title: string;
    subtitle?: string,
    subtitleb?: string,
    subtitleInfo?: string,
    info: string;
    description: string;
    descriptionb?: string;
    list?: string[]
}

export const DataCard: FC<DataCardProps> = ({ title, subtitle, subtitleb, subtitleInfo,  info, description, descriptionb, list }) => {
    return (
        <div className="mr-0 md:mr-6">
            <LayoutTitle className="mb-12 text-primary text-center">{title}</LayoutTitle>

            <p className="my-4 ">{subtitle? <span className="text-primary font-bold text-xl mr-6">{subtitle}</span> : null}{description}</p>

            {descriptionb ? <p className="my-4 ">{subtitleb? <span className="text-primary font-bold text-xl mr-6">{subtitleb}</span> : null}{descriptionb}</p> : null}


            <p className="my-4 ">{subtitleInfo? <span className="text-primary font-bold text-xl mr-6">{subtitleInfo}</span> : null}{info}</p>

            {list ?
                <ul className="flex flex-col w-2/3 justify-start my-6">
                    {list.map((item) => {
                        return (
                            <li key={item} className="mx-4">- {item}</li>
                        )
                    })}

                </ul> : undefined}


        </div>
    );
};