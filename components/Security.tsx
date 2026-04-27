import React from 'react';

const Security: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Security and Payment Protection Policy</h1>
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
          <p>LAMP Solutions LLC ("Company," "Cosmetix," "we," "us," or "our") is committed to maintaining the security, integrity, and protection of all financial transactions, personal data, and system infrastructure associated with the Cosmetix AI Phone Assistant platform and services (the "Service").</p>
          <p>This Security and Payment Protection Policy explains the measures we implement to protect payment information, financial transactions, and system security.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Secure Payment Processing</h2>
          <p>All payments made for the Service are processed through secure, industry-recognized third-party payment processors.</p>
          <p>These payment methods may include, but are not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Credit and debit cards</li>
            <li>ACH transfers</li>
            <li>Wire transfers</li>
            <li>Digital payment processors such as Stripe</li>
            <li>Other secure payment gateways</li>
          </ul>
          <p className="mt-4">Payment information is transmitted using encrypted connections and handled directly by authorized payment processors.</p>
          <p>LAMP Solutions LLC does not store full credit card numbers or sensitive payment credentials on its servers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. PCI-DSS Compliance</h2>
          <p>Our payment processors, including Stripe and similar providers, maintain compliance with the Payment Card Industry Data Security Standard (PCI-DSS).</p>
          <p>This ensures:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure transmission of cardholder data</li>
            <li>Encrypted handling of payment information</li>
            <li>Restricted access to sensitive data</li>
            <li>Ongoing security monitoring</li>
          </ul>
          <p className="mt-4">By using the Service, you acknowledge that your payment information is processed securely through PCI-DSS compliant providers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Encryption and Data Protection</h2>
          <p>We implement industry-standard encryption and security protocols, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption in transit using secure protocols such as HTTPS and TLS</li>
            <li>Encryption of sensitive data where applicable</li>
            <li>Secure access controls</li>
            <li>Authentication safeguards</li>
            <li>Infrastructure-level protection measures</li>
          </ul>
          <p className="mt-4">These measures are designed to prevent unauthorized access, disclosure, alteration, or destruction of data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Infrastructure and System Security</h2>
          <p>We maintain security measures designed to protect our systems and infrastructure, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Secure hosting environments</li>
            <li>Network-level protection mechanisms</li>
            <li>Firewall protections</li>
            <li>Intrusion detection and prevention systems</li>
            <li>Access control restrictions</li>
            <li>Monitoring and logging of system activity</li>
          </ul>
          <p className="mt-4">Access to sensitive systems and data is restricted to authorized personnel only.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Third-Party Payment and Infrastructure Providers</h2>
          <p>We rely on trusted third-party service providers for payment processing and infrastructure support.</p>
          <p>These providers may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment processors</li>
            <li>Cloud infrastructure providers</li>
            <li>Telephony providers</li>
            <li>AI service providers</li>
            <li>Data hosting providers</li>
          </ul>
          <p className="mt-4">These providers are selected based on their security standards and reliability.</p>
          <p>We are not responsible for security incidents originating from third-party providers beyond our reasonable control.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. User Responsibilities</h2>
          <p>You are responsible for maintaining the security of your account and access credentials.</p>
          <p>You agree to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Keep your login credentials confidential</li>
            <li>Use secure passwords</li>
            <li>Prevent unauthorized access to your account</li>
            <li>Notify us immediately of any suspected unauthorized activity</li>
          </ul>
          <p className="mt-4">We are not liable for damages resulting from compromised account credentials caused by user negligence.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Fraud Prevention and Monitoring</h2>
          <p>We implement measures designed to detect and prevent fraudulent activity, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Transaction monitoring</li>
            <li>Suspicious activity detection</li>
            <li>Abuse prevention systems</li>
            <li>Account verification procedures</li>
          </ul>
          <p className="mt-4">We reserve the right to suspend or restrict accounts suspected of fraudulent or unauthorized activity.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Payment Authorization and Verification</h2>
          <p>By submitting payment information, you authorize LAMP Solutions LLC and its payment processors to charge your selected payment method in accordance with your subscription agreement.</p>
          <p>We reserve the right to verify payment information and refuse or cancel transactions if fraud or unauthorized activity is suspected.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Chargeback Prevention and Handling</h2>
          <p>We encourage users to contact us directly to resolve billing issues.</p>
          <p>Unauthorized or fraudulent chargebacks may result in:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Suspension or termination of account access</li>
            <li>Investigation and verification procedures</li>
            <li>Restrictions on future access to the Service</li>
          </ul>
          <p className="mt-4">We reserve the right to dispute improper chargebacks.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Data Breach Response</h2>
          <p>In the event of a confirmed data breach affecting personal data under our control, we will:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Investigate the incident promptly</li>
            <li>Take appropriate remedial actions</li>
            <li>Notify affected parties where required by applicable law</li>
            <li>Cooperate with relevant regulatory authorities</li>
          </ul>
          <p className="mt-4">Notification timelines will comply with applicable legal requirements, including GDPR where applicable.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. No Absolute Security Guarantee</h2>
          <p>While we implement strong security measures, no system can guarantee complete protection against all threats.</p>
          <p>You acknowledge that:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Electronic communications and storage carry inherent risks</li>
            <li>We cannot guarantee absolute security</li>
            <li>You use the Service at your own risk</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Secure Communication</h2>
          <p>All communication between users and our platform is transmitted using secure encryption protocols designed to protect data integrity and confidentiality.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Compliance with Privacy and Security Regulations</h2>
          <p>We implement reasonable security measures designed to comply with applicable privacy and security laws, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>General Data Protection Regulation (GDPR), where applicable</li>
            <li>United States data protection and privacy laws</li>
            <li>Industry-standard security practices</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Updates to This Policy</h2>
          <p>We reserve the right to update this Security and Payment Protection Policy at any time.</p>
          <p>Updated versions will be posted on our Website with a revised Effective Date.</p>
          <p>Your continued use of the Service constitutes acceptance of the updated Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg space-y-1">
            <p><strong>Company Name:</strong> LAMP Solutions LLC</p>
            <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
            <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
            <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
          </div>
          <p className="mt-4">If you have any questions regarding this Security and Payment Protection Policy, please contact us using the information above.</p>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic text-slate-500">
          <p>By using the Service, you acknowledge that you have read, understood, and agree to this Security and Payment Protection Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Security;