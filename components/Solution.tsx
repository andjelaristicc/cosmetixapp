
import React from 'react';
import { MessageSquare, Calendar, BookOpen, Clock, ShieldCheck, HeartPulse } from 'lucide-react';

const Solution: React.FC = () => {
  const features = [
    {
      icon: <MessageSquare className="text-teal-600" size={28} />,
      title: "Real Conversations",
      desc: "No 'Press 1 for Sales'. Cosmetix engages in natural, friendly dialogue just like a human receptionist."
    },
    {
      icon: <Calendar className="text-teal-600" size={28} />,
      title: "Seamless Calendar Sync",
      desc: "Books directly into your GoHighLevel, Google, or Apple calendar. Real-time availability checks."
    },
    {
      icon: <BookOpen className="text-teal-600" size={28} />,
      title: "Technical Expertise",
      desc: "She knows your prices, service details, preparation steps, and opening hours by heart."
    },
    {
      icon: <Clock className="text-teal-600" size={28} />,
      title: "24/7 Availability",
      desc: "Late-night bookings while you sleep. Sunday inquiries while you rest. Cosmetix never takes a day off."
    },
    {
      icon: <ShieldCheck className="text-teal-600" size={28} />,
      title: "HIPAA & GDPR Compliant",
      desc: "Secure data handling to ensure your client's privacy is always the top priority."
    },
    {
      icon: <HeartPulse className="text-teal-600" size={28} />,
      title: "Emotional Intelligence",
      desc: "Polite, empathetic, and professional. She mirrors the luxury experience of your brand."
    }
  ];

  return (
    <section id="solution" className="py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(225,29,72,0.1),_transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4 reveal">
          <h2 className="text-3xl md:text-5xl font-bold font-serif">Meet Cosmetix – Your receptionist who never sleeps.</h2>
          <p className="text-xl text-slate-400">Designed by industry experts to bridge the gap between human care and AI efficiency.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((f, i) => (
            <div key={i} className={`flex gap-6 reveal delay-${((i % 3) + 1) * 100}`}>
              <div className="flex-shrink-0 w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center border border-teal-500/20 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-8 reveal">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-2xl font-bold">Ready to let Cosmetix handle your next call?</h4>
            <p className="text-slate-400">Experience the quality for yourself with a live test call.</p>
          </div>
          <button 
            onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-teal-500 text-white px-8 py-4 rounded-full font-bold hover:bg-teal-600 transition-all flex items-center gap-2 whitespace-nowrap active:scale-95"
          >
            Go to Live Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Solution;