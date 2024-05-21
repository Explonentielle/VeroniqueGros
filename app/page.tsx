import { Layout, LayoutTitle } from "@/src/components/Layout";
import Overlay from "@/src/features/layout/Overlay";
import { AvisClients } from "@/src/features/layout/AvisClients";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Infos } from "@/src/features/layout/Infos";
import { Tarifs } from "@/src/features/layout/Tarifs";
import { HeroBanner } from "@/src/features/layout/HeroBanner";

export default function Home() {
  return (
    <main className="w-full ">

      <Overlay />

      <HeroBanner />

      <Layout className="items-center">

        {/* <LayoutTitle className="text-center text-customColor">Cabinet de Podologuie à Armentieres et Sailly sur la lys</LayoutTitle>

        <p className="text-center">Fort d’une expérience de plus de 15 ans , Véronique Gros Hourdry vous accueille
          dans son cabinet médical réservé à la santé de vos pieds , de votre posture et de
          votre pratique sportive.
        </p> */}

        <div className="mt-10 flex flex-col-reverse md:flex-row-reverse">

          <img
            alt="thumbnail"
            className="w-full md:w-[40vw] h-auto"
            src="/media/appareillage.webp" />

          <div className="mr-0 md:mr-6">
            <LayoutTitle className="mb-4 text-customAccent text-center">Pourquoi consulter un Pédicure Podologue ?</LayoutTitle>

            <p className="mb-4 text-center"> Le pied est un organe complexe supportant à lui seul le poids du corps et
              permettant de se tenir debout et de se déplacer.
              Ns faisons chaque jours 5 à 6000 pas et pourtant nos pieds, si « sollicités » et
              « malmenés » sont les grands oubliés de notre santé.
              Leurs maux sont multiples et ont une répercussion directe sur tout le reste de notre
              corps.
            </p>

            <p className="mb-4 text-center"> 1 français sur 5 souffre de maux de pieds et de trouble musculo squelettique.
              Nous sommes là pour y apporter une solution.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse md:flex-row">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5055.763492214056!2d2.8751285999999996!3d50.685019999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd68e4e437f27%3A0x8422db9e2eea7fef!2sMme%20Gros%20Hourdry%20V%C3%A9ronique!5e0!3m2!1sfr!2sfr!4v1716248117016!5m2!1sfr!2sfr"
            className="w-full md:w-[50vw] h-[40vh]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="ml-0 md:ml-6 flex flex-col justify-center items-center">
            <LayoutTitle className="mb-4 text-customAccent text-center">Le cabinet d Armentieres</LayoutTitle>
            <p className="mb-4 text-center">
              Un espace dédié pour une prise en charge adaptée et de qualité en Podologie, Podologie du
              sport, Posturologie et Pédicurie.
            </p>
            <p className="mt-4 text-center">
              78 rue Saidi Carnot 59 280 ARMENTIERES tel 06 33 48 66 53
            </p>
            <Button className="my-4" variant={'outline'}>prendre rendez vous</Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse md:flex-row-reverse">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40466.28370780232!2d2.709345048632808!3d50.66161040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd817513985f1%3A0xe8da094ffc1540bd!2sV%C3%A9ronique%20HOURDRY!5e0!3m2!1sfr!2sfr!4v1716249216096!5m2!1sfr!2sfr" className="w-full md:w-[50vw] h-[40vh]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="ml-0 md:ml-6 flex flex-col justify-center items-center">
            <LayoutTitle className="mb-4 text-customAccent text-center">Le cabinet de Sailly sur la Lys</LayoutTitle>
            <p className="mb-4 text-center">
              1 espace dédié pour une prise en charge adaptée et de qualité en Podologie, Podologie du
              sport , Posturologie et Pédicurie.
            </p>
            <p className="mt-4 text-center">2390 rue de la lys 62 840 SAILLY SUR LA LYS tel 03 21 25 79 45</p>
            <Button className="my-4" variant={'outline'}>prendre rendez vous</Button>
          </div>
        </div>

      </Layout>

      <Infos />

      <AvisClients />

      <Tarifs />
    </main>
  );
}
