import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 text-slate-500 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-bold tracking-tighter text-white uppercase">
            TIRE SERVICE
          </span>
          <span className="hidden md:inline text-xs font-bold border-l border-slate-800 ml-4 pl-4 uppercase tracking-widest">
            Premium Tyre Service
          </span>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-center md:text-right">
          © 2024 TIRE SERVICE. ВСИЧКИ ПРАВА ЗАПАЗЕНИ.
        </p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-primary transition-colors">
            <span className="material-symbols-outlined">social_leaderboard</span>
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <span className="material-symbols-outlined">camera_alt</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;