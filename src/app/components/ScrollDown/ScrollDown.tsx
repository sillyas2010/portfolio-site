import Button, { variants } from '@/app/components/Button'
import React, { RefObject } from 'react'
import * as S from './styled'

interface ScrollDownProps {
  wrapperRef: RefObject<HTMLElement>
  scrollMargin?: number
}

const ScrollDown = ({ wrapperRef, scrollMargin = 0 }: ScrollDownProps) => {
  const handleClick = () => {
    if (wrapperRef.current) {
      const boundingRect = wrapperRef.current.getBoundingClientRect()
      const scrollTop = boundingRect.bottom + window.scrollY + scrollMargin

      window.scrollTo({
        top: Math.round(scrollTop),
        behavior: 'smooth',
      })
    }
  }

  return (
    <S.Wrapper>
      <Button
        $variant={variants.raw}
        onClick={handleClick}
        iconLeft={<S.Icon />}
        title="Scroll Down"
      >
        Scroll Down ↓
      </Button>
    </S.Wrapper>
  )
}

export default ScrollDown
