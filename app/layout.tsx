import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

/* Plus Jakarta Sans memikul seluruh teks — bobot 800 untuk judul lantang. */
const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
})

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"EthyleneAbsorber — Konsep Segar","description":"Landing page produk ethylene absorber","url":"https://absorber-segar.vercel.app"};

export const metadata = {
  metadataBase: new URL("https://absorber-segar.vercel.app"),
  title: "EthyleneAbsorber — Konsep Segar | Dickson Synergy",
  description: "Landing page EthyleneAbsorber konsep \"Segar\": jaga kesegaran buah lebih lama dengan teknologi ethylene absorber berkualitas tinggi.",
  applicationName: "EthyleneAbsorber",
  keywords: ["ethylene absorber", "kesegaran buah", "landing page produk", "desain web", "dickson synergy"],
  authors: [{ name: "EthyleneAbsorber" }],
  creator: "EthyleneAbsorber",
  publisher: "EthyleneAbsorber",
  alternates: { canonical: "https://absorber-segar.vercel.app" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://absorber-segar.vercel.app",
    siteName: "EthyleneAbsorber",
    title: "EthyleneAbsorber — Konsep Segar | Dickson Synergy",
    description: "Landing page EthyleneAbsorber konsep \"Segar\": jaga kesegaran buah lebih lama dengan teknologi ethylene absorber berkualitas tinggi.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "EthyleneAbsorber — Konsep Segar | Dickson Synergy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EthyleneAbsorber — Konsep Segar | Dickson Synergy",
    description: "Landing page EthyleneAbsorber konsep \"Segar\": jaga kesegaran buah lebih lama dengan teknologi ethylene absorber berkualitas tinggi.",
    images: ["/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
}

export const viewport = {
  themeColor: "#12a150",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} antialiased bg-cream text-rind selection:bg-zest selection:text-rind overflow-x-hidden max-w-[100vw]`}>
        <Navbar />
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-rind focus:px-5 focus:py-3 focus:text-sm focus:font-bold focus:text-cream"
        >
          Lompat ke konten utama
        </a>
        <main id="konten">{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  )
}
