// /kontak adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = {
  title: 'Minta Sample Gratis',
  description: 'Sebutkan buahnya dan ukuran tempat simpannya — kami hitung kebutuhan sachet dan kirim sample EthyleneAbsorber.',
  alternates: { canonical: 'https://absorber-segar.vercel.app/kontak' },
};

export default function KontakLayout({ children }: { children: React.ReactNode }) {
  return children;
}
