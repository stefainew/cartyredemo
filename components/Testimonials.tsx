import React from "react";
import { TestimonialsColumn, Testimonial } from "./ui/testimonials-columns-1";
import { motion } from "motion/react";

const testimonials: Testimonial[] = [
  {
    text: "Изключително бързо обслужване. Смениха гумите ми за 20 минути, докато пиех кафе. Перфектен баланс!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    name: "Иван П.",
    role: "Смяна на гуми",
  },
  {
    text: "Дойдох без записан час за лепене на гума и ме приеха веднага. Майсторите са много любезни и си разбират от работата.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    name: "Десислава М.",
    role: "Ремонт и лепене",
  },
  {
    text: "Най-доброто място в София за изправяне на джанти. Машините им са нови, а диагностиката е много точна.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    name: "Николай Т.",
    role: "Джанти и диагностика",
  },
  {
    text: "Много съм доволен от отношението. Обясниха ми всичко за състоянието на гумите и ми дадоха полезни съвети.",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    name: "Петър Г.",
    role: "Консултация",
  },
  {
    text: "Професионализъм на високо ниво. Препоръчвам горещо на всеки, който държи на качеството.",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    name: "Мария С.",
    role: "Сезонна смяна",
  },
  {
    text: "Бързи, коректни и с нормални цени. Ползвам услугите им от години и никога не са ме разочаровали.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    name: "Георги Д.",
    role: "Редовен клиент",
  },
  {
    text: "Хотелът за гуми е много удобен. Не се налага да ги мъкна всеки сезон. Всичко е организирано перфектно.",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    name: "Елена В.",
    role: "Хотел за гуми",
  },
  {
    text: "Спуках гума в неделя и те бяха единствените, които работеха. Спасиха ми пътуването!",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    name: "Димитър К.",
    role: "Авариен ремонт",
  },
  {
    text: "Внимание към детайла, което рядко се среща. Почистиха главините преди монтажа, което е много важно.",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    name: "Александър Б.",
    role: "Монтаж и баланс",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[800px] mx-auto mb-16"
        >
          <div className="flex justify-center mb-6">
            <div className="border border-primary/20 bg-primary/5 text-primary py-1 px-4 rounded-full font-bold uppercase tracking-widest text-xs">
              Клиентски отзиви
            </div>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tighter text-secondary text-center">
            Какво казват клиентите
          </h2>
          <div className="w-20 h-1.5 bg-primary mx-auto mt-4 mb-4"></div>
          <p className="text-center mt-5 text-slate-500 text-lg max-w-2xl">
            Вижте мненията на хората, които вече се довериха на нашия професионализъм и отношение.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={35} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>

        <div className="text-center mt-12 relative z-20">
          <a
            href="https://maps.app.goo.gl/uBVcwTkMWyZFj7Y5A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-bold text-secondary border-b-2 border-primary pb-1 hover:text-primary transition-colors uppercase tracking-widest"
          >
            Виж всички ревюта в Google
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;