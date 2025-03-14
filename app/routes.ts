// routes.ts
import { type RouteConfig, index, route } from '@react-router/dev/routes'
import '@react-router/dev/routes'

declare module '@react-router/dev/routes' {
  // Aqui estamos estendendo a interface RouteConfigEntry para permitir as propriedades extras.
  interface RouteConfigEntry {
    id?: string
    nested: boolean
    handle?: {
      label: string
    }
  }
}

/*
  Usamos os helpers index() e route() para garantir que o objeto possua a propriedade 
  necessária "file" (do tipo string). Depois, adicionamos as propriedades extras "id" e "handle".
*/
export default [
  {
    ...index('routes/home.tsx'),
    id: 'home', // identificador único
    nested: false,
    handle: { label: 'Home' },
    children: [],
  },
  {
    ...route('/statistics', 'routes/about/index.tsx'),
    nested: false,
    id: 'statistics',
    handle: { label: 'Estatísticas' },
    children: [],
  },

  /*   {
    ...route('/about', 'routes/about/index.tsx'),
    nested: true,
    id: 'about',
    handle: { label: 'About Us' },
    children: [
      {
        ...route('/about/team', 'routes/about/team.tsx'), // Caminho relativo ao pai
        id: 'about-team',
        handle: { label: 'Our Team' },
      },
      {
        ...route('/about/history', 'routes/about/history.tsx'), // Caminho relativo ao pai
        id: 'about-history',
        handle: { label: 'Our History' },
      },
    ],
  }, */

  {
    ...route('/mygames', 'routes/template/index.tsx'),
    nested: true,
    id: 'mygames',
    handle: { label: 'Meus jogos' },
    children: [
      {
        ...route('/mygames/favorites', 'routes/home.tsx'), // Caminho relativo ao pai
        id: 'mygames-favorites',
        handle: { label: 'Favoritos' },
      },
      {
        ...route('/mygames/finished', 'routes/template/page.tsx'), // Caminho relativo ao pai
        id: 'mygames-finished',
        handle: { label: 'Zerados' },
      },
      {
        ...route('/mygames/backlog', 'routes/template/page.tsx'), // Caminho relativo ao pai
        id: 'mygames-backlog',
        handle: { label: 'Backlog' },
      },
    ],
  },
  {
    ...route('/search', 'routes/template/index.tsx'),
    nested: true,
    id: 'search',
    handle: { label: 'Buscar jogos por...' },
    children: [
      {
        ...route('/search/title', 'routes/template/page.tsx'), // Caminho relativo ao pai
        id: 'search-by-title',
        handle: { label: 'Título' },
      },
      {
        ...route('/search/platform', 'routes/template/page.tsx'), // Caminho relativo ao pai
        id: 'search-by-platform',
        handle: { label: 'Plataforma' },
      },
      {
        ...route('/search/genre', 'routes/template/page.tsx'), // Caminho relativo ao pai
        id: 'search-by-genre',
        handle: { label: 'Gênero' },
      },
      {
        ...route('/search/release-date', 'routes/template/page.tsx'), // Caminho relativo ao pai
        id: 'search-by-release-date',
        handle: { label: 'Data de lançamento' },
      },
      {
        ...route('/search/generation', 'routes/template/page.tsx'), // Caminho relativo ao pai
        id: 'search-by-generation',
        handle: { label: 'Geração' },
      },
      {
        ...route('/search/game-mode', 'routes/template/page.tsx'), // Caminho relativo ao pai
        id: 'search-by-game-mode',
        handle: { label: 'Modo de jogo' },
      },
    ],
  },
  {
    ...route('/about', 'routes/template/index.tsx'),
    nested: false,
    id: 'about',
    handle: { label: 'Sobre o projeto' },
    children: [],
  },
] satisfies RouteConfig
