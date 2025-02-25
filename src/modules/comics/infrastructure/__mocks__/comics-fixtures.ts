import { Comic } from "../../domain/comic";

export const comicsMock: Comic[] = [
  {
    id: 1,
    title: "Spiderman",
    description: "Spiderman description",
    modified: new Date(),
    thumbnail: {
      extension: "jpg",
      path: "http://spiderman.com/image",
    },
  },
  {
    id: 2,
    title: "Batman",
    description: "Batman description",
    modified: new Date(),
    thumbnail: {
      extension: "jpg",
      path: "http://batman.com/image",
    },
  },
  {
    id: 3,
    title: "Superman",
    description: "Superman description",
    modified: new Date(),
    thumbnail: {
      extension: "jpg",
      path: "http://superman.com/image",
    },
  },
];
