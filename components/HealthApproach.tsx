const STEPS = [
  ['01', 'Understand the ambition.', 'The product. The mission. The person who will make a difference. We get beyond the job description to understand what your next hire really needs to do.'],
  ['02', 'Go where the talent is.', 'We combine trusted relationships with focused market mapping. Engineers, commercial leaders and specialists who are not scrolling through job boards.'],
  ['03', 'Meet a considered shortlist.', 'We speak with and qualify every candidate before making an introduction. You get a focused shortlist with clear context on technical ability, commercial experience and motivation.'],
  ['04', 'Make the hire. Stay connected.', 'We coordinate interviews, share honest feedback and help both sides navigate the offer. Our support continues through the start date and onboarding.'],
];

export default function HealthApproach() {
  return (
    <>
      <section className="health-focus health-width" aria-labelledby="health-focus-title">
        <div className="health-section-label">THE PEOPLE BEHIND THE PROGRESS</div>
        <div className="health-focus-intro"><h2 id="health-focus-title">Built for health.<br /><em>Connected to talent.</em></h2><p>From the first engineering hire to the commercial team taking your product to market. Deep technical understanding, real relationships and a genuine belief in what you are building.</p></div>
        <div className="health-focus-grid">
          <article><span className="health-focus-index">01 / BUILD</span><h3>Engineering &amp; AI</h3><p>The builders making better health possible.</p><ul><li>Software &amp; platform engineering</li><li>AI, machine learning &amp; data</li><li>Engineering leadership</li></ul></article>
          <article><span className="health-focus-index">02 / GROW</span><h3>GTM &amp; Sales</h3><p>The people turning innovation into adoption.</p><ul><li>Sales &amp; revenue leadership</li><li>Growth &amp; product marketing</li><li>Partnerships &amp; customer success</li></ul></article>
        </div>
      </section>
      <section className="health-approach" id="approach" aria-labelledby="health-approach-title">
        <div className="health-width">
          <div className="health-section-label">OUR APPROACH</div>
          <div className="health-approach-intro"><h2 id="health-approach-title">Not more CVs.<br /><em>The right person.</em></h2><p>Healthcare is a particular world. Your search partner should understand it. We work closely, search deliberately and introduce people we genuinely believe in.</p></div>
          <h3 className="health-process-title" id="how-we-work">How we work.</h3>
          <ol className="health-method" aria-labelledby="how-we-work">{STEPS.map(([number, title, description]) => <li key={number}><span aria-hidden="true">{number}</span><h4>{title}</h4><p>{description}</p></li>)}</ol>
          <div className="health-contact" id="contact"><div><p className="health-section-label">A BIG MISSION STARTS WITH THE RIGHT PEOPLE.</p><h2>Who&apos;s your <em>next hire?</em></h2></div><button className="health-button" data-cal-namespace="lets-partner" data-cal-link="jessedragstra/lets-partner" data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'>Let&apos;s talk talent <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg></button></div>
        </div>
      </section>
    </>
  );
}
