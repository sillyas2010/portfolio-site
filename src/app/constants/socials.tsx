import { NavItem } from '@/app/types'
import CodeWarsIcon from '@/public/icons/brands/code-wars.svg'
import {
  faGitlab,
  faLinkedin,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const socials: NavItem[] = [
  {
    title: 'Email',
    link: 'mailto:sillyas2010@gmail.com',
    faIcon: faEnvelope,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/illia-h-07998015b',
    faIcon: faLinkedin,
  },
  {
    title: 'Telegram',
    link: 'https://t.me/sillyas',
    faIcon: faTelegram,
  },
  {
    title: 'Gitlab',
    link: 'https://gitlab.com/sillyas2010',
    faIcon: faGitlab,
  },
  {
    title: 'CodeWars',
    link: 'https://www.codewars.com/users/sillyas',
    icon: <CodeWarsIcon viewBox="0 0 660 660" />,
  },
]

export default socials
