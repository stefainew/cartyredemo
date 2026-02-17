import React from 'react';

const ContactCTA: React.FC = () => {
  return (
    <section id="contacts" className="relative py-24 overflow-hidden bg-secondary">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP0PWPyGxQ0FNfJL0o_U5fuG9il6mELIo-oajIDhDm8Jj8YUZfd_cfbWfEswcAk5TlGQeJh8HLlKHB72wpYdYroFI3De2h4WtxKkPQgGUaf-4gTKk8CFIGRryWBNKzzJaxSxC3AF_w1PJXwg-fUsOuH1zlDre-f4MGc5-m5kQQavFQbEf_1TgDlhbVcLFySlCJpmgzDWQefXaNafPRiAMCbyIXM2_QZ8kx1rlSoKf_UchcVOqrzdatTNWG3yWJZ-KS5nIyjeundnJb"
          alt="Детайл на гума"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <h2 className="font-display text-5xl md:text-7xl font-black text-white uppercase mb-6 tracking-tight">
            Готов ли си за <span className="text-primary italic">сезонната смяна?</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed">
            Обади се за свободен час или ела директно — ще те насочим веднага.
            Професионално отношение и гарантиран резултат.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mb-16">
            <a
              href="tel:0899000000"
              className="bg-primary hover:bg-orange-600 text-white px-10 py-5 font-black text-xl transition-all flex items-center justify-center gap-3 uppercase shadow-xl shadow-orange-500/20"
            >
              <span className="material-symbols-outlined">call</span>
              Обади се
            </a>
            <a
              href="#location"
              className="bg-white hover:bg-slate-100 text-secondary px-10 py-5 font-black text-xl transition-all flex items-center justify-center gap-3 uppercase shadow-xl"
            >
              <span className="material-symbols-outlined text-primary">near_me</span>
              Отвори в Google Maps
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-white/10">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">location_on</span>
              <div>
                <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                  Адрес
                </p>
                <p className="text-slate-400">
                  ул. "Иван Странски" 1, кв. Студентски град, София
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">schedule</span>
              <div>
                <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                  Работно време
                </p>
                <p className="text-slate-400">
                  Пн-Пт: 08:30 - 19:00
                  <br />
                  Събота: 09:00 - 18:00
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary">local_parking</span>
              <div>
                <p className="text-white font-bold uppercase tracking-widest text-sm mb-1">
                  Паркиране
                </p>
                <p className="text-slate-400 font-bold">Свободно паркиране за клиенти</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;