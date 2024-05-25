import { DataCard } from "@/src/components/DataCard";
import { Layout, LayoutTitle } from "@/src/components/Layout"

type MapCardProps = {
    withImg?: boolean;
    img: string;
    data: {
        title: string;
        subtitle?: string,
        subtitleb?: string,
        subtitleInfo?: string,
        info: string;
        description: string;
        descriptionb?: string;
        list?: string[];
        className?: string;

    };
}

export const DataContainer = async ({ img, data, withImg = true }: MapCardProps) => {

    return (
        <Layout className="items-center">

            <div className={`mt-10 flex flex-col-reverse ${data.className} items-center `}>

                {withImg ? <img
                    alt="thumbnail"
                    className="w-full md:w-[40vw] h-auto max-h-[35vh] md:mx-12 rounded-lg"
                    src={img} /> : null}


                <DataCard
                    title={data.title}
                    subtitle={data.subtitle}
                    subtitleb={data.subtitleb}
                    subtitleInfo={data.subtitleInfo}
                    description={data.description}
                    descriptionb={data.descriptionb}
                    info={data.info}
                    list={data.list}
                />

            </div>

        </Layout>
    )
}
