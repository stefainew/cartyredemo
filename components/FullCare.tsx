import React from 'react';

const FullCare: React.FC = () => {
  const listItems = [
    'Смяна на масло',
    'Трансмисия',
    'Смяна на гуми', // Highlighted in original
    'Ремонт на гуми',
    'Спирачна система',
    'Климатик',
    'Диагностика',
  ];

  const stats = [
    { icon: 'home_repair_service', value: '40+', label: 'Сервиза' },
    { icon: 'history', value: '20+', label: 'Години опит' },
    { icon: 'build', value: '14+', label: 'Услуги' },
    { icon: 'wifi', value: 'FREE', label: 'Безплатен WiFi' },
  ];

  return (
    <section className="bg-[#0B0F19] py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.05)_0%,transparent_70%)]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-black text-white uppercase mb-4 tracking-tighter">
            Пълна грижа за вашия <span className="text-primary">автомобил</span>
          </h2>
          <p className="text-slate-400 font-medium">
            Модерно оборудване и професионална диагностика за всеки детайл
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
          
          {/* Left info box */}
          <div className="w-full lg:w-72 bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl">
            <div className="mb-4">
              <span className="material-symbols-outlined text-primary text-4xl">tire_repair</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white uppercase mb-3">ГУМИ</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Избор от най-добрите марки за вашия автомобил. Монтаж и баланс.
            </p>
            <div className="mt-6 w-12 h-1 bg-primary"></div>
          </div>

          {/* Center Image with Hotspots */}
          <div className="relative flex-1 flex justify-center items-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfpzfs_kg7lxs1GXnmvgh4rmuWd8ZU0QXi9o85U1aBJIgKp5GKvgyHC45IlxK9Mwg-wwb6KhnA0YrWH9J3ivui6AQTx102Gmd93BP_QwxqVvj5jbxdGLzm-hW_9siQ3T-cyND7f6pxcfhILjARPG-XIduht85VT-l-eHgIM5VjWctrflWB7qbm1PLZogaXL3PNMmRg7IuERBoikeS8eTQL9F3g3ePy1nzvJjsxddUNjUs-06-hWhKsXNPzQqso0wrfCcVMQoetZ5ar"
              alt="Premium modern car"
              className="max-w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
            />
            {/* Hotspots */}
            {[
              { top: '65%', left: '18%' },
              { top: '62%', left: '25%' },
              { top: '65%', left: '75%' },
              { top: '45%', left: '50%' },
            ].map((pos, idx) => (
              <div
                key={idx}
                className="absolute group cursor-pointer"
                style={{ top: pos.top, left: pos.left }}
              >
                <div className="relative">
                  <div className="w-4 h-4 bg-accent rounded-full hotspot-pulse"></div>
                  <div className="w-4 h-4 bg-accent rounded-full absolute top-0 left-0"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Menu List */}
          <div className="w-full lg:w-80 bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden rounded-2xl">
            <div className="bg-accent px-8 py-4">
              <h3 className="font-display text-xl font-bold text-white uppercase tracking-wider">
                УСЛУГИ
              </h3>
            </div>
            <ul className="p-4 space-y-1">
              {listItems.map((item, idx) => {
                const isActive = item === 'Смяна на гуми';
                return (
                  <li
                    key={idx}
                    className={`flex items-center gap-3 p-3 transition-colors rounded cursor-pointer group ${
                      isActive
                        ? 'text-white bg-white/10'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span
                      className={`material-symbols-outlined text-accent text-sm transition-transform ${
                        isActive ? 'translate-x-1' : 'group-hover:translate-x-1'
                      }`}
                    >
                      arrow_forward_ios
                    </span>
                    <span
                      className={`${
                        isActive ? 'font-bold' : 'font-medium'
                      } text-sm uppercase tracking-wide`}
                    >
                      {item}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 p-4 rounded-full flex items-center justify-center gap-4 hover:bg-white/10 transition-colors"
            >
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-xl">
                  {stat.icon}
                </span>
              </div>
              <div className="text-left">
                <p className="text-white font-black text-xl leading-none">{stat.value}</p>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FullCare;