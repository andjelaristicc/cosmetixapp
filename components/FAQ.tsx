
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ q: string; a: string }> = ({ q, a }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-slate-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-rose-600 transition-colors"
      >
        <span className="text-xl font-bold">{q}</span>
        {isOpen ? <Minus /> : <Plus />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-slate-600 leading-relaxed text-lg">{a}</p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is it really compliant with privacy laws (GDPR/US Privacy)?",
      a: "Yes. Cosmetix is built with security at its core. All data is encrypted, and we follow strict guidelines to ensure client information is handled professionally and safely."
    },
    {
      q: "Does Cosmetix work with my existing booking system?",
      a: "We integrate natively with GoHighLevel, Google Calendar, and Apple Calendar. If you use a different system, our team will work with you during the trial to set up a custom sync."
    },
    {
      q: "What happens if she doesn't know the answer?",
      a: "Cosmetix is smart. If she encounters a question she's not trained on, she will politely inform the client that she'll have a specialist call them back, and she'll immediately notify you via SMS or email."
    },
    {
      q: "How much does it cost after the 30-day trial?",
      a: "Our plans are based on call volume. Most small to medium studios find our 'Pro' plan perfect, starting at a fraction of the cost of a part-time employee."
    },
    {
      q: "Can I customize the voice and personality?",
      a: "Absolutely. During onboarding, we'll help you select the voice profile and 'brand personality' that best matches your studio's luxury experience."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 font-serif">Frequently Asked Questions</h2>
        <div className="space-y-2">
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
