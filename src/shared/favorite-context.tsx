"use client";

import { Character } from "@/modules/characters/domain/character";
import { createContext, useContext, useState } from "react";

type FavoritesContextType = {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (character: Character) => void;
  isFavoriteInList: (characterId: Character["id"]) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = (character: Character) => {
    setFavorites((prev) => [...prev, character]);
  };

  const removeFavorite = (character: Character) => {
    setFavorites((prev) => prev.filter((fav) => fav !== character));
  };

  const isFavoriteInList = (characterId: Character["id"]) => {
    return favorites.some((fav) => fav.id === characterId);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavoriteInList }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
