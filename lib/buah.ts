/* ============================================================================
   "Kamus Buah" konsep Pasar Pagi — ditulis seperti label harga di lapak:
   singkat, tegas, bahasa pedagang. Sifatnya mengikuti pengetahuan pascapanen
   umum (klimakterik atau tidak, seberapa banyak etilen, seberapa peka).
   ========================================================================== */

export type Saran = 'pakai' | 'pisahkan' | 'tidak-perlu'

export const SARAN: Record<Saran, { label: string; warna: string; ket: string }> = {
  pakai: { label: 'Pakai sachet', warna: 'bg-grass-ink text-cream', ket: 'Buahnya bikin gas matang sendiri dan gampang kebablasan.' },
  pisahkan: { label: 'Jauhkan dari pisang & apel', warna: 'bg-citrus text-rind', ket: 'Nggak bikin gas, tapi gampang rusak kena gas buah lain.' },
  'tidak-perlu': { label: 'Nggak perlu sachet', warna: 'bg-cream-2 text-rind', ket: 'Masalahnya bukan gas — jaga kering dan dingin.' },
}

export type Buah = {
  slug: string
  nama: string
  warna: string
  gas: 'Banyak' | 'Sedang' | 'Sedikit'
  matangSendiri: boolean
  saran: Saran
  tips: string
}

export const BUAH: Buah[] = [
  { slug: 'pisang', nama: 'Pisang', warna: '#f5d33b', gas: 'Sedang', matangSendiri: true, saran: 'pakai', tips: 'Jangan masuk kulkas — kulitnya menghitam. Simpan di peti tertutup dengan sachet.' },
  { slug: 'mangga', nama: 'Mangga', warna: '#f4a23a', gas: 'Sedang', matangSendiri: true, saran: 'pakai', tips: 'Yang mau dijual minggu depan, simpan terpisah dari yang sudah matang.' },
  { slug: 'alpukat', nama: 'Alpukat', warna: '#5d8a2e', gas: 'Banyak', matangSendiri: true, saran: 'pakai', tips: 'Satu alpukat matang bisa bikin sepeti ikut lembek. Sortir tiap pagi.' },
  { slug: 'pepaya', nama: 'Pepaya', warna: '#f07c3a', gas: 'Sedang', matangSendiri: true, saran: 'pakai', tips: 'Bungkus koran satu-satu, taruh sachet di dasar peti.' },
  { slug: 'apel', nama: 'Apel', warna: '#d8342c', gas: 'Banyak', matangSendiri: true, saran: 'pakai', tips: 'Tukang bikin buah lain cepat matang. Jangan satu peti sama sayur daun.' },
  { slug: 'melon', nama: 'Melon', warna: '#b9d46a', gas: 'Banyak', matangSendiri: true, saran: 'pakai', tips: 'Aroma sudah wangi? Jual duluan, jangan disimpan bareng stok baru.' },
  { slug: 'tomat', nama: 'Tomat', warna: '#e0452f', gas: 'Sedang', matangSendiri: true, saran: 'pakai', tips: 'Pisahkan yang merah dari yang masih hijau-kekuningan.' },
  { slug: 'jeruk', nama: 'Jeruk', warna: '#ff8a3d', gas: 'Sedikit', matangSendiri: false, saran: 'pisahkan', tips: 'Nggak tambah matang di lapak. Yang merusak justru gas dari pisang di sebelahnya.' },
  { slug: 'semangka', nama: 'Semangka', warna: '#e0435a', gas: 'Sedikit', matangSendiri: false, saran: 'pisahkan', tips: 'Kena gas buah lain, dagingnya jadi lembek. Taruh jauh dari apel dan pisang.' },
  { slug: 'anggur', nama: 'Anggur', warna: '#6b3f8f', gas: 'Sedikit', matangSendiri: false, saran: 'tidak-perlu', tips: 'Musuhnya lembap dan jamur. Simpan dingin, jangan dicuci sebelum dijual.' },
  { slug: 'salak', nama: 'Salak', warna: '#7a4a2b', gas: 'Sedikit', matangSendiri: false, saran: 'tidak-perlu', tips: 'Jaga tetap kering di keranjang berlubang supaya nggak berjamur.' },
  { slug: 'nanas', nama: 'Nanas', warna: '#e8b52d', gas: 'Sedikit', matangSendiri: false, saran: 'tidak-perlu', tips: 'Nggak tambah manis setelah dipetik. Pilih yang sudah matang dari kebun.' },
]
