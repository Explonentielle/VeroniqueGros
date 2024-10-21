"use client"

import * as React from "react"
import Link from "next/link"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/src/components/ui/navigation-menu";
import { cn } from "@/src/lib/utils";
import { navigationMenuTriggerStyle } from "@/src/components/ui/navigation-menu"
import { Cross, Menu } from 'lucide-react';
import { Button } from "@/src/components/ui/button";


export function NavBar() {

    const [menuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div className="h-full flex">
            <NavigationMenu
                className={cn("mr-6", {
                    hidden: !menuOpen,
                    block: menuOpen,
                    "md:block absolute top-0 -right-6 md:left:0 md:relative h-full bg-background": true,
                })} >
                <NavigationMenuList className="flex flex-wrap bg-background px-6">
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref aria-label="accueil">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Accueil
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Podologie</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-between items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/podologie"
                                            aria-label="podologie"
                                        >
                                            <div className="mb-2 text-lg font-medium">
                                                Podologie
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                Spécialité des troubles et des affections de l’appareil locomoteur, de la petite enfance
                                                au sujet âgé. Votre podologue est là pour vous soulager.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/podologie-du-sport" title="Podologie du sport">
                                    La podologie du sport est une spécialité de la podologie qui se concentre
                                    sur le traitement et la prévention des blessures en lien avec la pratique sportive.
                                </ListItem>
                                <ListItem href="/posturologie" title="Posturologie " aria-label="podologie">
                                    discipline étudiant la position et l’équilibre de l’homme debout
                                    en statique et en mouvement.
                                </ListItem>
                                <ListItem href="/podo-pediatrie" title="Podo-pédiatrie " aria-label="podologie">
                                    La prise en charge particulière évolue à chaque étape de la croissance de votre enfant.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Pédicure</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-between items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/pedicurie"
                                            aria-label="pedicurie"
                                        >
                                            <div className="mb-2 text-lg font-medium">
                                                Pédicure
                                            </div>
                                            <p className="text-sm mb-2 leading-tight text-muted-foreground">
                                                Un soin des pieds et des ongles adaptés à tous et à toutes les situations
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/pedicurie" title="Pédicure" aria-label="Pédicure">
                                    Quand et pourquoi consulter un pédicure podologue ?
                                </ListItem>
                                <ListItem href="/pedicurie" title="Prise en charge des patients diabétiques" aria-label="Pédicure">
                                    Soins patients diabétiques.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Appareillages</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-between items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/appareillage"
                                            aria-label="appareillage"
                                        >
                                            <div className="mb-2 text-lg font-medium">
                                                Appareillages
                                            </div>
                                            <p className="text-sm mb-2 leading-tight text-muted-foreground">
                                                un appareillage sur mesure vous est proposé
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/appareillage#orthonyxie" title="Orthonyxie" aria-label="appareillage">
                                    Orthonyxie,  Orteils en griffes, ongles déformés.
                                </ListItem>
                                <ListItem href="/appareillage#orthoplastie" title="Orthoplastie" aria-label="appareillage" >
                                    Orthoplastie, cors douloureux,  incarnés.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Le Cabinet</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                <li className="row-span-3">
                                    <NavigationMenuLink asChild>
                                        <a
                                            className="flex h-full w-full select-none flex-col justify-between items-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                            href="/cabinet#parcour"
                                            aria-label="cabinet"
                                        >
                                            <div className="mb-2 text-lg font-medium">
                                                Mon parcours
                                            </div>
                                            <p className="text-sm mb-2 leading-tight text-muted-foreground">
                                                Fort d’une expérience de plus de 15 ans, Véronique Gros Hourdry vous accueille dans son cabinet médical
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/cabinet#armentieres" title="Cabinet d’Armentières" aria-label="Cabinet d’Armentières">
                                    78 rue Saidi Carnot 59 280 ARMENTIERE
                                </ListItem>
                                <ListItem href="/cabinet#sailly" title="Cabinet de Sailly sur la Lys" aria-label="Cabinet de Sailly">
                                    2390 rue de la lys 62 840 SAILLY SUR LA LYS
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>


                </NavigationMenuList>
            </NavigationMenu>

            <div className="md:hidden flex items-center">
                <Button onClick={toggleMenu} variant={'ghost'} className="p-2" aria-label="menu">
                    {menuOpen ? <Cross className="absolute top-10 right-5 rotate-45 h-6 w-6 z-10" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            <Button variant={'default'} className='hidden md:block'>
                06 33 48 66 53
            </Button>
        </div>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"