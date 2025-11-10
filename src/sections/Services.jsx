import React from 'react';
import { Briefcase, Building2, Users, ChevronRight } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Services() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [service1Ref, service1Visible] = useScrollAnimation(0.1);
  const [service2Ref, service2Visible] = useScrollAnimation(0.1);
  const [service3Ref, service3Visible] = useScrollAnimation(0.1);
  const [advantagesRef, advantagesVisible] = useScrollAnimation(0.1);

  const advantages = [
    { title: 'Pengalaman & Keahlian', desc: 'Tim manajemen dan staf yang berpengalaman dan ahli di bidangnya' },
    { title: 'Kualitas & Standar', desc: 'Komitmen terhadap kualitas produk/layanan yang tinggi dan kepatuhan terhadap standar industri' },
    { title: 'Jaringan Luas', desc: 'Hubungan yang kuat dengan pemasok/vendor terkemuka dan jaringan distribusi/klien yang luas' },
    { title: 'Inovasi Berkelanjutan', desc: 'Adaptasi terhadap teknologi dan tren terbaru untuk memberikan solusi terbaik' },
    { title: 'Pelayanan Pelanggan', desc: 'Pendekatan yang berpusat pada pelanggan dengan dukungan purna jual yang responsif' },
    { title: 'Manajemen Efisien', desc: 'Operasional yang efisien untuk memastikan harga yang kompetitif dan pengiriman tepat waktu' }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Bidang Usaha & Layanan</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div 
            ref={service1Ref}
            className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-1000 ${
              service1Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Briefcase className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Perdagangan Umum</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Distribusi dan penjualan bahan bangunan</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Jaringan distribusi luas di Sulawesi Utara</span>
              </li>
            </ul>
          </div>

          <div 
            ref={service2Ref}
            className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-1000 delay-200 ${
              service2Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Building2 className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Kontraktor Sipil</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Jasa konstruksi sipil (bangunan gedung)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Manajemen proyek</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Desain dan perencanaan</span>
              </li>
            </ul>
          </div>

          <div 
            ref={service3Ref}
            className={`bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-1000 delay-400 ${
              service3Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Developer Perumahan</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Jasa konstruksi sipil (bangunan rumah)</span>
              </li>
              <li className="flex items-start">
                <ChevronRight className="h-5 w-5 text-orange-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Desain dan perencanaan rumah</span>
              </li>
            </ul>
          </div>
        </div>

        <div 
          ref={advantagesRef}
          className={`bg-white rounded-lg shadow-lg p-8 transition-all duration-1000 delay-600 ${
            advantagesVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
          }`}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Keunggulan Kompetitif</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, idx) => (
              <div key={idx} className="border-l-4 border-blue-600 pl-4 hover:bg-gray-50 p-4 rounded transition">
                <h4 className="font-bold text-blue-600 mb-2">{advantage.title}</h4>
                <p className="text-sm text-gray-600">{advantage.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}