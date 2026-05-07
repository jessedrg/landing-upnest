import Link from 'next/link';
import Image from 'next/image';
import Faq from '../components/Faq';
import HowGrid from '../components/HowGrid';
import CtaBanner from '../components/CtaBanner';

const RECRUITERS: { name: string; role: string; img: string }[] = [
  { name: 'Haeri Kim', role: 'Filled 14 senior PM roles', img: '/img/people/p5.png' },
  { name: 'Nina Sousa', role: 'Eng leadership · Lisbon', img: '/img/people/p1.png' },
  { name: 'Chisom Robertson', role: 'Design · NYC + remote', img: '/img/people/p3.png' },
  { name: 'Josh Cooper', role: 'Sales leadership · US', img: '/img/people/p4.png' },
  { name: 'Mike Song', role: 'Data & ML · APAC', img: '/img/people/p6.png' },
];

const HOW_STEPS = [
  { n: '1', title: 'Brief the role', body: '15‑minute call. We write the brief, agree the fixed bounty, and pick the recruiters who fit.', meta: '~Day 0' },
  { n: '2', title: 'First candidates', body: 'Vetted recruiters source in parallel. The first qualified candidate lands in your inbox within five days.', meta: 'Day 5' },
  { n: '3', title: 'Review & advance', body: 'One dashboard. Approve, reject, schedule. Feedback flows back to recruiters automatically.', meta: 'Days 5–20' },
  { n: '4', title: 'Sign & onboard', body: 'Generate the offer in‑app. Pay the bounty only when the hire signs. 90‑day replacement included.', meta: '~Day 25' },
];

const FAQS = [
  { q: 'How is the bounty calculated?', a: "It's a flat fee per hire, agreed before any recruiter sees the role. The amount depends on the type of role (engineering, sales, design, etc.) and seniority — but never on the candidate's salary.", open: true },
  { q: "What happens if the hire doesn't work out?", a: 'Every Upnest hire comes with a 90‑day replacement guarantee. If the person leaves or doesn\'t pass probation, we re‑run the search with the same recruiters at no extra cost.' },
  { q: 'How is this different from a job board?', a: "Job boards are passive — you post and wait. Upnest is active sourcing: vetted recruiters reach out to people who aren't applying anywhere, and only ones with a real fit. You see candidates, not applications." },
  { q: 'Who are the recruiters?', a: 'Independent specialists and small agencies — most have 5–15+ years of experience filling specific role types. We vet every recruiter before they can work on Upnest, and we track their fill rate, response time and candidate quality.' },
  { q: 'How fast can we start?', a: 'From kickoff call to first candidate is typically five days. Most companies hire within 25 days of starting.' },
];

export default function CompaniesPage() {
  return (
    <main>
      <section className="hero">
        <span className="eyebrow">
          <span className="dot" /> Senior hires · No % fees
        </span>
        <h1>
          Senior hires in 25 days. <em>Way less than the competition.</em>
        </h1>
        <p className="sub">
          Upnest connects companies and agencies with vetted recruiters. First candidate in 5 days, hire in ~25 — one
          flat fee per hire.
        </p>

        <div className="fact-strip">
          <span className="fact">
            First candidate <b>in 5 days</b>
          </span>
          <span className="fact">
            Avg. hire <b>in 25 days</b>
          </span>
          <span className="fact">
            <b>Way less</b> · than the competition
          </span>
        </div>

        <div className="ctas">
          <button
            className="btn btn-ink btn-lg"
            data-cal-namespace="lets-partner"
            data-cal-link="jessedragstra/lets-partner"
            data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
          >
            Let's partner →
          </button>
          <Link href="/recruiters">
            <button className="btn btn-ghost btn-lg">For recruiters</button>
          </Link>
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

      {/* BOUNTY VS % */}
      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— Pricing</div>
          <h2>
            One fee. <em>Set before we start.</em>
          </h2>
          <p>
            Traditional agencies charge 15–30% of first‑year salary. We don't. You agree a fixed bounty up front — the
            same fee whether you hire a $90k associate or a $300k staff engineer.
          </p>
        </div>
        <div className="bounty-block">
          <div className="bounty-grid">
            <div className="bounty-card bad">
              <div className="lbl">
                <span className="x" /> Traditional agency
              </div>
              <h4>15–30% of first‑year salary</h4>
              <div className="price">
                <s>$45,000</s>
                <span className="small">on a $200k hire</span>
              </div>
              <ul>
                <li>Fee scales with seniority — punishes you for hiring great people</li>
                <li>Negotiated late, often after candidates are interviewing</li>
                <li>Recruiters compete on submission volume, not quality</li>
              </ul>
            </div>
            <div className="bounty-card">
              <div className="lbl">
                <span className="ok" /> Upnest fixed bounty
              </div>
              <h4>One flat bounty per hire</h4>
              <div className="price">
                €<span style={{ fontFeatureSettings: "'tnum'" }}>—</span>
                <span className="small">set together before we start</span>
              </div>
              <ul>
                <li>Same fee whether the hire earns $90k or $300k</li>
                <li>Agreed before any recruiter sees the role</li>
                <li>Recruiters compete on quality — they get paid the same regardless</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ROW 1 — vetted recruiters */}
      <section className="feature">
        <div className="row">
          <div className="copy">
            <h3>Vetted recruiters, matched to your role</h3>
            <p>
              Every recruiter on Upnest has a track record in your space. We match your role with the 3–5 who've filled
              it before — not a list of 200.
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
                  Matched recruiters <a>View all →</a>
                </h5>
                <div className="recs">
                  {RECRUITERS.map((r) => (
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
                  <h5>Candidates submitted</h5>
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

      {/* FAQ */}
      <section className="feature">
        <div className="sec-head">
          <div className="eyebrow">— Questions</div>
          <h2>
            Things companies <em>ask first.</em>
          </h2>
        </div>
        <Faq items={FAQS} />
      </section>

      <CtaBanner
        title={
          <>
            Stop paying <em>percentages.</em>
          </>
        }
        cta="Let's partner →"
        micro="15 minutes · no card · no commitment"
      />
    </main>
  );
}
