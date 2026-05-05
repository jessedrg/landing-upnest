type Step = { n: string; title: string; body: string; meta?: string };

export default function HowGrid({ steps, columns = 4 }: { steps: Step[]; columns?: 3 | 4 }) {
  return (
    <div className="how-grid" style={columns === 3 ? { gridTemplateColumns: 'repeat(3,1fr)' } : undefined}>
      {steps.map((s, i) => (
        <div key={i} className="how-step">
          <div className="n">{s.n}</div>
          <h4>{s.title}</h4>
          <p>{s.body}</p>
          {s.meta ? <div className="meta">{s.meta}</div> : null}
        </div>
      ))}
    </div>
  );
}
