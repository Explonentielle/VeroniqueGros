"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import { Layout } from "@/src/components/Layout";
import { ModeToggle } from "../theme/ModeToggle";
import Link from "next/link";
import { NavBar } from "./NavBar";

export const Header = () => {
  const [imageSize, setImageSize] = useState(90); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setImageSize(90); 
      } else {
        setImageSize(60); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full border-b border-border px-4 bg-background z-50">
      <Layout className="flex py-0 flex-row items-center gap-4">
        <div className="flex-1">
          <Link className="flex items-center" href={"/"} aria-label="Accueil">
            <Image
              width={imageSize} 
              height={imageSize} 
              src="/media/icon.png"
              alt="logo"
            />
            <h2 className="pl-2 text-customColor text-xs md:text-xl iconBorder">
              Veronique Gros Hourdry
            </h2>
          </Link>
        </div>
        <NavBar />
        {/* <div className="flex items-center gap-2">
          <ModeToggle />
        </div> */}
      </Layout>
    </header>
  );
};