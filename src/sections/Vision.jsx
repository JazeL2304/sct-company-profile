import React from 'react';
import { Target, Award, ChevronRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Vision() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [visionRef, visionVisible] = useScrollAnimation(0.1);
  const [missionRef, missionVisible] = useScrollAnimation(0.1);
  const [valuesRef, valuesVisible] = useScrollAnimation(0.1);

  const values = [
    { title: 'Integritas', desc: 'Kejujuran dan transparansi' },
    { title: 'Profesionalisme', desc: 'Kualitas tinggi' },
    { title: 'Inovasi', desc: 'Solusi terbaik' },
    { title: 'Kolaborasi', desc: 'Kerja sama solid' },
    { title: 'Fokus Pelanggan', desc: 'Kepuasan utama' },
    { title: 'Tanggung Jawab', desc: 'Peduli lingkungan' }
  ];

  return (
    <section id="vision" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Visi & Misi</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div 
            ref={visionRef}
            className={`bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 transition-all duration-1000 ${
              visionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
          >
            <div className="flex items-center mb-6">
              <Target className="h-10 w-10 text-blue-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Visi</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Menjadi perusahaan terkemuka dan terpercaya di Indonesia dalam bidang perdagangan umum, kontraktor sipil dan developer perumahan yang memberikan nilai tambah berkelanjutan bagi pelanggan, karyawan, pemegang saham, dan masyarakat.
            </p>
          </div>

          <div 
            ref={missionRef}
            className={`bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-lg p-8 transition-all duration-1000 delay-200 ${
              missionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
          >
            <div className="flex items-center mb-6">
              <Award className="h-10 w-10 text-green-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-800">Misi</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Menyediakan produk/jasa berkualitas tinggi dan inovatif</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Membangun hubungan jangka panjang dengan pelanggan</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Mengembangkan SDM yang kompeten dan profesional</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Menerapkan tata kelola perusahaan yang baik</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Menciptakan nilai tambah berkelanjutan</span>
              </li>
            </ul>
          </div>
        </div>

        <div 
          ref={valuesRef}
          className={`bg-gray-50 rounded-lg p-8 transition-all duration-1000 delay-400 ${
            valuesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Nilai-Nilai Perusahaan</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow text-center hover:shadow-lg transition">
                <h4 className="font-bold text-blue-600 mb-2">{value.title}</h4>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}