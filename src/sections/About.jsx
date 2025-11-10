import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function About() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Tentang Kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div 
            ref={contentRef}
            className={`bg-white rounded-lg shadow-lg p-8 md:p-12 transition-all duration-1000 delay-300 ${
              contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              PT. Sumber Cahaya Timur adalah perusahaan yang bergerak di bidang perdagangan umum, kontraktor sipil dan developer perumahan. Didirikan pada tahun 2022, kami berkomitmen untuk memberikan solusi dan produk berkualitas tinggi kepada pelanggan kami, didukung oleh tim profesional dan berdedikasi.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Dengan pengalaman yang terus bertumbuh dan semangat inovasi, PT. Sumber Cahaya Timur bertekad untuk menjadi mitra terpercaya dan terkemuka di industrinya.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}