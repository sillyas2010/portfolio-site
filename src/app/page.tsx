'use client'
import ScrollDown from '@/app/components/ScrollDown'
import Contact from '@/app/components/sections/Contact'
import Footer from '@/app/components/sections/Footer'
import Header from '@/app/components/sections/Header'
import Me from '@/app/components/sections/Me'
import TechStack from '@/app/components/sections/TechStack'
import WhyMe from '@/app/components/sections/WhyMe'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-16 lg:px-24">
        <Me Footer={ScrollDown} />
        <WhyMe />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
