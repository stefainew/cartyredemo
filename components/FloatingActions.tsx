import React from 'react';

const FloatingActions: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-40">
      <a
        href="tel:0899000000"
        className="bg-green-600 text-white p-5 rounded shadow-2xl hover:scale-105 transition-transform flex items-center justify-center"
      >
        <span className="material-symbols-outlined text-3xl">call</span>
      </a>
      <button
        className="bg-primary text-white p-5 rounded shadow-2xl hover:scale-105 transition-transform flex items-center justify-center"
        onClick={scrollToTop}
      >
        <span className="material-symbols-outlined text-3xl">expand_less</span>
      </button>
    </div>
  );
};

export default FloatingActions;