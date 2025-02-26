import React from "react";

import { SearchParams } from "@/shared/types";
import CharactersPage from "./characters/page";

interface HomeProps {
  searchParams: SearchParams;
}

const Home: React.FC<HomeProps> = ({ searchParams }) => {
  return <CharactersPage searchParams={searchParams} />;
};

export default Home;
