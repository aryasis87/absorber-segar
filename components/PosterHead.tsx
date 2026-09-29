import React from 'react';

/* Kop halaman dalam "Pasar Pagi": bidang hijau berbintik, stiker miring,
   judul besar, dan tepi bawah bergerigi seperti tenda lapak. */
export default function PosterHead({
  stiker,
  title,
  lead,
  children,
}: {
  stiker: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative bg-grass-ink text-cream">
      <div aria-hidden="true" className="speckle absolute inset-0 text-cream" />
      <div className="relative mx-auto max-w-5xl px-6 pt-32 pb-16 text-center sm:pt-40 md:pb-20">
        <p className="sticker mb-6 bg-zest px-5 py-2.5 text-xs text-rind uppercase">{stiker}</p>
        <h1 className="text-[2.4rem] leading-[1.02] font-extrabold tracking-[-0.03em] text-cream sm:text-5xl md:text-[3.6rem]">{title}</h1>
        {lead && <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/90">{lead}</p>}
        {children}
      </div>
      <div aria-hidden="true" className="scallop absolute inset-x-0 -bottom-[10px] rotate-180 text-grass-ink" />
    </header>
  );
}
