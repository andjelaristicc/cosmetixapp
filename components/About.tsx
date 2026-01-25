
import React from 'react';
import { Heart, Sparkles, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4 animate-reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-bold border border-rose-100">
            <MapPin size={16} />
            <span>Global Innovation, Personal Service</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-slate-900">About Us</h1>
        </div>

        <div className="bg-white rounded-[40px] p-8 md:p-16 shadow-xl border border-slate-100 relative overflow-hidden animate-reveal-up stagger-2">
          <div className="absolute top-0 right-0 p-8 text-rose-100 animate-float">
            <Heart size={120} strokeWidth={1} />
          </div>
          
          <div className="relative z-10 space-y-8">
            <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-relaxed italic">
              "We understand that in a beauty studio, the craft is the focus. Technology should support you, not hold you back. Our goal is to bridge the gap between excellent service and modern AI, ensuring no client ever feels ignored."
            </p>
            
            <div className="pt-8 border-t border-slate-100 flex items-center gap-4">
              <div className="w-16 h-16 bg-slate-900 rounded-full flex items-center justify-center text-white animate-pulse">
                <Sparkles size={32} />
              </div>
              <div>
                <p className="font-bold text-xl text-slate-900">Cosmetix Team</p>
                <p className="text-slate-500 font-medium tracking-wide uppercase text-xs">Innovation with a personal touch</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-rose-50 rounded-3xl space-y-4 animate-reveal-up stagger-3">
            <h3 className="text-xl font-bold text-slate-900">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              We empower beauty professionals to focus on their clients by automating the repetitive tasks that pull them away from their passion.
            </p>
          </div>
          <div className="p-8 bg-teal-50 rounded-3xl space-y-4 animate-reveal-up stagger-4">
            <h3 className="text-xl font-bold text-slate-900">Our Values</h3>
            <p className="text-slate-600 leading-relaxed">
              Excellence in service, transparency in technology, and a deep respect for the artistry of the beauty industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;