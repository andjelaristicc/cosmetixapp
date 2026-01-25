
import React from 'react';
import { PhoneOff, TrendingDown, ZapOff } from 'lucide-react';

const Problem: React.FC = () => {
  const problems = [
    {
      icon: <PhoneOff className="text-rose-500" size={32} />,
      title: "Missed Connections",
      desc: "80% of callers won't leave a message. They just hang up and call the next studio on their list."
    },
    {
      icon: <TrendingDown className="text-rose-500" size={32} />,
      title: "Revenue Leakage",
      desc: "Every unanswered call is a potential high-ticket treatment lost to your local competition."
    },
    {
      icon: <ZapOff className="text-rose-500" size={32} />,
      title: "Distraction Stress",
      desc: "Constant interruptions break your flow and disturb the peaceful atmosphere your clients pay for."
    }
  ];

  return (
    <section id="problem" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900">The Silent Cost of a Busy Studio</h2>
          <p className="text-xl text-slate-600 italic">You can't do two things at once. When you pick up the phone, your client feels neglected. When you don't, your business feels the impact.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((item, idx) => (
            <div 
              key={idx} 
              className={`p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-rose-100 hover:bg-rose-50/30 transition-all group reveal delay-${(idx + 1) * 100}`}
            >
              <div className="mb-6 p-4 bg-white rounded-2xl w-fit shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;