import Link from 'next/link';

const marks = [
  ['BPOM RI', 'NA18191100273'],
  ['FDA', '21 CFR 175.300'],
  ['Uni Eropa', 'EU No 10/2011'],
  ['JHOSPA', 'Jepang'],
];

const faqs = [
  ['Berapa sachet untuk satu ruang?', 'Satu sachet untuk 1–2 m³. Kemasan harus tertutup rapat.'],
  ['Aman buat makanan?', 'Aman. Terdaftar BPOM RI NA18191100273 dan memenuhi standar FDA, Uni Eropa, serta JHOSPA.'],
  ['Rasanya berubah?', 'Tidak. Sachet cuma menyerap gas di udara, tidak menyentuh buahnya.'],
];

export default function Closing() {
  return (
    <>
      {/* Jaminan */}
      <section id="jaminan" className="relative overflow-hidden bg-cream-2/50 py-16 md:py-20">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="cap mb-8 text-center text-rind/50">Sudah diperiksa</p>
          <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {marks.map(([k, v]) => (
              <div key={k} className="rounded-2xl bg-cream px-6 py-6 text-center">
                <dt className="text-base font-extrabold text-rind">{k}</dt>
                <dd className="mt-2 text-sm font-bold text-grass">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Tanya jawab ringkas */}
      <section id="tanya" className="relative overflow-hidden bg-cream py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-4xl px-6">
          <div className="mb-10 text-center">
            <h2 className="text-[2rem] leading-[1.08] font-extrabold text-rind md:text-[2.6rem]">
              Yang paling sering ditanya
            </h2>
          </div>

          <dl className="space-y-4">
            {faqs.map(([q, a]) => (
              <div key={q} className="rounded-3xl bg-cream-2/50 px-7 py-6">
                <dt className="text-lg font-extrabold text-rind">{q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-rind/70">{a}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="text-sm font-extrabold text-grass underline-offset-4 hover:underline"
            >
              Lihat semua pertanyaan →
            </Link>
          </div>
        </div>
      </section>

      {/* Ajakan */}
      <section className="relative overflow-hidden bg-grass py-20 text-cream md:py-28">
        <div aria-hidden="true" className="speckle absolute inset-0 text-rind" />

        <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
          <p className="sticker mb-7 bg-zest px-5 py-2.5 text-xs text-rind uppercase">Gratis</p>
          <h2 className="text-[2.2rem] leading-[1.03] font-extrabold text-cream md:text-[3.2rem]">
            Coba dulu satu peti.
            <br />
            Baru putuskan.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-cream/85">
            Sebutkan buahnya, ukuran ruangnya, dan tujuan kirimnya. Kami hitung berapa sachet yang
            dibutuhkan, lalu kirim samplenya.
          </p>
          <Link
            href="/kontak"
            className="mt-9 inline-flex items-center justify-center rounded-full bg-zest px-9 py-4 text-base font-extrabold text-rind transition-transform duration-200 hover:-translate-y-0.5"
          >
            Minta Sample Gratis
          </Link>
        </div>
      </section>
    </>
  );
}
