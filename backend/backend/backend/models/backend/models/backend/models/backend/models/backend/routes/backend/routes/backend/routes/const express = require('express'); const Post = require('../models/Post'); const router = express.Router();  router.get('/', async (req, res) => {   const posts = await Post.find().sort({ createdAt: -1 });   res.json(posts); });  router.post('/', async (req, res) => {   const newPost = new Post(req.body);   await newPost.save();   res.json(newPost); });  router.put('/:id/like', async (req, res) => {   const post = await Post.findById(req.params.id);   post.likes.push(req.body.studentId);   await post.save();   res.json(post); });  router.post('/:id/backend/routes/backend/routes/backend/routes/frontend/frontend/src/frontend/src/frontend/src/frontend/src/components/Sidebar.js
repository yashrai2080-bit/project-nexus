import React from 'react';
import { Calendar, Users, Map, BookOpen } from 'lucide-react';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'daily-pulse', label: 'The Daily Pulse', icon: Calendar },
    { id: 'student-exchange', label: 'The Student Exchange', icon: Users },
    { id: 'explorers-guide', label: "The Explorer's Guide", icon: Map },
    { id: 'academic-cockpit', label: 'The Academic Cockpit', icon: BookOpen },
  ];

  return (
    <aside className="w-64 glass p-4">
      <h2 className="text-xl font-bold mb-4">LPU Dashboard</h2>
      <nav>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={`w-full text-left p-2 rounded mb-2 flex items-center ${activeSection === section.id ? 'bg-blue-500' : 'hover:bg-gray-200 dark:hover:bg-gray-700'}`}
          >
            <section.icon className="mr-2" size={20} />
            {section.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
