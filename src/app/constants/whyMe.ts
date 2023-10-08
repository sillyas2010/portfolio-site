import { careerYears } from '@/app/constants/texting'
import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faCalendar, faHandshake } from '@fortawesome/free-regular-svg-icons'
import {
  faBriefcase,
  faGraduationCap,
  faLanguage,
} from '@fortawesome/free-solid-svg-icons'
import { ReactNode } from 'react'

type Benefit = {
  title: string
  description: string
  faIcon?: IconDefinition
  icon?: ReactNode
}

export const benefits: Benefit[] = [
  {
    faIcon: faCalendar,
    title: 'Experience',
    description: `${careerYears}+ year of commercial experience`,
  },
  {
    faIcon: faBriefcase,
    title: 'Projects',
    description: `Took development role in 40+ projects`,
  },
  {
    faIcon: faReact,
    title: 'Technologies',
    description: `Wide variety of most advanced technologies used`,
  },
  {
    faIcon: faGraduationCap,
    title: 'Education',
    description: `Master's degree in Software Engineering`,
  },
  {
    faIcon: faLanguage,
    title: 'Communication',
    description: `Upper Intermediate English level`,
  },
  {
    faIcon: faHandshake,
    title: 'Customer focus',
    description: `Always attentive to client needs`,
  },
]
