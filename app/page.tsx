import Image from 'next/image';
import HowGrid from '../components/HowGrid';
import CtaBanner from '../components/CtaBanner';
import TalentPlacedFeed from '../components/TalentPlacedFeed';

const CANDIDATES: { name: string; role: string; img: string }[] = [
  { name: 'Haeri Kim', role: 'Senior PM · ex‑Stripe', img: '/img/people/p5.png' },
  { name: 'Nina Sousa', role: 'Eng leadership · ex‑Revolut', img: '/img/people/p1.png' },
  { name: 'Chisom Robertson', role: 'Product Design · ex‑Figma', img: '/img/people/p3.png' },
  { name: 'Josh Cooper', role: 'Go‑to‑market · ex‑Datadog', img: '/img/people/p4.png' },
  { name: 'Mike Song', role: 'Staff SWE · ex‑Airbnb', img: '/img/people/p6.png' },
];

const SECTORS = [
  'Software Engineering',
  'Staff & Principal Eng',
  'Product Management',
  'Go‑to‑Market & Sales',
  'Data & ML',
  'Design',
  'Operations',
  'Finance',
];

const HOW_STEPS = [
  { n: '1', title: 'Brief the role', body: '15‑minute call. We understand the role, the team and exactly the kind of person you want to hire.', meta: '~Day 0' },
  { n: '2', title: 'We tap our database', body: 'We go straight to our network of pre‑vetted top candidates — people we already know and have placed before.', meta: 'Day 1–5' },
  { n: '3', title: 'Meet a shortlist', body: 'No long lists. You meet a handful of candidates who genuinely fit the brief, with full context on each one.', meta: 'Days 5–20' },
  { n: '4', title: 'Sign & onboard', body: 'We manage the offer end‑to‑end. You pay only when the hire signs. 90‑day replacement included.', meta: '~Day 25' },
];

export default function CompaniesPage() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">
          <span className="dot" /> Top candidates · Delivered fast
        </span>
        <h1>
          The best senior talent, <em>from people we already know.</em>
        </h1>
        <p className="sub">
          Upnest is a recruiting agency with a curated database of top candidates across engineering, product,
          go‑to‑market and more — many from the best startups and universities. First candidate in 5 days, hire in ~25.
        </p>

        <div className="fact-strip">
          <span className="fact">
            First candidate <b>in 5 days</b>
          </span>
          <span className="fact">
            Avg. hire <b>in 25 days</b>
          </span>
          <span className="fact">
            <b>Top talent</b> · already vetted
          </span>
        </div>

        <div className="ctas">
          <button
            className="btn btn-ink btn-lg"
            data-cal-namespace="lets-partner"
            data-cal-link="jessedragstra/lets-partner"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Let&apos;s partner →
          </button>
        </div>

        <div className="hero-photo">
          <Image
            src="/landing-assets/recruiter-hero.png"
            alt="Upnest recruiter at work"
            fill
            sizes="(min-width: 1080px) 1080px, 100vw"
            priority
            style={{ objectFit: 'cover' }}
          />
        </div>
      </section>

      {/* ROW 1 — our database of top candidates */}
      <section className="feature">
        <div className="row">
          <div className="copy">
            <h3>A database of top candidates, ready to move</h3>
            <p>
              We&apos;ve spent years building relationships with senior talent. When you brief a role, we go straight to
              the people we already know fit it — not a list of 200 cold applicants.
            </p>
            <div className="dots">
              <span />
              <span className="on" />
              <span />
              <span />
            </div>
            <div className="stat">
              5<sup>d</sup>
            </div>
            <div className="stat-label">Median time to first qualified candidate</div>
          </div>
          <div className="vis">
            <div className="dash">
              <div className="dash-card">
                <h5>
                  Top candidates <a>View all →</a>
                </h5>
                <div className="recs">
                  {CANDIDATES.map((r) => (
                    <div key={r.name} className="rec">
                      <div className="av" style={{ backgroundImage: `url(${r.img})` }} />
                      <div>
                        <b>{r.name}</b>
                        <span>{r.role}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="dash-card">
                  <h5>Shortlist sent</h5>
                  <div className="chart">
                    {[30, 50, 42, 80, 95].map((h, i) => (
                      <div key={i} className="bar" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                  <div className="chart-meta">
                    <span>Day 1</span>
                    <span>5</span>
                    <span>15</span>
                    <span>25</span>
                  </div>
                </div>
                <div className="kpi-row" style={{ marginTop: 14 }}>
                  <div className="kpi">
                    <div className="l">Interviewed</div>
                    <div className="v">11</div>
                  </div>
                  <div className="kpi">
                    <div className="l">Hired</div>
                    <div className="v">3</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* SECTORS */}
      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— Where we hire</div>
          <h2>
            Top talent, <em>across every senior function.</em>
          </h2>
          <p>
            From staff engineers to go‑to‑market leaders, our database spans the roles that matter most — with
            candidates from the best startups and universities.
          </p>
        </div>
        <div className="bounty-block">
          <div className="sector-grid">
            {SECTORS.map((s) => (
              <div key={s} className="sector-chip">
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* HOW IT WORKS */}
      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— How it works</div>
          <h2>
            From brief to <em>signed offer</em>, in four moves.
          </h2>
        </div>
        <HowGrid steps={HOW_STEPS} />
      </section>

      <div className="divider" />

      <TalentPlacedFeed />

      <CtaBanner
        title={
          <>
            Hire the best. <em>Faster.</em>
          </>
        }
        cta="Let's partner →"
        micro="15 minutes · no card · no commitment"
      />
    </main>
  );
}
