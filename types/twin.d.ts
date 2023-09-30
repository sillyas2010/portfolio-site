/* eslint-disable @typescript-eslint/no-unused-vars */
import { ComponentPropsWithRef, ComponentType } from 'react'
import styledImport, { CSSProp, css as cssImport } from 'styled-components'
import 'twin.macro'

interface TwinProps {
  as?: string | Element
  css?: CSSProp
  tw?: string
}

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'react' {
  // The forwardRef function
  // eslint-disable-next-line @typescript-eslint/ban-types
  function forwardRef<T, P = {}>(
    render: ForwardRefRenderFunction<T, P & TwinProps>,
  ): ForwardRefExoticComponent<
    PropsWithoutRef<P & TwinProps> & RefAttributes<T>
  >

  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T>, TwinProps {}
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement>, TwinProps {}
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T>, TwinProps {}
  }
  type StyledComponentType<T = ElementType, P = Record> = ComponentType<
    ComponentPropsWitRef<ElementType> & P
  >
}
