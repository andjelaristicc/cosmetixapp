import React from 'react';

const SLA: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Service Level Agreement</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p className="text-sm text-slate-500">Effective Date: February 10, 2026</p>
        <div className="bg-slate-50 p-4 rounded-lg text-sm space-y-1">
          <p><strong>Company Name:</strong> MBP Solutions LLC</p>
          <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
          <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
          <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>This Service Level Agreement ("SLA") defines the service availability targets, support commitments, operational standards, and limitations associated with the Cosmetix AI Phone Assistant platform and services (the "Service") provided by MBP Solutions LLC ("Company," "Cosmetix," "we," "us," or "our").</p>
          <p>This SLA applies to customers with an active subscription to the Service.</p>
          <p>This SLA is intended to define operational objectives and does not create any legally enforceable guarantee of uninterrupted service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Scope of Service</h2>
          <p>The Service includes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI-powered phone answering functionality</li>
            <li>Appointment booking automation</li>
            <li>Platform dashboard access</li>
            <li>Integration with supported third-party systems</li>
            <li>Communication processing and routing</li>
            <li>System infrastructure supporting Service operation</li>
          </ul>
          <p className="mt-4">Service availability depends on internal systems and third-party providers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Service Availability Target</h2>
          <p>We aim to maintain a Service availability target of 99.5% uptime measured on a monthly basis.</p>
          <p>Uptime is defined as the percentage of total time during which the core Service remains operational and accessible, excluding Excluded Downtime as defined in this Agreement.</p>
          <p>This uptime target represents an operational goal and not a legally binding guarantee.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Definition of Downtime</h2>
          <p>Downtime is defined as a period during which the core Service is materially unavailable to users due to failure within our controlled infrastructure.</p>
          <p>Downtime does not include service interruptions caused by factors outside our reasonable control.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Excluded Downtime</h2>
          <p>The following situations are excluded from uptime calculations:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Scheduled maintenance</li>
            <li>Emergency maintenance</li>
            <li>Third-party service failures</li>
            <li>Telecommunication provider outages</li>
            <li>Internet service provider failures</li>
            <li>Customer configuration errors</li>
            <li>Customer equipment or network issues</li>
            <li>Force majeure events</li>
            <li>Cyberattacks outside reasonable mitigation control</li>
            <li>Software or integration failures caused by third-party providers</li>
          </ul>
          <p className="mt-4">Excluded Downtime does not count toward uptime calculations.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Scheduled Maintenance</h2>
          <p>We may perform scheduled maintenance to maintain or improve the Service.</p>
          <p>Scheduled maintenance may result in temporary service interruptions.</p>
          <p>Where reasonably possible, maintenance will be performed during low-usage periods.</p>
          <p>Advance notice may be provided but is not guaranteed.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Emergency Maintenance</h2>
          <p>Emergency maintenance may be performed at any time without prior notice to address:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Security vulnerabilities</li>
            <li>System failures</li>
            <li>Infrastructure risks</li>
            <li>Urgent operational issues</li>
          </ul>
          <p className="mt-4">Emergency maintenance is necessary to protect system integrity and user data.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Incident Detection and Response</h2>
          <p>We implement monitoring systems designed to detect service disruptions.</p>
          <p>When incidents occur, we aim to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Identify the cause</li>
            <li>Restore normal operations as soon as reasonably possible</li>
            <li>Implement corrective measures where appropriate</li>
          </ul>
          <p className="mt-4">Response times may vary depending on the nature and severity of the incident.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Support Availability</h2>
          <p>Customer support is available via email:</p>
          <p><a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
          <p>We aim to respond to support inquiries within a reasonable timeframe.</p>
          <p>Response times are not guaranteed and may vary depending on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Severity of the issue</li>
            <li>System conditions</li>
            <li>Volume of support requests</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Service Dependencies</h2>
          <p>The Service relies on third-party providers, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Telecommunication providers</li>
            <li>Cloud infrastructure providers</li>
            <li>Artificial intelligence providers</li>
            <li>Payment processors</li>
            <li>Integration providers</li>
          </ul>
          <p className="mt-4">We are not responsible for downtime or service disruptions caused by third-party providers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Customer Responsibilities</h2>
          <p>Customers are responsible for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining correct Service configuration</li>
            <li>Maintaining valid integrations</li>
            <li>Maintaining valid subscription status</li>
            <li>Maintaining secure access credentials</li>
            <li>Ensuring their own internet and system availability</li>
          </ul>
          <p className="mt-4">Service performance may be affected by customer configuration or environment.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. No Guarantee of Error-Free Operation</h2>
          <p>The Service is provided on an "as is" and "as available" basis.</p>
          <p>We do not guarantee that the Service will be:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Error-free</li>
            <li>Uninterrupted</li>
            <li>Completely secure</li>
            <li>Free from defects</li>
          </ul>
          <p className="mt-4">We make reasonable efforts to maintain system stability.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. No Financial Compensation or Service Credits</h2>
          <p>This SLA defines operational objectives only.</p>
          <p>MBP Solutions LLC does not provide:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service credits</li>
            <li>Refunds</li>
            <li>Financial compensation</li>
          </ul>
          <p className="mt-4">for downtime, performance issues, or service interruptions.</p>
          <p>Exceptions may be granted solely at our discretion.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, MBP Solutions LLC shall not be liable for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service interruptions</li>
            <li>Downtime</li>
            <li>Data loss</li>
            <li>Business interruption</li>
            <li>Revenue loss</li>
            <li>Customer loss</li>
          </ul>
          <p className="mt-4">Customers assume full responsibility for reliance on the Service.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">15. Service Modifications</h2>
          <p>We reserve the right to modify, improve, suspend, or discontinue any part of the Service at any time.</p>
          <p>Service features, infrastructure, and performance characteristics may change without prior notice.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Force Majeure</h2>
          <p>We shall not be responsible for service interruptions caused by events beyond our reasonable control, including but not limited to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Natural disasters</li>
            <li>War</li>
            <li>Terrorism</li>
            <li>Government actions</li>
            <li>Internet outages</li>
            <li>Infrastructure failures</li>
            <li>Power failures</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Updates to This SLA</h2>
          <p>We reserve the right to update this SLA at any time.</p>
          <p>Updated versions will be posted on the Website with a revised Effective Date.</p>
          <p>Continued use of the Service constitutes acceptance of the updated SLA.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">18. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg space-y-1">
            <p><strong>Company Name:</strong> MBP Solutions LLC</p>
            <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
            <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
            <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
          </div>
          <p className="mt-4">If you have questions regarding this Service Level Agreement, please contact us using the information above.</p>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic text-slate-500">
          <p>By using the Service, you acknowledge that you have read, understood, and agree to this Service Level Agreement.</p>
        </div>
      </div>
    </div>
  );
};

export default SLA;