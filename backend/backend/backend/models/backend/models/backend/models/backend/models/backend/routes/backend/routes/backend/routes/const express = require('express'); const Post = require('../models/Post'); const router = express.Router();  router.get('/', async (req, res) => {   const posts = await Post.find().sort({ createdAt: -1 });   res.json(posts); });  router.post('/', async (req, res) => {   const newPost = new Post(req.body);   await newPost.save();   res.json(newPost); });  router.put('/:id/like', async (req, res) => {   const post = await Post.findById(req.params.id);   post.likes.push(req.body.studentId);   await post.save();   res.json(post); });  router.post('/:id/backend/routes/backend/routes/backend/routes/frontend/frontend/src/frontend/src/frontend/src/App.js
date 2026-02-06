@tailwind base;
@tailwind components;
@tailwind utilitieimport React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DailyPulse from './pages/DailyPulse';
import StudentExchange from './pages/StudentExchange';
import ExplorersGuide from './pages/ExplorersGuide';
import AcademicCockpit from './pages/AcademicCockpit';

function App() {
  const [activeSection, setActiveSection] = useState('daily-pulse');
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const login = async (email, password) => {
    const res = await axios.post('/api/auth/login', { email, password });
    setUser(res.data.user);
    localStorage.setItem('token', res.data.token);
  };

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen glass">
        <form onSubmit={(e) => { e.preventDefault(); login(e.target.email.value, e.target.password.value); }}>
          <input name="email" placeholder="Email" className="block mb-2 p-2 rounded" />
          <input name="password" type="password" placeholder="Password" className="block mb-2 p-2 rounded" />
          <button className="bg-blue-500 text-white p-2 rounded">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="flex-1 flex flex-col">
        <Header user={user} darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="p-6 overflow-auto">
          {activeSection === 'daily-pulse' && <DailyPulse user={user} />}
          {activeSection === 'student-exchange' && <StudentExchange user={user} />}
          {activeSection === 'explorers-guide' && <ExplorersGuide />}
          {activeSection === 'academic-cockpit' && <AcademicCockpit user={user} />}
        </main>
      </div>
    </div>
  );
}

export default App;s;

body {
  @apply bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100;
}

.glass {
  @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg;
}
