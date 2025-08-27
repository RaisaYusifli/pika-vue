    // Pokemon-related TypeScript interfaces

export interface Pokemon {
  id: string;
  name: string;
  category: string;
  type: string[];
  gender: {
    male: number;
    female: number;
  };
  stats: {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
  };
  physical: {
    height: number;
    weight: number;
  };
  abilities: {
    normal: string[];
    hidden: string;
  };
  evolution: {
    stage: number;
    next?: {
      id: string;
      name: string;
      level: number;
    };
  };
  breeding: {
    eggGroups: string[];
    hatchTime: string;
    genderRatio: string;
  };
  training: {
    evYield: string;
    catchRate: number;
    baseFriendship: number;
    baseExp: number;
    growthRate: string;
  };
  rarity: string;
  generation: number;
  pokedexNumber: string;
  description: string;
  image: string;
  sprite: string;
  shinyImage: string;
}

export interface PokemonPage {
  number: number;
  size: number;
  totalPages: number;
  totalElements: number;
}

export interface PokemonApiResponse {
  content: Pokemon[];
  page: PokemonPage;
}

// For use with your pagination wrapper
export interface PaginatedResponse<T> {
  content: PokemonApiResponse;
}