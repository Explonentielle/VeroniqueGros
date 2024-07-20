import { DataCard } from "@/src/components/DataCard";
import { Layout, LayoutTitle } from "@/src/components/Layout"

type MapCardProps = {
    withImg?: boolean;
    withImg2?: boolean;
    img: string;
    img2?: string;
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

export const DataContainer = async ({ img, img2 = "", data, withImg = true, withImg2 = false }: MapCardProps) => {

    return (
        <Layout className="items-center">

            <div className={`mt-10 flex flex-col-reverse ${data.className} items-center `}>

                {withImg2 ? null : withImg ? <img
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

            <br />
            
            <div className="flex flex-col md:flex-row">

                {!withImg2 ? null : withImg ? <img
                    alt="thumbnail"
                    className="w-full md:w-[40vw] h-auto max-h-[35vh] md:mx-12 rounded-lg my-10 md:my-0"
                    src={img} /> : null}

                {withImg2 ? <img
                    alt="thumbnail"
                    className="w-full md:w-[40vw] h-auto max-h-[35vh] md:mx-12 rounded-lg"
                    src={img2} /> : null}
            </div>

        </Layout>
    )
}
