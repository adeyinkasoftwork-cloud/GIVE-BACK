import "./globals.css";
import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "GIVEBACK COIN | $GBACK",
  description:
    "The Currency of Giving using blockchain technology to deliver transparent, accountable humanitarian aid, funding disaster relief, hunger prevention, and homelessness initiatives worldwide.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://dexscreener.com" />
      </head>
      <body>
        {children}
        <FloatingButtons />
      </body>
    </html>
  );
}
