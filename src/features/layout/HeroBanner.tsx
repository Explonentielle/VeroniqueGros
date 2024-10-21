"use client"
import { Layout, LayoutTitle } from "@/src/components/Layout"
import WavyText from "@/src/components/magicui/WavyText"
import { useEffect } from "react"

export const HeroBanner = () => {

    useEffect(() => {

    }, [])

    return (
        <Layout className="items-center pt-10">
            <div className="flex flex-col md:flex-row">
                <WavyText
                    word="Cabinet de Podologie à Armentières."
                    className="font-bold text-customColor dark:text-white"
                />
                {/* <WavyText
                    word="Armentières."
                    className="font-bold text-customColor dark:text-white"
                /> */}
            </div>

            <p className="text-center text-lg">Fort d’une expérience de plus de 15 ans, Véronique Gros Hourdry vous accueille
                dans son cabinet médical réservé à la santé de vos pieds, de votre posture et de
                votre pratique sportive.
            </p>
        </Layout>
    )
}
