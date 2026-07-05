import "./globals.css"
import { Plus_Jakarta_Sans } from "next/font/google"
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const display = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-display", weight: ["600","700","800"] })

const __jsonld = {"@context":"https://schema.org","@type":"CreativeWork","name":"EthyleneAbsorber — Konsep Segar","description":"Landing page produk ethylene absorber","url":"https://absorber-segar.pintuweb.com"};

export const metadata = {
  metadataBase: new URL("https://absorber-segar.pintuweb.com"),
  title: "EthyleneAbsorber — Konsep Segar | Dickson Synergy",
  description: "Landing page EthyleneAbsorber konsep \"Segar\": jaga kesegaran buah lebih lama dengan teknologi ethylene absorber berkualitas tinggi.",
  applicationName: "EthyleneAbsorber",
  keywords: ["ethylene absorber", "kesegaran buah", "landing page produk", "desain web", "dickson synergy"],
  authors: [{ name: "EthyleneAbsorber" }],
  creator: "EthyleneAbsorber",
  publisher: "EthyleneAbsorber",
  alternates: { canonical: "https://absorber-segar.pintuweb.com" },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://absorber-segar.pintuweb.com",
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${display.variable} antialiased bg-white text-gray-800 selection:bg-lime-200 selection:text-black overflow-x-hidden max-w-[100vw]`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(__jsonld) }} />
        </body>
    </html>
  )
}
