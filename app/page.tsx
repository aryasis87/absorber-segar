import Hero from '@/components/Hero'
import Calendar from '@/components/Calendar'
import Features from '@/components/Features'
import Closing from '@/components/Closing'

/* Alur pasar pagi: sapaan lantang → kalender 30 hari → cara pakai &
   penerapan → jaminan, tanya jawab, ajakan. */
export default function HomePage() {
  return (
    <>
      <Hero />
      <Calendar />
      <Features />
      <Closing />
    </>
  )
}
