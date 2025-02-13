import crypto from "crypto";
import { MarvelResponse } from "../domain/marvel-api";

export const MARVEL_API_URL = "https://gateway.marvel.com/v1/public";

export async function fetchMarvelApi<T>(
  entity: string,
  options?: RequestInit,
): Promise<MarvelResponse<T>> {
  const ts = new Date().getTime().toString();
  const hash = crypto
    .createHash("md5")
    .update(`${ts}${process.env.MARVEL_PRIVATE_KEY}${process.env.MARVEL_PUBLIC_KEY}`)
    .digest("hex");

  // For the moment limit is hardcoded here as we are not implementing pagination
  const response = await fetch(
    `${MARVEL_API_URL}/${entity}?ts=${ts}&apikey=${process.env.MARVEL_PUBLIC_KEY}&hash=${hash}&limit=50`,
    { next: { revalidate: +(process.env.CACHE_EXPIRATION_TIME ?? 0) }, ...options },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${entity} from Marvel API`);
  }

  return response.json();
}
