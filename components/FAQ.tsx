import React from 'react';

const FAQ: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-secondary uppercase tracking-tighter">
            ЧЕСТО ЗАДАВАНИ ВЪПРОСИ
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4"></div>
        </div>
        <div className="space-y-4">
          <details className="group bg-slate-50 border border-slate-200" open>
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg text-secondary uppercase transition-colors hover:text-primary">
              <span>1. Колко време отнема сезонната смяна на гуми?</span>
              <span className="material-symbols-outlined expand-icon transition-transform duration-300">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              Стандартната процедура за смяна, баланс и монтаж отнема между 30 и 45 минути.
            </div>
          </details>
          <details className="group bg-slate-50 border border-slate-200">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg text-secondary uppercase transition-colors hover:text-primary">
              <span>2. Трябва ли ми предварително записан час?</span>
              <span className="material-symbols-outlined expand-icon transition-transform duration-300">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              Препоръчваме да запишете час по телефона, но приемаме и клиенти на място според текущата натовареност.
            </div>
          </details>
          <details className="group bg-slate-50 border border-slate-200">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg text-secondary uppercase transition-colors hover:text-primary">
              <span>3. Предлагате ли хотел за гуми?</span>
              <span className="material-symbols-outlined expand-icon transition-transform duration-300">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              Да, разполагаме със специализиран склад за правилно съхранение на вашите извънсезонни гуми.
            </div>
          </details>
          <details className="group bg-slate-50 border border-slate-200">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-lg text-secondary uppercase transition-colors hover:text-primary">
              <span>4. Каква е гаранцията за услугите?</span>
              <span className="material-symbols-outlined expand-icon transition-transform duration-300">
                expand_more
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600 leading-relaxed">
              Всички наши услуги са с гаранция за качество. При проблем с баланса, корекцията е за наша сметка.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
