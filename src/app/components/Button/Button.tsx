import Link from 'next/link'
import React, {
  MouseEvent,
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
  forwardRef,
  useCallback,
} from 'react'
import * as S from './styled'

type ButtonProps = {
  href?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  className?: string
  disabled?: boolean
  children: ReactNode
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
  as?: 'a' | 'button'
} & S.StyledButton

type ButtonRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

const Button = forwardRef<HTMLButtonElement | HTMLLinkElement, ButtonProps>(
  <C extends React.ElementType>(
    {
      $variant = S.variants.secondary,
      href,
      iconLeft,
      iconRight,
      disabled,
      onClick,
      children,
      ...rest
    }: ButtonProps,
    ref: ButtonRef<C>,
  ) => {
    const handleClick = useCallback<Required<ButtonProps>['onClick']>(
      (e, ...rest) => {
        if (disabled || !(onClick || href)) {
          e.preventDefault()
          return false
        }

        if (onClick) {
          onClick(e, ...rest)
        }
      },
      [onClick, href, disabled],
    )
    const styling: S.StyledButton = {
      $variant,
    }
    const content = (
      <>
        {iconLeft}
        {!!children && <span>{children}</span>}
        {iconRight}
      </>
    )

    if (href) {
      return (
        <Link href={href} legacyBehavior passHref>
          <S.Button
            as="a"
            aria-disabled={disabled ?? undefined}
            disabled={disabled}
            {...rest}
            {...styling}
            onClick={handleClick}
            ref={ref}
          >
            {content}
          </S.Button>
        </Link>
      )
    }

    return (
      <S.Button
        disabled={disabled}
        aria-disabled={disabled}
        {...rest}
        {...styling}
        onClick={handleClick}
        ref={ref}
      >
        {content}
      </S.Button>
    )
  },
)

Button.displayName = 'Button'

export default Button
