import Link from "next/link";
import css from "../components/NotFoundCars/NotFoundCars.module.css";

export default function NotFound() {
  return (
    <div className={css.wrapper}>
      <img src="/no-cars.svg" alt="" className={css.icon} />
      <h2 className={css.title}>Page not found</h2>
      <p className={css.text}>
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back on track.
      </p>
      <Link href="/" className={css.button}>
        Go back home
      </Link>
    </div>
  );
}