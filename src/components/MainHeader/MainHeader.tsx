import Image from "next/image";
import Link from "next/link";

import marvelImg from "@/assets/marvel.png";
import FavoriteHeader from "@/components/FavoriteHeader/FavoriteHeader";

import classes from "./MainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.header__logo} href="/">
        <Image src={marvelImg} alt="Marvel logo" priority />
      </Link>

      <nav className={classes.header__nav}>
        <a href="/favorites">
          <FavoriteHeader />
        </a>
      </nav>
    </header>
  );
}
