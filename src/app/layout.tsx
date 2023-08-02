import './globals.css'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import GlobalStyles from '@/styles/GlobalStyles'
import StyledComponentsRegistry from '@/lib/registry'

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
    <html lang="en" className={[poppins.variable].join(' ')}>
      <body className="bg-secondary bg-dotted-pattern bg-fixed bg-no-repeat bg-cover">
        <StyledComponentsRegistry>
          <GlobalStyles />
          <div className="bg-header-background">{children}</div>
          <Analytics />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
