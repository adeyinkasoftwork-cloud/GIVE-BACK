import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";
import { Abel, DM_Sans } from "next/font/google";

const abel = Abel({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-abel",
});

const dmSans = DM_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "GIVEBACK COIN | $GBACK",
  description:
    "The Currency of Giving using blockchain technology to deliver transparent, accountable humanitarian aid, funding disaster relief, hunger prevention, and homelessness initiatives worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${abel.variable} ${dmSans.variable}`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="preconnect" href="https://dexscreener.com" />
        <link rel="dns-prefetch" href="https://dexscreener.com" />
      </head>
      <body>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
