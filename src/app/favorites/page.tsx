import { Suspense } from "react";

import LoadingBar from "@/components/loading-bar/loading-bar";
import FavoriteList from "@/sections/favorites/favorite-list";

import classes from "./page.module.css";

const FavoritePage = () => {
  return (
    <Suspense fallback={<LoadingBar />}>
      <div className={classes["favorite-page"]}>
        <h1>FAVORITES</h1>
        <FavoriteList />
      </div>
    </Suspense>
  );
};

export default FavoritePage;
