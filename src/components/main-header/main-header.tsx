import Image from "next/image";
import Link from "next/link";

import marvelImg from "@/assets/marvel.png";
import FavoriteHeader from "@/components/favorite-header/favorite-header";

import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.header__logo} href="/">
        <Image src={marvelImg} alt="Marvel logo" />
      </Link>

      <nav className={classes.header__nav}>
        <Link href="/favorites">
          <FavoriteHeader />
        </Link>
      </nav>
    </header>
  );
}
