type FaqItem = { q: string; a: string; open?: boolean };

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="faq">
      {items.map((item, i) => (
        <details key={i} {...(item.open ? { open: true } : {})}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  );
}
