import "./globals.css";

export const metadata = {
  title: "Onramper — the Leading Fiat-to-Crypto Onramp Aggregator",
  description:
    "Unlock 30+ onramps, instant swaps, and streamlined offramps with the top ramp aggregator.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
