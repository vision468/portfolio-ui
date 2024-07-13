import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Amir Hossein Ebrahimi",
  description: "A Beautiful Page that created by vision468",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{
          fontFamily: '"Rubik", sansSerif',
          fontOpticalSizing: "auto",
          fontWeight: 500,
          fontStyle: "normal",
        }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
