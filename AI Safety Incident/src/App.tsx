import React from 'react';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
          <h1 className="text-xl font-bold">HumanChain</h1>
          <div className="text-sm">AI Safety Platform</div>
        </div>
      </header>
      
      <main>
        <Dashboard />
      </main>
      
      <footer className="bg-gray-100 py-4 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600 text-sm">
          © 2025 HumanChain - Building a safer, more trustworthy, and human-centric digital world
        </div>
      </footer>
    </div>
  );
}

export default App;