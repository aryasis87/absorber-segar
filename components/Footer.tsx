import Link from 'next/link'

const nav = [
  { label: '30 Hari', href: '/#kalender' },
  { label: 'Cara Pakai', href: '/#cara-kerja' },
  { label: 'Cocok Untuk', href: '/#penerapan' },
  { label: 'Jaminan', href: '/#jaminan' },
  { label: 'Tanya Jawab', href: '/faq' },
  { label: 'Hubungi Kami', href: '/kontak' },
]

const legal = [
  { label: 'Kebijakan Privasi', href: '/privacy' },
  { label: 'Syarat & Ketentuan', href: '/terms' },
]

export default function Footer() {
  const tahun = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-rind text-cream/70">
      <div aria-hidden="true" className="speckle absolute inset-0 text-zest" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)_minmax(0,1fr)]">
          <div>
            <p className="flex items-center gap-2.5">
              <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-full bg-zest text-sm font-extrabold text-rind">
                E
              </span>
              <span className="text-base font-extrabold text-cream">
                Ethylene<span className="text-zest">Absorber</span>
              </span>
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream/60">
              Sachet penyerap etilen supaya buah dan sayur tetap segar sampai tujuan. Dipasok oleh
              PT Dickson Synergy.
            </p>
            <p className="mt-6 inline-block rounded-full bg-cream/10 px-4 py-2 text-xs font-bold text-zest">
              BPOM RI NA18191100273
            </p>
          </div>

          <nav aria-label="Navigasi footer">
            <h2 className="cap mb-5 text-cream">Jelajahi</h2>
            <ul className="space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-sm font-medium transition-colors hover:text-zest">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="cap mb-5 text-cream">Hubungi</h2>
            <ul className="space-y-4 text-sm">
              <li>
                <span className="cap block text-cream/40">Telepon</span>
                <a href="tel:+628123456789" className="font-medium transition-colors hover:text-zest">
                  +62 812 3456 7890
                </a>
              </li>
              <li>
                <span className="cap block text-cream/40">Surel</span>
                <a href="mailto:info@ethyleneabsorber.com" className="font-medium break-all transition-colors hover:text-zest">
                  info@ethyleneabsorber.com
                </a>
              </li>
              <li>
                <span className="cap block text-cream/40">Alamat</span>
                <span className="leading-relaxed">Jl. Teknologi No. 123, Bandung 40234</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-cream/50">© {tahun} PT Dickson Synergy</p>
          <div className="flex gap-6">
            {legal.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm transition-colors hover:text-zest">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
