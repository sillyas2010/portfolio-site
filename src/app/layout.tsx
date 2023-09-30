import { Analytics } from '@vercel/analytics/react'
import { Poppins } from 'next/font/google'
import './globals.css'

import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyles from '@/styles/GlobalStyles'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export { metadata } from '../constants/meta'

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
    <html lang="en" className={[poppins.variable, 'dark'].join(' ')}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          {children}
          <Analytics />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
