import type { Metadata } from "next";
import { Providers } from "./providers";
import "./globals.css"
import AppbarClient from "../components/AppBarFinal";

export const metadata: Metadata = {
  title: "paytm_app",
  description: "paytm_app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <Providers>
        <body lang="en">
          <AppbarClient/>
          {children}
        </body>
      </Providers>
    </html>
  );
}
