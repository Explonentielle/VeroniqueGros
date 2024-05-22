
import LucideIcons, { IconName } from "@/src/components/LucideIcons"
import { Card, CardContent, CardDescription, CardTitle } from "@/src/components/ui/card"
import Image from "next/image"


export const Tarifs = async () => {

    return (
        <div className="flex items-center justify-center h-full md:h-[65vh] p-4">
            <Card className="text-background flex flex-col md:flex-row w-full md:w-2/3 h-auto mb-10 shadow-lg">
                <CardContent className="bg-primary w-full md:w-2/5 rounded-t-lg md:rounded-r-none md:rounded-l-lg  flex flex-col justify-center ">
                    <CardTitle className="my-6  text-4xl text-center">Tarifs</CardTitle>
                    <CardContent>
                        <CardTitle className="my-2">PÉDICURIE</CardTitle>
                        <CardDescription className="text-background">Soins au cabinet : 36 €</CardDescription>
                    </CardContent>

                    <CardContent>
                        <CardTitle className="my-2">PODOLOGIE</CardTitle>
                        <CardDescription className="text-background" >Semelles orthopédique : 94 €</CardDescription>
                        <CardDescription className="text-background" >Semelles orthopédique + Bilan : 130 €</CardDescription>
                    </CardContent>

                    <CardContent>
                        <CardTitle className="my-2">Général :</CardTitle>
                        <CardDescription className="text-background">Orthoplastie :70€</CardDescription>
                        <CardDescription className="text-background">Orthonyxie : 36€</CardDescription>
                        <p className="text-xs text-gray-200 my-2">Conventionné par la sécurité social pour les soins de pédicurie pour les diabétiques.</p>
                    </CardContent>
                </CardContent>
                <CardContent className="bg-customColor w-full md:w-3/5 rounded-b-lg md:rounded-l-none md:rounded-r-lg">

                    <CardContent className="flex justify-center items-center">
                        <CardTitle className="w-1/2 text-3xl text-center font-light mt-16">Véronique Gros Hourdry</CardTitle>
                    </CardContent>
                    <CardDescription className="text-background text-xl text-center my-4">Pédicure - Posturologue - Podologue</CardDescription>
                    <CardDescription className="text-primary uppercase font-extrabold text-xl text-center my-4">Moyens de payement</CardDescription>
                    <div className="flex justify-center items-around my-8">
                        <LucideIcons name={"HandCoins" as IconName} size={64} color="background" />
                        <div className="mx-6"></div>
                        <LucideIcons name={"WalletCards" as IconName} size={64} color="background" />
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}
