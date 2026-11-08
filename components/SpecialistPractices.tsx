import Image from 'next/image';

const PRACTICES = [
  {
    name: 'lawyers',
    theme: 'law',
    logo: '/landing-assets/upnest-lawyers-mark.svg',
    title: 'Legal recruiters. Legal expertise.',
    description:
      'Specialist recruiters who know the legal market — and the partners, lawyers and in-house leaders your firm needs.',
    specialisms: ['Law firms', 'In-house legal', 'Partners & associates'],
    href: 'https://law.upnesttalent.com',
    cta: 'Explore Upnest Lawyers',
  },
  {
    name: 'crypto',
    theme: 'crypto',
    logo: '/landing-assets/upnest-crypto-mark.svg',
    title: 'Crypto-native recruiters. Real connections.',
    description:
      'Experts immersed in crypto and Web3, connected to the founders, protocol leaders and hard-to-reach builders shaping the ecosystem.',
    specialisms: ['Crypto & Web3', 'Protocols', 'Digital assets'],
    href: 'https://crypto.upnesttalent.com',
    cta: 'Explore Upnest Crypto',
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
          <a className={`practice-card practice-${practice.theme}`} href={practice.href} key={practice.name}>
            <div className="practice-brand" aria-label={`Upnest ${practice.name}`}>
              <Image src={practice.logo} alt="" width={40} height={40} />
              <span className="practice-wordmark">upnest <span>{practice.name}</span></span>
            </div>
            <h3>{practice.title}</h3>
            <p>{practice.description}</p>
            <ul className="practice-tags" aria-label="Specialisms">
              {practice.specialisms.map((specialism) => <li key={specialism}>{specialism}</li>)}
            </ul>
            <div className="practice-link">
              <span>{practice.cta}</span>
              <span className="practice-arrow" aria-hidden="true">→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
