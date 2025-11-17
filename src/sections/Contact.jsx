import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Contact() {
  // Function to open WhatsApp
  const openWhatsApp = () => {
    // Format: 62 (Indonesia country code) + phone number without leading 0
    const phoneNumber = '6282299958955'; // 082299958955 -> 6282299958955
    const message = 'Halo PT. Sumber Cahaya Timur, saya ingin bertanya mengenai layanan Anda.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Fungsi untuk membuka Gmail Compose langsung di browser
const openEmail = () => {
  const email = 'sumbercahayatimur88@gmail.com';
  const subject = 'Pertanyaan mengenai PT. Sumber Cahaya Timur';
  const body = 'Halo PT. Sumber Cahaya Timur,%0D%0A%0D%0ASaya ingin bertanya mengenai...';
  
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${body}`;
  
  window.open(gmailUrl, '_blank'); // buka di tab baru
};
  // Function to open Google Maps (you'll need to replace this with actual location)
  const openMaps = () => {
    // Option 1: Using Google Maps with address
    const address = 'Jl. Lengkong Wuaya Lingk. 3, Kairagi Weru, Manado 95129';
    const mapsUrl = `https://maps.app.goo.gl/qqwx39iAx8vDwUfBA?g_st=aw`;
    
    
    window.open(mapsUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Hubungi Kami</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Alamat - Clickable */}
          <div 
            className="text-center cursor-pointer hover:transform hover:scale-105 transition-all duration-300 group"
            onClick={openMaps}
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="font-bold mb-2 text-xl group-hover:text-blue-400 transition-colors">Alamat</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors">
              KEC Cluster Amethyst Blok A9 No. 23, Lingk.3<br />
              Kel. Buha, Kec. Mapanget, Manado 95129
            </p>
            <p className="text-sm text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Klik untuk buka Maps
            </p>
          </div>

          {/* Telepon - Clickable (WhatsApp) */}
          <div 
            className="text-center cursor-pointer hover:transform hover:scale-105 transition-all duration-300 group"
            onClick={openWhatsApp}
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500 transition-colors">
              <Phone className="h-8 w-8" />
            </div>
            <h3 className="font-bold mb-2 text-xl group-hover:text-green-400 transition-colors">Telepon</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors">+62 822-9995-8955</p>
            <p className="text-sm text-green-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Klik untuk chat WhatsApp
            </p>
          </div>

          {/* Email - Clickable */}
          <div 
            className="text-center cursor-pointer hover:transform hover:scale-105 transition-all duration-300 group"
            onClick={openEmail}
          >
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500 transition-colors">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="font-bold mb-2 text-xl group-hover:text-blue-400 transition-colors">Email</h3>
            <p className="text-gray-300 group-hover:text-white transition-colors">sumbercahayatimur88@gmail.com</p>
            <p className="text-sm text-blue-400 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
              Klik untuk kirim email
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}