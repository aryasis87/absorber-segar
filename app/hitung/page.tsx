import HitungSachet from '@/components/HitungSachet';
import PosterHead from '@/components/PosterHead';

export const metadata = {
  title: 'Hitung Sachet',
  description:
    'Hitung berapa sachet EthyleneAbsorber yang dibutuhkan lemari stok, gudang kecil, atau kamar stok lapak buah Anda — satu sachet untuk 1–2 m³ ruang tertutup.',
  alternates: { canonical: 'https://absorber-segar.vercel.app/hitung' },
};

const CONTOH = [
  ['Lemari stok', '1 m³', '1 sachet'],
  ['Gudang kecil 2×2×2 m', '8 m³', '4–8 sachet'],
  ['Kamar stok 3×3×2,5 m', '22,5 m³', '12–23 sachet'],
];

export default function HitungPage() {
  return (
    <>
      <PosterHead
        stiker="Hitung sendiri"
        title="Berapa sachet buat lapak kamu?"
        lead="Patokannya gampang: satu sachet buat 1–2 meter kubik ruang tertutup. Pilih tempatnya, hasilnya langsung keluar."
      />
      <section className="bg-cream pt-16 pb-24">
        <div className="mx-auto max-w-5xl px-6">
          <HitungSachet />

          <div className="mt-16">
            <h2 className="text-center text-[1.8rem] leading-tight font-extrabold text-rind">Contoh cepat</h2>
            <div className="mt-8 overflow-x-auto rounded-[1.75rem] border-4 border-rind/10">
              <table className="w-full min-w-[30rem] text-left">
                <thead className="bg-cream-2">
                  <tr>
                    {['Tempat', 'Ruang', 'Butuh'].map((h) => (
                      <th key={h} scope="col" className="cap px-5 py-3.5 text-rind">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CONTOH.map(([a, b, c]) => (
                    <tr key={a} className="border-t-2 border-rind/10">
                      <th scope="row" className="px-5 py-4 font-extrabold text-rind">{a}</th>
                      <td className="px-5 py-4 font-bold text-rind/85">{b}</td>
                      <td className="px-5 py-4 font-extrabold text-grass-ink">{c}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
