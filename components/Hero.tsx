import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 lg:py-24">
      <div className="absolute inset-0 industrial-grid opacity-20"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <div className="text-white">
            <h1 className="hero-title font-display text-5xl md:text-7xl font-black uppercase mb-6">
              Смяна и ремонт на гуми в София — <span className="text-primary">бързо, коректно, без чакане</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-medium mb-10 border-l-4 border-primary pl-6">
              Диагностика • баланс • сезонна смяна • лепене • джанти.{' '}
              <span className="text-white font-bold text-primary">Работим и събота.</span>
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="tel:0899000000"
                className="bg-primary hover:bg-orange-600 text-white px-10 py-5 font-black text-xl transition-all flex items-center gap-3 uppercase shadow-2xl shadow-orange-500/40"
              >
                <span className="material-symbols-outlined">call</span>
                Обади се
              </a>
              <a
                href="#location"
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-10 py-5 font-black text-xl transition-all flex items-center gap-3 uppercase"
              >
                <span className="material-symbols-outlined">location_on</span>
                Навигация
              </a>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-8 py-6 border-t border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-primary font-bold">⭐ 4.8/5</span>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                  Google Reviews
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">schedule</span>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                  Днес отворено до 18:00
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span className="text-slate-400 text-sm font-bold uppercase tracking-wider">
                  Гаранция за услугите
                </span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative">
            <div className="relative z-10 border-8 border-white/5 p-2 bg-white/5">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeUwSE9lpH6-lWGnzN54e3eZSlY7cEre4_1yI19nlVv6ATfsU_rvLTwkcDkRZ2XiRxEkDKHP2WjgZynb6pk65K669_-MaygL-RXS367Sw-99RB-frmuFjfOQYLca6j7MpzrfbJynWwQY5tHU8VYA3Ctohdu-HcJY4LCEpkI_hc_GO1m70ZULDgCFB_5uRcDhZ_X18oRObyrIBdFNtrDzcjVOydsbe7ztjCBQyTOb7-mtgONejU5D5VhV2QU1rixDo66NykFXdCmTtj"
                alt="Професионален сервиз за гуми"
                className="w-full h-[500px] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-primary p-8 hidden md:block">
              <span className="text-white font-display text-4xl font-black italic uppercase">
                EXPERTS.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;