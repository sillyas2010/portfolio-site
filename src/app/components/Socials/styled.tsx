import tw, { styled } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Socials = styled.div`
  ${tw``}
`

export const ItemWrapper = styled.div`
  ${tw`flex`}
`

export const FaIconWrapper = styled(FontAwesomeIcon)``

export const IconWrapper = styled.div`
  ${tw`w-6 h-6`}

  & > svg {
    ${tw`w-6 h-6`}
  }
`
