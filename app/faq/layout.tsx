// /faq adalah client component, jadi metadatanya dipasang di layout ini.
export const metadata = {
  title: 'Tanya Jawab',
  description: 'Pertanyaan yang paling sering masuk soal EthyleneAbsorber: apa itu, cara pakai, berapa lama kerjanya, dan aman nggak buat makanan.',
  alternates: { canonical: 'https://absorber-segar.vercel.app/faq' },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
