import Link from 'next/link';

export interface HeadbarLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface HeadbarProps {
  links?: HeadbarLink[];
}

export default function Headbar({ links = [] }: HeadbarProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F4F0EA] border-b-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex justify-between items-center w-full px-4 md:px-8 py-3 md:py-4">
      <div className="flex items-center gap-4 md:gap-8 w-full justify-between">
        {/* Logo Box */}
        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#FF49DB] border-[3px] md:border-4 border-black flex items-center justify-center shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="material-symbols-outlined font-black text-black text-lg md:text-2xl">star</span>
          </div>
          <h1 className="text-lg sm:text-2xl md:text-3xl font-black text-black tracking-tight uppercase">EduBrutal</h1>
        </div>

        <nav className="flex flex-nowrap overflow-x-auto justify-start md:justify-end items-center gap-3 md:gap-6 ml-auto scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={`font-black pb-1 transition-colors text-xs sm:text-sm md:text-lg uppercase whitespace-nowrap flex-shrink-0 ${link.isActive
                  ? 'text-black border-b-2 md:border-b-4 border-black hover:text-[#FF49DB] hover:border-[#FF49DB]'
                  : 'text-black/60 hover:text-black hover:border-b-2 hover:border-black'
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
