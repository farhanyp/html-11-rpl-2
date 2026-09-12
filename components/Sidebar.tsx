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
    { href: '/', icon: 'waving_hand', label: 'Selamat Datang', color: 'bg-mint-soft text-black' },
    { href: '/pengenalan-html', icon: 'menu_book', label: 'Pendahuluan HTML', color: 'bg-jade-vibrant text-white' },
    { href: '/elemen-tag', icon: 'code', label: 'Elemen & Tag', color: 'bg-pine-deep text-white' },
    { href: '/heading-paragraf', icon: 'text_fields', label: 'Heading & Paragraf', color: 'bg-canvas text-black' },
    { href: '/link-gambar', icon: 'add_photo_alternate', label: 'Link & Gambar', color: 'bg-mint-soft text-black' },
    { href: '/list-tabel', icon: 'format_list_bulleted', label: 'List & Tabel', color: 'bg-jade-vibrant text-white' },
    { href: '/form', icon: 'check_box', label: 'Form HTML', color: 'bg-pine-deep text-white' },
    { href: '/semantic', icon: 'view_quilt', label: 'Semantic HTML', color: 'bg-canvas text-black' },
    { href: '/multimedia', icon: 'play_circle', label: 'Multimedia & Embed', color: 'bg-mint-soft text-black' },
    { href: '/meta-head-seo', icon: 'travel_explore', label: 'Meta, HEAD & SEO', color: 'bg-jade-vibrant text-white' },
    { href: '/project-1-html', icon: 'integration_instructions', label: 'Project 1: Portfolio HTML', color: 'bg-jade-vibrant text-white' },
  ];

  const cssLinks = [
    { href: '/pengenalan-css', icon: 'school', label: '1. Pengenalan CSS', color: 'bg-pine-deep text-white' },
    { href: '/pemanggilan-css', icon: 'route', label: '2. Cara Memanggil', color: 'bg-canvas text-black' },
    { href: '/sintaks-selector', icon: 'data_object', label: '3. Sintaks & Selector', color: 'bg-mint-soft text-black' },
    { href: '/specificity-css', icon: 'account_tree', label: '4. Hirarki (Specificity)', color: 'bg-jade-vibrant text-white' },
    { href: '/satuan-ukuran', icon: 'straighten', label: '5. Satuan Ukuran', color: 'bg-pine-deep text-white' },
    { href: '/tipografi', icon: 'font_download', label: '6. Tipografi & Font', color: 'bg-canvas text-black' },
    { href: '/warna-background', icon: 'format_color_fill', label: '7. Warna & Background', color: 'bg-mint-soft text-black' },
    { href: '/display-css', icon: 'visibility', label: '8. Sifat Display', color: 'bg-jade-vibrant text-white' },
    { href: '/box-model', icon: 'crop_square', label: '9. Box Model', color: 'bg-pine-deep text-white' },
    { href: '/flexbox', icon: 'view_kanban', label: '10. Flexbox Layout', color: 'bg-canvas text-black' },
    { href: '/css-grid', icon: 'grid_view', label: '11. Grid Layout', color: 'bg-mint-soft text-black' },
    { href: '/koordinat-zindex', icon: 'layers', label: '12. Posisi & Z-Index', color: 'bg-jade-vibrant text-white' },
    { href: '/pseudo-elements', icon: 'auto_awesome', label: '13. Pseudo-elements', color: 'bg-pine-deep text-white' },
    { href: '/pseudo-classes', icon: 'touch_app', label: '14. Pseudo-classes', color: 'bg-canvas text-black' },
    { href: '/responsive-design', icon: 'devices', label: '15. Responsive Design', color: 'bg-mint-soft text-black' },
    { href: '/project-2-css', icon: 'brush', label: 'Project 2: Portfolio CSS', color: 'bg-mint-soft text-black' },
  ];

  const jsLinks = [
    { href: '/pengantar-js', icon: 'emoji_objects', label: '1. Pengantar & Interaksi', color: 'bg-pine-deep text-white' },
    { href: '/dom-function', icon: 'build', label: '2. DOM & Function', color: 'bg-canvas text-black' },
    { href: '/logika-keputusan', icon: 'alt_route', label: '3. Logika (Conditionals)', color: 'bg-mint-soft text-black' },
    { href: '/array-perulangan', icon: 'repeat', label: '4. Array & Perulangan', color: 'bg-jade-vibrant text-white' },
    { href: '/crud-localstorage', icon: 'storage', label: '5. CRUD & Local Storage', color: 'bg-pine-deep text-white' },
    { href: '/project-3-js', icon: 'integration_instructions', label: 'Project 3: Aplikasi Laundry', color: 'bg-canvas text-black' },
  ];

  const arsitekturWebLinks = [
    { href: '/arsitektur-aplikasi-web-frontend-vs-backend', icon: 'account_tree', label: '1. Frontend vs Backend', color: 'bg-pine-deep text-white' },
    { href: '/siklus-request-response', icon: 'sync_alt', label: '2. Request & Response', color: 'bg-canvas text-black' },
    { href: '/web-statis-vs-web-dinamis', icon: 'dynamic_feed', label: '3. Web Statis vs Dinamis', color: 'bg-mint-soft text-black' },
    { href: '/anatomi-url-alamat-web', icon: 'link', label: '4. Anatomi URL', color: 'bg-jade-vibrant text-white' },
    { href: '/mengenal-web-server-apache', icon: 'dns', label: '5. Web Server & Apache', color: 'bg-pine-deep text-white' },
    { href: '/metode-komunikasi-http-kata-kerja-web', icon: 'http', label: '6. Metode HTTP', color: 'bg-canvas text-black' },
    { href: '/konsep-port-kode-status-http', icon: 'settings_ethernet', label: '7. Port & Status HTTP', color: 'bg-mint-soft text-black' },
    { href: '/localhost-pengenalan-xampp', icon: 'computer', label: '8. Localhost & XAMPP', color: 'bg-jade-vibrant text-white' },
  ];

  const databaseLinks = [
    { href: '/konsep-database', icon: 'database', label: '1. Konsep Dasar', color: 'bg-pine-deep text-white' },
    { href: '/teknis-database-modern', icon: 'storage', label: '2. Database Modern', color: 'bg-canvas text-black' },
    { href: '/erd-database', icon: 'schema', label: '3. Merancang ERD', color: 'bg-mint-soft text-black' },
    { href: '/relasi-tabel', icon: 'account_tree', label: '4. Relasi Antar Tabel', color: 'bg-jade-vibrant text-white' },
    { href: '/anatomi-tipe-data-tabel', icon: 'table_chart', label: '5. Anatomi & Tipe Data', color: 'bg-pine-deep text-white' },
    { href: '/sql-dasar-ddl-dml', icon: 'terminal', label: '6. SQL Dasar', color: 'bg-canvas text-black' },
    { href: '/advanced-query-sql', icon: 'manage_search', label: '7. Advanced Query', color: 'bg-mint-soft text-black' },
    { href: '/join-matematika-bisnis', icon: 'join_inner', label: '8. JOIN & Agregasi', color: 'bg-jade-vibrant text-white' },
    { href: '/project-laundry-db', icon: 'local_laundry_service', label: '9. Project: Laundry DB', color: 'bg-pine-deep text-white' },
    { href: '/ujian-akhir-database', icon: 'school', label: '10. Ujian Akhir DB', color: 'bg-canvas text-black' },
  ];

  const phpLinks = [
    { href: '/pengantar-php', icon: 'php', label: '1. Pengantar PHP', color: 'bg-pine-deep text-white' },
    { href: '/aturan-pulau-php', icon: 'code_blocks', label: '2. Pulau PHP', color: 'bg-canvas text-black' },
    { href: '/sintaks-dasar-php', icon: 'data_object', label: '3. Sintaks Dasar', color: 'bg-mint-soft text-black' },
    { href: '/error-php-layar-putih', icon: 'error', label: '4. Error Layar Putih', color: 'bg-jade-vibrant text-white' },
    { href: '/debugging-php', icon: 'bug_report', label: '5. Teknik Debugging', color: 'bg-pine-deep text-white' },
    { href: '/hard-refresh-browser', icon: 'refresh', label: '6. Hard Refresh', color: 'bg-canvas text-black' },
    { href: '/get-vs-post-php', icon: 'move_up', label: '7. GET vs POST', color: 'bg-mint-soft text-black' },
    { href: '/undefined-array-key', icon: 'warning', label: '8. Undefined Array Key', color: 'bg-jade-vibrant text-white' },
    { href: '/koneksi-mysql-php', icon: 'cable', label: '9. Koneksi MySQL', color: 'bg-pine-deep text-white' },
    { href: '/project-crud-buku-tamu', icon: 'menu_book', label: '10. Project: Buku Tamu', color: 'bg-canvas text-black' },
  ];

  const isLinkActive = (href: string) => {
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeIndexHTML = htmlLinks.findIndex(link => isLinkActive(link.href));
  const progressHTML = activeIndexHTML !== -1 ? Math.round(((activeIndexHTML + 1) / htmlLinks.length) * 100) : 100;

  const activeIndexCSS = cssLinks.findIndex(link => isLinkActive(link.href));
  const progressCSS = activeIndexCSS !== -1 ? Math.round(((activeIndexCSS + 1) / cssLinks.length) * 100) : (activeIndexHTML !== -1 ? 0 : 100);

  const activeIndexJS = jsLinks.findIndex(link => isLinkActive(link.href));
  const progressJS = activeIndexJS !== -1 ? Math.round(((activeIndexJS + 1) / jsLinks.length) * 100) : ((activeIndexHTML !== -1 || activeIndexCSS !== -1) ? 0 : 100);

  const activeIndexArsitekturWeb = arsitekturWebLinks.findIndex(link => isLinkActive(link.href));
  const progressArsitekturWeb = activeIndexArsitekturWeb !== -1 ? Math.round(((activeIndexArsitekturWeb + 1) / arsitekturWebLinks.length) * 100) : ((activeIndexHTML !== -1 || activeIndexCSS !== -1 || activeIndexJS !== -1) ? 0 : 100);

  const activeIndexDatabase = databaseLinks.findIndex(link => isLinkActive(link.href));
  const progressDatabase = activeIndexDatabase !== -1 ? Math.round(((activeIndexDatabase + 1) / databaseLinks.length) * 100) : ((activeIndexHTML !== -1 || activeIndexCSS !== -1 || activeIndexJS !== -1 || activeIndexArsitekturWeb !== -1) ? 0 : 100);

  const activeIndexPHP = phpLinks.findIndex(link => isLinkActive(link.href));
  const progressPHP = activeIndexPHP !== -1 ? Math.round(((activeIndexPHP + 1) / phpLinks.length) * 100) : ((activeIndexHTML !== -1 || activeIndexCSS !== -1 || activeIndexJS !== -1 || activeIndexArsitekturWeb !== -1 || activeIndexDatabase !== -1) ? 0 : 100);

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
            className={`border-4 border-black p-3 flex items-center gap-3 transition-all font-sans uppercase font-black tracking-tight ${link.color} ${isActive
              ? 'shadow-neo-sm translate-x-[4px] border-l-[12px] border-l-black'
              : 'shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
              }`}
          >
            <span className="material-symbols-outlined font-black">{link.icon}</span>
            <span className="text-sm">{link.label}</span>
            {isActive && (
              <div className="ml-auto flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-black rounded-none animate-ping absolute opacity-75"></div>
                <div className="w-2.5 h-2.5 bg-black rounded-none relative"></div>
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
        className="md:hidden fixed bottom-6 right-6 z-50 bg-jade-vibrant border-4 border-black p-3 shadow-neo-md hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-sm active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center rounded-none"
      >
        <span className="material-symbols-outlined font-black text-white text-3xl">
          {isOpen ? 'close' : 'menu'}
        </span>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/70 z-30 backdrop-blur-none"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed left-0 top-0 h-full pt-20 flex flex-col z-40 w-[300px] bg-canvas border-r-4 border-black shadow-neo-xl overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 pb-12`}
      >
        {/* HTML Section */}
        <div className="p-5 border-4 border-black mb-4 bg-white shadow-neo-md mx-4 mt-6 transform hover:rotate-1 transition-transform">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 1</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">HTML Dasar</p>
          <div className="mt-4 w-full bg-mint-canvas border-4 border-black h-5 relative">
            <div
              className="bg-jade-vibrant h-full border-r-4 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressHTML}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-4 border-black inline-block -rotate-2 shadow-neo-sm">
            Bagian 1
          </span>
        </div>
        {renderLinks(htmlLinks)}

        {/* CSS Section */}
        <div className="p-5 border-4 border-black mb-4 bg-mint-soft shadow-neo-md mx-4 mt-2 transform hover:-rotate-1 transition-transform">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 2</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">CSS Styling</p>
          <div className="mt-4 w-full bg-white border-4 border-black h-5 relative">
            <div
              className="bg-forest-teal h-full border-r-4 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressCSS}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-4 border-black inline-block rotate-2 shadow-neo-sm">
            Bagian 2
          </span>
        </div>
        {renderLinks(cssLinks)}

        {/* JS Section */}
        <div className="p-5 border-4 border-black mb-4 bg-canvas shadow-neo-md mx-4 mt-6 transform hover:rotate-1 transition-transform">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 3</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">JavaScript Dasar</p>
          <div className="mt-4 w-full bg-mint-canvas border-4 border-black h-5 relative">
            <div
              className="bg-pine-deep h-full border-r-4 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressJS}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-4 border-black inline-block -rotate-2 shadow-neo-sm">
            Bagian 3
          </span>
        </div>
        {renderLinks(jsLinks)}

        {/* Arsitektur Web Section */}
        <div className="p-5 border-4 border-black mb-4 bg-white shadow-neo-md mx-4 mt-6 transform hover:rotate-1 transition-transform">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 4</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">Arsitektur Web</p>
          <div className="mt-4 w-full bg-mint-canvas border-4 border-black h-5 relative">
            <div
              className="bg-forest-teal h-full border-r-4 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressArsitekturWeb}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-4 border-black inline-block rotate-2 shadow-neo-sm">
            Bagian 4
          </span>
        </div>
        {renderLinks(arsitekturWebLinks)}

        {/* Database Section */}
        <div className="p-5 border-4 border-black mb-4 bg-mint-soft shadow-neo-md mx-4 mt-6 transform hover:-rotate-1 transition-transform">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 5</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">Database SQL</p>
          <div className="mt-4 w-full bg-white border-4 border-black h-5 relative">
            <div
              className="bg-jade-vibrant h-full border-r-4 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressDatabase}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-4 border-black inline-block -rotate-2 shadow-neo-sm">
            Bagian 5
          </span>
        </div>
        {renderLinks(databaseLinks)}

        {/* PHP Section */}
        <div className="p-5 border-4 border-black mb-4 bg-canvas shadow-neo-md mx-4 mt-6 transform hover:rotate-1 transition-transform">
          <h2 className="text-xl font-black text-black uppercase tracking-tight">Materi Pokok 6</h2>
          <p className="text-xs font-bold text-black uppercase mt-1">PHP Dinamis</p>
          <div className="mt-4 w-full bg-mint-canvas border-4 border-black h-5 relative">
            <div
              className="bg-pine-deep h-full border-r-4 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${progressPHP}%` }}
            ></div>
          </div>
        </div>
        <div className="px-4 mb-2">
          <span className="bg-white text-black font-black uppercase text-xs px-2 py-1 border-4 border-black inline-block rotate-2 shadow-neo-sm">
            Bagian 6
          </span>
        </div>
        {renderLinks(phpLinks)}

      </aside>
    </>
  );
}
