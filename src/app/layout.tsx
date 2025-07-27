import "@/styles/_index.scss";
import React, {ReactNode, Suspense} from "react";

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="de">
      <body className={"surface fp-base-style-scope"} style={{overflowX: "hidden"}}>
        {children}
      </body>
    </html>
  );
}
