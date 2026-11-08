import Image from 'next/image';

export default function HealthHero() {
  return (
    <section className="health-hero" id="top" aria-labelledby="health-title">
      <div className="health-hero-photo">
        <Image src="/landing-assets/health-san-francisco.jpg" alt="The Golden Gate Bridge in San Francisco" fill priority sizes="(max-width: 760px) 100vw, 50vw" />
      </div>
      <div className="health-hero-topline">
        <span>INDEPENDENT MINDS.<br />EXCEPTIONAL PEOPLE.</span>
        <span>SAN FRANCISCO &amp; NEW YORK / 01</span>
      </div>
      <div className="health-hero-content">
        <p className="health-kicker">SPECIALIST TALENT. A HEALTHIER FUTURE.</p>
        <h1 id="health-title"><span>The best talent.</span><span>Engineering &amp; GTM.</span></h1>
      </div>
      <div className="health-hero-summary">
        <p>For the companies moving health forward. Exceptional engineering, sales and go-to-market talent for healthtech teams in San Francisco and New York.</p>
        <button className="health-button health-hero-contact" data-cal-namespace="lets-partner" data-cal-link="jessedragstra/lets-partner" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>Tell us who you need <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></button>
      </div>
      <div className="health-hero-edition">UPNEST<br />SEARCH WITH INTENTION</div>
    </section>
  );
}
