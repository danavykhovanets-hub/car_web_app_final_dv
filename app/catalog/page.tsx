import CatalogClient from "./CatalogClient";

export const metadata = {
  title: "Catalog | RentalCar",
  description: "Browse our full catalog of rental cars and filter by brand, price, and mileage.",
};

export default function CatalogPage() {
  return <CatalogClient />;
}