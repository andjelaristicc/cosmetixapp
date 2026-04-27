import React from 'react';

const HIPAA: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">HIPAA Compliance and Health Data Disclaimer</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p className="text-sm text-slate-500">Effective Date: February 10, 2026</p>
        <div className="bg-slate-50 p-4 rounded-lg text-sm space-y-1">
          <p><strong>Company Name:</strong> LAMP Solutions LLC</p>
          <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
          <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
          <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>This HIPAA Compliance and Health Data Disclaimer ("Policy") explains how LAMP Solutions LLC ("Company," "Cosmetix," "we," "us," or "our") addresses privacy and security requirements related to health-related information when providing the Cosmetix AI Phone Assistant service (the "Service").</p>
          <p>This Policy applies to customers and users who operate businesses that may collect, process, or handle health-related information through the Service.</p>
          <p>This Policy is intended to clarify the roles, responsibilities, and limitations related to compliance with the Health Insurance Portability and Accountability Act of 1996 ("HIPAA") and related regulations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Nature of the Service</h2>
          <p>Cosmetix provides an AI-powered communication and scheduling platform designed to handle inbound calls, provide information, and schedule appointments.</p>
          <p>The Service is a technology platform and does not provide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Medical advice</li>
            <li>Medical diagnosis</li>
            <li>Medical treatment</li>
            <li>Healthcare services</li>
          </ul>
          <p className="mt-4">Cosmetix functions solely as a communication and automation tool.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. HIPAA Applicability</h2>
          <p>HIPAA applies to specific types of organizations known as Covered Entities and their Business Associates.</p>
          <p>Covered Entities include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Healthcare providers</li>
            <li>Health plans</li>
            <li>Healthcare clearinghouses</li>
          </ul>
          <p className="mt-4">Business Associates are service providers that process Protected Health Information ("PHI") on behalf of Covered Entities.</p>
          <p>It is the responsibility of each customer to determine whether HIPAA applies to their use of the Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Role of LAMP Solutions LLC</h2>
          <p>LAMP Solutions LLC operates as a software service provider.</p>
          <p>Depending on how the Service is used, LAMP Solutions LLC may act as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>A service provider processing data on behalf of customers</li>
            <li>A technology provider offering communication tools</li>
          </ul>
          <p className="mt-4">LAMP Solutions LLC does not act as a healthcare provider or medical entity.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Customer Responsibility for HIPAA Compliance</h2>
          <p>Customers are solely responsible for ensuring their own compliance with HIPAA and other applicable healthcare privacy laws.</p>
          <p>Customer responsibilities include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Determining whether HIPAA applies to their business</li>
            <li>Obtaining required patient consents</li>
            <li>Providing appropriate privacy notices</li>
            <li>Configuring the Service appropriately</li>
            <li>Ensuring lawful handling of Protected Health Information</li>
          </ul>
          <p className="mt-4">Customers are responsible for how they use the Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Protected Health Information (PHI)</h2>
          <p>Protected Health Information (PHI) includes individually identifiable health information related to an individual's health condition, treatment, or healthcare services.</p>
          <p>The Service may process communication data that could include health-related information depending on customer use.</p>
          <p>Customers are responsible for ensuring lawful processing of such information.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. No Guarantee of HIPAA Compliance Without Additional Agreements</h2>
          <p>Use of the Service alone does not automatically establish a Business Associate relationship under HIPAA.</p>
          <p>A separate written Business Associate Agreement ("BAA") may be required in certain circumstances.</p>
          <p>Unless explicitly agreed in writing, LAMP Solutions LLC does not enter into Business Associate Agreements by default.</p>
          <p>Customers requiring a Business Associate Agreement must contact us to request evaluation and approval.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security Measures</h2>
          <p>We implement reasonable security measures designed to protect data processed through the Service, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption in transit</li>
            <li>Access controls</li>
            <li>Secure infrastructure</li>
            <li>Authentication safeguards</li>
            <li>Monitoring and logging</li>
          </ul>
          <p className="mt-4">These measures are designed to support secure data processing but do not independently guarantee HIPAA compliance for customer use cases.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. No Medical or Healthcare Advice</h2>
          <p>The Service does not provide medical advice or clinical decision-making.</p>
          <p>Any information communicated through the Service is generated based on customer-provided content and configuration.</p>
          <p>Customers are solely responsible for the accuracy and appropriateness of all communications.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Limitation of Liability Related to Health Data</h2>
          <p>To the fullest extent permitted by law, LAMP Solutions LLC shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customer misuse of the Service</li>
            <li>Failure of customers to comply with HIPAA</li>
            <li>Improper handling of health information by customers</li>
            <li>Legal consequences arising from customer configuration or use</li>
          </ul>
          <p className="mt-4">Customers assume full responsibility for their compliance obligations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Data Security and Safeguards</h2>
          <p>We maintain administrative, technical, and physical safeguards designed to protect information processed through the Service.</p>
          <p>These safeguards include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure infrastructure</li>
            <li>Access controls</li>
            <li>Encryption protocols</li>
            <li>Monitoring systems</li>
          </ul>
          <p className="mt-4">Despite these safeguards, no system can guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Third-Party Providers</h2>
          <p>The Service may rely on third-party providers, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cloud infrastructure providers</li>
            <li>Telecommunication providers</li>
            <li>AI providers</li>
            <li>Payment processors</li>
          </ul>
          <p className="mt-4">These providers maintain their own security and compliance programs.</p>
          <p>We are not responsible for third-party compliance practices.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Customer Obligations Regarding Health Information</h2>
          <p>Customers agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Service in compliance with applicable healthcare privacy laws</li>
            <li>Avoid unauthorized disclosure of Protected Health Information</li>
            <li>Ensure lawful collection and processing of health information</li>
            <li>Implement appropriate privacy safeguards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Regulatory Compliance</h2>
          <p>LAMP Solutions LLC implements reasonable safeguards designed to support privacy and security requirements.</p>
          <p>However, customers are responsible for ensuring their own regulatory compliance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Updates to This Policy</h2>
          <p>We reserve the right to update this HIPAA Compliance and Health Data Disclaimer at any time.</p>
          <p>Updated versions will be posted on the Website with a revised Effective Date.</p>
          <p>Continued use of the Service constitutes acceptance of the updated Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg space-y-1">
            <p><strong>Company Name:</strong> LAMP Solutions LLC</p>
            <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
            <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
            <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
          </div>
          <p className="mt-4">If you have questions regarding this HIPAA Compliance and Health Data Disclaimer, please contact us using the information above.</p>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic text-slate-500">
          <p>By using the Service, you acknowledge that you have read, understood, and agree to this HIPAA Compliance and Health Data Disclaimer.</p>
        </div>
      </div>
    </div>
  );
};

export default HIPAA;