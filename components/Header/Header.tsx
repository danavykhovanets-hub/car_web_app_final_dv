"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import css from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <Link href="/" className={css.logo}>
        Rental<span className={css.logoAccent}>Car</span>
      </Link>

      <nav className={css.nav}>
        <Link
          href="/"
          className={pathname === "/" ? css.activeLink : css.link}
        >
          Home
        </Link>
        <Link
          href="/catalog"
          className={
            pathname.startsWith("/catalog") ? css.activeLink : css.link
          }
        >
          Catalog
        </Link>
      </nav>
    </header>
  );
}