import Header from "../components/Header/Header";
import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import "./globals.css";
import type { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "RentalCar",
  description: "Car rental catalog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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