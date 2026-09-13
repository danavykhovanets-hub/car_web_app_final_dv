import css from "./NotFoundCars.module.css";

interface NotFoundCarsProps {
  onReset: () => void;
}

export default function NotFoundCars({ onReset }: NotFoundCarsProps) {
  return (
    <div className={css.wrapper}>
      <div className={css.icon}><img src="/no-cars.svg" alt="" /></div>
      <h2 className={css.title}>No cars found</h2>
      <p className={css.text}>
        We couldn&apos;t find any cars that match your current filters. Try
        changing your search criteria or reset the filters.
      </p>
      <button className={css.button} onClick={onReset}>
        Reset filters
      </button>
    </div>
  );
}