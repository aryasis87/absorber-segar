'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: '30 Hari', href: '/#kalender' },
  { label: 'Cara Pakai', href: '/#cara-kerja' },
  { label: 'Cocok Untuk', href: '/#penerapan' },
  { label: 'Tanya Jawab', href: '/faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="fixed top-0 z-50 w-full px-4 pt-4">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 transition-all duration-300 ${
          scrolled ? 'bg-cream/95 shadow-lg backdrop-blur-md' : 'bg-cream/80 backdrop-blur-sm'
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5" aria-label="EthyleneAbsorber — beranda">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-full bg-grass text-sm font-extrabold text-cream">
            E
          </span>
          <span className="text-[0.95rem] font-extrabold tracking-tight text-rind">
            Ethylene<span className="text-grass">Absorber</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigasi utama">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="text-sm font-bold text-rind/75 transition-colors hover:text-grass">
              {n.label}
            </Link>
          ))}
          <Link
            href="/kontak"
            className="rounded-full bg-grass px-5 py-2.5 text-sm font-extrabold text-cream transition-colors hover:bg-grass-deep"
          >
            Minta Sample
          </Link>
        </nav>

        <button className="-mr-1 p-2 text-rind md:hidden" onClick={() => setOpen(true)} aria-label="Buka menu" aria-expanded={open}>
          <Menu size={22} strokeWidth={2.5} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-rind/60 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 z-50 flex h-full w-[86%] max-w-sm flex-col bg-cream md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.32 }}
              role="dialog"
              aria-modal="true"
              aria-label="Menu navigasi"
            >
              <div className="flex items-center justify-between px-6 py-5">
                <span className="cap text-rind/50">Menu</span>
                <button onClick={() => setOpen(false)} className="-mr-2 p-2 text-rind" aria-label="Tutup menu">
                  <X size={22} strokeWidth={2.5} />
                </button>
              </div>
              <nav className="flex-1 px-6" aria-label="Navigasi mobile">
                {NAV.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-4 text-xl font-extrabold text-rind transition-colors hover:bg-cream-2/60"
                  >
                    {n.label}
                  </Link>
                ))}
              </nav>
              <div className="p-6">
                <Link
                  href="/kontak"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-grass py-4 text-center text-base font-extrabold text-cream"
                >
                  Minta Sample Gratis
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
