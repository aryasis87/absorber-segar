'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Phone, Mail, MapPin, Clock } from 'lucide-react'

const saluran = [
  { icon: Phone, label: 'Telepon', value: '+62 812 3456 7890', href: 'tel:+628123456789' },
  { icon: Mail, label: 'Surel', value: 'info@ethyleneabsorber.com', href: 'mailto:info@ethyleneabsorber.com' },
  { icon: MapPin, label: 'Alamat', value: 'Jl. Teknologi No. 123, Bandung 40234' },
  { icon: Clock, label: 'Jam Kerja', value: 'Sen–Jum 08.00–17.00 · Sab 08.00–12.00' },
]

export default function KontakPage() {
  const [form, setForm] = useState({
    nama: '', perusahaan: '', surel: '', telepon: '', komoditas: '', volume: '', rute: '', catatan: '',
  })
  const [mengirim, setMengirim] = useState(false)
  const [selesai, setSelesai] = useState(false)

  const ubah = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }))

  const kirim = (e: React.FormEvent) => {
    e.preventDefault()
    setMengirim(true)
    // Purwarupa desain — pengiriman disimulasikan, tanpa backend.
    setTimeout(() => {
      setMengirim(false)
      setSelesai(true)
    }, 1100)
  }

  return (
    <div className="bg-cream">
      <header className="relative overflow-hidden bg-grass pt-32 pb-16 text-cream md:pt-40 md:pb-20">
        <div aria-hidden="true" className="speckle absolute inset-0 text-rind" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="sticker mb-7 bg-zest px-5 py-2.5 text-xs text-rind uppercase">Gratis</p>
          <h1 className="text-[2.4rem] leading-[1.02] font-extrabold text-cream md:text-[3.4rem]">
            Sebutkan buahnya, kami hitung sachetnya
          </h1>
          <p className="mx-auto mt-5 max-w-lg leading-relaxed text-cream/85">
            Isi datanya sebentar. Kami balas dengan hitungan kebutuhan dan kirim sample untuk
            dicoba sendiri.
          </p>
        </div>
        <div aria-hidden="true" className="scallop relative z-10 mt-14 w-full text-cream" />
      </header>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-6">
          <dl className="mb-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {saluran.map((s) => (
              <div key={s.label} className="rounded-3xl bg-cream-2/50 p-6">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-grass text-cream">
                  <s.icon size={19} strokeWidth={2.2} />
                </span>
                <dt className="cap text-rind/50">{s.label}</dt>
                <dd className="mt-2 text-sm font-bold text-rind">
                  {s.href ? (
                    <a href={s.href} className="break-all transition-colors hover:text-grass">
                      {s.value}
                    </a>
                  ) : (
                    s.value
                  )}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mx-auto max-w-2xl rounded-[2rem] bg-cream-2/40 p-7 sm:p-10">
            <AnimatePresence mode="wait">
              {selesai ? (
                <motion.div key="ok" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="py-10 text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-grass text-cream">
                    <Check size={30} strokeWidth={3} />
                  </div>
                  <h2 className="text-2xl font-extrabold text-rind">Sudah masuk!</h2>
                  <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-rind/70">
                    Terima kasih. Kami cek datanya dan menghubungi Anda kembali di jam kerja
                    berikutnya.
                  </p>
                  <button
                    onClick={() => setSelesai(false)}
                    className="mt-8 rounded-full bg-cream px-6 py-3 text-sm font-extrabold text-rind"
                  >
                    Isi lagi
                  </button>
                </motion.div>
              ) : (
                <motion.form key="f" onSubmit={kirim} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nama" name="nama" value={form.nama} onChange={ubah} required />
                    <Field label="Perusahaan / toko" name="perusahaan" value={form.perusahaan} onChange={ubah} required />
                    <Field label="Surel" name="surel" type="email" value={form.surel} onChange={ubah} required />
                    <Field label="Telepon" name="telepon" type="tel" value={form.telepon} onChange={ubah} required />
                    <Field label="Buah / komoditas" name="komoditas" value={form.komoditas} onChange={ubah} placeholder="Mis. mangga" required />
                    <Field label="Volume ruang (m³)" name="volume" type="number" min="1" value={form.volume} onChange={ubah} placeholder="Mis. 33" required />
                  </div>

                  <Field label="Tujuan kirim" name="rute" value={form.rute} onChange={ubah} placeholder="Mis. Surabaya → Makassar" required />

                  <div>
                    <label htmlFor="catatan" className="cap mb-2.5 block text-rind/60">
                      Catatan
                    </label>
                    <textarea
                      id="catatan"
                      name="catatan"
                      rows={4}
                      value={form.catatan}
                      onChange={ubah}
                      className="w-full resize-y rounded-2xl border-2 border-rind/10 bg-cream px-5 py-3.5 text-sm text-rind placeholder:text-rind/35 focus:border-grass focus:outline-none"
                      placeholder="Kendala yang pernah dialami, atau target berapa lama harus tahan."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={mengirim}
                    className="w-full rounded-full bg-grass py-4 text-base font-extrabold text-cream transition-colors hover:bg-grass-deep disabled:opacity-70"
                  >
                    {mengirim ? 'Mengirim…' : 'Kirim & Minta Sample'}
                  </button>

                  <p className="text-center text-xs leading-relaxed text-rind/45">
                    Purwarupa desain — pengiriman formulir disimulasikan dan data tidak tersimpan.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

          <p className="mt-10 text-center text-sm text-rind/70">
            Banyak yang sudah terjawab di{' '}
            <Link href="/faq" className="font-extrabold text-grass underline-offset-4 hover:underline">
              halaman tanya jawab
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}

function Field({
  label, name, value, onChange, type = 'text', required = false, placeholder, min,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: string
  required?: boolean
  placeholder?: string
  min?: string
}) {
  return (
    <div>
      <label htmlFor={name} className="cap mb-2.5 block text-rind/60">
        {label}
        {required && <span className="ml-1 text-citrus">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        min={min}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-full border-2 border-rind/10 bg-cream px-5 py-3.5 text-sm text-rind placeholder:text-rind/35 focus:border-grass focus:outline-none"
      />
    </div>
  )
}
