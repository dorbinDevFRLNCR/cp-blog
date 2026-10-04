import Footer from './components/layout/footer/footer'
import Header from './components/layout/header/header'
import Hero from './components/sections/hero/hero'
import PostsSection from './components/sections/postsSection/postsSection'
import TracksSection from './components/sections/tracksSection/tracksSection'
import SectionLine from './components/ui/sectionLine/sectionLine'

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full max-w-7xl mx-auto">
        <Hero />
        <TracksSection />
        <SectionLine className="my-8" />
        <PostsSection />
      </main>
      <Footer />
    </>
  )
}
