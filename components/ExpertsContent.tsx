'use client';

import { useState, type FormEvent } from 'react';
import Faq from './Faq';

const STEPS = [
  {
    n: 'Step 1',
    title: 'Send the brief',
    body: 'Target companies, roles, geography, and your screening questions. Two lines is enough.',
  },
  {
    n: 'Step 2',
    title: 'Screened profiles in 48h',
    body: 'We recruit fresh for every brief — no stale database. You receive 5–7 semi-anonymous bios with each expert’s written answers to your screening questions.',
  },
  {
    n: 'Step 3',
    title: 'You pick, we schedule',
    body: 'Choose the experts, we handle scheduling, T&Cs and payouts. You’re invoiced per completed call only.',
  },
];

const PROFILES = [
  {
    role: 'Former Commercial Director — leading dental clinic chain',
    meta: '2018–2024 · Ran a €40M P&L across 60+ clinics',
    quote: '“Real sector churn sits at 18–22%, not the published 12%.”',
  },
  {
    role: 'Ex-CEO — mid-market industrial services group',
    meta: '2012–2023 · Led two PE-backed buy-and-build cycles',
    quote: '“Add-on integration costs are systematically underestimated by 30%.”',
  },
  {
    role: 'Former Head of Procurement — top-3 food retailer',
    meta: '2016–2025 · Owned €1.2B supplier base',
    quote: '“Supplier switching happens in Q1 or never.”',
  },
];

const WHY = [
  {
    h: 'Speed',
    p: 'First profiles in 48h. Legacy networks take days.',
  },
  {
    h: 'Recruiting DNA',
    p: 'We are headhunters by trade — the team behind Upnest Talent. Custom recruiting for every brief is our core skill, not a feature.',
  },
  {
    h: 'Best talent, anywhere',
    p: 'We source the exact former executives you need across any market — competitors, customers and suppliers global networks reach poorly.',
  },
  {
    h: 'Honest pricing',
    p: 'One flat rate per completed call. No credits, no minimums, no annual contract.',
  },
];

const COMPLIANCE = [
  'Every expert signs T&Cs: no confidential or material non-public information, ever.',
  '6-month cooling-off from any target company; no current employees of the company under diligence.',
  'Written screening and identity verification before any call.',
  'Full consultation log retained; chaperoned calls available on request.',
];

const FAQ = [
  { q: 'How do you price?', a: 'A flat fee per completed call, quoted upfront. You only pay for calls that happen.' },
  {
    q: 'How are experts vetted?',
    a: 'Identity and employment verification, with written screening answers shared before you commit.',
  },
  {
    q: 'Can we hire your experts directly?',
    a: 'Non-circumvention applies for 12 months; interim and permanent placements are available through Upnest Talent.',
  },
  {
    q: 'Which languages and time zones?',
    a: 'English natively, plus local-language coverage across our recruiting network. Global time-zone coverage with daily US and EU overlap.',
  },
  { q: 'Do you record calls?', a: 'Only with both parties’ consent; transcripts on request.' },
];

export default function ExpertsContent() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function openForm() {
    setSent(false);
    setOpen(true);
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Placeholder submit — wire to a server action / email endpoint later.
    setSent(true);
  }

  return (
    <main className="experts">
      {/* HERO */}
      <section className="hero">
        <span className="eyebrow">
          <span className="dot" /> Expert network · Global coverage
        </span>
        <h1>
          Screened experts for your deal. <em>First profiles in 48 hours.</em>
        </h1>
        <p className="sub">
          We custom-recruit former executives from the exact companies you care about — competitors, customers,
          suppliers — and put them on the phone with your team. Pay per completed call. No annual contract.
        </p>
        <div className="ctas">
          <button className="btn btn-ink btn-lg" onClick={openForm}>
            Send us a brief →
          </button>
          <button
            className="btn btn-ghost btn-lg"
            data-cal-namespace="lets-partner"
            data-cal-link="jessedragstra/lets-partner"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Book a 15-min intro
          </button>
        </div>
        <div className="exp-trust">
          <span className="it">48h to first profiles</span>
          <span className="sep">·</span>
          <span className="it">~half the cost of legacy networks</span>
          <span className="sep">·</span>
          <span className="it">Written screening on every expert</span>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— How it works</div>
          <h2>
            From brief to <em>booked call</em>, in three moves.
          </h2>
        </div>
        <div className="exp-section">
          <div className="exp-steps">
            {STEPS.map((s) => (
              <div key={s.n} className="exp-step">
                <span className="n">{s.n}</span>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SAMPLE PROFILES */}
      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— What lands in your inbox</div>
          <h2>
            Bios you can act on, <em>with screening answers.</em>
          </h2>
        </div>
        <div className="exp-section">
          <div className="exp-profiles">
            {PROFILES.map((p) => (
              <article key={p.role} className="exp-profile">
                <span className="lbl">Illustrative example</span>
                <div className="role">
                  {p.role}
                  <span>{p.meta}</span>
                </div>
                <blockquote>{p.quote}</blockquote>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHY US */}
      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— Why us</div>
          <h2>
            A research network run by <em>headhunters.</em>
          </h2>
        </div>
        <div className="exp-section">
          <div className="exp-why">
            {WHY.map((w) => (
              <div key={w.h} className="exp-why-card">
                <h4>{w.h}</h4>
                <p>{w.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPLIANCE */}
      <section className="exp-compliance">
        <div className="inner">
          <div className="exp-eyebrow">— Compliance</div>
          <h2>Compliance, built in.</h2>
          <div className="grid">
            {COMPLIANCE.map((c) => (
              <div key={c} className="item">
                <svg className="tick" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>{c}</p>
              </div>
            ))}
          </div>
          <p className="note">Compliance pack available for vendor onboarding — ask us.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— FAQ</div>
          <h2>Questions, answered.</h2>
        </div>
        <Faq items={FAQ} />
      </section>

      {/* FINAL CTA */}
      <section className="cta-banner">
        <div className="l">
          <h3>
            Have a live diligence? <em>Test us on it.</em>
          </h3>
        </div>
        <div className="r">
          <button className="btn btn-paper btn-lg" onClick={openForm}>
            Send us a brief →
          </button>
          <span className="micro">Send the brief now — first profiles tomorrow.</span>
        </div>
      </section>

      {/* STICKY MOBILE CTA */}
      <div className="exp-sticky">
        <button className="btn btn-ink" onClick={openForm}>
          Send us a brief →
        </button>
      </div>

      {/* BRIEF MODAL */}
      {open && (
        <div
          className="exp-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Send us a brief"
          onClick={() => setOpen(false)}
        >
          <div className="exp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close" onClick={() => setOpen(false)} aria-label="Close">
              ×
            </button>
            {sent ? (
              <div className="exp-success">
                <div className="ok" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3>Got it.</h3>
                <p>Expect first profiles within 48 hours.</p>
              </div>
            ) : (
              <>
                <h3>Send us a brief</h3>
                <p className="lead">Target companies, roles, geography and your screening questions. Two lines is enough.</p>
                <form className="exp-form" onSubmit={onSubmit}>
                  <div className="exp-grid-2">
                    <div className="exp-field">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" required />
                    </div>
                    <div className="exp-field">
                      <label htmlFor="firm">Firm</label>
                      <input id="firm" name="firm" required />
                    </div>
                  </div>
                  <div className="exp-field">
                    <label htmlFor="email">Work email</label>
                    <input id="email" name="email" type="email" required />
                  </div>
                  <div className="exp-field">
                    <label htmlFor="target">Sector / target</label>
                    <textarea id="target" name="target" placeholder="e.g. Iberian dental roll-ups — churn and pricing" required />
                  </div>
                  <div className="exp-grid-2">
                    <div className="exp-field">
                      <label htmlFor="calls">Number of calls needed</label>
                      <select id="calls" name="calls" defaultValue="1-5">
                        <option value="1-5">1–5</option>
                        <option value="6-15">6–15</option>
                        <option value="16-30">16–30</option>
                        <option value="30+">30+</option>
                      </select>
                    </div>
                    <div className="exp-field">
                      <label htmlFor="timeline">Timeline</label>
                      <select id="timeline" name="timeline" defaultValue="this-week">
                        <option value="this-week">This week</option>
                        <option value="2-4-weeks">2–4 weeks</option>
                        <option value="exploring">Exploring</option>
                      </select>
                    </div>
                  </div>
                  <button type="submit" className="btn btn-ink btn-lg">
                    Send brief — profiles in 48h
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
