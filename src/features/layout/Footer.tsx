import { Layout } from "@/src/components/Layout"
import Link from "next/link"

export const Footer = async () => {

    return (
        <footer className="flex flex-col md:flex-row items-center justify-between w-full h-full md:h-[10vh] border-t border-border bg-customColor dark:bg-background mt-6  px-6 md:px-36">
            <div className="flex">
                <p className="text-background dark:text-white mr-4">© 2024 Tous droits réservés</p>
                <Link className="text-background dark:text-white underline" href="/">AdbDev</Link>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-around ">
                <Link className="text-background dark:text-white underline mx-6" href="/">Plan du site</Link>
                <Link className="text-background dark:text-white underline mx-6" href="/">Mentions légales</Link>
                <Link className="text-background dark:text-white underline mx-6" href="/">Politique de confidentialité</Link>
            </div>
        </footer>
    )
}
