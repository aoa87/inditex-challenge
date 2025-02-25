import { Image } from "@/modules/shared/domain/image";

export interface Comic {
  id: number;
  title: string;
  description: string;
  modified: Date;
  thumbnail: Image;
}
