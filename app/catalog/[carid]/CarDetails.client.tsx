"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCarById } from "@/lib/api";
import BookCarForm from "@/components/BookCarForm/BookCarForm";
import css from "./CarDetails.module.css";
import { FiCheckCircle } from "react-icons/fi";
import {
  BsCalendar4,
  BsCarFront,
  BsFuelPump,
  BsGear,
} from "react-icons/bs";
import { PiSpeedometer } from "react-icons/pi";

interface CarDetailsClientProps {
  carId: string;
}

export default function CarDetailsClient({ carId }: CarDetailsClientProps) {
  const { data: car, isLoading, isError } = useQuery({
    queryKey: ["car", carId],
    queryFn: () => fetchCarById(carId),
    refetchOnMount: false,
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError || !car) return <p>Could not load this car.</p>;

  // "Article: 9582" на макеті — останні цифри id
  const article = car.id.slice(-4);

  return (
    <section className={css.container}>
      <div className={css.left}>
        <img
          src={car.img}
          alt={`${car.brand} ${car.model}`}
          className={css.image}
        />
        <BookCarForm carId={car.id} />
      </div>

      <div className={css.right}>
        <div className={css.titleRow}>
          <h2 className={css.title}>
            {car.brand} {car.model}, {car.year}
          </h2>
          <span className={css.article}>Article: {article}</span>
        </div>

        <p className={css.location}>
          {car.location.city}, {car.location.country}
        </p>

        <p className={css.price}>${car.rentalPrice}</p>

        <p className={css.description}>{car.description}</p>

        <div className={css.block}>
          <h3 className={css.blockTitle}>Rental Conditions:</h3>
          <ul className={css.list}>
            {car.rentalConditions.map((item) => (
              <li key={item} className={css.listItem}>
                <FiCheckCircle className={css.checkIcon} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={css.block}>
          <h3 className={css.blockTitle}>Car Specifications:</h3>
          <ul className={css.list}>
            <li className={css.listItem}>
              <BsCalendar4 className={css.specIcon} />
              Year: {car.year}
            </li>
            <li className={css.listItem}>
              <BsCarFront className={css.specIcon} />
              Type: {car.type}
            </li>
            <li className={css.listItem}>
              <BsFuelPump className={css.specIcon} />
              Fuel Consumption: {car.fuelConsumption}
            </li>
            <li className={css.listItem}>
              <BsGear className={css.specIcon} />
              Engine: {car.engine}
            </li>
            <li className={css.listItem}>
              <PiSpeedometer className={css.specIcon} />
              Mileage: {car.mileage.toLocaleString("uk-UA")} km
            </li>
          </ul>
        </div>

        <div className={css.block}>
          <h3 className={css.blockTitle}>Accessories and functionalities:</h3>
          <ul className={css.list}>
            {car.features.map((item) => (
              <li key={item} className={css.listItem}>
                <FiCheckCircle className={css.checkIcon} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}