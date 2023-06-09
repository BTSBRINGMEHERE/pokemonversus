export interface IPokemon {
  id: number; // 포켓몬 넘버
  name: string; // 영문 이름

  types: {
    type: {
      name: string; // 기술? 해당 푸키먼 타입?
    };
  }[];

  species: {
    name: string; // 종류?
  };

  sprites: {
    front_default: string;
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
  stats: { base_stat: number; stat: { name: string } }[];
}
export interface IPokemonSpec {
  id: number; // 넘버
  color: {
    name: string; // 포켓몬 고유의 색
  };

  names: {
    name: string;
    language: {
      name: string; // 한국이름을 찾기위한
    };
  }[];

  flavor_text_entries: {
    flavor_text: string;
    language: {
      name: string; // 한국식 설명이 필요함
    };
  }[];
}

export interface IAllPokes {
  count: number;
  next: string;
  results: {
    name: string;
    url: string;
  }[];
}

export interface IPokemonDetail {
  id: number;
  name: string;
  koreanName: string;
  color: string;
  game_image: string;
  image: string;
  flavor_text_entry: string;
  types: string[];
  stat_name: string[];
  stat_value: number[];
  [key: string]: any;
}
[];

export type a = {
  [key: string]: [IPokemonDetail];
};
