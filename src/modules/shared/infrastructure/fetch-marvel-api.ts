import crypto from "crypto";
import { MarvelResponse } from "../domain/marvel-api";
import { toQueryParams } from "./query-params-converter";

export const MARVEL_API_URL = "https://gateway.marvel.com/v1/public";

interface fetchMarvelApiParams {
  path: string;
  options?: RequestInit;
  queryParams?: Record<string, string | number>;
}

export async function fetchMarvelApi<T>({
  path,
  options,
  queryParams = {},
}: fetchMarvelApiParams): Promise<MarvelResponse<T>> {
  // This param needs to be hardcoded in order Next.js to cache the response properly
  const ts = "1";
  const hash = crypto
    .createHash("md5")
    .update(`${ts}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`)
    .digest("hex");

  const params = {
    ...queryParams,
    ts,
    hash,
    apikey: process.env.MARVEL_PUBLIC_KEY,
  };

  const serializedQueryParams = toQueryParams(params);

  const response = await fetch(`${MARVEL_API_URL}/${path}?${serializedQueryParams}`, {
    next: { revalidate: +(process.env.CACHE_EXPIRATION_TIME ?? 0) },
    ...options,
  });

  if (!response.ok && response.status !== 404) {
    throw new Error(`Failed to fetch ${path} from Marvel API`);
  }

  return response.json();
}
