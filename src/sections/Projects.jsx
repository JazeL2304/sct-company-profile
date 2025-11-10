import React from 'react';
import { MapPin, ExternalLink } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import kamangta from '../assets/photo/kamangta.png';
import tewaan from '../assets/photo/tewaan.png';
import citraloka from '../assets/photo/citraloka.png';

export default function Projects() {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [project1Ref, project1Visible] = useScrollAnimation(0.1);
  const [project2Ref, project2Visible] = useScrollAnimation(0.1);
  const [project3Ref, project3Visible] = useScrollAnimation(0.1);

  const projects = [
    { 
      name: 'Perumahan Kamangta Blessing Residence', 
      location: 'Minahasa', 
      image: kamangta,
      link: 'https://maps.app.goo.gl/e4UrBwEU5qun1Uxr9?g_st=aw' 
    },
    { 
      name: 'Perumahan Damai Sukacita Tewaan', 
      location: 'Bitung', 
      image: tewaan,
      link: 'https://maps.app.goo.gl/SoiefbG2VXnsQdQq9?g_st=aw' 
    },
    { 
      name: 'Perumahan Citraloka Buha', 
      location: 'Manado', 
      image: citraloka,
      link: 'https://maps.app.goo.gl/tgcED7DhAUqo4qRC6?g_st=aw' 
    }
  ];

  const projectRefs = [project1Ref, project2Ref, project3Ref];
  const projectVisibles = [project1Visible, project2Visible, project3Visible];

  const handleProjectClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

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
              onClick={() => handleProjectClick(project.link)}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl cursor-pointer transition-all duration-1000 ${
                projectVisibles[idx] ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
              }`}
              style={{ transitionDelay: `${idx * 200}ms` }}
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <ExternalLink className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition">
                  {project.name}
                </h3>
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