import Link from 'next/link';
import PosterHead from '@/components/PosterHead';
import { TIPS } from '@/lib/tips';

export const metadata = {
  title: 'Tips Lapak',
  description:
    'Tiga tips pendek untuk pedagang buah: jangan campur pisang dengan sayur daun, sachet hanya bekerja di ruang tertutup, dan cek warna sachet tiap Senin.',
  alternates: { canonical: 'https://absorber-segar.vercel.app/tips' },
};

const WARNA = { grass: 'bg-grass-ink text-cream', citrus: 'bg-citrus text-rind', zest: 'bg-zest text-rind' };

export default function TipsIndex() {
  return (
    <>
      <PosterHead stiker="Tips Lapak" title="Tiga hal kecil, dagangan awet lebih lama." lead="Ditulis buat yang buka lapak dari subuh. Singkat, langsung bisa dipraktikkan besok pagi." />
      <section className="bg-cream pt-16 pb-24">
        <ol className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-3">
          {TIPS.map((t, i) => (
            <li key={t.slug} className={i % 2 ? 'md:mt-10' : ''}>
              <article className={`group relative flex h-full flex-col rounded-[2rem] p-8 ${WARNA[t.warna]}`}>
                <span aria-hidden="true" className="text-8xl leading-none font-extrabold opacity-90">{t.no}</span>
                <h2 className="mt-6 text-2xl leading-tight font-extrabold">
                  <Link href={`/tips/${t.slug}`} className="after:absolute after:inset-0">{t.judul}</Link>
                </h2>
                <p className="mt-3 flex-1 leading-relaxed opacity-90">{t.ringkas}</p>
                <p className="mt-6 font-extrabold underline underline-offset-4">Baca tipsnya →</p>
              </article>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
