import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Privacy Policy</h1>
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
          <p>LAMP Solutions LLC ("Company," "Cosmetix," "we," "us," or "our") respects your privacy and is committed to protecting personal data. This Privacy Policy explains how we collect, use, disclose, process, and safeguard personal information when you access or use our website, platform, software, and AI phone assistant services (collectively, the "Service").</p>
          <p>This Privacy Policy applies to all users, customers, website visitors, and individuals whose personal information may be processed through the Service.</p>
          <p>By accessing or using the Service, you acknowledge that you have read and understood this Privacy Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Scope and Roles Under Data Protection Laws</h2>
          <p>Depending on the circumstances, LAMP Solutions LLC may act as:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Data Controller</strong>, when we collect and process personal data for our own business purposes</li>
            <li><strong>Data Processor</strong>, when we process personal data on behalf of our business customers who use Cosmetix to interact with their clients</li>
          </ul>
          <p className="mt-4">Our business customers remain responsible for ensuring they have the legal right to collect and process personal data from their own clients.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Personal Data We Collect</h2>
          <p>We may collect and process the following categories of personal data:</p>

          <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">A. Account and Registration Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Business name</li>
            <li>Account credentials</li>
            <li>Billing address</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">B. Payment and Transaction Information</h3>
          <p>Payment information is processed securely by third-party payment processors such as Stripe and similar providers. We do not store full payment card numbers.</p>
          <p>We may collect:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Billing name</li>
            <li>Billing address</li>
            <li>Transaction history</li>
            <li>Payment status</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">C. Communication Data</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>Phone call metadata</li>
            <li>Phone numbers involved in communications</li>
            <li>Call timestamps and durations</li>
            <li>AI-generated conversation records</li>
            <li>Appointment booking details</li>
          </ul>
          <p className="mt-4">Call audio or transcripts may be processed to provide and improve the Service.</p>

          <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">D. Customer Data Processed on Behalf of Users</h3>
          <p>When you use Cosmetix, we may process personal data related to your customers, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customer names</li>
            <li>Phone numbers</li>
            <li>Appointment details</li>
            <li>Service preferences</li>
            <li>Messages and inquiries</li>
          </ul>
          <p className="mt-4">This data is processed solely to provide the Service.</p>

          <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">E. Technical and Device Information</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device type</li>
            <li>Operating system</li>
            <li>Referring URLs</li>
            <li>Usage logs</li>
            <li>Session data</li>
          </ul>

          <h3 className="text-xl font-semibold text-slate-800 mt-4 mb-2">F. Cookies and Tracking Data</h3>
          <p>We collect information through cookies and similar tracking technologies as described in our Cookie Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. How We Use Personal Data</h2>
          <p>We use personal data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide, operate, and maintain the Service</li>
            <li>To create and manage user accounts</li>
            <li>To process payments and subscriptions</li>
            <li>To enable AI call handling and booking functionality</li>
            <li>To communicate with users</li>
            <li>To provide customer support</li>
            <li>To improve, optimize, and develop our Service</li>
            <li>To detect and prevent fraud and abuse</li>
            <li>To comply with legal obligations</li>
            <li>To enforce our Terms of Service</li>
          </ul>
          <p className="mt-4">We do not sell personal data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Legal Basis for Processing (GDPR)</h2>
          <p>If you are located in the European Economic Area (EEA), we process personal data under the following legal bases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Performance of a contract</li>
            <li>Legitimate business interests</li>
            <li>Legal compliance obligations</li>
            <li>Consent, where required</li>
          </ul>
          <p className="mt-4">You may withdraw consent at any time where consent is the legal basis.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Sharing and Disclosure</h2>
          <p>We may share personal data with trusted third parties only as necessary, including:</p>
          <p className="font-semibold mt-4">Service providers:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Payment processors (such as Stripe)</li>
            <li>Hosting providers</li>
            <li>Telephony providers</li>
            <li>AI service providers</li>
            <li>Infrastructure and cloud service providers</li>
            <li>Email and communication providers</li>
          </ul>
          <p className="font-semibold mt-4">Legal and compliance purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To comply with legal obligations</li>
            <li>To respond to lawful requests from authorities</li>
            <li>To enforce our Terms or policies</li>
            <li>To protect our legal rights</li>
          </ul>
          <p className="font-semibold mt-4">Business transfers:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>In connection with mergers, acquisitions, or asset sales</li>
          </ul>
          <p className="mt-4">We do not sell personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. International Data Transfers</h2>
          <p>Personal data may be transferred to and processed in the United States and other countries where our service providers operate.</p>
          <p>These jurisdictions may have different data protection laws.</p>
          <p>We implement appropriate safeguards, including contractual protections, to ensure lawful transfers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Retention</h2>
          <p>We retain personal data only as long as necessary for legitimate business purposes, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing the Service</li>
            <li>Maintaining business records</li>
            <li>Complying with legal obligations</li>
            <li>Resolving disputes</li>
            <li>Enforcing agreements</li>
          </ul>
          <p className="mt-4">Retention periods may vary depending on the type of data and legal requirements.</p>
          <p>When data is no longer needed, it is securely deleted or anonymized.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Data Security</h2>
          <p>We implement appropriate technical and organizational measures to protect personal data, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption in transit and at rest</li>
            <li>Secure infrastructure</li>
            <li>Access controls</li>
            <li>Authentication safeguards</li>
            <li>Monitoring and logging systems</li>
          </ul>
          <p className="mt-4">However, no system is completely secure. We cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Third-Party Services</h2>
          <p>The Service may integrate with third-party providers.</p>
          <p>These providers operate under their own privacy policies.</p>
          <p>We are not responsible for third-party privacy practices.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Your Rights Under GDPR</h2>
          <p>If you are located in the EEA or UK, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of personal data</li>
            <li>Request restriction of processing</li>
            <li>Request data portability</li>
            <li>Object to processing</li>
            <li>Withdraw consent</li>
          </ul>
          <p className="mt-4">You may exercise these rights by contacting us at <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a>.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. California Privacy Rights (CCPA/CPRA)</h2>
          <p>California residents have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Request access to personal data</li>
            <li>Request deletion of personal data</li>
            <li>Request disclosure of data collection practices</li>
            <li>Request correction of personal data</li>
          </ul>
          <p className="mt-4">We do not sell personal data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Data Processing on Behalf of Customers</h2>
          <p>When we process personal data on behalf of our business customers, we act as a Data Processor.</p>
          <p>Our customers are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Providing appropriate privacy notices</li>
            <li>Obtaining necessary consents</li>
            <li>Ensuring lawful data collection</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Children's Privacy</h2>
          <p>The Service is not intended for individuals under the age of 18.</p>
          <p>We do not knowingly collect personal data from minors.</p>
          <p>If we become aware of such data, we will delete it.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Automated Processing and AI</h2>
          <p>The Service uses automated systems and artificial intelligence to process communications.</p>
          <p>This may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Automated responses</li>
            <li>Automated scheduling</li>
            <li>Automated message handling</li>
          </ul>
          <p className="mt-4">These systems operate based on configured parameters and available data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Changes to This Privacy Policy</h2>
          <p>We may update this Privacy Policy at any time.</p>
          <p>Updates will be posted on our Website with a revised Effective Date.</p>
          <p>Your continued use of the Service constitutes acceptance of updates.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg space-y-1">
            <p><strong>Company Name:</strong> LAMP Solutions LLC</p>
            <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
            <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
            <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
          </div>
          <p className="mt-4">If you have any questions about this Privacy Policy or our data practices, please contact us at the email address above.</p>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic text-slate-500">
          <p>By using the Service, you acknowledge that you have read, understood, and agree to this Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;