import React, { useState } from 'react';
import Home from './components/Home';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div>
      <nav className="bg-blue-600 p-4">
        <ul className="flex justify-around">
          <li className="text-white cursor-pointer" onClick={() => setActiveTab('home')}>Home</li>
          <li className="text-white cursor-pointer" onClick={() => setActiveTab('projects')}>Projects</li>
          <li className="text-white cursor-pointer" onClick={() => setActiveTab('experience')}>Experience</li>
          <li className="text-white cursor-pointer" onClick={() => setActiveTab('contact')}>Contact</li>
        </ul>
      </nav>

      <div className="p-6">
        {activeTab === 'home' && <Home />}
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'experience' && <Experience />}
        {activeTab === 'contact' && <Contact />}
      </div>
    </div>
  );
}

export default App;
