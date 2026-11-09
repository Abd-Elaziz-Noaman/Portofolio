import "./globals.css";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const siteUrl = "https://abdelaziz-noaman.vercel.app";
const description =
  "Software Engineer with 4+ years building scalable web apps with React, Next.js, and TypeScript.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Abd El-Aziz Noaman — Software Engineer",
  description,
  openGraph: {
    title: "Abd El-Aziz Noaman — Software Engineer",
    description,
    url: siteUrl,
    siteName: "Abd El-Aziz Noaman",
    images: ["/images/my-pic.webp"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abd El-Aziz Noaman — Software Engineer",
    description,
    images: ["/images/my-pic.webp"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
