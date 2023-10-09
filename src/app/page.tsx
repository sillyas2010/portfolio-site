'use client'
import Footer from './components/Footer'
import Header from './components/Header'
import Me from './components/Me'
import ScrollDown from './components/ScrollDown'
import WhyMe from './components/WhyMe'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-16 lg:px-24">
        <Me Footer={ScrollDown} />
        <WhyMe />
      </main>
      <Footer />
    </>
  )
}
