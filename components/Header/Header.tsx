import Link from "next/link";
import css from "./Header.module.css";

export default function Header() {
  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        Rental<span className={css.logoAccent}>Car</span>
      </Link>

      <nav className={css.nav}>
        <Link href="/" className={css.link}>
          Home
        </Link>
        <Link href="/catalog" className={css.link}>
          Catalog
        </Link>
      </nav>
    </header>
  );
}