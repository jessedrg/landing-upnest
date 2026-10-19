'use client';

import Image from 'next/image';
import { useState } from 'react';
import { PLACEMENTS } from './TalentPlacedFeed';

const GROUPS = ['All placements', 'Engineering & AI', 'Go-to-market'] as const;
export default function PlacementIndex() {
  const [group, setGroup] = useState<string>('All placements');
  const [selected, setSelected] = useState(0);
  const rows = PLACEMENTS.map((p, i) => ({ ...p, id: i })).filter(p => {
    const technical = /Engineer|Platform/i.test(p.role);
    return group === 'All placements' || (group === 'Engineering & AI' ? technical : !technical);
  });
  const active = rows.find(p => p.id === selected) || rows[0];
  return (
    <section className="placement-index" id="placements" aria-labelledby="placement-heading">
      <header className="index-header"><span className="small-label">The placement index</span><h2 id="placement-heading">Good people.<br /><span>In good company.</span></h2><p>A selection of the people<br />we’ve helped teams hire.</p></header>
      <div className="index-filters" aria-label="Filter placements">{GROUPS.map(g => <button key={g} aria-pressed={group === g} onClick={() => {setGroup(g);setSelected(0);}}>{g}<span>{g === 'All placements' ? '10' : g === 'Engineering & AI' ? '06' : '04'}</span></button>)}</div>
      <div className="index-body">
        <div className="index-list" aria-label="Select a placement">{rows.map(p => <button key={p.id} className={active.id === p.id ? 'is-selected' : ''} aria-pressed={active.id === p.id} onClick={() => setSelected(p.id)}><span className="index-number">{String(p.id + 1).padStart(2,'0')}</span><span className="index-company">{p.company}</span><span className="index-type">{/Engineer|Platform/i.test(p.role) ? 'Engineering' : 'Commercial'}</span></button>)}</div>
        <article className="placement-file" aria-live="polite" key={active.id}>
          <div className="file-top"><span>Placement / {String(active.id + 1).padStart(2,'0')}</span><span>UPN—{String(active.id + 1).padStart(3,'0')}</span></div>
          <div className="file-company"><Image src={active.logo} width={76} height={76} alt="" /><span>{active.company}</span></div>
          <div className="file-role"><span className="small-label">The hire</span><h3>{active.role}</h3></div>
          <p className="file-description">{active.descriptor}</p>
          <a href={active.url} target="_blank" rel="noopener noreferrer">Meet {active.company}</a>
          <div className="file-foot"><span>Selected work</span><span>New York & San Francisco</span></div>
        </article>
      </div>
    </section>
  );
}
