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
                    "md:block absolute top-20 md:top-0 -right-5 md:left:0 md:relative": true,
                })} >
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
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
                                        >
                                            <div className="mb-2 text-lg font-medium">
                                                Podologie
                                            </div>
                                            <p className="text-sm leading-tight text-muted-foreground">
                                                La podologie est une approche médicale relative la prévention au
                                                diagnostic et la prise en charge de pathologie de l’appareil locomoteur.
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/podologie-du-sport" title="Podologie du sport">
                                    La podologie du sport est une spécialité de la podologie qui se concentre
                                    sur le traitement et la prévention des blessures en lien avec la pratique sportive.
                                </ListItem>
                                <ListItem href="/appareillage" title="Appareillages">
                                    Orthonyxie, Orthoplastie
                                </ListItem>
                                <ListItem href="/posturologie" title="Posturologie ">
                                    discipline étudiant la position et l’équilibre de l’homme debout
                                    en statique et en mouvement.
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
                                            href="/cabinet"
                                        >
                                            <div className="mb-2 text-lg font-medium">
                                                Le cabinet
                                            </div>
                                            <p className="text-sm mb-2 leading-tight text-muted-foreground">
                                                78 rue Sadi Carnot 59280 ARMENTIERES                           
                                            </p>
                                            <p className="text-sm leading-tight text-muted-foreground">                                              
                                                2390 rue de la lys 62840 SAILLY SUR LA LYS
                                            </p>
                                        </a>
                                    </NavigationMenuLink>
                                </li>
                                <ListItem href="/pedicurie" title="Pédicure">
                                    Quand et pourquoi consulter un pédicure podologue ?
                                </ListItem>
                                <ListItem href="/pedicurie" title="Type de consultations">
                                    soins médicaux à part entière, préventifs ou curatifs adaptés
                                    à chaque patient selon l’affection dont il souffre.
                                </ListItem>
                                <ListItem href="/pedicurie" title="Prise en charge des patients diabétiques">
                                    Votre podologue est agréée pour votre prise en charge.
                                </ListItem>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>


                    <NavigationMenuItem>
                        <Link href="/contact" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Contact
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <div className="md:hidden flex items-center">
                <Button onClick={toggleMenu} variant={'ghost'} className="p-2">
                    {menuOpen ? <Cross className="rotate-45 h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
            </div>

            <Button variant={'default'} className='hidden md:block'>
                07 08 09 10 11
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