import { notFound } from "next/navigation";

import { FindByIdCharacterUseCase } from "@/modules/characters/application/find-by-id-character-use-case";
import { Character } from "@/modules/characters/domain/character";
import { MarvelCharacterRepository } from "@/modules/characters/infrastructure/marvel-character-repository";
import CharacterDetail from "@/sections/characters/character-detail";
import { MarvelComicRepository } from "@/modules/comics/infrastructure/marvel-comic-repository";
import { FindAllComicsByCharacterUseCase } from "@/modules/comics/application/find-all-comics-by-character-use-case";

interface CharacterDetailPageProps {
  params: Promise<{
    characterId: Character["id"];
  }>;
}

const CharacterDetailPage = async ({ params }: CharacterDetailPageProps) => {
  const { characterId } = await params;

  const characterRepository = new MarvelCharacterRepository();
  const findByIdCharacterUseCase = new FindByIdCharacterUseCase(characterRepository);
  const character = await findByIdCharacterUseCase.execute(characterId);

  if (!character) {
    notFound();
  }

  const comicRepository = new MarvelComicRepository();
  const findAllComicsByCharacterUseCase = new FindAllComicsByCharacterUseCase(comicRepository);
  const comics = await findAllComicsByCharacterUseCase.execute(characterId);

  return <CharacterDetail character={character} comics={comics} />;
};

export default CharacterDetailPage;
