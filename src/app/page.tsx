import Hero from './components/sections/hero/hero'
import PostsSection from './components/sections/postsSection/postsSection'
import TracksSection from './components/sections/tracksSection/tracksSection'
import SectionLine from './components/ui/sectionLine/sectionLine'

export default function Home() {
  return (
    <>
      <Hero />
      <TracksSection />
      <SectionLine className="my-8" />
      <PostsSection />
    </>
  )
}
