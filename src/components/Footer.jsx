import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 PT. Sumber Cahaya Timur. All rights reserved.</p>
          </div>
          <div className="text-sm">
            <p>Perdagangan Umum | Kontraktor Sipil | Developer Perumahan</p>
          </div>
        </div>
      </div>
    </footer>
  );
}