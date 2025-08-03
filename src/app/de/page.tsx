import styles from "../page.module.scss";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import classNames from "~/classnames";
import Marquee from "~/react-fast-marquee";
import {Metadata, Viewport} from "~/next";

const services = [
  "Branding",
  "Performance-Marketing",
  "Design",
  "Entwicklung",
  "Apps",
  "Marken-Erlebnisse",
  "Content",
  "Kampagnen",
  "Beratung",
  "Strategie",
];

export const metadata: Metadata = {
  title: "Von Alster & Alb — Marketing- und Beratungsagentur-Gruppe",
  description:
    "Von Alster & Alb ist ein Zusammenschluss zukunftsorientierter Agenturen mit Sitz in Hamburg, Deutschland. Wir bedienen vielfältige Märkte mit durchdachter Strategie, kreativer Markenkommunikation und ergebnisorientierter Beratung. Unser Ziel ist es, Marken beim Wachsen, Anpassen und Führen in einer sich wandelnden Welt zu unterstützen.",
  alternates: {
    canonical: process.env.HOST,
    languages: {
      en: process.env.HOST,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#ee1c4e",
};

export default function Page() {
  return (
    <main className={styles.main}>
      <div className={styles.logo}>
        <Image className={styles.img} alt={"Von Alster & Alb Logo"} src={logo}></Image>
      </div>
      <div className={styles.bgElement}>
        <Marquee style={{padding: "1rem"}}>
          {services
            .sort((a, b) => a.localeCompare(b))
            .map((service, index) => {
              return (
                <h4 key={index} style={{marginLeft: "2rem"}} className={"fp-heading-5 gray-text"}>
                  {service}
                </h4>
              );
            })}
        </Marquee>
      </div>
      <div className={styles.bgElement2}>
        <div className={styles.heading}>
          <h5 className={"fp-heading-5 primary-text"}>Von Alster & Alb Gruppe</h5>
          <h1 className={"fp-heading-1"}>Change is our Output.</h1>
        </div>
        <p className={classNames("fp-paragraph", styles.text)}>
          Die Von Alster & Alb Group mit Sitz in Hamburg ist ein Kollektiv visionärer Marketing- und
          Beratungsagenturen – mit dem Anspruch, Markenführung neu zu denken. Wir verbinden deutsche
          Präzision mit globalem Weitblick, um Unternehmen dabei zu unterstützen, Komplexität zu
          meistern, Chancen zu nutzen und Wirkung zu entfalten.
          <br />
          <br />
          Ob Strategie oder Kreation: Unsere interdisziplinären Teams vereinen Expertise mit
          Haltung. Wir denken nicht in Silos, sondern in Lösungen – und helfen unseren Kunden, dem
          Wandel nicht nur zu begegnen, sondern ihm voraus zu sein.
          <br />
          <br />
          <strong>Gestalten wir, was als Nächstes kommt – gemeinsam.</strong>
        </p>
      </div>

      <a
        href={"mailto:hi@vonalsterundalb.de"}
        className={classNames(styles.button, "fp-link fp-link--primary")}>
        <h4 className={"fp-heading-4 white-text"}>Kontakt aufnehmen</h4>
      </a>
    </main>
  );
}
