import React from 'react';
import { Building2, MapPin } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

export default function Projects() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [project1Ref, project1Visible] = useScrollAnimation(0.1);
  const [project2Ref, project2Visible] = useScrollAnimation(0.1);
  const [project3Ref, project3Visible] = useScrollAnimation(0.1);

  const projects = [
    { name: 'Perumahan Kamangta Blessing Residence', location: 'Minahasa', color: 'from-blue-400 to-blue-600' },
    { name: 'Perumahan Damai Sukacita Tewaan', location: 'Bitung', color: 'from-green-400 to-green-600' },
    { name: 'Perumahan Citraloka Buha', location: 'Manado', color: 'from-orange-400 to-orange-600' }
  ];

  const projectRefs = [project1Ref, project2Ref, project3Ref];
  const projectVisibles = [project1Visible, project2Visible, project3Visible];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Klien & Proyek Kami</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx}
              ref={projectRefs[idx]}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-1000 ${
                projectVisibles[idx] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                <Building2 className="h-24 w-24 text-white opacity-50" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">{project.name}</h3>
                <p className="text-gray-600 flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}