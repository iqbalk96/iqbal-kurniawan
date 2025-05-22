import React from 'react';
import {
  SiExpo,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiPhp,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuetify,
} from 'react-icons/si';

const SkillsShowcase = () => {
  const skills = [
    { text: 'HTML', Icon: SiHtml5 },
    { text: 'JavaScript', Icon: SiJavascript },
    { text: 'Tailwind CSS', Icon: SiTailwindcss },
    { text: 'React', Icon: SiReact },
    { text: 'Vue', Icon: SiVuetify },
    { text: 'TypeScript', Icon: SiTypescript },
    { text: 'Expo', Icon: SiExpo },
    { text: 'PHP', Icon: SiPhp },
    { text: 'Laravel', Icon: SiLaravel },
    { text: 'Git', Icon: SiGit },
  ];

  return (
    <div className="max-w-5xl mx-auto my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
                            bg-gray-900 
                            text-white 
                            rounded-lg 
                            p-6 
                            flex 
                            flex-col 
                            items-center 
                            justify-center 
                            space-y-2
                        "
          >
            <skill.Icon className="w-12 h-12" />
            <span className="text-lg font-bold">{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;
