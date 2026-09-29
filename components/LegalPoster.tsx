import Link from 'next/link';
import PosterHead from '@/components/PosterHead';
import type { Bagian } from '@/lib/legal';

/* Halaman legal gaya "Pasar Pagi": tiap pasal satu kartu membulat dengan
   nomor bulat hijau. Isinya dari lib/legal.ts — khusus bisnis B2B ini. */
export default function LegalPoster({
  judul,
  updated,
  intro,
  bagian,
}: {
  judul: string;
  updated: string;
  intro: string;
  bagian: Bagian[];
}) {
  return (
    <>
      <PosterHead stiker={`Diperbarui ${updated}`} title={judul} lead={intro} />
      <section className="bg-cream pt-14 pb-24">
        <ol className="mx-auto max-w-3xl space-y-4 px-6">
          {bagian.map((b, i) => (
            <li key={b.h} className="rounded-[1.75rem] bg-cream-2 p-6 sm:p-7">
              <h2 className="flex items-center gap-4 text-lg font-extrabold text-rind">
                <span aria-hidden="true" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-grass-ink text-sm text-cream">{i + 1}</span>
                {b.h}
              </h2>
              <div className="mt-3 space-y-3 pl-[3.25rem] text-sm leading-relaxed text-rind/85">
                {b.p && <p>{b.p}</p>}
                {b.daftar && (
                  <ul className="space-y-2">
                    {b.daftar.map((d) => (
                      <li key={d} className="flex gap-3">
                        <span aria-hidden="true" className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-citrus" />
                        {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ol>
        <div className="mx-auto mt-10 max-w-3xl px-6">
          <div className="rounded-[2rem] bg-rind px-8 py-7 text-center text-cream">
            <p className="text-sm">Draf untuk purwarupa desain — perlu ditinjau bagian legal PT Dickson Synergy.</p>
            <Link href="/kontak" className="mt-4 inline-flex items-center justify-center rounded-full bg-zest px-6 py-3 text-sm font-extrabold text-rind">
              Ada pertanyaan? Hubungi kami
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
