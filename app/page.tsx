import HealthHero from '../components/HealthHero';
import HealthApproach from '../components/HealthApproach';
import TalentPlacedFeed from '../components/TalentPlacedFeed';
import SpecialistPractices from '../components/SpecialistPractices';

export default function HealthPage() {
  return (
    <main className="health-home">
      <HealthHero />
      <div className="health-positioning health-width"><span>Independent recruiters.<br />Extraordinary connections.</span><p>Better healthcare starts with <em>exceptional people.</em></p><span>Engineering · GTM · Sales<br />San Francisco &amp; New York</span></div>
      <div id="placements" className="health-placements">
        <TalentPlacedFeed eyebrow="Where we’ve placed talent" title="Good people. Exceptional companies." introduction="Selected engineering and commercial placements across the wider Upnest network. The same relationships and search discipline, now focused on health." accent="#151515" />
      </div>
      <HealthApproach />
      <SpecialistPractices />
    </main>
  );
}
