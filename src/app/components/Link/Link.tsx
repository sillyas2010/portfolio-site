import NextLink from 'next/link'
import React, {
  ComponentPropsWithRef,
  ElementType,
  MouseEventHandler,
  ReactNode,
  forwardRef,
  useCallback,
} from 'react'
import * as S from './styled'

type LinkProps = {
  href: string
  target?: string
  rel?: string
  title?: string
  className?: string
  disabled?: boolean
  children?: ReactNode
  onClick?: MouseEventHandler<HTMLAnchorElement>
}

type LinkRef<C extends ElementType> = ComponentPropsWithRef<C>['ref']

const Link = forwardRef<HTMLLinkElement, LinkProps>(
  <C extends React.ElementType>(
    {
      target,
      href,
      rel,
      title,
      disabled,
      onClick,
      children,
      ...rest
    }: LinkProps,
    ref: LinkRef<C>,
  ) => {
    const handleLinkClick = useCallback<Required<LinkProps>['onClick']>(
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

    return (
      <NextLink href={href} legacyBehavior passHref>
        <S.Link
          aria-disabled={disabled || undefined}
          aria-label={title}
          title={title}
          target={target}
          rel={rel}
          {...rest}
          onClick={handleLinkClick}
          ref={ref}
        >
          {children}
        </S.Link>
      </NextLink>
    )
  },
)

Link.displayName = 'Link'

export default Link
