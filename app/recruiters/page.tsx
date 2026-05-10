import Link from 'next/link';
import Faq from '../../components/Faq';
import HowGrid from '../../components/HowGrid';
import CtaBanner from '../../components/CtaBanner';

const BRIEFS = [
  { title: 'Senior PM, Payments', meta: 'Series C fintech · Remote (US)' },
  { title: 'Staff iOS Engineer', meta: 'Dev tools startup · Remote' },
  { title: 'Head of Brand Design', meta: 'DTC · NYC' },
];

const PAYOUTS = [
  { brief: 'Senior PM brief · Diego A.', amount: '€4,000' },
  { brief: 'Staff iOS · Lin Park', amount: '€5,500' },
  { brief: 'Head of Brand · Maya R.', amount: '€4,500' },
];

const HOW_STEPS = [
  { n: '1', title: 'Apply & get vetted', body: 'Tell us your speciality and track record. Quick interview, 48‑hour decision.', meta: 'Step 1' },
  { n: '2', title: 'Get matched to briefs', body: 'Briefs land in your inbox already filtered for fit. Open the ones you can fill, ignore the rest.', meta: 'Step 2' },
  { n: '3', title: 'Submit candidates', body: '30 seconds per submission. Track everything in one dashboard. Get feedback fast.', meta: 'Step 3' },
  { n: '4', title: 'Get paid', body: 'Payment hits your account 24 hours after the candidate signs. No invoicing, no chasing.', meta: 'Step 4' },
];

const FAQS = [
  { q: 'How much do I earn per placement?', a: "Your fee is a percentage of the hire's salary — competitive rates agreed before any recruiter sees the brief. Exact terms are shown upfront in each brief.", open: true },
  { q: 'Do I lose my fee if the candidate negotiates a lower salary?', a: 'Your fee is based on the final agreed salary. Our commission rates are competitive and transparent from the start.' },
  { q: 'Can I work briefs alongside my own clients?', a: "Yes. Most recruiters on Upnest run their own desk and use Upnest for additional briefs. There's no exclusivity." },
  { q: 'What happens if my candidate gets rejected?', a: 'You see structured feedback within 48 hours. Most recruiters use this to sharpen their pitch on the next submission for the same brief.' },
  { q: 'How do I apply?', a: 'Click "Apply to recruit" above. We\'ll review your background and book a 20‑minute call within two business days.' },
];

export default function RecruitersPage() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">
          <span className="dot" /> Built for independent recruiters
        </span>
        <h1>
          Better roles. <em>Same fee, every hire.</em>
        </h1>
        <p className="sub">
          Get matched with senior briefs from real hiring managers. Submit fast, get paid the day the offer signs.
        </p>

        <div className="fact-strip">
          <span className="fact">
            Briefs <b>matched to your speciality</b>
          </span>
          <span className="fact">
            <b>Way less</b> than the competition
          </span>
          <span className="fact">
            Paid <b>in 24h</b>
          </span>
        </div>

        <div className="ctas">
          <button
            className="btn btn-ink btn-lg"
            data-cal-namespace="lets-partner"
            data-cal-link="jessedragstra/lets-partner"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Apply to recruit →
          </button>
          <Link href="/">
            <button className="btn btn-ghost btn-lg">For companies</button>
          </Link>
        </div>
      </section>

      <div className="divider" />

      <section className="feature">
        <div className="row">
          <div className="copy">
            <h3>Roles that fit your desk</h3>
            <p>
              Every role on Upnest is briefed by a real hiring manager and triaged by our team. You only see briefs
              you're a fit for — no cold pitching, no spray‑and‑pray.
            </p>
            <div className="dots">
              <span className="on" />
              <span />
              <span />
            </div>
            <div className="stat">
              3<sup>×</sup>
            </div>
            <div className="stat-label">More qualified briefs vs. inbound LinkedIn</div>
          </div>
          <div className="vis">
            <div className="visual-card" style={{ display: 'grid', gap: 10 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: 12,
                  color: 'var(--t-3)',
                  fontFamily: 'var(--mono)',
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                }}
              >
                <span>New briefs · matched to you</span>
                <span>03</span>
              </div>
              {BRIEFS.map((b) => (
                <div
                  key={b.title}
                  style={{
                    border: '1px solid var(--hair)',
                    borderRadius: 10,
                    padding: 14,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600 }}>{b.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--t-3)' }}>{b.meta}</div>
                  </div>
                  <button className="btn btn-paper" style={{ fontSize: 12, padding: '7px 14px' }}>
                    Open →
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="feature">
        <div className="row">
          <div className="copy">
            <h3>Paid the day an offer signs</h3>
            <p>
              No 30‑day net. No invoice chasing. Upnest handles client billing — you get your fee in your account
              within 24 hours of the candidate accepting.
            </p>
            <div className="dots">
              <span />
              <span className="on" />
            </div>
            <div className="stat">
              24<sup>h</sup>
            </div>
            <div className="stat-label">From offer to payout</div>
          </div>
          <div className="vis">
            <div className="visual-card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: 18,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      color: 'var(--t-3)',
                      fontFamily: 'var(--mono)',
                      letterSpacing: '.16em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Payouts · this month
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 48,
                      lineHeight: 1,
                      marginTop: 8,
                      letterSpacing: '-.02em',
                    }}
                  >
                    €14,000
                  </div>
                </div>
                <span
                  style={{
                    background: '#E9DEC9',
                    color: '#0A0A0B',
                    borderRadius: 99,
                    padding: '6px 12px',
                    fontSize: 12,
                    fontWeight: 500,
                  }}
                >
                  Cleared
                </span>
              </div>
              <div style={{ display: 'grid', gap: 10, borderTop: '1px solid var(--hair)', paddingTop: 14 }}>
                {PAYOUTS.map((p) => (
                  <div
                    key={p.brief}
                    style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }}
                  >
                    <span>{p.brief}</span>
                    <b>{p.amount}</b>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— How it works</div>
          <h2>
            Apply once. <em>Work the briefs that fit you.</em>
          </h2>
        </div>
        <HowGrid steps={HOW_STEPS} />
      </section>

      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— Questions</div>
          <h2>
            Things recruiters <em>ask first.</em>
          </h2>
        </div>
        <Faq items={FAQS} />
      </section>

      <CtaBanner
        title={
          <>
            Run your desk on <em>better roles.</em>
          </>
        }
        cta="Apply to recruit →"
        micro="20 minutes · same week · no commitment"
      />
    </main>
  );
}
