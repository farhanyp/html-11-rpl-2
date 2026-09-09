"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Scroll active link into view when pathname changes
    const activeElement = document.querySelector('a[data-active="true"]');
    if (activeElement) {
      activeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [pathname]);

  const htmlLinks = [
    { href: '/', icon: 'waving_hand', label: 'Selamat Datang', color: 'bg-[#FF49DB] text-black' },
    { href: '/pengenalan-html', icon: 'menu_book', label: 'Pendahuluan HTML', color: 'bg-[#2DD4BF] text-black' },
    { href: '/elemen-tag', icon: 'code', label: 'Elemen & Tag', color: 'bg-[#FACC15] text-black' },
    { href: '/heading-paragraf', icon: 'text_fields', label: 'Heading & Paragraf', color: 'bg-white text-black' },
    { href: '/link-gambar', icon: 'add_photo_alternate', label: 'Link & Gambar', color: 'bg-[#FF49DB] text-black' },
    { href: '/list-tabel', icon: 'format_list_bulleted', label: 'List & Tabel', color: 'bg-[#2DD4BF] text-black' },
    { href: '/form', icon: 'check_box', label: 'Form HTML', color: 'bg-[#FACC15] text-black' },
    { href: '/semantic', icon: 'view_quilt', label: 'Semantic HTML', color: 'bg-white text-black' },
    { href: '/multimedia', icon: 'play_circle', label: 'Multimedia & Embed', color: 'bg-[#FF49DB] text-black' },
    { href: '/meta-head-seo', icon: 'travel_explore', label: 'Meta, HEAD & SEO', color: 'bg-[#2DD4BF] text-black' },
  ];

  const cssBagian1 = [
    { href: '/pengenalan-css', icon: 'school', label: '1. Pengenalan CSS', color: 'bg-[#FACC15] text-black' },
    { href: '/pemanggilan-css', icon: 'route', label: '2. Cara Memanggil', color: 'bg-white text-black' },
    { href: '/sintaks-selector', icon: 'data_object', label: '3. Sintaks & Selector', color: 'bg-[#FF49DB] text-black' },
    { href: '/specificity-css', icon: 'account_tree', label: '4. Hirarki (Specificity)', color: 'bg-[#2DD4BF] text-black' },
    { href: '/satuan-ukuran', icon: 'straighten', label: '5. Satuan Ukuran', color: 'bg-[#FACC15] text-black' },
  ];

  const cssBagian2 = [
    { href: '/tipografi', icon: 'font_download', label: '6. Tipografi & Font', color: 'bg-white text-black' },
    { href: '/warna-background', icon: 'format_color_fill', label: '7. Warna & Background', color: 'bg-[#FF49DB] text-black' },
    { href: '/display-css', icon: 'visibility', label: '8. Sifat Display', color: 'bg-[#2DD4BF] text-black' },
  ];

  const cssBagian3 = [
    { href: '/box-model', icon: 'crop_square', label: '9. Box Model', color: 'bg-[#FACC15] text-black' },
    { href: '/flexbox', icon: 'view_kanban', label: '10. Flexbox Layout', color: 'bg-white text-black' },
    { href: '/css-grid', icon: 'grid_view', label: '11. Grid Layout', color: 'bg-[#FF49DB] text-black' },
  ];

  const cssBagian4 = [
    { href: '/koordinat-zindex', icon: 'layers', label: '12. Posisi & Z-Index', color: 'bg-[#2DD4BF] text-black' },
    { href: '/pseudo-elements', icon: 'auto_awesome', label: '13. Pseudo-elements', color: 'bg-[#FACC15] text-black' },
    { href: '/pseudo-classes', icon: 'touch_app', label: '14. Pseudo-classes', color: 'bg-white text-black' },
  ];

  const cssBagian5 = [
    { href: '/responsive-design', icon: 'devices', label: '15. Responsive Design', color: 'bg-[#FF49DB] text-black' },
  ];

  const isLinkActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeIndexHTML = htmlLinks.findIndex(link => isLinkActive(link.href));
  const progressHTML = activeIndexHTML !== -1 ? Math.round(((activeIndexHTML + 1) / htmlLinks.length) * 100) : 100;

  const activeIndexCSS1 = cssBagian1.findIndex(link => isLinkActive(link.href));
  const progressCSS1 = activeIndexCSS1 !== -1 ? Math.round(((activeIndexCSS1 + 1) / cssBagian1.length) * 100) : (activeIndexHTML !== -1 ? 0 : 100);

  const activeIndexCSS2 = cssBagian2.findIndex(link => isLinkActive(link.href));
  const progressCSS2 = activeIndexCSS2 !== -1 ? Math.round(((activeIndexCSS2 + 1) / cssBagian2.length) * 100) : (activeIndexHTML !== -1 || activeIndexCSS1 !== -1 ? 0 : 100);

  const activeIndexCSS3 = cssBagian3.findIndex(link => isLinkActive(link.href));
  const progressCSS3 = activeIndexCSS3 !== -1 ? Math.round(((activeIndexCSS3 + 1) / cssBagian3.length) * 100) : (activeIndexHTML !== -1 || activeIndexCSS1 !== -1 || activeIndexCSS2 !== -1 ? 0 : 100);

  const activeIndexCSS4 = cssBagian4.findIndex(link => isLinkActive(link.href));
  const progressCSS4 = activeIndexCSS4 !== -1 ? Math.round(((activeIndexCSS4 + 1) / cssBagian4.length) * 100) : (activeIndexHTML !== -1 || activeIndexCSS1 !== -1 || activeIndexCSS2 !== -1 || activeIndexCSS3 !== -1 ? 0 : 100);

  const activeIndexCSS5 = cssBagian5.findIndex(link => isLinkActive(link.href));
  const progressCSS5 = activeIndexCSS5 !== -1 ? Math.round(((activeIndexCSS5 + 1) / cssBagian5.length) * 100) : (activeIndexHTML !== -1 || activeIndexCSS1 !== -1 || activeIndexCSS2 !== -1 || activeIndexCSS3 !== -1 || activeIndexCSS4 !== -1 ? 0 : 100);

  const renderLinks = (links: any[]) => (
    <nav className="flex flex-col px-4 gap-4 mb-8">
      {links.map((link) => {
        const isActive = isLinkActive(link.href);

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            data-active={isActive}
            className={`border-4 border-black p-3 flex items-center gap-3 transition-all font-sans uppercase font-black tracking-tight ${isActive
              ? 'bg-white text-black shadow-[4px_4px_0px_0px_#000] translate-x-[8px] border-l-[12px] border-l-black'
              : `${link.color} shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none`
              }`}
          >
            <span className="material-symbols-outlined font-black">{link.icon}</span>
            <span className="text-sm">{link.label}</span>
            {isActive && (
              <div className="ml-auto flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-black rounded-full animate-ping absolute opacity-75"></div>
                <div className="w-2.5 h-2.5 bg-black rounded-full relative"></div>
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-[#2DD4BF] border-4 border-black p-3 shadow-[4px_4px_0px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center rounded-none"
      >
        <span className="material-symbols-outlined font-black text-black text-3xl">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full pt-20 flex flex-col z-40 w-[300px] bg-[#F4F0EA] border-r-4 border-black shadow-[8px_8px_0px_0px_#000] overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 pb-12`}
      >
        {/* HTML Section */}
        <div className="p-5 border-4 border-black mb-4 bg-white shadow-[4px_4px_0px_0px_#000] mx-4 mt-6">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 1</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">HTML Dasar</p>
          <div className="mt-4 w-full bg-[#F4F0EA] border-2 border-black h-4 relative">
            <div
              className="bg-[#2DD4BF] h-full border-r-2 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressHTML}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-2 border-black inline-block -rotate-2">
            Bagian 1
          </span>
        </div>
        {renderLinks(htmlLinks)}

        {/* CSS Fundamental Section */}
        <div className="p-5 border-4 border-black mb-4 bg-[#FF49DB] shadow-[4px_4px_0px_0px_#000] mx-4 mt-2">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 2</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">Fundamental CSS</p>
          <div className="mt-4 w-full bg-[#F4F0EA] border-2 border-black h-4 relative">
            <div
              className="bg-[#FACC15] h-full border-r-2 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressCSS1}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-2 border-black inline-block rotate-2">
            Bagian 2
          </span>
        </div>
        {renderLinks(cssBagian1)}

        {/* CSS Visual Section */}
        <div className="p-5 border-4 border-black mb-4 bg-[#2DD4BF] shadow-[4px_4px_0px_0px_#000] mx-4 mt-2">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 3</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">Visual & Tampilan</p>
          <div className="mt-4 w-full bg-[#F4F0EA] border-2 border-black h-4 relative">
            <div
              className="bg-[#FF49DB] h-full border-r-2 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressCSS2}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-2 border-black inline-block -rotate-1">
            Bagian 3
          </span>
        </div>
        {renderLinks(cssBagian2)}

        {/* CSS Layout Section */}
        <div className="p-5 border-4 border-black mb-4 bg-[#FACC15] shadow-[4px_4px_0px_0px_#000] mx-4 mt-2">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 4</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">Dimensi & Tata Letak</p>
          <div className="mt-4 w-full bg-[#F4F0EA] border-2 border-black h-4 relative">
            <div
              className="bg-[#2DD4BF] h-full border-r-2 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressCSS3}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-2 border-black inline-block rotate-1">
            Bagian 4
          </span>
        </div>
        {renderLinks(cssBagian3)}

        {/* CSS Sihir Visual Section */}
        <div className="p-5 border-4 border-black mb-4 bg-white shadow-[4px_4px_0px_0px_#000] mx-4 mt-2">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 5</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">Posisi & Visual</p>
          <div className="mt-4 w-full bg-[#F4F0EA] border-2 border-black h-4 relative">
            <div
              className="bg-[#FF49DB] h-full border-r-2 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressCSS4}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-2 border-black inline-block -rotate-2">
            Bagian 5
          </span>
        </div>
        {renderLinks(cssBagian4)}

        {/* CSS Level Lanjut Section */}
        <div className="p-5 border-4 border-black mb-4 bg-[#FF49DB] shadow-[4px_4px_0px_0px_#000] mx-4 mt-2">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 6</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">Level Lanjut</p>
          <div className="mt-4 w-full bg-[#F4F0EA] border-2 border-black h-4 relative">
            <div
              className="bg-[#FACC15] h-full border-r-2 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressCSS5}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-2 border-black inline-block rotate-2">
            Bagian 6
          </span>
        </div>
        {renderLinks(cssBagian5)}

      </aside>
    </>
  );
}
