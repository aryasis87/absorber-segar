import LegalPoster from '@/components/LegalPoster';
import { DIPERBARUI, PRIVASI } from '@/lib/legal';

export const metadata = {
  title: 'Kebijakan Privasi',
  description: 'Data apa yang kami minta saat Anda minta sample EthyleneAbsorber, untuk apa dipakai, dan berapa lama disimpan.',
  alternates: { canonical: 'https://absorber-segar.vercel.app/privacy' },
};

export default function PrivacyPage() {
  return <LegalPoster judul="Kebijakan Privasi" updated={DIPERBARUI} intro={PRIVASI.intro} bagian={PRIVASI.bagian} />;
}
