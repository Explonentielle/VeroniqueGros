import { Layout, LayoutTitle } from "@/src/components/Layout"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export const AvisClients = async () => {

    return (
        <div className="flex flex-row-reverse bg-customAccent">
            <img
                alt="thumbnail"
                className="w-full md:w-[50vw] h-auto m-6"
                src="/media/avisimage.webp" />
            <div className="flex items-center flex-col justify-around p-4 mr-10">
                <LayoutTitle className="mb-4 txt-color uppercase">avis de nos clients</LayoutTitle>
                <div className="flex items-center">
                    <ChevronLeft size={50} className="txt-color mr-2" />
                    <div className="flex flex-col items-center">
                        <p className="text-customColor text-xl mb-4">
                            Jhon Doe
                        </p>
                        <p className="txt-color">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <ChevronRight size={50} className="txt-color ml-2" />
                </div>
            </div>
        </div>
    )
}
