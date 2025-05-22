import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import dnaToursID from '../media/dna-tour-portfolio.png';
import yudiAC from '../media/yudi-ac-portofolio.png';
import bedasApp from '../media/bedas-portofolio.png';
import Image from 'next/image';

const ProjectsShowcase = () => {
  const projects = [
    {
      title: 'DNA Tours ID',
      description:
        'DNA Tours ID is a web application that allows users to book tours and activities in Indonesia. It features a user-friendly interface, secure payment processing, and a wide range of tour options.',
      tech: ['Laravel', 'Bootstrap'],
      github: '#',
      live: '#',
      image: dnaToursID,
    },
    {
      title: 'Yudi AC Service',
      description:
        'Yudi AC Service is a web based on WordPress that provides air conditioning repair and maintenance services. It features a simple booking system, service descriptions, and customer testimonials.',
      tech: ['Wordpress', 'PHP'],
      github: '#',
      live: '#',
      image: yudiAC,
    },
    {
      title: 'Bedas Quick Response',
      description:
        'Bedas Quick Response is a mobile application that provides quick access to emergency services in Bandung area. It features a user-friendly interface, and a wide range of emergency services.',
      tech: ['React Native', 'PHP'],
      github: '#',
      live: '#',
      image: bedasApp,
    },
  ];

  return (
    <div className="w-full p-8 bg-bg dark:bg-darkBg">
      <div
        className="w-full bg-bg border-4 border-black dark:bg-darkBg
                          shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
                          transform hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]
                          transition-all duration-300 p-6 mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-black text-black text-center dark:text-darkText">
          Projects I&#39;ve Worked On
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-bg p-6 rounded-lg transform transition-transform hover:scale-105 dark:bg-darkBg"
            style={{
              border: '3px solid black',
              boxShadow: '8px 8px 0px 0px #000000',
            }}
          >
            <div className="relative mb-4 overflow-hidden rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                className="w-full object-cover transition-transform group-hover:scale-110"
                width={600} // Add width and height attributes
                height={400}
              />
            </div>

            <h3 className="text-2xl font-bold mb-2 transform">{project.title}</h3>

            <p className="text-text dark:text-darkText mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-sm font-semibold bg-yellow-300 dark:text-black"
                  style={{
                    border: '2px solid black',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4">
              {project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-400 text-black font-bold transform transition-transform hover:-translate-y-1 hover:shadow-lg dark:text-black"
                  style={{
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px 0px #000000',
                  }}
                >
                  <Github size={20} />
                  Code
                </a>
              )}
              {project.github !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-green-400 text-black font-bold transform transition-transform hover:-translate-y-1 hover:shadow-lg dark:text-black"
                  style={{
                    border: '2px solid black',
                    boxShadow: '4px 4px 0px 0px #000000',
                  }}
                >
                  <ExternalLink size={20} />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsShowcase;
