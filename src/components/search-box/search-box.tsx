"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

import magnifyingGlassImg from "@/assets/magnifying-glass.png";

import classes from "./search-box.module.css";

interface SearchBoxProps {
  initialSearch: string;
  placeholder?: string;
  delay?: number;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  initialSearch,
  placeholder = "SEARCH",
  delay = 150,
}) => {
  const [search, setSearch] = useState(initialSearch);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value.toUpperCase());

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      params.set("search", e.target.value.toUpperCase());
      router.push(`?${params.toString()}`);
    }, delay);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div className={classes["search"]}>
      <div className={classes["search__icon"]}>
        <Image src={magnifyingGlassImg} alt="magnifying glass search" width={14} />
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleSearchChange}
        className={classes["search__input"]}
      />
    </div>
  );
};

export default SearchBox;
