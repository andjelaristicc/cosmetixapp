
import React from 'react';

const Impressum: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif animate-reveal-up">Legal Notice (Impressum)</h1>
      <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-8 animate-reveal-up stagger-1">
        <div>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Company Name</h2>
          <p className="text-2xl font-bold text-slate-900">LAMP Solutions LLC</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Registered Address</h2>
          <p className="text-lg text-slate-700">
            75 E 3rd St<br />
            Sheridan, WY 82801<br />
            United States
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Contact Information</h2>
          <p className="text-lg text-slate-700">
            Email: mail@cosmetix.app<br />
            Phone: +1 (307) 381-2870
          </p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Represented By</h2>
          <p className="text-lg text-slate-700">Managing Director: Marcus B. P.</p>
        </div>

        <div>
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Registration Information</h2>
          <p className="text-lg text-slate-700">
            State of Registration: Wyoming, USA<br />
            Entity Number: Available upon request
          </p>
        </div>

        <div className="pt-8 border-t border-slate-100">
          <p className="text-slate-500 italic">
            Note: This page is provided to comply with general internet transparency requirements. As a Wyoming LLC, LAMP Solutions LLC operates under the jurisdictional laws of the State of Wyoming and the United States.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Impressum;
