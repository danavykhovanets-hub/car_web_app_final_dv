"use client";

import { useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import Filters from "../../components/Filters/Filters";
import type { FilterValues } from "../../components/Filters/Filters";
import { fetchCars } from "../../lib/api";
import CarList from "../../components/CarList/CarList";
import Loader from "../../components/Loader/Loader";
import css from "./Catalog.module.css";
import NotFoundCars from "../../components/NotFoundCars/NotFoundCars";


export default function CatalogClient() {
  const [filters, setFilters] = useState<FilterValues>({
    brand: "",
    price: "",
    minMileage: "",
    maxMileage: "",
  });

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["cars", filters],
    queryFn: ({ pageParam }) =>
      fetchCars({
        brand: filters.brand || undefined,
        price: filters.price || undefined,
        minMileage: filters.minMileage || undefined,
        maxMileage: filters.maxMileage || undefined,
        page: pageParam,
        perPage: 12,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      return nextPage <= lastPage.totalPages ? nextPage : undefined;
    },
  });

  const handleSearch = (values: FilterValues) => {
    setFilters(values);
  };

    const handleReset = () => {
    setFilters({ brand: "", price: "", minMileage: "", maxMileage: "" });
  };

  const cars = data?.pages.flatMap((page) => page.cars) ?? [];

   return (
    <div>
      <Filters onSearch={handleSearch} />

      {isLoading && <Loader />}
      {isError && <p>Something went wrong. Try again.</p>}

      {!isLoading && !isError && cars.length === 0 && (
        <NotFoundCars onReset={handleReset} />
      )}

      {cars.length > 0 && <CarList cars={cars} />}

      {hasNextPage && (
        <div className={css.loadMoreWrapper}>
          <button
            className={css.loadMore}
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </button>
        </div>
      )}
    </div>
  );
}