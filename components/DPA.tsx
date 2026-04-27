import React from 'react';

const DPA: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Data Processing Agreement</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p className="text-sm text-slate-500">Effective Date: February 10, 2026</p>
        <div className="bg-slate-50 p-4 rounded-lg text-sm space-y-1">
          <p><strong>Company Name:</strong> LAMP Solutions LLC</p>
          <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
          <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
          <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction and Purpose</h2>
          <p>This Data Processing Agreement ("DPA") forms part of the Terms of Service between LAMP Solutions LLC ("Processor," "Company," "Cosmetix," "we," "us," or "our") and the customer using the Cosmetix AI Phone Assistant Service ("Controller," "Customer," or "you").</p>
          <p>This DPA governs the processing of Personal Data by LAMP Solutions LLC on behalf of the Customer in connection with the provision of the Cosmetix Service (the "Service").</p>
          <p>This DPA is intended to ensure compliance with applicable data protection laws, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The General Data Protection Regulation (EU) 2016/679 ("GDPR")</li>
            <li>The UK GDPR</li>
            <li>Applicable United States privacy and data protection laws</li>
            <li>Other applicable data protection regulations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Definitions</h2>
          <p>For purposes of this DPA:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person.</li>
            <li><strong>"Processing"</strong> means any operation performed on Personal Data, including collection, recording, storage, use, disclosure, or deletion.</li>
            <li><strong>"Controller"</strong> means the entity that determines the purposes and means of processing Personal Data.</li>
            <li><strong>"Processor"</strong> means the entity that processes Personal Data on behalf of the Controller.</li>
            <li><strong>"Data Subject"</strong> means the individual whose Personal Data is processed.</li>
            <li><strong>"Subprocessor"</strong> means any third party engaged by the Processor to process Personal Data.</li>
            <li><strong>"Applicable Data Protection Law"</strong> means all applicable privacy and data protection laws.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Roles and Scope of Processing</h2>
          <p>The Customer acts as the Controller of Personal Data.</p>
          <p>LAMP Solutions LLC acts as the Processor of Personal Data processed through the Service.</p>
          <p>Processing activities may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Receiving inbound communications</li>
            <li>Processing phone call metadata</li>
            <li>Processing customer contact information</li>
            <li>Scheduling appointments</li>
            <li>Managing communication workflows</li>
            <li>Storing and transmitting communication data</li>
          </ul>
          <p className="mt-4">Processing is performed solely to provide the Service to the Customer.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Categories of Personal Data</h2>
          <p>Categories of Personal Data processed may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Names</li>
            <li>Phone numbers</li>
            <li>Email addresses</li>
            <li>Appointment details</li>
            <li>Communication content and metadata</li>
            <li>Customer preferences</li>
            <li>Call interaction data</li>
          </ul>
          <p className="mt-4">The types of Personal Data processed depend on how the Customer uses the Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Categories of Data Subjects</h2>
          <p>Data Subjects may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Customers of the Customer</li>
            <li>Prospective customers</li>
            <li>Business contacts</li>
            <li>Website visitors</li>
            <li>Individuals contacting the Customer</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Purpose of Processing</h2>
          <p>Personal Data is processed solely for the purpose of providing the Service, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Handling incoming communications</li>
            <li>Providing AI-assisted responses</li>
            <li>Scheduling appointments</li>
            <li>Maintaining system functionality</li>
            <li>Providing technical support</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Processor Obligations</h2>
          <p>LAMP Solutions LLC agrees to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Process Personal Data only on documented instructions from the Customer</li>
            <li>Process Personal Data solely for the purposes described in this DPA</li>
            <li>Implement appropriate technical and organizational security measures</li>
            <li>Ensure personnel with access to Personal Data are subject to confidentiality obligations</li>
            <li>Not sell Personal Data</li>
            <li>Not use Personal Data for unauthorized purposes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Security Measures</h2>
          <p>We implement appropriate technical and organizational security measures, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption in transit using secure protocols</li>
            <li>Access controls and authentication mechanisms</li>
            <li>Secure hosting infrastructure</li>
            <li>System monitoring and logging</li>
            <li>Restriction of access to authorized personnel</li>
          </ul>
          <p className="mt-4">Security measures are designed to protect Personal Data from unauthorized access, disclosure, alteration, or destruction.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Subprocessors</h2>
          <p>The Customer authorizes LAMP Solutions LLC to engage Subprocessors to provide the Service.</p>
          <p>Subprocessors may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cloud infrastructure providers</li>
            <li>Telephony providers</li>
            <li>AI service providers</li>
            <li>Payment processors</li>
            <li>Hosting providers</li>
          </ul>
          <p className="mt-4">All Subprocessors are required to implement appropriate data protection measures.</p>
          <p>We remain responsible for the performance of our Subprocessors in accordance with this DPA.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. International Data Transfers</h2>
          <p>Personal Data may be transferred to and processed in countries outside the Customer's jurisdiction, including the United States.</p>
          <p>Where required, we implement appropriate safeguards to ensure lawful international data transfers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Confidentiality</h2>
          <p>LAMP Solutions LLC ensures that all personnel authorized to process Personal Data are subject to confidentiality obligations.</p>
          <p>Personnel are trained on data protection and security requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Data Subject Rights</h2>
          <p>We assist the Customer, where reasonably possible, in responding to Data Subject requests, including requests to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access Personal Data</li>
            <li>Correct Personal Data</li>
            <li>Delete Personal Data</li>
            <li>Restrict processing</li>
            <li>Transfer Personal Data</li>
          </ul>
          <p className="mt-4">The Customer remains responsible for responding to Data Subject requests.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Data Breach Notification</h2>
          <p>In the event of a confirmed Personal Data breach affecting Personal Data under our control, we will:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Investigate the breach promptly</li>
            <li>Take appropriate remedial action</li>
            <li>Notify the Customer without undue delay, where required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Data Retention and Deletion</h2>
          <p>We retain Personal Data only for as long as necessary to provide the Service and comply with legal obligations.</p>
          <p>Upon termination of the Service, Personal Data may be deleted or anonymized in accordance with applicable laws and operational requirements.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Customer Responsibilities</h2>
          <p>The Customer agrees to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Comply with Applicable Data Protection Law</li>
            <li>Provide required privacy notices to Data Subjects</li>
            <li>Obtain required consents</li>
            <li>Ensure lawful processing of Personal Data</li>
            <li>Provide lawful instructions to the Processor</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Liability</h2>
          <p>Each party shall be responsible for its own compliance with applicable data protection laws.</p>
          <p>LAMP Solutions LLC shall not be liable for violations caused by Customer misuse of the Service or unlawful instructions.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Term and Termination</h2>
          <p>This DPA remains in effect for as long as LAMP Solutions LLC processes Personal Data on behalf of the Customer.</p>
          <p>Termination of the Service terminates this DPA, except for provisions that survive termination by law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">18. Governing Law</h2>
          <p>This DPA shall be governed by the laws of the State of Wyoming, United States, unless otherwise required by applicable data protection law.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">19. Updates to This DPA</h2>
          <p>We reserve the right to update this DPA as necessary to reflect legal, technical, or operational changes.</p>
          <p>Updated versions will be posted on the Website with a revised Effective Date.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">20. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg space-y-1">
            <p><strong>Company Name:</strong> LAMP Solutions LLC</p>
            <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
            <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
            <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
          </div>
          <p className="mt-4">If you have any questions regarding this Data Processing Agreement, please contact us using the information above.</p>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic text-slate-500">
          <p>By using the Service, you acknowledge that you have read, understood, and agree to this Data Processing Agreement.</p>
        </div>
      </div>
    </div>
  );
};

export default DPA;