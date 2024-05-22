import { Layout, LayoutTitle } from "@/src/components/Layout"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

export const AvisClients = async () => {

    return (
        <div className="flex flex-col md:flex-row-reverse bg-customColor my-10">
            <img
                alt="thumbnail"
                className="w-[90vw] md:w-[50vw] h-auto mx-auto md:mx-2 my-6"
                src="/media/avisimage.webp" />
            <div className="flex items-center flex-col justify-center p-4 mr-0 md:mr-28">
                <LayoutTitle className="mb-10 text-background text-center uppercase">avis de nos clients</LayoutTitle>
                <div className="flex items-center">
                    <ChevronLeft size={50} className="text-background mr-2" />
                    <div className="flex flex-col items-center">
                        <p className="text-primary text-xl mb-4">
                            Jhon Doe
                        </p>
                        <p className="text-background text-center w-1/2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <ChevronRight size={50} className="text-background ml-2" />
                </div>
            </div>
        </div>
    )
}
