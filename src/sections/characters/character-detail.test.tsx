import { FavoritesProvider } from "@/shared/favorite-context";
import { render, screen } from "@testing-library/react";
import { charactersMock } from "@/modules/characters/infrastructure/__mocks__/characters-fixtures";
import { comicsMock } from "@/modules/comics/infrastructure/__mocks__/comics-fixtures";

import CharacterDetail from "./character-detail";
import CharacterComic from "./character-comic";
import { Comic } from "@/modules/comics/domain/comic";
import CharacterFavorite from "./character-favorite";

jest.mock("./character-comic", () => jest.fn(() => <div>Mocked CharacterComic</div>));
jest.mock("./character-favorite", () => jest.fn(() => <div>Mocked CharacterFavorite</div>));

describe("CharacterDetail", () => {
  it("should render character and comics successfully", () => {
    const character = charactersMock[0];
    const comics = comicsMock;

    const { container } = render(<CharacterDetail character={character} comics={comics} />);

    expect(container).toBeInTheDocument();
    expect(screen.getByText(character.name.toUpperCase())).toBeInTheDocument();
    expect(screen.getByText(character.description)).toBeInTheDocument();

    const img = screen.getByAltText(`${character.name} thumbnail`);
    expect(img).toBeInTheDocument();

    expect(CharacterFavorite).toHaveBeenCalled();
    expect(CharacterComic).toHaveBeenCalledTimes(comics.length);
  });

  it("should render no comics if comics list is empty", () => {
    const character = charactersMock[0];
    const comics: Comic[] = [];

    render(
      <FavoritesProvider>
        <CharacterDetail character={character} comics={comics} />
      </FavoritesProvider>,
    );

    expect(CharacterComic).not.toHaveBeenCalled();
  });
});
