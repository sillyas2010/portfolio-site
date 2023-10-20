import breakpoints from '@/app/constants/breakpoints'
import React from 'react'

export type LinkClickEvent = React.MouseEvent<HTMLAnchorElement, MouseEvent>
export type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

const scrollToAnchor = (
  e: LinkClickEvent | ButtonClickEvent,
  title: string,
  link: string,
  isAddedToHistory: boolean = true,
) => {
  const targetElement = document.querySelector(link)

  if (targetElement) {
    e.preventDefault()
    setTimeout(
      () => {
        targetElement.scrollIntoView({ behavior: 'smooth' })
        if (isAddedToHistory) {
          history.pushState({}, title, link)
        }
      },
      // fix for fixed html/body on mobile
      window.innerWidth >= breakpoints.md ? 0 : 200,
    )
  }
}

export default scrollToAnchor
