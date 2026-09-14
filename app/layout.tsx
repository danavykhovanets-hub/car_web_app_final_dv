import Header from "../components/Header/Header";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import "./globals.css";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import { Inter } from "next/font/google";
import "modern-normalize/modern-normalize.css"

const inter = Inter({                             
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata = {
  title: "RentalCar — Car Rental Service",
  description:
    "Rent the best cars for your trips. Wide catalog of vehicles, transparent pricing, and easy booking.",
  openGraph: {
    title: "RentalCar — Car Rental Service",
    description:
      "Rent the best cars for your trips. Wide catalog of vehicles, transparent pricing, and easy booking.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <TanStackProvider>
          <Header />
          {children}
          <Toaster position="top-center" />
        </TanStackProvider>
      </body>
    </html>
  );
}