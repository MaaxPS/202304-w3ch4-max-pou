export interface ComponentStructure {
  element: Element;
  render: () => void;
}

interface HeartgoldSoulsilver {
  front_default: string;
}

interface PokemonGenerationIv {
  "heartgold-soulsilver": HeartgoldSoulsilver;
}

interface PokemonVersions {
  "generation-iv": PokemonGenerationIv;
}

interface PokemonSprites {
  versions: PokemonVersions;
}

export interface Pokemon {
  name: string;
  sprites: PokemonSprites;
}
