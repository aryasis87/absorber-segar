/* ============================================================================
   Bagian penanda varian ini: kalender 30 hari.
   Alih-alih grafik atau tabel, masa kerja sachet ditunjukkan sebagai kotak
   hari yang bisa dihitung dengan mata — sejalan dengan nada "pasar pagi".
   Angkanya dari halaman FAQ: tanpa perawatan buah tidak layak sekitar hari
   ke-7, dengan sachet masa kerja penuh 30 hari (ideal sampai 45).
   ========================================================================== */

const DAYS = 30;
const TANPA = 7; // hari terakhir buah masih layak tanpa perawatan

/* Urutan legenda mengikuti urutan kotak supaya maknanya tidak terbalik:
   hari 1–6 memang aman walau tanpa sachet, hari ke-7 batasnya, dan sisanya
   adalah tambahan yang didapat dari sachet. */
const legend = [
  { color: 'bg-cream-2', label: 'Hari 1–6 · aman walau tanpa sachet' },
  { color: 'bg-citrus', label: 'Hari ke-7 · batas tanpa sachet' },
  { color: 'bg-grass', label: 'Hari 8–30 · tambahan dari sachet' },
];

export default function Calendar() {
  return (
    <section id="kalender" className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-12 text-center">
          <p className="sticker mb-6 bg-zest px-5 py-2.5 text-xs text-rind uppercase">
            Hitung sendiri
          </p>
          <h2 className="text-[2.2rem] leading-[1.05] font-extrabold text-rind md:text-[3rem]">
            Tiga puluh kotak.
            <br />
            Semuanya terjaga.
          </h2>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-rind/70">
            Tanpa perawatan, buah biasanya sudah tidak layak jual sekitar hari ketujuh. Dengan satu
            sachet di dalam kemasan, seluruh tiga puluh kotak ini masih terjaga.
          </p>
        </div>

        {/* Kalender */}
        <div className="rounded-[2rem] border-4 border-rind/10 bg-cream-2/40 p-6 sm:p-10">
          <ol className="grid grid-cols-6 gap-2 sm:grid-cols-10 sm:gap-3">
            {Array.from({ length: DAYS }, (_, i) => {
              const day = i + 1;
              const batas = day === TANPA;
              const lewatTanpa = day > TANPA;
              return (
                <li
                  key={day}
                  className={`flex aspect-square items-center justify-center rounded-xl text-sm font-extrabold sm:rounded-2xl ${
                    batas
                      ? 'bg-citrus text-rind'
                      : lewatTanpa
                        ? 'bg-grass text-cream'
                        : 'bg-cream-2 text-rind/45'
                  }`}
                >
                  {day}
                </li>
              );
            })}
          </ol>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
            {legend.map((l) => (
              <li key={l.label} className="flex items-center gap-2.5">
                <span aria-hidden="true" className={`h-4 w-4 rounded-md ${l.color}`} />
                <span className="text-sm font-bold text-rind/75">{l.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {[
            ['Hari ke-7', 'Batas buah tanpa perawatan — di sinilah penyortiran biasanya dimulai.'],
            ['Hari ke-30', 'Masa kerja penuh satu sachet, cukup untuk pelayaran 3–4 minggu.'],
            ['Hari ke-45', 'Batas pada kondisi penyimpanan ideal: suhu ruang, kelembapan normal.'],
          ].map(([t, d]) => (
            <div key={t} className="rounded-2xl bg-cream-2/60 p-6">
              <p className="text-xl font-extrabold text-grass">{t}</p>
              <p className="mt-2 text-sm leading-relaxed text-rind/70">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
