import { LayoutTitle } from "@/src/components/Layout";
import { ReviewCard } from "@/src/components/ReviewCard";
import Marquee from "@/src/components/magicui/Marquee";

const reviews = [
    {
        name: "Wake59",
        username: "Wake59",
        body: " Tres bon podologue, personne al écoute, fais du tres bon travail. ",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "frédéric cornez",
        username: "@frédéric cornez",
        body: "Très satisfait car nette amélioration de mes douleurs après 3 mois d’utilisation des semelles fournies. Très clair dans ses explications, je ne connaissais pas la prise en charge posturale. Je recommande fortement.",
        img: "https://avatar.vercel.sh/jill",
    },
    {
        name: "Florian Haese",
        username: "@Florian Haese",
        body: "Super armoire !",
        img: "https://avatar.vercel.sh/john",
    },
    {
        name: "Adrif Mehdi",
        username: "@Adrif Mehdi",
        body: "Trés podologue très sérieux et à l'écoute de ses patients. Très satisfait des résultats, je recommande fortement ce podologue très compétent qui a permis à mon fils de faire sa compétition . Un grand merci à elle .",
        img: "https://avatar.vercel.sh/jane",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


export const AvisClients = () => {
    return (
        <div className="flex flex-col-reverse items-center">
            <div className="relative flex h-full w-full md:w-2/3 flex-col items-center justify-center overflow-hidden bg-background mx-auto py-20 ">
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>

            <div className="pt-5">
                <LayoutTitle className="my-10 text-primary text-center uppercase">avis de nos clients</LayoutTitle>
            </div>
        </div>
    );
};




















// import { Layout, LayoutTitle } from "@/src/components/Layout"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import Image from "next/image"

// export const AvisClients = async () => {

//     return (
//         <div className="flex flex-col md:flex-row-reverse bg-customColor my-10">
//             <img
//                 alt="thumbnail"
//                 className="w-[90vw] md:w-[50vw] h-auto mx-auto md:mx-2 my-6"
//                 src="/media/avisimage.webp" />
//             <div className="flex items-center flex-col justify-center p-4 mr-0 md:mr-28">
//                 <LayoutTitle className="mb-10 text-background text-center uppercase">avis de nos clients</LayoutTitle>
//                 <div className="flex items-center">
//                     <ChevronLeft size={50} className="text-background mr-2" />
//                     <div className="flex flex-col items-center">
//                         <p className="text-primary text-xl mb-4">
//                             Jhon Doe
//                         </p>
//                         <p className="text-background text-center w-1/2">
//                             Lorem ipsum dolor sit, amet consectetur adipisicing elit.
//                         </p>
//                     </div>
//                     <ChevronRight size={50} className="text-background ml-2" />
//                 </div>
//             </div>
//         </div>
//     )
// }
