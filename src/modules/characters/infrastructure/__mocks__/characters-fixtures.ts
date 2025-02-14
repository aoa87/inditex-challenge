import { Character } from "../../domain/character";

export const charactersMock: Character[] = [
  {
    id: 1,
    name: "Spiderman",
    description: "Spiderman description",
    modified: new Date(),
    resourceURI: "http://spiderman.com",
    thumbnail: {
      extension: "jpg",
      path: "http://spiderman.com/image",
    },
  },
  {
    id: 2,
    name: "Ironman",
    description: "Ironman description",
    modified: new Date(),
    resourceURI: "http://ironman.com",
    thumbnail: {
      extension: "jpg",
      path: "http://ironman.com/image",
    },
  },
];
