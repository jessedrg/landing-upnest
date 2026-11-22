import Image from 'next/image';

import { PRACTICES } from './practices';

export default function SpecialistPractices() {
  return (
    <section className="feature practices" id="other-niches" aria-labelledby="practices-title">
      <div className="sec-head">
        <div className="eyebrow">The wider Upnest network</div>
        <h2 id="practices-title">Different niches.<br /><em>Same high standards.</em></h2>
        <p>Specialist knowledge. Real connections. Explore our other worlds.</p>
      </div>
      <div className="practice-grid">
        {PRACTICES.map((practice) => (
          <a className={`practice-card practice-${practice.theme}`} href={practice.href} key={practice.name} aria-label={practice.cta}>
            <div className="practice-card-top">
              <div className="practice-brand">
                <Image src={practice.logo} alt="" width={44} height={44} />
                <span className="practice-wordmark">upnest <span>{practice.name}</span></span>
              </div>
            </div>
            <h3>{practice.emphasis}</h3>
            <p>{practice.description}</p>
            <div className="practice-link">
              <span>{practice.cta}</span>
              <span className="practice-arrow" aria-hidden="true">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19 19 5M5 5h14v14" /></svg>
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
