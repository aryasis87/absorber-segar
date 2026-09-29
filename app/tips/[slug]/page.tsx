import Link from 'next/link';
import { notFound } from 'next/navigation';
import PosterHead from '@/components/PosterHead';
import { TIPS, tipsBySlug, type Blok } from '@/lib/tips';

const SITE = 'https://absorber-segar.vercel.app';

export function generateStaticParams() {
  return TIPS.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tipsBySlug(slug);
  if (!t) return {};
  return {
    title: `Tips ${t.no}: ${t.judul}`,
    description: t.ringkas,
    alternates: { canonical: `${SITE}/tips/${t.slug}` },
    openGraph: { type: 'article' },
  };
}

function Isi({ b }: { b: Blok }) {
  if ('h' in b) return <h2 className="mt-12 text-[1.7rem] leading-tight font-extrabold text-rind">{b.h}</h2>;
  if ('langkah' in b)
    return (
      <ol className="mt-6 space-y-3">
        {b.langkah.map((l, i) => (
          <li key={l} className="flex gap-4 rounded-2xl bg-cream-2 p-4 text-rind">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-rind text-sm font-extrabold text-zest">{i + 1}</span>
            <span className="pt-1.5 leading-relaxed font-bold">{l}</span>
          </li>
        ))}
      </ol>
    );
  if ('inget' in b)
    return (
      <aside className="mt-12 rotate-[-0.8deg] rounded-[1.75rem] bg-zest p-7 text-rind">
        <p className="sticker bg-rind px-4 py-2 text-xs text-zest uppercase">Inget ya</p>
        <p className="mt-4 text-xl leading-snug font-extrabold">{b.inget}</p>
      </aside>
    );
  return <p className="mt-5 text-[1.075rem] leading-[1.85] text-rind/85">{b.p}</p>;
}

export default async function TipsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = tipsBySlug(slug);
  if (!t) notFound();
  const lain = TIPS.filter((x) => x.slug !== t.slug);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t.judul,
    description: t.ringkas,
    step: t.isi.flatMap((b) => ('langkah' in b ? b.langkah : [])).map((s) => ({ '@type': 'HowToStep', text: s })),
  };

  return (
    <article>
      <PosterHead stiker={`Tips ${t.no}`} title={t.judul} lead={t.ringkas} />
      <div className="bg-cream pt-14 pb-24">
        <div className="mx-auto max-w-2xl px-6">
          {t.isi.map((b, k) => <Isi key={k} b={b} />)}

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {lain.map((x) => (
              <Link key={x.slug} href={`/tips/${x.slug}`} className="rounded-[1.5rem] border-4 border-rind/10 p-5 transition-colors hover:border-grass">
                <span className="cap block text-grass-ink">Tips {x.no}</span>
                <span className="mt-2 block font-extrabold text-rind">{x.judul}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </article>
  );
}
