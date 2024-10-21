import { LayoutTitle } from "@/src/components/Layout";
import { ReviewCard } from "@/src/components/ReviewCard";
import Marquee from "@/src/components/magicui/Marquee";

const reviews = [
    {
        name: "Wake59",
        username: "Wake59",
        body: " Tres bon podologue, personne a l écoute, fais du tres bon travail. ",
        img: "https://avatar.vercel.sh/jack",
    },
    {
        name: "frédéric cornez",
        username: "@frédéric cornez",
        body: "Très satisfait car nette amélioration de mes douleurs après 3 mois d’utilisation des semelles fournies. Très clair dans ses explications, je ne connaissais pas la prise en charge posturale. Je recommande fortement.",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjUSruw7QFi_RL3n7mMWn0N1V7m8dl_kR7uMl2OOB41TItKVuT_3=s64-c-rp-mo-br100",
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
        img: "https://lh3.googleusercontent.com/a-/ALV-UjWf5nSEUKrI0_llaVgv9ojOK8Dng7zyC99p8QqxDcj4UB_-luO8=s64-c-rp-mo-br100",
    },
    {
        name: "Alex de Bonnieres",
        username: "@Alex de Bonnieres",
        body: "Professionnelle et à l'écoute, elle a su diagnostiquer et traiter mes douleurs rapidement. Je suis très satisfaite de ses services et je la recommande vivement.",
        img: "https://lh3.googleusercontent.com/a/ACg8ocLaqOaRXxoiGAgWTbyp2RJxMRdU4nStLGSe6tGb7cEAteF90UfLU16HY1fXCgtp-rhrQLt12sksJJE565BQsCl6vMriPFs=s32",
    },
    {
        name: "Amélie KRAJEWSKI",
        username: "@Amélie KRAJEWSKI",
        body: " Ma fille est suivie depuis de nombreuses années par Mme Hourdry. Nous avons toujours été bien accueilli dans son cabinet, elle est très à l'écoute de ses patients. Je recommande sans hésité Mme houdry",
        img: "https://lh3.googleusercontent.com/a/ACg8ocI7SsmHCR6BZrxT9qc-RHq1R9GSGUv36sQdl_T-9-o5prxHeg=s64-c-rp-mo-br100",
    },
    {
        name: "Pierre Paniez",
        username: "@Pierre Paniez",
        body: "Efficace et rapide dans sa fonction ! Merci Madame Hourdry.",
        img: "https://lh3.googleusercontent.com/a-/ALV-UjVmRjDdI3_v5UX3CKidF_j7DEl9lagUHQb5XxtRnT9ZRc_Fe2FJ=s64-c-rp-mo-ba4-br100",
    },
    {
        name: "Aurélie Valmage",
        username: "@Aurélie Valmage",
        body: "Super podologue",
        img: "https://lh3.googleusercontent.com/a/ACg8ocI7SsmHCR6BZrxT9qc-RHq1R9GSGUv36sQdl_T-9-o5prxHeg=s64-c-rp-mo-br100",
    },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);


export const AvisClients = () => {
    return (
        <div className="flex flex-col-reverse items-center">
            <div className="relative flex h-full w-full md:w-2/3 flex-col items-center justify-center overflow-hidden bg-background mx-auto py-6 pt-16">
                <Marquee pauseOnHover className="[--duration:30s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>

                <br />
                <br />

                <Marquee reverse pauseOnHover className="[--duration:30s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
            </div>

            <div className="pt-5">
                <LayoutTitle className="mt-10 text-primary text-center uppercase">Avis patients</LayoutTitle>
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
