"use client"
import { SiteMapModal } from "@/src/components/SiteMapModal"
import { Button } from "@/src/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export const Footer = () => {
    const [siteMap, setSiteMap] = useState(false)
    
    const toggleSiteMap = () => {
        setSiteMap(!siteMap)
    }

    return (
        <div>
            {siteMap && <SiteMapModal setSiteMap={setSiteMap} />}
            <footer className="flex flex-col md:flex-row items-center justify-between w-full h-full md:h-[10vh] border-t border-border bg-customColor dark:bg-background mt-6 px-6 md:px-36">
                <div className="flex">
                    <p className="text-background dark:text-white mr-4">© 2024 Tous droits réservés</p>
                    <Link aria-label="AdbDev" className="text-background dark:text-white underline" target="_blank" href="https://debonnieresalexandre.vercel.app/">AdbDev</Link>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-around">
                    <Button variant={"link"} onClick={toggleSiteMap} className="text-background dark:text-white underline mx-6">Plan du site</Button>
                    <Button variant={"link"}><Link aria-label="Mentions légales" className="text-background dark:text-white underline mx-6" href="/legal-notice">Mentions légales</Link></Button>
                    <Button variant={"link"}><Link aria-label="Politique de confidentialité" className="text-background dark:text-white underline mx-6" href="/privacy-policy">Politique de confidentialité</Link></Button>
                </div>
            </footer>
        </div>
    )
}