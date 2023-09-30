import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { ReactNode } from 'react'

export type NavItem = {
  title: string
  link: string
  icon?: ReactNode
  faIcon?: IconDefinition
}
