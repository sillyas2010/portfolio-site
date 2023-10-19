import { Analytics } from '@vercel/analytics/react'
import { Poppins } from 'next/font/google'
import './css/globals.css'

import GlobalStyles from '@/app/components/styles/GlobalStyles'
import StyledComponentsRegistry from '@/app/components/styles/StyledComponentsRegistry'

import getServerColorScheme from '@/app/utils/getServerColorScheme'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export { metadata } from '@/app/constants/meta'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700'],
  variable: '--font-poppins',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={[poppins.variable, getServerColorScheme()].join(' ')}
    >
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
        </StyledComponentsRegistry>
        <Analytics />
      </body>
    </html>
  )
}
