import "./globals.css";
import { Roboto } from "next/font/google";
import StyledComponentsRegistry from "@/lib/registry";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Abd El-Aziz Noaman — Software Engineer",
  description:
    "Software Engineer with 4+ years building scalable web apps with React, Next.js, and TypeScript.",
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
