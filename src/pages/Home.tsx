import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Mission from '../components/sections/Mission'
import CTA from '../components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Mission />
      <section className="pt-24 lg:pt-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <CTA />
        </div>
      </section>
    </>
  )
}
