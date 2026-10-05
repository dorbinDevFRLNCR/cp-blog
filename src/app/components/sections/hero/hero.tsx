import { MoveRight } from 'lucide-react'
import Button from '../../ui/button/button'

function Hero() {
  return (
    <section className="min-h-[100dvh] flex items-center bg-gradient-to-b from-bg to-bg-dark">
      <div className="px-4 md:px-8 md:py-16">
        <h1 className="font-black tracking-tighter leading-[0.85] lg:text-[140px] md:text-[100px] sm:text-[80px] text-[60px] text-fg">
          <span className="block text-accent-dev-primary">Code.</span>
          <span className="block text-accent-sim-primary">Cockpit.</span>
          <span className="block text-accent-irl-primary">Alltag.</span>
        </h1>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:mt-12">
          <p className="flex flex-col text-md font-semibold max-w-[400px] leading-snug md:text-lg">
            <span className="text-fg-muted">Ein Blog in drei Spuren.</span>
            <span>Real Code. Real Racing. Real Life.</span>
          </p>
          <Button href="/blog" className="group max-w-content" variant="primary">
            <span>Zum Blog</span>
            <MoveRight
              className="transition-transform duration-200 group-hover:translate-x-1"
              size={12}
            />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Hero
