import Link from 'next/link'
import React, {
  ComponentPropsWithRef,
  ElementType,
  MouseEventHandler,
  ReactNode,
  forwardRef,
  useCallback,
} from 'react'
import * as S from './styled'

interface ButtonProps extends S.StyledButton {
  href?: string
  target?: string
  rel?: string
  title?: string
  iconLeft?: ReactNode
  iconRight?: ReactNode
  icon?: ReactNode
  className?: string
  disabled?: boolean
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLButtonElement>
  as?: 'a' | 'button'
}

type ButtonRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

const Button = forwardRef<HTMLButtonElement | HTMLLinkElement, ButtonProps>(
  <C extends React.ElementType>(
    {
      $variant = S.variants.secondary,
      $type = S.types.text,
      target,
      href,
      rel,
      iconLeft,
      iconRight,
      icon,
      title,
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
      $type: icon ? S.types.icon : $type,
      $variant,
    }
    const content = (
      <>
        {icon || iconLeft}
        {!!children && styling.$type !== S.types.icon && (
          <S.Content>{children}</S.Content>
        )}
        {iconRight}
      </>
    )

    if (href) {
      const handleLinkClick =
        handleClick as unknown as MouseEventHandler<HTMLAnchorElement>

      return (
        <Link href={href} legacyBehavior passHref>
          <S.Link
            aria-disabled={disabled || undefined}
            aria-label={title}
            title={title}
            target={target}
            rel={rel}
            {...rest}
            {...styling}
            onClick={handleLinkClick}
            ref={ref}
          >
            {content}
          </S.Link>
        </Link>
      )
    }

    return (
      <S.Button
        disabled={disabled}
        aria-disabled={disabled || undefined}
        aria-label={title}
        title={title}
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
