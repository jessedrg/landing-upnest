import Image from 'next/image';

const PRACTICES = [
  {
    name: 'lawyers',
    theme: 'law',
    logo: '/landing-assets/upnest-lawyers-mark.svg',
    emphasis: 'Legal expertise.',
    description:
      'Specialist recruiters who know the legal market — and the partners, lawyers and in-house leaders your firm needs.',
    href: 'https://law.upnesttalent.com',
    cta: 'Explore Upnest Lawyers',
  },
  {
    name: 'crypto',
    theme: 'crypto',
    logo: '/landing-assets/upnest-crypto-mark.svg',
    emphasis: 'Real connections.',
    description:
      'Experts immersed in crypto and Web3, connected to the founders, protocol leaders and hard-to-reach builders shaping the ecosystem.',
    href: 'https://crypto.upnesttalent.com',
    cta: 'Explore Upnest Crypto',
  },
  {
    name: 'robotics',
    theme: 'robotics',
    logo: '/landing-assets/upnest-robotics-mark.svg',
    emphasis: 'Real-world impact.',
    description:
      'Recruiters connected to the engineers, researchers and technical leaders turning robotics breakthroughs into real-world technology.',
    href: 'https://robotics.upnesttalent.com',
    cta: 'Explore Upnest Robotics',
  },
  {
    name: 'health',
    theme: 'health',
    logo: '/landing-assets/upnest-health-mark.svg',
    emphasis: 'Human connections.',
    description:
      'Specialist recruiters who know healthcare, with relationships across clinical leadership, research and the teams shaping better care.',
    href: 'https://health.upnesttalent.com',
    cta: 'Explore Upnest Health',
  },
];

export default function SpecialistPractices() {
  return (
    <section className="feature practices" aria-labelledby="practices-title">
      <div className="sec-head">
        <div className="eyebrow">— Our specialist practices</div>
        <h2 id="practices-title">Beyond tech &amp; <em>go-to-market.</em></h2>
        <p>Different markets. The same personal approach. Meet the recruiters who know your niche inside out.</p>
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
