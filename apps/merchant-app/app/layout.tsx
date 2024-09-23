import "./globals.css"
import type { Metadata } from "next";
import { Providers } from "./providers";


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
    <html lang="en">
      <Providers>
        <body >{children}</body>
      </Providers>
    </html>
  );
}
