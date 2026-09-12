"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export interface HeadbarLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface HeadbarProps {
  links?: HeadbarLink[];
}

export default function Headbar({ links = [] }: HeadbarProps) {
  const pathname = usePathname();

  const mainSections = [
    { label: 'HTML', href: '/pengenalan-html', color: 'bg-jade-vibrant text-white' },
    { label: 'CSS', href: '/pengenalan-css', color: 'bg-[#2965F1] text-white' },
    { label: 'JS', href: '/pengantar-js', color: 'bg-[#F0DB4F] text-black' },
    { label: 'Arsitektur Web', href: '/arsitektur-aplikasi-web-frontend-vs-backend', color: 'bg-pine-deep text-white' },
    { label: 'Database', href: '/konsep-database', color: 'bg-[#00758F] text-white' },
    { label: 'PHP', href: '/pengantar-php', color: 'bg-[#777BB4] text-white' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-canvas border-b-4 border-black shadow-neo-md flex justify-between items-center w-full px-4 md:px-8 py-3 md:py-4">
      <div className="flex items-center gap-4 md:gap-8 w-full justify-between">
        
        {/* Logo Box & Global Navigation */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 md:gap-3 flex-shrink-0 hover:-translate-y-1 transition-transform">
            <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-forest-teal border-[3px] md:border-4 border-black flex items-center justify-center shadow-neo-sm transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
              <span className="material-symbols-outlined font-black text-mint-soft text-lg md:text-2xl">star</span>
            </div>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-black text-black tracking-tighter uppercase hidden sm:block">EduBrutal</h1>
          </Link>

          {/* Quick Access Main Sections (Hidden on Mobile) */}
          <div className="hidden lg:flex items-center gap-3 border-l-4 border-black pl-6">
            {mainSections.map((section, idx) => {
              const isActive = pathname === section.href;
              return (
                <Link
                  key={idx}
                  href={section.href}
                  className={`font-black text-xs md:text-sm uppercase px-3 py-1.5 border-2 md:border-4 border-black transition-all ${
                    isActive 
                    ? `${section.color} shadow-none translate-x-[2px] translate-y-[2px]` 
                    : `bg-white text-black shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:${section.color.split(' ')[0]} hover:${section.color.split(' ')[1]}`
                  }`}
                >
                  {section.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Page Specific Navigation (Tabs) */}
        <nav className="flex flex-nowrap overflow-x-auto justify-start md:justify-end items-center gap-3 md:gap-6 ml-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`font-black pb-1 transition-all text-xs sm:text-sm md:text-lg uppercase whitespace-nowrap flex-shrink-0 px-3 py-1 ${link.isActive
                  ? 'bg-forest-teal text-white border-2 md:border-4 border-black shadow-neo-sm hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none'
                  : 'text-black/70 hover:text-black hover:bg-white hover:border-black border-2 md:border-4 border-transparent shadow-none hover:shadow-neo-sm hover:-translate-y-1'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
