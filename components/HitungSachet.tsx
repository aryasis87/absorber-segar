'use client';

import Link from 'next/link';
import { useState } from 'react';

/* Hitung sachet untuk lapak: pilih tempat simpan (atau ukur sendiri),
   hasilnya jumlah sachet dan kapan harus ganti. 1 sachet = 1–2 m³. */

const TEMPAT = [
  { id: 'lemari', nama: 'Lemari stok', ket: '± 1 m³', m3: 1 },
  { id: 'gudang-kecil', nama: 'Gudang kecil 2×2×2 m', ket: '8 m³', m3: 8 },
  { id: 'kamar-stok', nama: 'Kamar stok 3×3×2,5 m', ket: '± 22 m³', m3: 22.5 },
  { id: 'ukur', nama: 'Ukur sendiri', ket: 'panjang × lebar × tinggi', m3: 0 },
];

const angka = (v: string) => Math.max(0, Number(v.replace(',', '.')) || 0);

export default function HitungSachet() {
  const [tempat, setTempat] = useState('lemari');
  const [p, setP] = useState('');
  const [l, setL] = useState('');
  const [t, setT] = useState('');
  const [tertutup, setTertutup] = useState(true);

  const t0 = TEMPAT.find((x) => x.id === tempat)!;
  const volume = tempat === 'ukur' ? Math.round(angka(p) * angka(l) * angka(t) * 10) / 10 : t0.m3;
  const min = volume ? Math.max(1, Math.ceil(volume / 2)) : 0;
  const max = volume ? Math.max(1, Math.ceil(volume)) : 0;

  return (
    <div className="overflow-hidden rounded-[2rem] border-4 border-rind/10 bg-cream">
      <div className="grid md:grid-cols-2">
        <div className="space-y-7 p-6 sm:p-9">
          <fieldset>
            <legend className="cap mb-3 text-rind">1 · Di mana stok disimpan?</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {TEMPAT.map((x) => (
                <label key={x.id} className={`cursor-pointer rounded-2xl border-2 px-4 py-3 transition-colors ${tempat === x.id ? 'border-rind bg-zest/40' : 'border-rind/15 hover:border-rind/40'}`}>
                  <input type="radio" name="tempat" value={x.id} checked={tempat === x.id} onChange={() => setTempat(x.id)} className="sr-only" />
                  <span className="block font-extrabold text-rind">{x.nama}</span>
                  <span className="block text-sm text-rind/80">{x.ket}</span>
                </label>
              ))}
            </div>
            {tempat === 'ukur' && (
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[['p', 'Panjang', p, setP], ['l', 'Lebar', l, setL], ['t', 'Tinggi', t, setT]].map(([id, label, v, set]) => (
                  <div key={id as string}>
                    <label htmlFor={`ukur-${id}`} className="mb-1 block text-xs font-bold text-rind">{label as string} (m)</label>
                    <input
                      id={`ukur-${id}`}
                      inputMode="decimal"
                      value={v as string}
                      onChange={(e) => (set as (s: string) => void)(e.target.value)}
                      className="w-full rounded-xl border-2 border-rind/20 bg-cream px-3 py-2.5 font-bold text-rind focus:border-grass focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            )}
          </fieldset>

          <fieldset>
            <legend className="cap mb-3 text-rind">2 · Tempatnya tertutup?</legend>
            <div className="flex gap-2">
              {[[true, 'Tertutup'], [false, 'Terbuka']].map(([v, label]) => (
                <button
                  key={label as string}
                  type="button"
                  aria-pressed={tertutup === v}
                  onClick={() => setTertutup(v as boolean)}
                  className={`min-h-11 flex-1 rounded-full border-2 font-extrabold transition-colors ${tertutup === v ? 'border-rind bg-rind text-zest' : 'border-rind/15 text-rind hover:border-rind/40'}`}
                >
                  {label as string}
                </button>
              ))}
            </div>
          </fieldset>
        </div>

        <div aria-live="polite" className="relative flex flex-col justify-between bg-rind p-6 text-cream sm:p-9">
          <div aria-hidden="true" className="speckle absolute inset-0 text-cream" />
          {tertutup ? (
            <div className="relative">
              <p className="sticker bg-zest px-4 py-2 text-xs text-rind uppercase">Butuh</p>
              <p className="mt-5 text-7xl leading-none font-extrabold">
                {volume ? (min === max ? min : `${min}–${max}`) : '—'}
              </p>
              <p className="mt-2 text-lg font-bold">sachet</p>
              <p className="mt-6 text-cream/90">
                Untuk ruang {volume || 0} m³. Buah yang banyak bikin gas (apel, alpukat, pisang) ambil angka besarnya.
              </p>
              <p className="mt-4 rounded-2xl bg-cream/10 px-4 py-3 text-sm text-cream">
                Ganti sekitar tiap <span className="font-extrabold text-zest">30 hari</span> — atau begitu warnanya cokelat semua.
              </p>
            </div>
          ) : (
            <div className="relative">
              <p className="sticker bg-citrus px-4 py-2 text-xs text-rind uppercase">Tunggu dulu</p>
              <p className="mt-5 text-3xl leading-tight font-extrabold">Tutup dulu tempatnya.</p>
              <p className="mt-4 text-cream/90">
                Di tempat terbuka, gasnya kabur ke udara pasar dan sachet nggak sempat nangkap. Pakai peti bertutup,
                kardus, atau terpal — baru hitung lagi.
              </p>
              <Link href="/tips/sachet-cuma-kerja-di-ruang-tertutup" className="mt-5 inline-block font-extrabold text-zest underline underline-offset-4">
                Kenapa harus tertutup?
              </Link>
            </div>
          )}
          <Link href="/kontak" className="relative mt-8 inline-flex items-center justify-center rounded-full bg-zest px-6 py-3.5 font-extrabold text-rind transition-colors hover:bg-cream">
            Minta sample gratis
          </Link>
        </div>
      </div>
    </div>
  );
}
