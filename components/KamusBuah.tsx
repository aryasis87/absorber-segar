'use client';

import { useState } from 'react';
import { BUAH, SARAN, type Saran } from '@/lib/buah';

// Huruf gelap di atas warna buah yang terang (pisang, melon, nanas), terang di atas yang gelap.
const terang = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.299 * r + 0.587 * g + 0.114 * b > 0.62;
};

/* Kamus buah bergaya label harga lapak. Saringan menurut saran — supaya
   pedagang langsung tahu buah mana yang butuh sachet dan mana yang tidak. */
export default function KamusBuah() {
  const [pilih, setPilih] = useState<'semua' | Saran>('semua');
  const tampil = pilih === 'semua' ? BUAH : BUAH.filter((b) => b.saran === pilih);
  const opsi: ('semua' | Saran)[] = ['semua', 'pakai', 'pisahkan', 'tidak-perlu'];

  return (
    <>
      <div role="group" aria-label="Saring menurut saran" className="flex flex-wrap justify-center gap-2">
        {opsi.map((o) => {
          const n = o === 'semua' ? BUAH.length : BUAH.filter((b) => b.saran === o).length;
          return (
            <button
              key={o}
              type="button"
              onClick={() => setPilih(o)}
              aria-pressed={pilih === o}
              className={`min-h-11 rounded-full border-2 px-5 text-sm font-extrabold transition-colors ${
                pilih === o ? 'border-rind bg-rind text-zest' : 'border-rind/15 bg-cream text-rind hover:border-rind/40'
              }`}
            >
              {o === 'semua' ? 'Semua buah' : SARAN[o].label} · {n}
            </button>
          );
        })}
      </div>
      <p aria-live="polite" className="sr-only">{tampil.length} buah ditampilkan</p>

      <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {tampil.map((b, i) => (
          <li key={b.slug} className={`relative rounded-[1.75rem] border-4 border-rind/10 bg-cream p-6 ${i % 2 ? 'sm:rotate-[0.6deg]' : 'sm:-rotate-[0.6deg]'}`}>
            <div className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-2xl font-extrabold shadow-[inset_0_-6px_0_rgb(0_0_0/0.15)] ${terang(b.warna) ? 'text-rind' : 'text-cream'}`}
                style={{ backgroundColor: b.warna }}
              >
                {b.nama[0]}
              </span>
              <div className="min-w-0">
                <h2 className="text-xl font-extrabold text-rind">{b.nama}</h2>
                <p className="mt-1 text-sm font-bold text-rind/80">
                  Gas matang: {b.gas} · {b.matangSendiri ? 'matang sendiri' : 'nggak tambah matang'}
                </p>
              </div>
            </div>
            <p className={`sticker mt-5 px-4 py-2 text-xs ${SARAN[b.saran].warna}`}>{SARAN[b.saran].label}</p>
            <p className="mt-4 leading-relaxed text-rind/85">{b.tips}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
