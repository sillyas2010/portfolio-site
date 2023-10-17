import { NavItem, NavKeys } from '@/app/types'

const nav: Map<NavKeys, NavItem> = new Map([
  [
    NavKeys.intro,
    {
      title: 'Intro',
      link: '#intro',
    },
  ],
  [
    NavKeys.whyMe,
    {
      title: 'Why Me?',
      link: '#why-me',
    },
  ],
  [
    NavKeys.technologies,
    {
      title: 'Technologies',
      link: '#tech',
    },
  ],
  // [
  //   NavKeys.experience,
  //   {
  //     title: 'Experience',
  //     link: '#exp',
  //   },
  // ],
  // [
  //   NavKeys.projects,
  //   {
  //     title: 'Projects',
  //     link: '#projects',
  //   },
  // ],
  // [
  //   NavKeys.contact,
  //   {
  //     title: 'Contact',
  //     link: '#contact',
  //   },
  // ],
])

export const navItems = Array.from(nav, ([, val]) => val)

export default nav
