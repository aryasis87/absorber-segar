import Image from 'next/image';
import Link from 'next/link';

const badges = ['BPOM RI NA18191100273', 'Aman untuk pangan', 'Tanpa ubah rasa'];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-grass pt-28 pb-0 md:pt-36">
      <div aria-hidden="true" className="speckle absolute inset-0 text-rind" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          <div>
            <p className="sticker mb-7 bg-zest px-5 py-2.5 text-xs text-rind uppercase">
              Segar lebih lama · 2–3×
            </p>

            <h1 className="text-[3rem] leading-[0.92] font-extrabold tracking-[-0.04em] text-cream sm:text-6xl lg:text-[4.6rem]">
              Buahnya tetap
              <br />
              <span className="text-zest">segar</span> sampai
              <br />
              tujuan.
            </h1>

            <p className="mt-7 max-w-md text-lg leading-relaxed text-cream/85">
              Satu sachet kecil di dalam peti menyerap gas etilen — pemicu yang membuat buah cepat
              matang dan lembek. Sederhana, murah, dan sudah lolos uji BPOM.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center rounded-full bg-zest px-8 py-4 text-base font-extrabold text-rind transition-transform duration-200 hover:-translate-y-0.5"
              >
                Minta Sample Gratis
              </Link>
              <Link
                href="/#kalender"
                className="inline-flex items-center justify-center rounded-full border-2 border-cream/50 px-8 py-4 text-base font-extrabold text-cream transition-colors duration-200 hover:bg-cream/10"
              >
                Lihat 30 harinya
              </Link>
            </div>

            <ul className="mt-10 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-cream/30 px-4 py-2 text-xs font-bold text-cream/90"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Foto produk dalam bingkai bulat besar */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-square w-full overflow-hidden rounded-[3rem] border-4 border-cream/25 bg-grass-deep">
              <Image
                src="/images/fruit-sachet.webp"
                alt="Sachet EthyleneAbsorber bersama buah segar"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            {/* Stiker angka menempel di tepi foto */}
            <span className="sticker-r sticker absolute -top-3 -right-2 bg-citrus px-5 py-3 text-sm text-rind shadow-lg sm:-right-4">
              30 hari kerja
            </span>
            <span className="sticker absolute -bottom-4 -left-2 bg-cream px-5 py-3 text-sm text-rind shadow-lg sm:-left-4">
              1 sachet = 1–2 m³
            </span>
          </div>
        </div>
      </div>

      {/* Tepi bergerigi menuju bagian berikutnya */}
      <div aria-hidden="true" className="scallop relative z-10 mt-16 w-full text-cream md:mt-20" />
    </section>
  );
}
