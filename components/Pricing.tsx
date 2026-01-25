
import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[48px] p-12 md:p-20 relative text-white overflow-hidden reveal">
          {/* Accent Blobs */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-rose-600/20 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-500/20 rounded-full blur-[100px] animate-float"></div>

          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-rose-300 rounded-full text-sm font-bold border border-white/10 reveal delay-100">
                <Gift size={16} />
                <span>Limited Time Offer</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold font-serif leading-tight reveal delay-200">30-Day Risk-Free Trial.</h2>
              <div className="space-y-4">
                <p className="text-xl text-slate-300 reveal delay-300">We are so confident Cosmetix will transform your studio that we'll set everything up for you for free.</p>
                <ul className="space-y-3">
                  {["Zero Setup Fees", "No Hidden Costs", "Custom Voice Training", "Full GHL Integration"].map((item, i) => (
                    <li key={i} className={`flex items-center gap-3 text-slate-300 reveal delay-${400 + (i * 100)}`}>
                      <div className="w-5 h-5 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400">
                        <ArrowRight size={12} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white text-slate-900 p-10 rounded-[40px] shadow-2xl text-center space-y-8 reveal delay-500 transform hover:scale-[1.02] transition-transform">
              <div className="space-y-2">
                <p className="text-sm font-bold text-rose-600 uppercase tracking-widest">Try it today</p>
                <div className="text-5xl font-bold">$0.00</div>
                <p className="text-slate-500">for your first 30 days</p>
              </div>
              
              <div className="space-y-4">
                <button className="w-full bg-rose-600 text-white py-5 rounded-2xl text-xl font-bold hover:bg-rose-700 transition-all transform hover:shadow-2xl hover:shadow-rose-300 active:scale-95">
                  Claim Your 30 Days
                </button>
                <p className="text-xs text-slate-400">No commitment required. If you don't see more bookings after 30 days, you pay nothing.</p>
              </div>
              
              <div className="pt-6 border-t border-slate-100 flex justify-center gap-4 grayscale opacity-50">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg" alt="Stripe" className="h-6" />
                 <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="Paypal" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;