import styles from "./page.module.scss";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import classNames from "~/classnames";
import Marquee from "~/react-fast-marquee";
import {Metadata, Viewport} from "~/next";

const services = [
  "Branding",
  "Performance-Marketing",
  "Design",
  "Development",
  "Apps",
  "Brand Experiences",
  "Content",
  "Campaigns",
  "Strategy",
];

export const metadata: Metadata = {
  title: "Von Alster & Alb — Marketing & Consulting Agency Group",
  description:
    "Von Alster & Alb is a group of forward-thinking agencies based in Hamburg, Germany, serving diverse markets with sharp strategy, creative marketing, and results-driven consulting. We help brands grow, adapt, and lead in a changing world.",
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
          <h5 className={"fp-heading-5 primary-text"}>Von Alster & Alb Group</h5>
          <h1 className={"fp-heading-1"}>Change is our Output.</h1>
        </div>
        <p className={classNames("fp-paragraph", styles.text)}>
          Based in Hamburg, Germany, Von Alster & Alb Group is a collective of visionary marketing
          and consulting agencies dedicated to redefining how brands connect, grow, and lead. Rooted
          in German precision and inspired by global trends, we partner with ambitious businesses to
          navigate complexity, unlock potential, and create lasting impact.
          <br />
          <br />
          From strategic consulting to creative marketing execution, our group brings together sharp
          minds, diverse expertise, and a shared commitment to excellence. We don’t just react to
          change — we anticipate it, helping our clients stay ahead in a fast-moving world.
          <br />
          <br />
          <strong>Let’s build what’s next — together.</strong>
        </p>
      </div>

      <a
        href={"mailto:hi@vonalsterundalb.de"}
        className={classNames(styles.button, "fp-link fp-link--primary")}>
        <h4 className={"fp-heading-4 white-text"}>Get In Touch</h4>
      </a>
    </main>
  );
}
