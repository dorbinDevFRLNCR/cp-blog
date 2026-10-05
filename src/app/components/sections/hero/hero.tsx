import { MoveRight } from 'lucide-react'
import Button from '../../ui/button/button'
import HeroTerminal from './heroTerminal/heroTerminal'

function Hero() {
  return (
    <section className="w-full flex items-center">
      <div className="w-full max-w-7xl mx-auto px-5 pt-10 pb-12 flex flex-col gap-4 md:gap-6 md:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-24">
        <div className="flex flex-col gap-[2px] md:gap-6 lg:max-w-[600px]">
          <h1 className="font-black tracking-tighter text-[15vw] leading-[0.85] lg:text-[85px] xl:text-[110px] 2xl:text-[140px] md:text-[90px] text-fg">
            <span className="block text-accent-dev-primary">Code.</span>
            <span className="block text-accent-sim-primary">Cockpit.</span>
            <span className="block text-accent-irl-primary">Alltag.</span>
          </h1>
          <div className="mt-6 flex flex-col gap-4 md:flex-row md:mt-12">
            <p className="flex flex-col text-sm font-semibold max-w-[400px] leading-snug md:text-lg">
              <span className="text-fg-muted">Ein Blog in drei Spuren.</span>
              <span>Real Code. Real Racing.</span>
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

        <HeroTerminal />
      </div>
    </section>
  )
}

export default Hero
