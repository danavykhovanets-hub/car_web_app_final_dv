"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCarFilters } from "@/lib/api";
import css from "./Filters.module.css";

export interface FilterValues {
  brand: string;
  price: string;
  minMileage: string;
  maxMileage: string;
}

interface FiltersProps {
  onSearch: (values: FilterValues) => void;
}

export default function Filters({ onSearch }: FiltersProps) {
  const { data } = useQuery({
    queryKey: ["carFilters"],
    queryFn: fetchCarFilters,
  });

  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const handleSearch = () => {
    onSearch({ brand, price, minMileage, maxMileage });
  };

  return (
    <div className={css.filters}>
      <select value={brand} onChange={(e) => setBrand(e.target.value)}>
        <option value="">Car brand</option>
        {data?.brands.map((b) => (
          <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <select value={price} onChange={(e) => setPrice(e.target.value)}>
        <option value="">Price / 1 hour</option>
        {data &&
          Array.from(
            { length: Math.floor((data.price.max - data.price.min) / 10) + 1 },
            (_, i) => data.price.min + i * 10
          ).map((p) => (
            <option key={p} value={p}>
              To ${p}
            </option>
          ))}
      </select>

      <div className={css.mileageGroup}>
        <span>Car mileage / km</span>
        <input
          type="text"
          placeholder="From"
          value={minMileage}
          onChange={(e) => setMinMileage(e.target.value)}
        />
        <input
          type="text"
          placeholder="To"
          value={maxMileage}
          onChange={(e) => setMaxMileage(e.target.value)}
        />
      </div>

      <button onClick={handleSearch}>Search</button>
    </div>
  );
}