import React from 'react';
import { Moon, Sun, Bell } from 'lucide-react';
import ProfileDropdown from './ProfileDropdown';

const Header = ({ user, darkMode, setDarkMode }) => {
  return (
    <header className="flex justify-between items-center p-4 glass">
      <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
      <div className="flex items-center space-x-4">
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <Bell size={20} className="cursor-pointer" />
        <ProfileDropdown user={user} />
      </div>
    </header>
  );
};

export default Header;
