import type { Car } from "@/types/car";
import CarCard from "@/components/CarCard/CarCard";
import css from "./CarList.module.css";

interface CarListProps {
  cars: Car[];
}

export default function CarList({ cars }: CarListProps) {
  return (
    <ul className={css.list}>
      {cars.map((car) => (
        <li key={car.id}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
}