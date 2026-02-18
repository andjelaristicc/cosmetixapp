import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Terms of Service</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p className="text-sm text-slate-500">Effective Date: February 10, 2026</p>
        <div className="bg-slate-50 p-4 rounded-lg text-sm space-y-1">
          <p><strong>Company Name:</strong> MBP Solutions LLC</p>
          <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
          <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
          <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Acceptance of Terms</h2>
          <p>These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "Customer," "you," or "your") and MBP Solutions LLC ("Company," "Cosmetix," "we," "us," or "our") governing your access to and use of the Cosmetix AI Phone Assistant platform, services, software, website, and related features (collectively, the "Service").</p>
          <p>By accessing, registering for, subscribing to, or using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and all applicable laws and regulations.</p>
          <p className="font-semibold">If you do not agree to these Terms, you must not access or use the Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Description of the Service</h2>
          <p>Cosmetix provides an AI-powered phone assistant designed to handle incoming calls, provide information, answer questions, and book appointments into integrated calendar systems on behalf of business users.</p>
          <p>The Service may include, but is not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-powered voice communication</li>
            <li>Appointment scheduling and booking automation</li>
            <li>Integration with third-party calendar systems including GoHighLevel, Google Calendar, and Apple Calendar</li>
            <li>Real-time call handling and message processing</li>
            <li>Customer interaction automation</li>
            <li>Administrative dashboard and analytics</li>
            <li>Integration with third-party telephony and AI providers</li>
          </ul>
          <p className="mt-4">The Service is intended for lawful business use only.</p>
          <p>We reserve the right to modify, update, suspend, or discontinue any part of the Service at any time, with or without notice.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Eligibility</h2>
          <p>You must be at least 18 years old and legally capable of entering into binding contracts to use the Service.</p>
          <p>If you use the Service on behalf of a business entity, you represent and warrant that you have the authority to bind that entity to these Terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Account Registration and Security</h2>
          <p>To access certain features, you may be required to create an account.</p>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your account information</li>
            <li>Maintain the confidentiality of your login credentials</li>
            <li>Accept full responsibility for all activities under your account</li>
          </ul>
          <p className="mt-4">You are responsible for securing access to your account. We are not liable for any loss or damage resulting from unauthorized account access.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Free Trial</h2>
          <p>We may offer a free trial period ("Trial") to allow you to evaluate the Service.</p>
          <p>During the Trial:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You may be required to provide a valid payment method</li>
            <li>Your payment method will not be charged during the Trial period</li>
            <li>The Trial automatically converts into a paid subscription unless cancelled before the Trial ends</li>
          </ul>
          <p className="mt-4">You may cancel your Trial at any time prior to the billing start date to avoid charges.</p>
          <p>We reserve the right to modify, limit, or terminate Trial offers at any time.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Subscription and Billing</h2>
          <p>By subscribing to the Service, you authorize MBP Solutions LLC and its payment processors to charge your selected payment method for all applicable subscription fees.</p>
          <p>Subscription terms include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Automatic recurring billing</li>
            <li>Billing at the selected interval (monthly, annual, or otherwise specified)</li>
            <li>Automatic renewal unless cancelled prior to renewal</li>
          </ul>
          <p className="mt-4">All fees are stated in U.S. Dollars unless otherwise specified.</p>
          <p>You are responsible for ensuring your payment information is accurate and current.</p>
          <p>If payment fails, we may:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Retry charging your payment method</li>
            <li>Suspend or limit your access to the Service</li>
            <li>Terminate your account</li>
          </ul>
          <p className="mt-4">We reserve the right to change pricing at any time with reasonable notice.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Refund Policy</h2>
          <p>All payments are final and non-refundable once a billing period has begun.</p>
          <p>Refunds will not be provided for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Partial billing periods</li>
            <li>Unused service time</li>
            <li>Failure to cancel prior to renewal</li>
            <li>Lack of usage</li>
          </ul>
          <p className="mt-4">Exceptions may be made solely at our discretion in cases involving duplicate charges or confirmed billing errors caused by the Company.</p>
          <p>The Trial period is provided as a risk-free opportunity to evaluate the Service before billing begins.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Acceptable Use</h2>
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Violate any applicable law or regulation</li>
            <li>Engage in fraudulent, deceptive, or misleading conduct</li>
            <li>Harass, abuse, or harm others</li>
            <li>Impersonate individuals or entities</li>
            <li>Conduct illegal business activities</li>
            <li>Send spam or unauthorized communications</li>
            <li>Attempt to reverse engineer, copy, or exploit the Service</li>
            <li>Interfere with the Service infrastructure</li>
          </ul>
          <p className="mt-4">We reserve the right to suspend or terminate accounts that violate these Terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. AI and Automated Communication Disclaimer</h2>
          <p>The Service utilizes artificial intelligence and automated systems.</p>
          <p>You acknowledge and agree that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-generated responses may not always be accurate, complete, or appropriate</li>
            <li>The Service may occasionally misunderstand, misinterpret, or incorrectly respond to inquiries</li>
            <li>You are responsible for reviewing and validating the information provided to your customers</li>
          </ul>
          <p className="mt-4">We do not guarantee accuracy, reliability, or suitability of AI-generated communications.</p>
          <p>You assume full responsibility for how the Service is used in your business operations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Services and Integrations</h2>
          <p>The Service may integrate with third-party providers, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment processors</li>
            <li>Telephony providers</li>
            <li>AI service providers</li>
            <li>Calendar systems</li>
            <li>Hosting providers</li>
          </ul>
          <p className="mt-4">We do not control and are not responsible for third-party services.</p>
          <p>Your use of third-party services is subject to their respective terms and policies.</p>
          <p>We are not liable for disruptions caused by third-party providers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Data Protection and Privacy</h2>
          <p>We process personal data in accordance with our Privacy Policy.</p>
          <p>You agree that you have obtained all necessary rights and consents required to process personal data using the Service.</p>
          <p>You are responsible for complying with all applicable data protection laws, including GDPR, HIPAA (if applicable), and other privacy regulations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Intellectual Property</h2>
          <p>All intellectual property rights in the Service, including software, design, content, trademarks, and technology, are owned by MBP Solutions LLC or its licensors.</p>
          <p>You are granted a limited, non-exclusive, non-transferable license to use the Service solely for its intended purpose.</p>
          <p>You may not:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Copy</li>
            <li>Modify</li>
            <li>Distribute</li>
            <li>Sell</li>
            <li>Reverse engineer</li>
          </ul>
          <p className="mt-4">any part of the Service without written permission.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Service Availability</h2>
          <p>We strive to provide reliable Service but do not guarantee uninterrupted availability.</p>
          <p>The Service may be unavailable due to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintenance</li>
            <li>Technical issues</li>
            <li>Third-party outages</li>
            <li>Force majeure events</li>
          </ul>
          <p className="mt-4">We are not liable for downtime or service interruptions.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, MBP Solutions LLC shall not be liable for any indirect, incidental, consequential, special, or punitive damages, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Loss of revenue</li>
            <li>Loss of business</li>
            <li>Loss of customers</li>
            <li>Loss of data</li>
            <li>Loss of profits</li>
          </ul>
          <p className="mt-4 font-semibold">Our total liability shall not exceed the amount paid by you for the Service during the preceding 3 months.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Disclaimer of Warranties</h2>
          <p>The Service is provided "as is" and "as available."</p>
          <p>We make no warranties, express or implied, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Merchantability</li>
            <li>Fitness for a particular purpose</li>
            <li>Non-infringement</li>
            <li>Accuracy or reliability</li>
          </ul>
          <p className="mt-4">We do not guarantee that the Service will meet your expectations or requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Account Suspension and Termination</h2>
          <p>We may suspend or terminate your account at any time if:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You violate these Terms</li>
            <li>You engage in illegal or abusive activity</li>
            <li>Payment fails</li>
            <li>Required by law</li>
          </ul>
          <p className="mt-4">You may terminate your account at any time by cancelling your subscription.</p>
          <p>Termination does not relieve you of payment obligations incurred prior to termination.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Indemnification</h2>
          <p>You agree to indemnify and hold harmless MBP Solutions LLC from any claims, damages, liabilities, costs, or expenses arising from:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Your use of the Service</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any law or regulation</li>
            <li>Your misuse of AI-generated communications</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">18. Governing Law and Jurisdiction</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States.</p>
          <p>Any disputes shall be resolved exclusively in the courts located in Sheridan County, Wyoming.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">19. Modifications to Terms</h2>
          <p>We reserve the right to modify these Terms at any time.</p>
          <p>Updated Terms will be posted on our Website with a revised Effective Date.</p>
          <p>Your continued use of the Service constitutes acceptance of the updated Terms.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">20. Entire Agreement</h2>
          <p>These Terms constitute the entire agreement between you and MBP Solutions LLC regarding the Service and supersede all prior agreements or understandings.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">21. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg space-y-1">
            <p><strong>Company Name:</strong> MBP Solutions LLC</p>
            <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
            <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
            <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
          </div>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic text-slate-500">
          <p>By using the Service, you acknowledge that you have read, understood, and agree to these Terms of Service.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;