import PageMotion from '../components/PageMotion';
import VideoHero from '../components/VideoHero';
import BrandMark from '../components/BrandMark';
import PlacementIndex from '../components/PlacementIndex';
import CityLens from '../components/CityLens';
import './home.css';

export default function CompaniesPage() {
  return <main className="home">
    <PageMotion />
    <VideoHero />
    <section className="intro-note" id="approach" aria-labelledby="intro-heading">
      <span className="small-label">A note on how we work</span>
      <div><h2 id="intro-heading">The right person<br />changes everything.</h2><p>We’re Upnest. We recruit across GTM, AI research, robotics and engineering in New York and San Francisco. A small, focused team with a network we’ve built by actually knowing the people in it.</p><p>Tell us what you’re building.<br />We’ll introduce you to the people who can help.</p></div>
      <div className="intro-seal" aria-hidden="true"><BrandMark /></div>
    </section>
    <PlacementIndex />
    <CityLens />
    <section className="search-method" aria-labelledby="method-heading">
      <div className="method-title"><span className="small-label">The search, simplified.</span><h2 id="method-heading">Small shortlist.<br />High conviction.</h2><p>No pile of CVs. Just people worth meeting.</p><div className="method-stat"><strong>5</strong><div><span>days</span><p>To your first<br />qualified candidate.</p></div></div></div>
      <div className="method-steps">
        <details open><summary><span>01</span><h3>A proper conversation.</h3><span className="method-plus" aria-hidden="true" /></summary><div className="method-answer"><p>We get to know the role, the team and what a great hire looks like for you. The brief is the starting point, not the whole picture.</p><span>First, we listen.</span></div></details>
        <details><summary><span>02</span><h3>People, not profiles.</h3><span className="method-plus" aria-hidden="true" /></summary><div className="method-answer"><p>We work through our curated network and bring you a focused shortlist. Every introduction comes with context: who they are, what they do well and why we think you should meet.</p><span>Then, we connect.</span></div></details>
        <details><summary><span>03</span><h3>All the way to the offer.</h3><span className="method-plus" aria-hidden="true" /></summary><div className="method-answer"><p>We coordinate interviews, keep feedback moving and help close the offer. You pay when your hire signs, with a 90-day replacement guarantee.</p><span>Finally, we make it happen.</span></div></details>
      </div>
    </section>
    <section className="contact-note" aria-labelledby="contact-heading"><div><span className="small-label">Have someone in mind?</span><h2 id="contact-heading">Let’s talk.</h2></div><a href="https://cal.com/jessedragstra/lets-partner" aria-label="Book a conversation with Upnest"><span>Tell us about the role</span></a></section>
  </main>;
}
