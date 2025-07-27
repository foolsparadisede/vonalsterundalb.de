import "@/styles/_index.scss";
import React, {ReactNode, Suspense} from "react";
import localFont from "next/font/local";
import {Inter} from "next/font/google";
import classNames from "~/classnames";

const tttravels = localFont({
  src: "../assets/TT Travels Next Bold.otf",
  display: "swap",
  variable: "--tttravels",
});
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--inter",
});

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="de" className={classNames(inter.variable, tttravels.variable)}>
      <body className={"fp-base-style-scope"} style={{overflowX: "hidden"}}>
        {children}
      </body>
    </html>
  );
}
