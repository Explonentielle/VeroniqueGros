"use client";

import { AcerTabs } from "@/src/components/ui/AcerTabs";
import Image from "next/image";


export function Diplomes() {
    const tabs = [
        {
            title: "Therapie manuelle",
            value: "Therapie manuelle",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 md:p-10 text-xl md:text3xl font-bold text-primary bg-secondary">
                    <p className="mb-16 text-xs md:text-md">Therapie manuelle apliquée a la podologie</p>
                    <DummyContent src="/media/diplomes/1.jpeg" />
                </div>
            ),
        },
        {
            title: "podo-pédiatrie",
            value: "podo-pédiatrie",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 md:p-10 text-xl md:text3xl font-bold text-primary bg-secondary">
                    <p className="mb-16 text-xs md:text-md">Analyse posturale en podo-pédiatrie</p>
                    <DummyContent src="/media/diplomes/4.jpeg" />
                </div>
            ),
        },
        {
            title: "Universitaire",
            value: "Universitaire",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 md:p-10 text-xl md:text3xl font-bold text-primary bg-secondary">
                    <p className="mb-16 text-xs md:text-md">Diplomes intra-universitaire</p>
                    <DummyContent src="/media/diplomes/5.jpeg" />
                </div>
            ),
        },
        {
            title: "Biomécanique",
            value: "Biomécanique",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 md:p-10 text-xl md:text3xl font-bold text-primary bg-secondary">
                    <p className="mb-16 text-xs md:text-md">Biomécanique holistique</p>
                    <DummyContent src="/media/diplomes/6.jpeg" />
                </div>
            ),
        },
        {
            title: "Prévention sportive",
            value: "Prévention sportive",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-3xl p-4 md:p-10 text-xl md:text3xl font-bold text-primary bg-secondary">
                    <p className="mb-16 text-xs md:text-md">Prévention des blésure cours a pied</p>
                    <DummyContent src="/media/diplomes/1.jpeg" />
                </div>
            ),
        },
    ];

    return (
        <div className="flex flex-col-reverse items-center mx-4">
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10">
                <AcerTabs activeTabClassName={"bg-primary"} tabs={tabs} />
            </div>
        </div>
    );
}

const DummyContent = ({ src }: { src: string })=> {
    return (
        <Image
            src={src}
            alt="dummy image"
            width="800"
            height="800"
            className="object-cover object-left-top h-[70%] md:h-[80%] absolute bottom-5 inset-x-0 w-[80%] md:w-[70%] rounded-xl mx-auto mt-16"
        />
    );
};
