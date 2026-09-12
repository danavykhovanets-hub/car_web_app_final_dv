export default async function CarDetailsPage({
  params,
}: {
  params: Promise<{ carId: string }>;
}) {
  const { carId } = await params;
  return <h1>Car details: {carId}</h1>;
}