import Image from "next/image";

import favoriteImg from "@/assets/favorite.png";

import classes from "./favorite-header.module.css";

export default function FavoriteHeader() {
  const favoriteCounter = 0;

  return (
    <div className={classes.favorite}>
      <Image src={favoriteImg} alt="Favorite" priority />
      <span>{favoriteCounter}</span>
    </div>
  );
}
