'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { PLACEMENTS } from './TalentPlacedFeed';

const GROUPS = ['All placements', 'Engineering & AI', 'Go-to-market'] as const;
export default function PlacementIndex() {
  const list = useRef<HTMLDivElement>(null);
  const touch = useRef<{x: number; y: number} | null>(null);
  const [group, setGroup] = useState<string>('All placements');
  const [selected, setSelected] = useState(0);
  const rows = PLACEMENTS.map((p, i) => ({ ...p, id: i })).filter(p => {
    const technical = /Engineer|Platform/i.test(p.role);
    return group === 'All placements' || (group === 'Engineering & AI' ? technical : !technical);
  });
  const active = rows.find(p => p.id === selected) || rows[0];
  const position = rows.findIndex(p => p.id === active.id);
  const move = (direction: number) => {
    const next = rows[position + direction];
    if (next) setSelected(next.id);
  };
  useEffect(() => {
    const container = list.current;
    const button = container?.querySelector<HTMLElement>('[aria-pressed="true"]');
    if (!container || !button || container.scrollWidth <= container.clientWidth) return;
    const left = button.getBoundingClientRect().left - container.getBoundingClientRect().left + container.scrollLeft;
    container.scrollTo({ left: left - (container.clientWidth - button.clientWidth) / 2,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }, [active.id, group]);
  return (
    <section className="placement-index" id="placements" aria-labelledby="placement-heading">
      <header className="index-header"><span className="small-label">The placement index</span><h2 id="placement-heading">Good people.<br /><span>In good company.</span></h2><p>A selection of the people<br />we’ve helped teams hire.</p></header>
      <div className="index-filters" aria-label="Filter placements">{GROUPS.map(g => <button key={g} aria-pressed={group === g} onClick={() => {setGroup(g);setSelected(0);}}>{g}<span>{g === 'All placements' ? '10' : g === 'Engineering & AI' ? '06' : '04'}</span></button>)}</div>
      <div className="index-body">
        <div ref={list} className="index-list" aria-label="Select a placement">{rows.map(p => <button key={p.id} className={active.id === p.id ? 'is-selected' : ''} aria-pressed={active.id === p.id} onClick={() => setSelected(p.id)}><span className="index-number">{String(p.id + 1).padStart(2,'0')}</span><span className="index-company">{p.company}</span><span className="index-type">{/Engineer|Platform/i.test(p.role) ? 'Engineering' : 'Commercial'}</span></button>)}</div>
        <div className="file-stage">
        <div className="file-navigation"><span aria-live="polite">{position + 1} / {rows.length}</span><div><button disabled={position === 0} onClick={() => move(-1)} aria-label="Previous placement">Previous</button><button disabled={position === rows.length - 1} onClick={() => move(1)} aria-label="Next placement">Next</button></div></div>
        <article className="placement-file" aria-live="polite" key={active.id}
          onTouchStart={event => {
            if ((event.target as HTMLElement).closest('a,button')) return;
            touch.current = { x: event.touches[0].clientX, y: event.touches[0].clientY };
          }}
          onTouchEnd={event => {
            if (!touch.current) return;
            const dx = event.changedTouches[0].clientX - touch.current.x;
            const dy = event.changedTouches[0].clientY - touch.current.y;
            touch.current = null;
            if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy) * 1.5) move(dx < 0 ? 1 : -1);
          }} onTouchCancel={() => { touch.current = null; }}>
          <div className="file-top"><span>Placement / {String(active.id + 1).padStart(2,'0')}</span><span>UPN—{String(active.id + 1).padStart(3,'0')}</span></div>
          <div className="file-company"><Image src={active.logo} width={76} height={76} alt="" /><span>{active.company}</span></div>
          <div className="file-role"><span className="small-label">The hire</span><h3>{active.role}</h3></div>
          <p className="file-description">{active.descriptor}</p>
          <a href={active.url} target="_blank" rel="noopener noreferrer">Meet {active.company}</a>
          <div className="file-foot"><span>Selected work</span><span>New York & San Francisco</span></div>
        </article>
        <p className="swipe-note">Swipe to explore the placements</p>
        </div>
      </div>
    </section>
  );
}
