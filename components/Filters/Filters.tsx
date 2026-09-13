"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchCarFilters } from "@/lib/api";
import css from "./Filter.module.css";

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

    const handleClear = () => {
    setBrand("");
    setPrice("");
    setMinMileage("");
    setMaxMileage("");
    onSearch({ brand: "", price: "", minMileage: "", maxMileage: "" });
  };

 return (
    <div className={css.filters}>
      <div className={css.field}>
        <label className={css.label}>Car brand</label>
        <select
          className={css.select}
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        >
          <option value="">Choose a brand</option>
          {data?.brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className={css.field}>
        <label className={css.label}>Price / 1 hour</label>
        <select
          className={css.select}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        >
          <option value="">Choose a price</option>
          {data &&
            Array.from(
              { length: Math.floor((data.price.max - data.price.min) / 10) + 1 },
              (_, i) => data.price.min + i * 10
            ).map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
        </select>
      </div>

      <div className={css.field}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.mileageInputs}>
          <input
            className={css.mileageInput}
            type="text"
            placeholder="From"
            value={minMileage}
            onChange={(e) => setMinMileage(e.target.value)}
          />
          <input
            className={css.mileageInput}
            type="text"
            placeholder="To"
            value={maxMileage}
            onChange={(e) => setMaxMileage(e.target.value)}
          />
        </div>
      </div>

       <div className={css.buttons}>
        <button
          type="button"
          className={css.searchButton}
          onClick={handleSearch}
        >
          Search
        </button>
        <button
          type="button"
          className={css.clearButton}
          onClick={handleClear}
        >
          Clear filters
        </button>
      </div>
    </div>
  );}