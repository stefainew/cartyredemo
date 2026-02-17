import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🛞',
      title: 'Смяна на гуми',
      desc: 'Сезонна смяна • баланс • вентил. Професионално оборудване за безпроблемен монтаж.',
      cta: 'Възможност за час по телефон',
    },
    {
      icon: '🔧',
      title: 'Ремонт и лепене',
      desc: 'Лепене • фитили • кръпки • проверка за теч. Реагираме веднага за вашата сигурност.',
      cta: 'Бързо изпълнение',
    },
    {
      icon: '⚙️',
      title: 'Джанти и диагностика',
      desc: 'Проверка • криви джанти • вибрации • налягане. Прецизна диагностика на състоянието.',
      cta: 'Съвет от майстор',
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 border-b-4 border-slate-200 hover:border-primary transition-all group shadow-sm"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl font-black uppercase mb-4 text-secondary">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <p className="text-sm font-bold text-primary uppercase tracking-tighter">
                {service.cta}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;