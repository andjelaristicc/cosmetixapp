
import React from 'react';
import { Phone, CheckCircle, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToDemo = () => {
    document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-rose-100/50 rounded-full blur-3xl -z-10 animate-reveal-fade"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[400px] h-[400px] bg-teal-50/50 rounded-full blur-3xl -z-10 animate-reveal-fade stagger-2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-700 rounded-full text-sm font-bold border border-rose-100 animate-reveal-up stagger-1">
              <Sparkles size={16} />
              <span>The Next Generation of Beauty Studio Reception</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight animate-reveal-up stagger-2">
              Never lose a client again because you're <span className="text-rose-600 italic">in a treatment.</span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed animate-reveal-up stagger-3">
              Meet Cosmetix: Your AI Phone Assistant. She handles calls 24/7, answers technical questions, and books appointments directly into your calendar while you focus on your craft.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-reveal-up stagger-4">
              <button 
                onClick={scrollToDemo}
                className="bg-rose-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-200 flex items-center justify-center gap-3 transform hover:-translate-y-1 active:scale-95"
              >
                <Phone size={20} />
                Start Free Demo Call
              </button>
              <button 
                onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-full text-lg font-bold hover:bg-slate-50 transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                View Special Offer
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-500 font-medium animate-reveal-fade stagger-4">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-teal-500" />
                <span>24/7 Availability</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-teal-500" />
                <span>Calendar Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-teal-500" />
                <span>No Hiring Required</span>
              </div>
            </div>
          </div>

          <div className="relative group animate-reveal-fade stagger-3">
            <div className="absolute inset-0 bg-rose-200 blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white animate-float">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2000&auto=format&fit=crop" 
                alt="Beauty Professional at work" 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur px-6 py-4 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 animate-pulse">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 leading-none">Cosmetix is answering...</p>
                    <p className="text-xs text-slate-500 mt-1">Booking for Mrs. Thompson in progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;