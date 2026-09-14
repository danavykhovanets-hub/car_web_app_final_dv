import {
  QueryClient,
  HydrationBoundary,
  dehydrate,
} from "@tanstack/react-query";
import { fetchCarById } from "@/lib/api";
import CarDetailsClient from "./CarDetails.client";


interface PageProps {
  params: Promise<{ carId: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { carId } = await params;
  const car = await fetchCarById(carId);
  return {
    title: `${car.brand} ${car.model} | RentalCar`,
    description: car.description,
    openGraph: {
      title: `${car.brand} ${car.model} | RentalCar`,
      description: car.description,
      images: [{ url: car.img }],
    },
  };
}

export default async function CarDetailsPage({ params }: PageProps) {
  const { carId } = await params;

  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["car", carId],
    queryFn: () => fetchCarById(carId),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CarDetailsClient carId={carId} />
    </HydrationBoundary>
  );
}