import { Layout } from "@/src/components/Layout"
import { MapCard } from "@/src/components/MapCard"



export const MapContainer = async () => {

  return (
    <Layout className="items-center">
      <MapCard
        iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5055.763492214056!2d2.8751285999999996!3d50.685019999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd68e4e437f27%3A0x8422db9e2eea7fef!2sMme%20Gros%20Hourdry%20V%C3%A9ronique!5e0!3m2!1sfr!2sfr!4v1716248117016!5m2!1sfr!2sfr"
        title="Le cabinet d Armentieres"
        info="Un espace dédié pour une prise en charge adaptée et de qualité en Podologie, Podologie du
              sport, Posturologie et Pédicurie."
        adress="78 rue Saidi Carnot 59 280 ARMENTIERES tel 06 33 48 66 53"
        className="md:flex-row" />

      <MapCard
        iframe="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40466.28370780232!2d2.709345048632808!3d50.66161040000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47dcd817513985f1%3A0xe8da094ffc1540bd!2sV%C3%A9ronique%20HOURDRY!5e0!3m2!1sfr!2sfr!4v1716249216096!5m2!1sfr!2sfr"
        title="Le cabinet de Sailly sur la Lys"
        info="Un espace dédié pour une prise en charge adaptée et de qualité en Podologie, Podologie du
              sport, Posturologie et Pédicurie."
        adress="2390 rue de la lys 62 840 SAILLY SUR LA LYS tel 03 21 25 79 45"
        className="md:flex-row-reverse" />
    </Layout>
  )
}
