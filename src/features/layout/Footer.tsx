import { Layout } from "@/src/components/Layout"
import Link from "next/link"

export const Footer = async () => {

    return (
        <footer className="flex flex-col md:flex-row items-center justify-between w-full h-full md:h-[15vh] border-t border-border bg-primary  px-6 mdpx-36">
            <div className="flex">
                <p className="text-background mr-4">© 2024 Tous droits réservés</p>
                <Link className="text-background underline" href="/">AdbDev</Link>
            </div>

            <Link className="text-background underline" href="/">Plan du site</Link>
            <Link className="text-background underline" href="/">Mentions légales</Link>
            <Link className="text-background underline" href="/">Politique de confidentialité</Link>
        </footer>
    )
}
