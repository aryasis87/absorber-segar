/* ============================================================================
   "Tips Lapak" konsep Pasar Pagi — tiga tulisan pendek bergaya poster untuk
   pedagang buah. Kalimatnya pendek, pakai bahasa lapak, dan tiap tips
   ditutup dengan satu "Inget ya".
   Blok: { p }, { h }, { langkah }, { inget }
   ========================================================================== */

export type Blok = { p: string } | { h: string } | { langkah: string[] } | { inget: string }

export type Tips = {
  slug: string
  no: string
  judul: string
  ringkas: string
  warna: 'grass' | 'citrus' | 'zest'
  isi: Blok[]
}

export const TIPS: Tips[] = [
  {
    slug: 'jangan-campur-pisang-sama-sayur-daun',
    no: '1',
    judul: 'Jangan campur pisang sama sayur daun',
    ringkas: 'Satu peti pisang yang lagi matang bisa bikin selada di sebelahnya kuning duluan.',
    warna: 'grass',
    isi: [
      { p: 'Pernah lihat sayur daun yang kemarin masih segar, hari ini sudah kuning, padahal disimpan di tempat teduh? Coba lihat tetangganya. Seringnya ada pisang, apel, atau alpukat yang lagi matang di dekat situ.' },
      { h: 'Kenapa begitu' },
      { p: 'Buah yang lagi matang melepas gas namanya etilen. Gas ini nggak kelihatan dan nggak bau, tapi bikin buah dan sayur lain di sekitarnya ikut "tua". Sayur daun, brokoli, dan semangka termasuk yang paling gampang kena.' },
      { h: 'Cara ngaturnya' },
      { langkah: ['Kelompokkan: pisang, apel, alpukat, mangga di satu sisi.', 'Sayur daun, jeruk, semangka di sisi lain.', 'Kalau terpaksa satu gudang, taruh sachet di peti buah yang bikin gas.'] },
      { inget: 'Sachet paling ampuh ditaruh di sumber gasnya, bukan di barang yang mau dilindungi.' },
    ],
  },
  {
    slug: 'sachet-cuma-kerja-di-ruang-tertutup',
    no: '2',
    judul: 'Sachet cuma kerja di ruang tertutup',
    ringkas: 'Ditaruh di rak terbuka, sachetnya kerja buat udara pasar — bukan buat dagangan kamu.',
    warna: 'citrus',
    isi: [
      { p: 'Ini kesalahan yang paling sering kami dengar: sachet ditaruh di rak pajang yang terbuka, lalu pedagangnya bilang "kok nggak ngefek?". Wajar. Gasnya kabur ke mana-mana, sachetnya nggak sempat nangkap.' },
      { h: 'Di mana taruhnya' },
      { langkah: ['Peti atau keranjang yang ditutup (kardus, peti tutup, atau terpal).', 'Gudang kecil atau lemari stok di belakang lapak.', 'Kotak pengiriman kalau jualan antar kota.'] },
      { h: 'Berapa banyak' },
      { p: 'Satu sachet cukup buat ruang 1–2 meter kubik. Lemari stok setinggi orang biasanya sekitar 1 meter kubik — cukup satu. Gudang kecil 2×2×2 meter itu 8 meter kubik, berarti 4 sampai 8 sachet. Mau pasti? Pakai halaman Hitung.' },
      { inget: 'Buka bungkus luar sachet pas mau dipasang aja. Begitu kena udara, dia langsung mulai kerja.' },
    ],
  },
  {
    slug: 'cek-warnanya-tiap-senin',
    no: '3',
    judul: 'Cek warnanya tiap Senin',
    ringkas: 'Ungu artinya masih kerja, cokelat artinya waktunya ganti. Nggak perlu nebak.',
    warna: 'zest',
    isi: [
      { p: 'Isi sachet kami warnanya ungu. Makin banyak gas yang ditangkap, makin cokelat warnanya. Kalau sudah cokelat semua, tugasnya selesai dan sachet harus diganti.' },
      { h: 'Bikin jadwal sederhana' },
      { langkah: ['Tiap Senin pagi, intip warna sachet di tiap peti.', 'Masih banyak ungunya? Biarin.', 'Sudah cokelat semua? Ganti, dan tulis tanggalnya di peti pakai spidol.'] },
      { p: 'Biasanya satu sachet tahan sekitar 30 hari sejak dibuka, bisa sampai 45 hari kalau tempatnya sejuk. Jadi kalau jadwal Senin rutin, kamu nggak bakal kelewatan.' },
      { inget: 'Stok lama jual duluan. Sachet bantu buah awet, tapi yang masuk duluan tetap harus keluar duluan.' },
    ],
  },
]

export const tipsBySlug = (slug: string) => TIPS.find((t) => t.slug === slug)
