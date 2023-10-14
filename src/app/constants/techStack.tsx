import { NavItem } from '@/app/types'
import Apollo from '@/public/icons/brands/apollo.svg'
import Cypress from '@/public/icons/brands/cypress.svg'
import ESLint from '@/public/icons/brands/eslint.svg'
import Jest from '@/public/icons/brands/jest.svg'
import MUI from '@/public/icons/brands/mui.svg'
import NextJS from '@/public/icons/brands/nextjs.svg'
import ReactRouter from '@/public/icons/brands/react-router.svg'
import Redux from '@/public/icons/brands/redux.svg'
import RTL from '@/public/icons/brands/rtl.png'
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
  faLinux,
  faNode,
  faNpm,
  faReact,
  faSass,
  faYarn,
} from '@fortawesome/free-brands-svg-icons'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

export type Tech = {
  title: NavItem['title']
  link?: NavItem['link']
  icon?: NavItem['icon']
  faIcon?: NavItem['faIcon']
}

export const general: Tech[] = [
  { title: 'HTML5', link: 'https://wikipedia.org/wiki/HTML5', faIcon: faHtml5 },
  { title: 'CSS3', link: 'https://wikipedia.org/wiki/CSS', faIcon: faCss3Alt },
  { title: 'Sass', link: 'https://sass-lang.com/', faIcon: faSass },
  {
    title: 'Javascript',
    link: 'https://wikipedia.org/wiki/JavaScript',
    faIcon: faJsSquare,
  },
  {
    title: 'Typescript',
    link: 'https://www.typescriptlang.org/',
    icon: <TS viewBox="0 0 256 256" />,
  },
  { title: 'React', link: 'https://react.dev/', faIcon: faReact },
  { title: 'NodeJS', link: 'https://nodejs.org/', faIcon: faNode },
  {
    title: 'NextJS',
    link: 'https://nextjs.org/',
    icon: <NextJS viewBox="0 0 512 512" />,
  },
  { title: 'etc…', faIcon: faEllipsis },
]

export const libraries: Tech[] = [
  { title: 'Redux', link: 'https://redux.js.org/', icon: <Redux /> },
  {
    title: 'React Router',
    link: 'https://reactrouter.com/',
    icon: <ReactRouter />,
  },
  {
    title: 'React query',
    link: 'https://tanstack.com/query/latest/',
    icon: <RTQ viewBox="0 0 190 190" />,
  },
  {
    title: 'Apollo GraphQL',
    link: 'https://www.apollographql.com/',
    icon: <Apollo />,
  },
  {
    title: 'Bootstrap',
    link: 'https://getbootstrap.com/',
    faIcon: faBootstrap,
  },
  {
    title: 'TailwindCSS',
    link: 'https://tailwindcss.com/',
    icon: <Tailwind viewBox="0 0 256 154" />,
  },
  { title: 'MaterialUI', link: 'https://mui.com/', icon: <MUI /> },
  {
    title: 'Styled Components',
    link: 'https://styled-components.com/',
    icon: <StyledComponents />,
  },
  {
    title: 'Jest',
    link: 'https://jestjs.io/',
    icon: <Jest viewBox="0 0 256 283" />,
  },
  {
    title: 'React testing library',
    link: '/',
    icon: <Image src={RTL} alt="RTL" />,
  },
  { title: 'Cypress', link: 'https://www.cypress.io/', icon: <Cypress /> },
  {
    title: 'Storybook',
    link: 'https://storybook.js.org/',
    icon: <Storybook viewBox="0 0 256 319" />,
  },
  { title: 'etc…', faIcon: faEllipsis },
]

export const tools: Tech[] = [
  {
    title: 'Git',
    link: 'https://git-scm.com/',
    faIcon: faGitAlt,
  },
  {
    title: 'Bash',
    link: 'https://wikipedia.org/wiki/Bash_(Unix_shell)',
    faIcon: faLinux,
  },
  { title: 'Docker', link: 'https://www.docker.com/', faIcon: faDocker },
  { title: 'Webpack', link: 'https://webpack.js.org/', icon: <Webpack /> },
  { title: 'Vite', link: 'https://vitejs.dev/', icon: <Vite /> },
  {
    title: 'Eslint',
    link: 'https://eslint.org/',
    icon: <ESLint viewBox="0 0 256 225" />,
  },
  { title: 'NPM', link: 'https://www.npmjs.com/', faIcon: faNpm },
  { title: 'Yarn', link: 'https://yarnpkg.com/', faIcon: faYarn },
  { title: 'etc…', faIcon: faEllipsis },
]
