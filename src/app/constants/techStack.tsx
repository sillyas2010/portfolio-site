import { NavItem } from '@/app/types'
import Apollo from '@/public/icons/brands/apollo.svg'
import Bash from '@/public/icons/brands/bash.svg'
import Cypress from '@/public/icons/brands/cypress.svg'
import ESLint from '@/public/icons/brands/eslint.svg'
import Jest from '@/public/icons/brands/jest.svg'
import MUI from '@/public/icons/brands/mui.svg'
import NextJS from '@/public/icons/brands/nextjs.svg'
import ReactRouter from '@/public/icons/brands/react-router.svg'
import Redux from '@/public/icons/brands/redux.svg'
import RTL from '@/public/icons/brands/rtl.svg'
import RTQ from '@/public/icons/brands/rtq.svg'
import Storybook from '@/public/icons/brands/storybook.svg'
import StyledComponents from '@/public/icons/brands/styled-components.svg'
import Tailwind from '@/public/icons/brands/tailwind.svg'
import TS from '@/public/icons/brands/typescript.svg'
import Vite from '@/public/icons/brands/vite.svg'
import Webpack from '@/public/icons/brands/webpack.svg'
import {
  faBootstrap,
  faCss3Alt,
  faDocker,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faNpm,
  faReact,
  faSass,
  faYarn,
} from '@fortawesome/free-brands-svg-icons'
import colors from './colors'

export type Tech = {
  title: NavItem['title']
  link?: NavItem['link']
  icon?: NavItem['icon']
  faIcon?: NavItem['faIcon']
  color?: string
}

export const general: Tech[] = [
  {
    title: 'HTML5',
    link: 'https://wikipedia.org/wiki/HTML5',
    color: colors.brand.html,
    faIcon: faHtml5,
  },
  {
    title: 'CSS3',
    link: 'https://wikipedia.org/wiki/CSS',
    color: colors.brand.css,
    faIcon: faCss3Alt,
  },
  {
    title: 'Sass',
    link: 'https://sass-lang.com/',
    color: colors.brand.sass,
    faIcon: faSass,
  },
  {
    title: 'Javascript',
    link: 'https://wikipedia.org/wiki/JavaScript',
    color: colors.brand.js,
    faIcon: faJsSquare,
  },
  {
    title: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    icon: <TS viewBox="-9 -15 146 146" />,
  },
  {
    title: 'React',
    link: 'https://react.dev/',
    color: colors.brand.react,
    faIcon: faReact,
  },
  {
    title: 'NodeJS',
    link: 'https://nodejs.org/',
    color: colors.brand.node,
    faIcon: faNode,
  },
  {
    title: 'NextJS',
    link: 'https://nextjs.org/',
    icon: <NextJS viewBox="0 0 512 512" />,
  },
  // { title: 'etc…', faIcon: faEllipsis },
]

export const libraries: Tech[] = [
  {
    title: 'Redux',
    link: 'https://redux.js.org/',
    icon: <Redux viewBox="-9 -9 146 146" />,
  },
  {
    title: 'React Router',
    link: 'https://reactrouter.com/',
    icon: <ReactRouter viewBox="0 -52 256 256" />,
  },
  {
    title: 'React query',
    link: 'https://tanstack.com/query/latest/',
    icon: <RTQ viewBox="0 0 24 24" />,
  },
  {
    title: 'Apollo GraphQL',
    link: 'https://www.apollographql.com/',
    icon: <Apollo />,
  },
  {
    title: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    color: colors.brand.bootstrap,
    faIcon: faBootstrap,
  },
  {
    title: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    icon: <Tailwind viewBox="0 0 256 154" />,
  },
  {
    title: 'MaterialUI',
    link: 'https://mui.com/',
    icon: <MUI viewBox="-10 -25 148 148" />,
  },
  {
    title: 'Styled Components',
    link: 'https://styled-components.com/',
    icon: <StyledComponents />,
  },
  {
    title: 'Jest',
    link: 'https://jestjs.io/',
    icon: <Jest viewBox="-38 -43 526 599" />,
  },
  {
    title: 'React testing library',
    link: '/',
    icon: <RTL viewBox="-2 -2 28 28" />,
  },
  { title: 'Cypress', link: 'https://www.cypress.io/', icon: <Cypress /> },
  {
    title: 'Storybook',
    link: 'https://storybook.js.org/',
    icon: <Storybook viewBox="-3 -3 38 38" />,
  },
  // { title: 'etc…', faIcon: faEllipsis },
]

export const tools: Tech[] = [
  {
    title: 'Git',
    link: 'https://git-scm.com/',
    color: colors.brand.git,
    faIcon: faGitAlt,
  },
  {
    title: 'Bash',
    link: 'https://wikipedia.org/wiki/Bash_(Unix_shell)',
    color: colors.brand.linux,
    icon: <Bash viewBox="-2 -2 28 28" />,
  },
  {
    title: 'Docker',
    link: 'https://www.docker.com/',
    color: colors.brand.docker,
    faIcon: faDocker,
  },
  { title: 'Webpack', link: 'https://webpack.js.org/', icon: <Webpack /> },
  {
    title: 'Vite',
    link: 'https://vitejs.dev/',
    icon: <Vite viewBox="-2 -3 28 28" />,
  },
  {
    title: 'Eslint',
    link: 'https://eslint.org/',
    icon: <ESLint viewBox="-28 -30 307 279" />,
  },
  {
    title: 'NPM',
    link: 'https://www.npmjs.com/',
    color: colors.brand.npm,
    faIcon: faNpm,
  },
  {
    title: 'Yarn',
    link: 'https://yarnpkg.com/',
    color: colors.brand.yarn,
    faIcon: faYarn,
  },
  // { title: 'etc…', faIcon: faEllipsis },
]
