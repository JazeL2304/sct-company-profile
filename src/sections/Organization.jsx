import React from 'react';
import { Users } from 'lucide-react';

export default function Organization() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Struktur Organisasi</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-6 text-gray-800 text-center">Dewan Komisaris</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <h5 className="font-bold text-gray-800">Roni.S.T</h5>
                <p className="text-sm text-gray-600">Komisaris Utama</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <Users className="h-10 w-10 text-blue-600 mx-auto mb-2" />
                <h5 className="font-bold text-gray-800">Jason Lim. S.T, B. Eng (Hons)</h5>
                <p className="text-sm text-gray-600">Komisaris</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-6 text-gray-800 text-center">Direksi</h4>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 text-center shadow">
                <Users className="h-10 w-10 text-green-600 mx-auto mb-2" />
                <h5 className="font-bold text-gray-800">Imelda Potu. S.E</h5>
                <p className="text-sm text-gray-600">Direktur Utama</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}