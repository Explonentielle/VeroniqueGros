import { DataCard } from "@/src/components/DataCard";
import { Layout, LayoutTitle } from "@/src/components/Layout"

type MapCardProps = {
    img: string;
    data: {
        title: string,
        info: string,
        description: string,
        descriptionb?: string;
        list?: string[]
        className?: string

    };
}

export const DataContainer = async ({ img, data }: MapCardProps) => {

    return (
        <Layout className="items-center">

            <div className={`mt-10 flex flex-col-reverse ${data.className} items-center `}>

                <img
                    alt="thumbnail"
                    className="w-full md:w-[40vw] h-auto max-h-[35vh] md:mx-8"
                    src={img} />


                <DataCard
                    title={data.title}
                    description={data.description}
                    descriptionb={data.descriptionb}
                    info={data.info}
                    list={data.list}
                />

            </div>

        </Layout>
    )
}
