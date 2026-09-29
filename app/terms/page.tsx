import LegalPoster from '@/components/LegalPoster';
import { DIPERBARUI, KETENTUAN } from '@/lib/legal';

export const metadata = {
  title: 'Syarat & Ketentuan',
  description: 'Ketentuan sample gratis, perhitungan dosis, pemesanan, dan klaim mutu produk PT Dickson Synergy.',
  alternates: { canonical: 'https://absorber-segar.vercel.app/terms' },
};

export default function TermsPage() {
  return <LegalPoster judul="Syarat & Ketentuan" updated={DIPERBARUI} intro={KETENTUAN.intro} bagian={KETENTUAN.bagian} />;
}
