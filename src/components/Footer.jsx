import React from 'react';

const LOGO_URL = '/assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1324] px-4 pb-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center text-sm text-slate-400 md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="SIS Logo" className="h-10 w-10 object-contain" />
          <div>
            <p className="font-medium text-white">Conradie Family</p>
            <p className="text-slate-400">System&apos;s Integration Specialists</p>
          </div>
        </div>

        <p>&copy; {currentYear} SIS. All rights reserved.</p>
      </div>
    </footer>
  );
}
