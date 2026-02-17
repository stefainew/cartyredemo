import React from 'react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <div className="relative group h-[450px] overflow-hidden shadow-2xl border-8 border-white">
            <iframe
              title="Google Map Location"
              allowFullScreen
              className="absolute inset-0 w-full h-full grayscale-[0.3] contrast-[1.1] hover:grayscale-0 transition-all duration-500"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2932.747376044714!2d23.33475141546594!3d42.66205577916776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa85f839555555%3A0x6758414444444444!2sVelikan%20Tyre%20Service!5e0!3m2!1sen!2sbg!4v1715600000000!5m2!1sen!2sbg"
              style={{ border: 0 }}
            ></iframe>
            <div className="absolute top-4 left-4 bg-secondary text-white px-4 py-2 font-display font-bold uppercase tracking-widest text-xs z-10 border-l-4 border-primary">
              Нашата локация
            </div>
          </div>

          {/* Text Info */}
          <div className="lg:pl-8">
            <h2 className="font-display text-4xl md:text-5xl font-black text-secondary uppercase mb-8 leading-none tracking-tighter">
              Ела при професионалистите — <span className="text-primary">Намери ни лесно</span>
            </h2>
            <div className="space-y-8">
              <div className="bg-white p-6 border-l-4 border-primary shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-primary text-3xl">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
                    Точен адрес
                  </p>
                  <p className="text-secondary font-bold text-lg leading-snug">
                    ул. "Иван Странски" 1, кв. Студентски град, София
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=42.6506972,23.3516584"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-4 bg-primary hover:bg-orange-600 text-white px-10 py-5 font-black text-xl transition-all uppercase shadow-xl shadow-orange-500/30 group"
              >
                <span>📍 Навигирай до нас</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  directions_car
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;