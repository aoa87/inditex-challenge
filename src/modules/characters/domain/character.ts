import { Comic } from "@/modules/comics/domain/comic";
import { Image } from "@/modules/shared/domain/image";

export interface Character {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  thumbnail: Image;
  comics: Comic[];
}
