
import React from 'react';
import { Phone, Play, Volume2 } from 'lucide-react';

const Demo: React.FC = () => {
  return (
    <section id="demo" className="py-24 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-reveal-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-slate-900">Don't take our word for it. <br/><span className="text-rose-600">Try it now.</span></h2>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-[40px] shadow-2xl border border-rose-100 relative overflow-hidden group animate-reveal-up stagger-2">
          <div className="absolute top-0 right-0 p-4">
             <div className="w-3 h-3 bg-rose-500 rounded-full animate-ping"></div>
          </div>
          
          <p className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-4">Call Cosmetix Now</p>
          <div className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 font-mono tracking-tight group-hover:text-rose-600 transition-colors">
            08941433110 
          </div>
          
          <div className="space-y-6">
            <p className="text-slate-600 text-lg italic">"Ask her about booking a facial, our current pricing, or if we have openings this Friday afternoon."</p>
            
            <div className="pt-8 border-t border-slate-100">
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Or Listen to a sample</p>
              <button className="flex items-center gap-4 mx-auto bg-slate-900 text-white px-6 py-4 rounded-2xl hover:bg-slate-800 transition-all group active:scale-95">
                <div className="w-10 h-10 bg-rose-600 rounded-full flex items-center justify-center">
                  <Play size={18} fill="white" />
                </div>
                <div className="text-left">
                  <p className="font-bold">Play Sample Call</p>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Volume2 size={12} />
                    <span>Cosmetix booking a Botox Treatment</span>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
        
        <p className="mt-12 text-slate-500 font-medium max-w-lg mx-auto animate-reveal-fade stagger-4">
          Notice how she handles objections, confirms details, and sounds incredibly professional. No robots here.
        </p>
      </div>
    </section>
  );
};

export default Demo;
