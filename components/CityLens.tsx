'use client';
import { useState } from 'react';
import Image from 'next/image';

const cities = [
  { name: 'New York', short: 'NYC', image: '/img/cities/city-1.jpg', caption: 'A network built one introduction at a time.', focus: 'Commercial leaders. Product thinkers. Technical builders.' },
  { name: 'San Francisco', short: 'SF', image: '/img/cities/city-2.jpg', caption: 'Close to the people building the next thing.', focus: 'Engineering. AI research. Robotics.' },
];
export default function CityLens() {
  const [selected, setSelected] = useState(0);
  const city = cities[selected];
  return <section className="city-lens" aria-label="Our recruiting markets">
    {cities.map((c, i) => <div className={`city-lens__image${i === selected ? ' is-active' : ''}`} key={c.name} aria-hidden={i !== selected}><Image src={c.image} alt={i === 0 ? 'Aerial view of Manhattan, New York' : 'Golden Gate Bridge in San Francisco'} fill sizes="100vw" /></div>)}
    <div className="city-lens__top"><span className="small-label">Two cities. Our entire focus.</span><div aria-label="Choose a city">{cities.map((c,i) => <button key={c.name} aria-pressed={selected === i} onClick={() => setSelected(i)}>{c.name}<span>{i === selected ? '●' : '○'}</span></button>)}</div></div>
    <div className="city-lens__content" aria-live="polite" key={city.name}><h2>{city.short}</h2><div><p>{city.caption}</p><span>{city.focus}</span></div></div>
    <div className="city-lens__bottom"><span>Local relationships. Long-term perspective.</span><span>{String(selected + 1).padStart(2,'0')} / 02</span></div>
  </section>;
}
