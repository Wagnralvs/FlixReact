export const enum Genres {
  Action = 28,
  Adventure = 12,
  Animation = 16,
  Comedy = 35,
  Crime = 80,
  Drama= 18,
  Documentary = 99,
  Fantasy = 14,
  History = 36,
  Horror = 27,
  Music = 10402,
  Romance = 10749,
  ScienceFiction = 878,
  Thriller = 53,
  War= 10752,

}

export const enum ProvidersStreaming {
  Netflix = 8,
  AmazonPrimeVideo = 9,
  DisneyPlus = 337,
  AppleTvPlus = 350,
  HBOmax = 384,
  GloboPlay = 307,
  ParamoutPlus = 531,
  StarPlus = 619,
  ClaroTVPlus = 515,
}

export const genreDescriptions: Record<number, string> = {
  0: "Explore filmes de todos os gêneros: ação, aventura, comédia, drama, terror e muito mais.",
  28: "Filmes cheios de ação com lutas, perseguições e muita adrenalina.",
  12: "Histórias de aventura e exploração em grandes jornadas.",
  16: "Filmes com personagens e histórias animadas.",
  35: "Comédias feitas para divertir e fazer rir.",
  80: "Histórias sobre o mundo do crime e investigações.",
  99: "Filmes baseados em fatos reais, explorando temas e histórias da vida real.",
  18: "Dramas focados em emoções e desenvolvimento dos personagens.",
  10751: "Filmes para toda a família, adequados para todas as idades.",
  14: "Histórias em mundos mágicos com criaturas e elementos sobrenaturais.",
  36: "Filmes baseados em acontecimentos ou personagens históricos.",
  27: "Filmes de terror feitos para causar medo e suspense.",
  10402: "Filmes centrados em música, artistas ou apresentações musicais.",
  9648: "Histórias de mistério, investigação e segredos a serem descobertos.",
  10749: "Filmes focados em histórias de amor e relacionamentos.",
  878: "Filmes sobre tecnologia futurista, espaço e ciência avançada.",
  10770: "Filmes produzidos especialmente para televisão.",
  53: "Histórias cheias de tensão, perigo e reviravoltas.",
  10752: "Filmes ambientados em guerras ou conflitos militares.",
};

export const enum LabelsGenres {
  Action = "Ação",
  Adventure = "Aventura",
  Animation = "Animação",
  Comedy = "Comédia",
  Crime = "Crime",
  Drama= "Drama",
  Documentary = "Documentário",
  Fantasy = "Fantasia",
  History = "História",
  Horror = "Terror",
  Music = "Música",
  Romance = "Romance",
  ScienceFiction = "Ficção Científica",
  Thriller = "Thriller",
  War= "Guerra",
}

export const enum LabelsProvidersStreaming {
  Netflix = "Netflix",
  AmazonPrimeVideo = "Amazon Prime Video",
  DisneyPlus = "Disney+",
  AppleTvPlus = "Apple TV+",
  HBOmax = "HBOmax",
  GloboPlay = "GloboPlay",
  ParamoutPlus = "Paramout+",
  StarPlus = "Star+",
  ClaroTVPlus = "Claro TV+",
}

export enum TypeFilter {
  Genre = "G",
  Stream = "S",
}