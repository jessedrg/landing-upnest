import type { ReactNode } from 'react';

type Props = {
  title: ReactNode;
  cta: string;
  micro: string;
  variant?: 'paper' | 'paper-link';
  ctaHref?: string;
};

export default function CtaBanner({ title, cta, micro }: Props) {
  return (
    <section className="cta-banner">
      <div className="l">
        <h3>{title}</h3>
      </div>
      <div className="r">
        <button className="btn btn-paper btn-lg">{cta}</button>
        <span className="micro">{micro}</span>
      </div>
    </section>
  );
}
