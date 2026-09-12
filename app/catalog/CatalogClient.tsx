"use client";

import { useState } from "react";
import Filters from "@/components/Filters/Filters";
import type { FilterValues } from "@/components/Filters/Filters";

export default function CatalogClient() {
  const [filters, setFilters] = useState<FilterValues>({
    brand: "",
    price: "",
    minMileage: "",
    maxMileage: "",
  });

  const handleSearch = (values: FilterValues) => {
    setFilters(values);
    // скидання пагінації на першу порцію Load More
  };

  return (
    <div>
      <Filters onSearch={handleSearch} />
      {/* CarList зі списком машин */}
      {/*можна тимчасово вивести обрані фільтри: */}
      <pre>{JSON.stringify(filters, null, 2)}</pre>
    </div>
  );
}