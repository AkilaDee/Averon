import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './SiteNotice.css';

/**
 * Privacy preferences banner using Google Consent Mode v2.
 *
 * NAMING: this file is deliberately NOT called CookieConsent. Ad-blocker filter
 * lists (EasyList and friends) match "cookieconsent" in both request URLs and
 * CSS class selectors, which blocks the module outright in dev and can hide the
 * rendered banner in production. Keep the neutral naming.
 *
 * HOW IT WORKS
 * index.html sets analytics_storage to "denied" BEFORE gtag runs, so Google
 * Analytics loads but writes no cookies and collects nothing identifiable.
 * Accepting calls gtag('consent','update',...) which switches storage on.
 * Rejecting leaves the denied default in place.
 *
 * WHY DEFAULT-DENIED MATTERS
 * UK PECR requires consent BEFORE non-essential cookies are set — not opt-out.
 * A banner that lets analytics run while it waits for a click is the single
 * most common compliance failure, and it's visible from outside the site.
 *
 * NOT COVERED HERE (deliberately)
 * The cart's localStorage key (averon_cart) is strictly necessary — a shop
 * can't function without remembering the basket — so it's exempt from consent
 * and keeps working whichever button the visitor presses.
 */

const STORAGE_KEY = 'averon_prefs';
const POLICY_VERSION = 1; // bump this to re-prompt everyone after a policy change

export function getStoredConsent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== POLICY_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

/** Call from a footer link so visitors can change their mind later. */
export function reopenNotice() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    /* storage unavailable — banner will simply show again next visit */
  }
  window.dispatchEvent(new Event('averon:reopen-notice'));
}

function applyConsent(granted) {
  if (typeof window.gtag !== 'function') return;
  window.gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
}

const SiteNotice = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      applyConsent(stored.analytics === true);
    } else {
      setVisible(true);
    }

    const reopen = () => setVisible(true);
    window.addEventListener('averon:reopen-notice', reopen);
    return () => window.removeEventListener('averon:reopen-notice', reopen);
  }, []);

  const decide = (granted) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          analytics: granted,
          version: POLICY_VERSION,
          decidedAt: new Date().toISOString(),
        })
      );
    } catch {
      /* storage blocked — honour the choice for this session only */
    }
    applyConsent(granted);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="site-notice-bar"
      role="dialog"
      aria-live="polite"
      aria-label="Privacy preferences"
    >
      <div className="site-notice-inner">
        <div className="site-notice-text">
          <p className="site-notice-title">Cookies on this site</p>
          <p className="site-notice-body">
            We use essential cookies to make the site work. We&rsquo;d also like to
            set optional analytics cookies (Google Analytics) to understand how
            the site is used, which records an approximate location based on your
            IP address. We only set these if you accept. See our{' '}
            <Link to="/privacy-policy" className="site-notice-link">
              privacy policy
            </Link>
            .
          </p>
        </div>
        <div className="site-notice-actions">
          <button
            type="button"
            className="notice-btn notice-btn-reject"
            onClick={() => decide(false)}
          >
            Reject optional
          </button>
          <button
            type="button"
            className="notice-btn notice-btn-accept"
            onClick={() => decide(true)}
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
};

export default SiteNotice;
