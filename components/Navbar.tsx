
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="text-2xl font-serif font-bold text-rose-600 tracking-tight">Cosmetix</Link>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-semibold border border-slate-200 px-2 py-0.5 rounded-full">AI Assistant</span>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={() => scrollToSection('problem')} className="text-slate-600 hover:text-rose-600 font-medium transition-colors">The Challenge</button>
            <button onClick={() => scrollToSection('solution')} className="text-slate-600 hover:text-rose-600 font-medium transition-colors">How it works</button>
            <Link to="/about" className="text-slate-600 hover:text-rose-600 font-medium transition-colors">About Us</Link>
            <button onClick={() => scrollToSection('demo')} className="bg-rose-600 text-white px-6 py-2.5 rounded-full font-semibold hover:bg-rose-700 transition-all shadow-lg shadow-rose-200 flex items-center gap-2">
              <Phone size={18} />
              Try Demo Call
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 flex flex-col space-y-4 shadow-xl">
          <button onClick={() => scrollToSection('problem')} className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50 text-left">The Challenge</button>
          <button onClick={() => scrollToSection('solution')} className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50 text-left">How it works</button>
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-700 py-2 border-b border-slate-50 text-left">About Us</Link>
          <button onClick={() => scrollToSection('demo')} className="bg-rose-600 text-white px-6 py-4 rounded-xl font-bold text-center">
            Try Demo Call Now
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
