import TanStackProvider from "../components/TanStackProvider/TanStackProvider";
import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "RentalCar",
  description: "Car rental catalog",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <TanStackProvider>{children}</TanStackProvider>
      </body>
    </html>
  );
}