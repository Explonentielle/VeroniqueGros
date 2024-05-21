"use client"
import { Layout, LayoutTitle } from "@/src/components/Layout"
import { useEffect } from "react"

export const HeroBanner = () => {

    useEffect(() => {

    }, [])

    return (
        <Layout className="items-center">
            <LayoutTitle className="text-center text-customColor">Cabinet de Podologuie à Armentieres et Sailly sur la lys</LayoutTitle>

            <p className="text-center">Fort d’une expérience de plus de 15 ans , Véronique Gros Hourdry vous accueille
                dans son cabinet médical réservé à la santé de vos pieds , de votre posture et de
                votre pratique sportive.
            </p>
        </Layout>
    )
}
