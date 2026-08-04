"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', icon: 'waving_hand', label: 'Selamat Datang' },
    { href: '/pengenalan-html', icon: 'menu_book', label: 'Pendahuluan HTML' },
    { href: '/elemen-tag', icon: 'code', label: 'Elemen & Tag' },
    { href: '/heading-paragraf', icon: 'text_fields', label: 'Heading & Paragraf' },
    { href: '/link-gambar', icon: 'add_photo_alternate', label: 'Link & Gambar' },
    { href: '/list-tabel', icon: 'format_list_bulleted', label: 'List & Tabel' },
    { href: '/form', icon: 'check_box', label: 'Form HTML' },
    { href: '/semantic', icon: 'view_quilt', label: 'Semantic HTML' },
    { href: '/multimedia', icon: 'play_circle', label: 'Multimedia & Embed' },
    { href: '/meta-head-seo', icon: 'travel_explore', label: 'Meta, HEAD & SEO' },
    // { href: '/project', icon: 'web', label: 'Project Biodata' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 bg-[#2DD4BF] border-4 border-black p-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none transition-all flex items-center justify-center rounded-full"
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
        className={`fixed left-0 top-0 h-full pt-24 flex flex-col z-40 w-[280px] bg-[#FF49DB] border-r-4 border-black shadow-[6px_0px_0px_0px_rgba(0,0,0,1)] overflow-y-auto transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0`}
      >
        <div className="p-6 border-b-4 border-black mb-4 bg-[#F4F0EA]">
          <h2 className="text-2xl font-black text-black tracking-tight">HTML Dasar</h2>
          <div className="mt-2 w-full bg-white border-4 border-black h-4 relative">
            <div
              className="bg-[#2DD4BF] h-full border-r-4 border-black transition-all duration-500 ease-in-out"
              style={{ width: `${Math.round(((links.findIndex(link => (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))) + 1) / links.length) * 100)}%` }}
            ></div>
          </div>
          <p className="font-bold mt-2 text-black">
            {Math.round(((links.findIndex(link => (link.href === '/' ? pathname === '/' : pathname.startsWith(link.href))) + 1) / links.length) * 100)}% Completed
          </p>
        </div>
        <nav className="flex flex-col flex-1 pb-8 px-4 gap-4">
          {links.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`border-4 border-black p-3 flex items-center gap-3 transition-all ${isActive
                  ? 'bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
                  : 'bg-[#FACC15] text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none'
                  }`}
              >
                <span className="material-symbols-outlined font-black">{link.icon}</span>
                <span className="font-black">{link.label}</span>
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
