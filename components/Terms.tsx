
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Terms and Conditions</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
          <p>By accessing and using this website, provided by MBP Solutions LLC, Wyoming, you agree to be bound by these terms and conditions. These terms apply to all visitors, users, and others who access or use the Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of Service</h2>
          <p>Cosmetix is an AI-powered phone assistant service designed for beauty and cosmetic studios. The service includes automated call handling, appointment scheduling, and customer query resolution.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. 30-Day Free Trial</h2>
          <p>We offer a 30-day trial period for new customers. No setup fee or commitment is required during this period. At the end of the 30 days, the user may choose to upgrade to a paid subscription or discontinue the service without charge.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Privacy and Data Security</h2>
          <p>We take data protection seriously. Please refer to our Privacy Policy for details on how we collect, use, and protect your information and that of your clients. We comply with relevant US data protection laws.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Limitation of Liability</h2>
          <p>MBP Solutions LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses resulting from your access to or use of the service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of Wyoming, United States, without regard to its conflict of law provisions.</p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
