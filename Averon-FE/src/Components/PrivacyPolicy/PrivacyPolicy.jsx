import React from 'react';
import { Link } from 'react-router-dom';
import { reopenNotice } from '../SiteNotice/SiteNotice';

/**
 * PRIVACY POLICY — SCAFFOLD, NOT FINISHED COPY.
 *
 * The technical facts here are accurate: I read them out of your codebase, so
 * the cookie table, the processors and the data flows reflect what the site
 * actually does today.
 *
 * Everything marked [CONFIRM] is a business or legal decision I can't make for
 * you — retention periods, your ICO registration number, your legal basis for
 * marketing. Fill those in and have someone qualified review the result. The
 * ICO publishes free small-business templates at ico.org.uk.
 *
 * Keep this in sync with the site: if you add a processor (payments, email
 * marketing, a chat widget), it belongs in the tables below.
 */

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page" style={{ maxWidth: 820, margin: '0 auto', padding: '48px 24px', lineHeight: 1.7 }}>
      <h1>Privacy Policy</h1>
      <p><em>Last updated: [CONFIRM — date you publish this]</em></p>

      <h2>Who we are</h2>
      <p>
        Averon Supplies Ltd, 42 Porthcawe Road, London SE26 5TA, United Kingdom,
        is the data controller for personal data collected through this website.
        You can contact us at info@averonsupplies.co.uk or +447344469729.
      </p>
      <p>[CONFIRM — company registration number, and ICO registration number if you are registered.]</p>

      <h2>What we collect and why</h2>

      <h3>When you use our contact form</h3>
      <p>
        We collect the name, email address and message content you submit. We use
        this to respond to your enquiry and to supply the products or information
        you ask about. Our lawful basis is legitimate interests — responding to
        someone who has contacted us about our business.
      </p>
      <p>
        Form submissions are processed by Web3Forms, a third-party service that
        receives your message and forwards it to us by email.
        [CONFIRM — where Web3Forms hosts data, and whether you have a data
        processing agreement with them. If they process outside the UK/EEA you
        need an appropriate transfer mechanism.]
      </p>
      <p>We keep enquiry correspondence for [CONFIRM — e.g. 24 months] and then delete it.</p>

      <h3>When you browse the site</h3>
      <p>
        If you accept optional cookies, Google Analytics records pages visited,
        time on site, referring source, device and browser type, and an
        approximate location derived from your IP address — typically to city
        level, not a precise position. This site does not request access to your
        device&rsquo;s location and cannot read your GPS position.
      </p>
      <p>
        Our lawful basis is consent. If you reject optional cookies, no analytics
        cookies are set and no analytics data is collected.
      </p>

      <h3>When you use the shop</h3>
      <p>
        Your basket is stored in your own browser so it survives page reloads. It
        stays on your device, is not transmitted to us, and is not used to
        identify you.
      </p>
      <p>[CONFIRM — if you process orders or payments, describe what is collected, which payment processor handles it, and how long order records are kept.]</p>

      <h2>Cookies we use</h2>

      <h3>Strictly necessary — always active</h3>
      <p>
        <strong>averon_cart</strong> — browser storage holding your shopping
        basket. Persists until cleared.
        <br />
        <strong>averon_cookie_consent</strong> — browser storage recording your
        cookie choice, so we don&rsquo;t ask on every page. Persists until cleared.
      </p>
      <p>
        These are exempt from consent because the site cannot provide the service
        you asked for without them.
      </p>

      <h3>Analytics — only with your consent</h3>
      <p>
        <strong>_ga, _ga_&lt;id&gt;</strong> — set by Google Analytics 4 to
        distinguish visitors and sessions. Expire after 2 years.
      </p>
      <p>
        Google acts as our processor for analytics data. Google may transfer data
        outside the UK; Google states it relies on Standard Contractual Clauses
        for such transfers. [CONFIRM — check the current position in your Google
        Analytics data processing terms.]
      </p>

      <h2>Changing your cookie choice</h2>
      <p>
        You can change your mind at any time.{' '}
        <button
          type="button"
          onClick={reopenNotice}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            font: 'inherit',
            color: 'inherit',
            textDecoration: 'underline',
            cursor: 'pointer',
          }}
        >
          Open cookie settings
        </button>
        . You can also block or delete cookies in your browser settings, though
        this may affect how the site works.
      </p>

      <h2>Who we share data with</h2>
      <p>
        We do not sell personal data. We share it only with the processors named
        above — Web3Forms for contact form delivery, and Google for analytics
        where you have consented — and with anyone we are legally required to
        disclose it to.
      </p>
      <p>[CONFIRM — add any other processor you use: email marketing, CRM, payment provider, hosting.]</p>

      <h2>Your rights</h2>
      <p>
        Under UK GDPR you have the right to access the personal data we hold
        about you, to have inaccurate data corrected, to have data erased, to
        restrict or object to processing, and to data portability. Where we rely
        on consent, you can withdraw it at any time.
      </p>
      <p>
        To exercise any of these, email info@averonsupplies.co.uk. We will respond
        within one month.
      </p>
      <p>
        If you are unhappy with how we have handled your data, you can complain to
        the Information Commissioner&rsquo;s Office at ico.org.uk or on
        0303 123 1113.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy. Material changes will be reflected in the date
        at the top of this page, and we will ask for your cookie consent again if
        the way we use cookies changes.
      </p>

      <p>
        See also our <Link to="/terms-of-business">terms of business</Link>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
