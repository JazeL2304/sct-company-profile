import React from 'react';

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">PT. Sumber Cahaya Timur</h1>
        <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl md:text-2xl mb-8">
          Perdagangan Umum | Kontraktor Sipil | Developer Perumahan
        </p>
        <p className="text-lg mb-8 text-blue-100">
          Mitra terpercaya dalam menyediakan solusi konstruksi dan perdagangan berkualitas tinggi sejak 2022
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition shadow-lg"
        >
          Hubungi Kami
        </button>
      </div>
    </section>
  );
}