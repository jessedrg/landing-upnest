'use client';

import { useEffect, useRef, useState } from 'react';
import BrandMark from './BrandMark';

export default function VideoHero() {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const applyPreference = () => {
      if (motion.matches) element.pause();
      else {
        if (!element.getAttribute('src')) element.src = window.matchMedia('(max-width: 700px)').matches
          ? '/video/hero-mobile.mp4' : '/video/hero-desktop.mp4';
        void element.play().catch(() => setPlaying(false));
      }
    };
    // Only fetch the appropriate resolution, and keep reduced-motion visits still.
    if (!motion.matches) {
      element.src = window.matchMedia('(max-width: 700px)').matches
        ? '/video/hero-mobile.mp4' : '/video/hero-desktop.mp4';
      applyPreference();
    }
    motion.addEventListener('change', applyPreference);
    return () => motion.removeEventListener('change', applyPreference);
  }, []);

  const toggleVideo = () => {
    const element = video.current;
    if (!element) return;
    if (playing) element.pause();
    else {
      if (!element.getAttribute('src')) element.src = window.matchMedia('(max-width: 700px)').matches
        ? '/video/hero-mobile.mp4' : '/video/hero-desktop.mp4';
      void element.play().catch(() => setPlaying(false));
    }
  };

  return (
    <section className="film-hero" aria-labelledby="hero-heading">
      <video ref={video} className="film-hero__video" muted loop playsInline preload="none"
        poster="/video/hero-poster.jpg" aria-hidden="true"
        onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} onError={() => setPlaying(false)} />
      <div className="film-hero__shade" />
      <div className="film-hero__top">
        <a href="/" className="film-hero__mark" aria-label="Upnest home"><BrandMark /></a>
        <p>Independent recruiting</p>
      </div>
      <div className="film-hero__body">
        <h1 id="hero-heading">Recruiting<br />top 1% talent.</h1>
        <div className="film-hero__under"><span />New York · San Francisco</div>
      </div>
      <div className="film-hero__bottom">
        <div className="film-hero__disciplines"><span>GTM</span><span>AI research</span><span>Robotics</span><span>Engineering</span></div>
        <div className="film-hero__controls">
          <button onClick={toggleVideo} aria-label={playing ? 'Pause background video' : 'Play background video'} aria-pressed={playing}>
            <span aria-hidden="true">{playing ? 'Ⅱ' : '▷'}</span>
          </button>
          <a href="#approach">Explore</a>
        </div>
      </div>
    </section>
  );
}
