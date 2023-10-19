import Link from '@/app/components/Link'
import Socials from '@/app/components/Socials'
import { socials } from '@/app/constants'
import { name } from '@/app/constants/texting'
import React from 'react'
import * as S from './styled'

export default function Footer() {
  return (
    <S.Footer>
      <S.Content>
        <S.LeftWrapper>
          <S.Left>
            © {new Date().getFullYear()} {name} —
            <Link target="_blank" title="Telegram" href="https://t.me/sillyas">
              @sillyas
            </Link>
          </S.Left>
        </S.LeftWrapper>
        <S.Right>
          <Socials items={socials} />
        </S.Right>
      </S.Content>
    </S.Footer>
  )
}
