import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { ReactNode } from 'react'

export type OneOfValues<T extends object> = T[keyof T]

export interface NavItem {
  title: string
  link: string
  icon?: ReactNode
  faIcon?: IconDefinition
}
