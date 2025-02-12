import Image from "next/image";

import favoriteImg from "@/assets/favorite.png";

import classes from "./FavoriteHeader.module.css";

export default function FavoriteHeader() {
  const favoriteCounter = 0;

  return (
    <div className={classes.favorite}>
      <Image src={favoriteImg} alt="Favorite" width={24} height={21.68} priority />
      <span>{favoriteCounter}</span>
    </div>
  );
}
