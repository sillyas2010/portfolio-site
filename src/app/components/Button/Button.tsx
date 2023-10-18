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
  type?: HTMLButtonElement['type']
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
      type,
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
    const buttonTitle =
      title || (typeof children === 'string' ? children : undefined)
    const handleClick = useCallback<Required<ButtonProps>['onClick']>(
      (e, ...rest) => {
        if (disabled || !(onClick || href || type) || type === 'button') {
          e.preventDefault()
          return false
        }

        if (onClick) {
          onClick(e, ...rest)
        }
      },
      [onClick, href, disabled, type],
    )
    const styling: S.StyledButton = {
      $type: icon ? S.types.icon : $type,
      $variant,
    }
    const commonProps = {
      'aria-disabled': disabled || undefined,
      'aria-label': title,
      title: buttonTitle,
      ref,
      ...styling,
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
            onClick={handleLinkClick}
            target={target}
            rel={rel}
            {...commonProps}
            {...rest}
          >
            {content}
          </S.Link>
        </Link>
      )
    }

    return (
      <S.Button
        onClick={handleClick}
        disabled={disabled}
        type={type}
        {...commonProps}
        {...rest}
      >
        {content}
      </S.Button>
    )
  },
)

Button.displayName = 'Button'

export default Button
