import Link from 'next/link'
import React, {
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react'
import * as S from './styled'

type ButtonProps = {
  href?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  className?: string
  children: ReactNode
  as?: 'a' | 'button'
} & S.StyledButton

type ButtonRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

const Button = forwardRef<HTMLButtonElement | HTMLLinkElement, ButtonProps>(
  <C extends React.ElementType>(
    {
      $style = S.styles.solid,
      $variant = S.variants.secondary,
      href,
      iconLeft,
      iconRight,
      children,
      ...rest
    }: ButtonProps,
    ref: ButtonRef<C>,
  ) => {
    const styling: S.StyledButton = {
      $style,
      $variant: $style === S.styles.outline ? S.variants.outline : $variant,
    }
    const hasIcon = !!(iconLeft || iconRight)
    const content = (
      <>
        {iconLeft}
        <span className={hasIcon ? `${iconLeft ? 'ml' : 'mr'}-2.5` : undefined}>
          {children}
        </span>
        {iconRight}
      </>
    )

    if (href) {
      return (
        <Link href={href} legacyBehavior passHref>
          <S.Button as="a" {...rest} {...styling} ref={ref}>
            {content}
          </S.Button>
        </Link>
      )
    }

    return (
      <S.Button {...rest} {...styling} ref={ref}>
        {content}
      </S.Button>
    )
  },
)

Button.displayName = 'Button'

export default Button
