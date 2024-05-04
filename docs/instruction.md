# Instructions
### App Name
- Podcast Menager

### Description
- Um app ao estilo netflix, onde eu possa centralizar diferentes episódios separados por categoria

### Domain
- Podcasts feitos em vídeos

### Features
- Listar os episódios em sessões de categorias
  - Saúde
  - BodyBuilder
  - Mentalidade
  - Humor
  
- Filtrar episódios por nome de podcasts

## How to do
### Feature:
- Listar os episódios em sessões de categorias
#### Implements
- retornar em uma api rest(Json) o:
  - Nome do podcast
  - Nome do episódio
  - Imagem de capa
  - Link do podcast
  - Categorias
```js
[
  {
    podcastName: "flow",
    episode: "CBUM - Flow #319",
    videoId: "pQSuQmUfS30",
    cover: "https://i.ytimg.com/vi/pQSuQmUfS30/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=pQSuQmUfS30",
    categories: [
      "Saúde",
      "Esporte",
      "BodyBuilder"
    ]
  },
  {
    podcastName: "flow",
    episode: "RUBENS BARRICHELO - Flow #339",
    videoId: "4KDGTdiOV4I",
    cover: "https://i.ytimg.com/vi/4KDGTdiOV4I/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    categories: [
      "Esporte",
      "Automobilismo"
    ]
  }
];
```