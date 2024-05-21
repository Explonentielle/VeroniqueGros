import Image from "next/image"
import { Layout } from "@/src/components/Layout"
import { ModeToggle } from "../theme/ModeToggle"
import Link from "next/link"
import { NavBar } from "./NavBar"

export const Header = async () => {

  return (
    <header className="w-full border-b border-border px-4">
      <Layout className="flex py-0 flex-row items-center gap-4">
        <div className="flex-1">
          <Link className="flex items-center" href={"/"}>
            <Image
              width={64}
              height={64}
              src="/media/icon.png"
              alt="MateFinder logo" />
            <h2  className="pl-2 text-customColor text-xs md:text-xl iconBorder">Veronique Gros Hourdry</h2>
          </Link>
        </div>
        <NavBar />
        <div className="flex items-center gap-2">
          <ModeToggle/>
        </div>
      </Layout>
    </header>
  )
}
