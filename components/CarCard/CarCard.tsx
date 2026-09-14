import Link from "next/link";
import type { Car } from "@/types/car";
import css from "./CarCard.module.css";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className={css.card}>
      <img
        src={car.img}
        alt={`${car.brand} ${car.model}`}
        className={css.image}
      />

      <div className={css.titleRow}>
        <h3 className={css.title}>
          {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
        </h3>
        <span className={css.price}>${car.rentalPrice}</span>
      </div>

      <p className={css.info}>
        {car.location.city} | {car.location.country} | {car.rentalCompany}
        <br />
        {car.type} | {car.mileage.toLocaleString("uk-UA")} km
      </p>

      <Link href={`/catalog/${car.id}`} className={css.button}>
        Read more
      </Link>
    </div>
  );
}