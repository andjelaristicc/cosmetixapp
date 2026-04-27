import React from 'react';

const Billing: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-8 font-serif">Subscription, Billing and Refund Policy</h1>
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
          <p>This Subscription, Billing and Refund Policy ("Policy") governs all subscription plans, billing practices, payment obligations, trial periods, and refund conditions for the Cosmetix AI Phone Assistant service (the "Service") operated by LAMP Solutions LLC ("Company," "Cosmetix," "we," "us," or "our").</p>
          <p>By subscribing to or using the Service, you agree to this Policy and authorize us and our authorized payment processors to charge your selected payment method in accordance with the terms described below.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Subscription-Based Service</h2>
          <p>Cosmetix operates on a subscription-based model. Access to the Service is provided on a recurring billing basis.</p>
          <p>Subscription features may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>AI call handling and communication services</li>
            <li>Appointment booking automation</li>
            <li>Platform access and dashboard functionality</li>
            <li>Integration with supported calendar systems</li>
            <li>Customer interaction processing</li>
          </ul>
          <p className="mt-4">Subscription pricing, features, and usage limits may vary depending on the selected plan.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Free Trial</h2>
          <p>We may offer a free trial period ("Trial") to allow users to evaluate the Service.</p>
          <p>Trial conditions include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The Trial period duration will be specified at the time of registration</li>
            <li>A valid payment method may be required to activate the Trial</li>
            <li>Your payment method will not be charged during the Trial period</li>
            <li>The Trial automatically converts into a paid subscription unless cancelled before the Trial ends</li>
          </ul>
          <p className="mt-4">You may cancel your Trial at any time before the Trial expires to avoid billing.</p>
          <p>We reserve the right to modify, limit, or terminate Trial offers at our discretion.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Automatic Renewal</h2>
          <p>All subscriptions automatically renew at the end of each billing cycle unless cancelled prior to renewal.</p>
          <p>By subscribing, you authorize LAMP Solutions LLC and its payment processors to automatically charge your payment method for recurring subscription fees.</p>
          <p>Renewal billing occurs:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Monthly, if you select a monthly subscription</li>
            <li>Annually, if you select an annual subscription</li>
            <li>Or at other intervals specified in your subscription plan</li>
          </ul>
          <p className="mt-4">You are responsible for reviewing your billing dates and managing your subscription accordingly.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Payment Authorization</h2>
          <p>By providing a payment method, you:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Authorize LAMP Solutions LLC and its authorized payment processors to charge your payment method</li>
            <li>Confirm that you are authorized to use the payment method</li>
            <li>Agree to maintain accurate and current payment information</li>
          </ul>
          <p className="mt-4">Payment processors may include Stripe and other secure third-party providers.</p>
          <p>We do not store full payment card numbers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Billing and Charges</h2>
          <p>Charges may include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscription fees</li>
            <li>Applicable taxes</li>
            <li>Additional usage-based charges, if applicable</li>
            <li>Optional service upgrades</li>
          </ul>
          <p className="mt-4">All fees are charged in U.S. Dollars unless otherwise specified.</p>
          <p>Taxes may be applied based on your jurisdiction and applicable tax laws.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Failed Payments</h2>
          <p>If a payment fails or cannot be processed, we may:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Retry the payment automatically</li>
            <li>Notify you of the failed payment</li>
            <li>Suspend or restrict access to the Service</li>
            <li>Terminate your subscription</li>
          </ul>
          <p className="mt-4">Service access may be restored once payment is successfully processed.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Subscription Cancellation</h2>
          <p>You may cancel your subscription at any time through your account dashboard or by contacting us.</p>
          <p>Cancellation takes effect at the end of the current billing period.</p>
          <p>You will retain access to the Service until the billing period ends.</p>
          <p>We do not provide prorated refunds for unused time.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Refund Policy</h2>
          <p>All payments are final and non-refundable once a billing period has begun.</p>
          <p>Refunds will not be provided for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Subscription fees already charged</li>
            <li>Partial billing periods</li>
            <li>Unused subscription time</li>
            <li>Failure to cancel before renewal</li>
            <li>Lack of usage</li>
            <li>Dissatisfaction after Trial expiration</li>
          </ul>
          <p className="mt-4">The free Trial period is provided to allow users to evaluate the Service before billing begins.</p>
          <p>Exceptions may be made solely at our discretion in the following cases:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Duplicate charges</li>
            <li>Confirmed billing errors caused by the Company</li>
            <li>Unauthorized charges verified through investigation</li>
          </ul>
          <p className="mt-4">Approved refunds, if any, will be processed to the original payment method.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Pricing Changes</h2>
          <p>We reserve the right to change subscription pricing at any time.</p>
          <p>If pricing changes affect your existing subscription:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>You will receive reasonable advance notice</li>
            <li>Changes will apply at the next billing cycle</li>
          </ul>
          <p className="mt-4">Continued use of the Service after pricing changes constitutes acceptance of the updated pricing.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Account Suspension and Termination for Non-Payment</h2>
          <p>We reserve the right to suspend or terminate accounts for:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Failed payments</li>
            <li>Chargebacks or payment disputes</li>
            <li>Fraudulent activity</li>
            <li>Abuse of payment systems</li>
          </ul>
          <p className="mt-4">Access to the Service may be restored upon successful resolution of payment issues, at our discretion.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Chargebacks and Payment Disputes</h2>
          <p>Initiating a chargeback without first contacting us to resolve the issue may result in:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Immediate suspension or termination of your account</li>
            <li>Permanent restriction from using the Service</li>
            <li>Additional recovery actions as permitted by law</li>
          </ul>
          <p className="mt-4">We encourage users to contact us directly to resolve billing concerns.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">13. Third-Party Payment Processors</h2>
          <p>Payments are processed through secure third-party payment processors.</p>
          <p>These processors operate under their own terms and privacy policies.</p>
          <p>We are not responsible for errors caused by third-party payment providers.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">14. Taxes</h2>
          <p>You are responsible for paying all applicable taxes associated with your subscription.</p>
          <p>Taxes may include sales tax, VAT, or other applicable taxes depending on your jurisdiction.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">15. No Guarantee of Business Results</h2>
          <p>Subscription fees cover access to the Service only.</p>
          <p>We do not guarantee:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Increased bookings</li>
            <li>Increased revenue</li>
            <li>Increased customer retention</li>
            <li>Specific business outcomes</li>
          </ul>
          <p className="mt-4">Results depend on various factors beyond our control.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">16. Changes to This Policy</h2>
          <p>We reserve the right to update this Policy at any time.</p>
          <p>Updated versions will be posted on our Website with a revised Effective Date.</p>
          <p>Continued use of the Service constitutes acceptance of the updated Policy.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">17. Contact Information</h2>
          <div className="bg-slate-50 p-4 rounded-lg space-y-1">
            <p><strong>Company Name:</strong> LAMP Solutions LLC</p>
            <p><strong>Company Address:</strong> 75 E 3rd St, Sheridan, WY 82801, United States</p>
            <p><strong>Website:</strong> <a href="https://cosmetix.app/" className="text-rose-600 hover:text-rose-700">https://cosmetix.app/</a></p>
            <p><strong>Email:</strong> <a href="mailto:mail@cosmetix.app" className="text-rose-600 hover:text-rose-700">mail@cosmetix.app</a></p>
          </div>
          <p className="mt-4">If you have any questions regarding this Subscription, Billing and Refund Policy, please contact us using the information above.</p>
        </section>

        <div className="pt-8 border-t border-slate-200 text-sm italic text-slate-500">
          <p>By using the Service, you acknowledge that you have read, understood, and agree to this Subscription, Billing and Refund Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Billing;