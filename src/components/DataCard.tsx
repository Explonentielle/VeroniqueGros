import { FC } from "react";
import { LayoutTitle } from "./Layout";

interface DataCardProps {
    title: string;
    info: string;
    description: string;
    descriptionb?: string;
    list?: string[]
}

export const DataCard: FC<DataCardProps> = ({ title, info, description, descriptionb, list }) => {
    return (
        <div className="mr-0 md:mr-6">
            <LayoutTitle className="mb-12 text-primary text-center">{title}</LayoutTitle>

            <p className="my-4 ">{description}</p>

            {descriptionb ? <p className="my-4 ">{descriptionb}</p> : null}


            <p className="my-4 ">{info}</p>

            {list ?
                <ul className="flex flex-wrap w-2/3 justify-start my-6">
                    {list.map((item) => {
                        return (
                            <li key={item} className="mx-4">- {item}</li>
                        )
                    })}

                </ul> : undefined}


        </div>
    );
};