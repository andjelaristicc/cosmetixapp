
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2 space-y-6">
            <Link to="/" className="text-3xl font-serif font-bold text-rose-600 tracking-tight">Cosmetix</Link>
            <p className="text-slate-500 max-w-sm text-lg leading-relaxed">
              Bridging the gap between luxury beauty services and modern AI technology. Helping studio owners scale without the stress of missed calls.
            </p>
            <div className="space-y-4">
               <div className="flex items-center gap-3 text-slate-600">
                  <MapPin size={18} className="text-rose-500" />
                  <span>MBP Solutions LLC, Wyoming, USA</span>
               </div>
               <div className="flex items-center gap-3 text-slate-600">
                  <Mail size={18} className="text-rose-500" />
                  <span>mail@cosmetix.app</span>
               </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-400">Navigation</h4>
            <ul className="space-y-4 text-slate-600">
              <li><Link to="/about" className="hover:text-rose-600">About Us</Link></li>
              <li><button onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-rose-600">The Problem</button></li>
              <li><button onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-rose-600">How it works</button></li>
              <li><button onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-rose-600">Special Offer</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-slate-400">Legal</h4>
            <ul className="space-y-4 text-slate-600">
              <li><Link to="/terms" className="hover:text-rose-600">Terms & Conditions</Link></li>
              <li><Link to="/impressum" className="hover:text-rose-600">Impressum / Legal Notice</Link></li>
              <li><a href="#" className="hover:text-rose-600">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} MBP Solutions LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-rose-600 transition-colors">Instagram</a>
            <a href="#" className="hover:text-rose-600 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
