'use client';

import { useState, type FormEvent } from 'react';
import CtaBanner from '../../components/CtaBanner';

const CASES: { tag: string; title: string; body: string; first: string; hire: string; savings: string }[] = [
  {
    tag: 'FINTECH · SERIES C',
    title: 'Senior PM, Payments',
    body: 'One brief, three matched recruiters, six qualified candidates in the first week.',
    first: '4d',
    hire: '21d',
    savings: '~50%',
  },
  {
    tag: 'DEV TOOLS · SERIES B',
    title: 'Staff iOS Engineer',
    body: 'Niche brief that had been open 4 months on a job board. Filled by a specialist recruiter.',
    first: '6d',
    hire: '28d',
    savings: '~60%',
  },
  {
    tag: 'DTC · SEED',
    title: 'Head of Brand Design',
    body: "Founder didn't have time to interview a long list. We sent four. They hired the second.",
    first: '3d',
    hire: '18d',
    savings: '~55%',
  },
];

export default function CustomersPage() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="empty-customers">
        <div className="stage">
          <div className="badge-pill">
            <span className="dot" /> Early access · onboarding our first cohort
          </div>
          <h2>
            Customer stories, <em>coming soon.</em>
          </h2>
          <p>
            We're early — and we'd rather show you real customers than borrowed logos. The first hires through Upnest
            are happening now. If you'd like to be in the next case study, get in touch.
          </p>
          <form className="form" onSubmit={onSubmit}>
            <input
              type="email"
              placeholder={submitted ? "Thanks — we'll be in touch." : 'work@company.com'}
              required={!submitted}
              defaultValue=""
              key={submitted ? 'done' : 'idle'}
            />
            <button type="submit" className="btn btn-ink">
              Get notified →
            </button>
          </form>
        </div>
      </div>

      <section className="feature" style={{ paddingTop: 0 }}>
        <div className="sec-head">
          <div className="eyebrow">— What we're seeing</div>
          <h2>
            The shape of an <em>Upnest hire.</em>
          </h2>
          <p>
            Anonymised data from briefs we've run in the last 90 days. We'll replace these with named case studies as
            customers go live.
          </p>
        </div>
        <div className="case-grid">
          {CASES.map((c) => (
            <div key={c.title} className="case-card">
              <span className="tag">{c.tag}</span>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
              <div className="stat-row">
                <div>
                  <span>First candidate</span>
                  <b>{c.first}</b>
                </div>
                <div>
                  <span>Hire</span>
                  <b>{c.hire}</b>
                </div>
                <div>
                  <span>Savings vs agencies</span>
                  <b>{c.savings}</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title={
          <>
            Want to be <em>customer #001?</em>
          </>
        }
        cta="Get a demo →"
        micro="Founders take every call this quarter"
      />
    </main>
  );
}
