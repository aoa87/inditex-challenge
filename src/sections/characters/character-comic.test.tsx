import { render, screen } from "@testing-library/react";
import CharacterComic from "./character-comic";
import { comicsMock } from "@/modules/comics/infrastructure/__mocks__/comics-fixtures";

describe("CharacterComic", () => {
  it("should render the comic correctly", () => {
    const comic = comicsMock[0];

    render(<CharacterComic comic={comic} />);

    expect(screen.getByText(comic.title)).toBeInTheDocument();
    const img = screen.getByAltText(`${comic.title} thumbnail`);
    expect(img).toBeInTheDocument();
  });
});
