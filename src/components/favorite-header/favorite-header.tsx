"use client";

import Image from "next/image";

import favoriteImg from "@/assets/favorite.png";

import classes from "./favorite-header.module.css";
import { useFavorites } from "@/shared/favorite-context";

export default function FavoriteHeader() {
  const { favorites } = useFavorites();

  return (
    <div className={classes.favorite}>
      <Image src={favoriteImg} alt="Favorite" />
      <span>{favorites.length}</span>
    </div>
  );
}
