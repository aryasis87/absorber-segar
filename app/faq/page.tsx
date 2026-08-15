'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const FAQS: [string, string][] = [
  ['Apa itu ethylene absorber?', 'Sachet yang menyerap gas etilen — gas alami dari buah dan sayur yang bikin mereka cepat matang lalu lembek. Dengan gas itu ditahan, kesegaran bisa bertahan dua sampai tiga kali lebih lama.'],
  ['Cara pakainya bagaimana?', 'Tinggal taruh sachet di dalam kemasan, peti, atau kontainer bareng buahnya. Satu sachet untuk ruang 1–2 m³, dan kemasannya harus tertutup rapat biar kerjanya maksimal.'],
  ['Berapa lama sachetnya bekerja?', 'Tiga puluh hari sejak dibuka. Kalau penyimpanannya ideal — suhu ruang, kelembapan normal — bisa sampai empat puluh lima hari. Ada indikator warna yang berubah kalau daya serapnya sudah habis.'],
  ['Aman untuk makanan?', 'Aman. Sudah terdaftar BPOM RI dengan nomor NA18191100273, dan memenuhi standar FDA 21 CFR 175.300, EU No 10/2011, serta JHOSPA Jepang. Bahan aktifnya terbungkus material food-grade dan tidak menyentuh buahnya.'],
  ['Rasa buahnya berubah tidak?', 'Tidak sama sekali. Sachet cuma menyerap gas di udara, bukan mengubah buahnya. Uji organoleptik tidak menemukan beda rasa, aroma, maupun tekstur.'],
  ['Bisa dipakai untuk kirim ekspor?', 'Justru paling terasa di situ. Pengiriman lewat laut biasanya tiga sampai empat minggu — selesai sebelum sachet menyentuh batas tiga puluh hari, jadi satu sachet cukup untuk sekali jalan.'],
  ['Kapan hasilnya kelihatan?', 'Bedanya mulai kelihatan dalam 24–48 jam pertama. Buah yang biasanya mulai rusak di hari ketiga umumnya masih segar sampai hari ketujuh atau lebih.'],
  ['Sachet yang belum dipakai disimpan di mana?', 'Simpan dalam kemasan aslinya, di tempat sejuk dan kering, jauh dari sinar matahari. Yang belum dibuka tahan sampai dua tahun. Kalau sudah dibuka, langsung pakai.'],
]

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <div className="bg-cream">
      <header className="relative overflow-hidden bg-grass pt-32 pb-16 text-cream md:pt-40 md:pb-20">
        <div aria-hidden="true" className="speckle absolute inset-0 text-rind" />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <p className="sticker mb-7 bg-zest px-5 py-2.5 text-xs text-rind uppercase">
            Tanya jawab
          </p>
          <h1 className="text-[2.4rem] leading-[1.02] font-extrabold text-cream md:text-[3.4rem]">
            Delapan pertanyaan yang paling sering masuk
          </h1>
        </div>
        <div aria-hidden="true" className="scallop relative z-10 mt-14 w-full text-cream" />
      </header>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-6">
          <dl className="space-y-4">
            {FAQS.map(([q, a], i) => {
              const terbuka = open === i
              return (
                <div key={q} className="overflow-hidden rounded-3xl bg-cream-2/50">
                  <dt>
                    <button
                      onClick={() => setOpen(terbuka ? null : i)}
                      aria-expanded={terbuka}
                      aria-controls={`a-${i}`}
                      className="flex w-full items-start gap-4 px-7 py-6 text-left"
                    >
                      <span className="flex-1 text-base font-extrabold text-rind md:text-lg">{q}</span>
                      <span
                        aria-hidden="true"
                        className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          terbuka ? 'rotate-45 bg-grass text-cream' : 'bg-cream text-rind'
                        }`}
                      >
                        <Plus size={16} strokeWidth={3} />
                      </span>
                    </button>
                  </dt>
                  <AnimatePresence initial={false}>
                    {terbuka && (
                      <motion.dd
                        id={`a-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-7 pb-7 text-sm leading-relaxed text-rind/75">{a}</p>
                      </motion.dd>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </dl>

          <div className="mt-12 rounded-[2rem] bg-grass px-8 py-10 text-center text-cream">
            <h2 className="text-2xl font-extrabold text-cream">Masih ada yang mau ditanya?</h2>
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-cream/85">
              Sebutkan buah dan rute kirimnya, kami bantu hitung kebutuhan sachetnya.
            </p>
            <Link
              href="/kontak"
              className="mt-7 inline-flex items-center justify-center rounded-full bg-zest px-8 py-3.5 text-base font-extrabold text-rind"
            >
              Tanya Sekarang
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
