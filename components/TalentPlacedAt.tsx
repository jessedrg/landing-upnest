import Image from "next/image";

/**
 * "Talent we've placed at" section.
 *
 * Logos live in /public/logos/*.jpeg.
 * Fonts use CSS vars from the root layout:
 *   --font-newsreader -> Newsreader
 *   --font-inter      -> Inter (sans)
 *   --font-mono       -> JetBrains Mono
 */

export type PlacedCompany = {
  name: string;
  role: string;
  logo: string;
  url: string;
};

export const DEFAULT_COMPANIES: PlacedCompany[] = [
  { name: "Rilla", role: "AI sales coaching", logo: "/logos/rilla.jpeg", url: "https://www.rilla.com" },
  { name: "Northflank", role: "Developer platform", logo: "/logos/northflank.jpeg", url: "https://northflank.com" },
  { name: "Alex", role: "AI recruiting", logo: "/logos/alex.jpeg", url: "https://www.alex.com" },
  { name: "EverAI", role: "Conversational AI", logo: "/logos/everai.jpeg", url: "https://www.everai.ai" },
  { name: "Paraform", role: "Recruiting marketplace", logo: "/logos/paraform.jpeg", url: "https://www.paraform.com" },
  { name: "Synthflow", role: "Voice AI agents", logo: "/logos/synthflow.jpeg", url: "https://synthflow.ai" },
  { name: "Whop", role: "Digital commerce", logo: "/logos/whop.jpeg", url: "https://whop.com" },
  { name: "Peec AI", role: "AI search analytics", logo: "/logos/peec.jpeg", url: "https://peec.ai" },
];

export interface TalentPlacedAtProps {
  eyebrow?: string;
  subtitle?: string;
  footnote?: string;
  accent?: string;
  companies?: PlacedCompany[];
}

export default function TalentPlacedAt({
  eyebrow = "Talent placed at",
  subtitle = "The people we place go on to build, lead and scale teams at the most ambitious companies in the world.",
  footnote = "120+ senior hires placed and counting",
  accent = "#6c4cd4",
  companies = DEFAULT_COMPANIES,
}: TalentPlacedAtProps) {
  return (
    <section
      className="tpa"
      style={{ ["--tpa-accent" as string]: accent }}
    >
      <div className="tpa-inner">
        <div className="tpa-head">
          <div className="tpa-head-main">
            <div className="tpa-eyebrow">
              <span className="tpa-eyebrow-dot" />
              <span>{eyebrow}</span>
            </div>
            <h2 className="tpa-title">
              Talent we&rsquo;ve placed at the companies{" "}
              <span style={{ fontStyle: "italic" }}>shaping their industries.</span>
            </h2>
          </div>
          <p className="tpa-subtitle">{subtitle}</p>
        </div>

        <div className="tpa-grid">
          {companies.map((co) => (
            <a
              key={co.name}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tpa-card"
            >
              <div className="tpa-card-top">
                <Image
                  src={co.logo}
                  alt={`${co.name} logo`}
                  width={52}
                  height={52}
                  className="tpa-logo"
                />
                <span className="tpa-arrow">↗</span>
              </div>
              <div className="tpa-card-body">
                <div className="tpa-name">{co.name}</div>
                <div className="tpa-role">{co.role}</div>
              </div>
            </a>
          ))}
        </div>

        <div className="tpa-footnote">
          <span className="tpa-rule" />
          <span>{footnote}</span>
          <span className="tpa-rule" />
        </div>
      </div>

      <style>{`
        .tpa {
          background: #f2efe7;
          font-family: var(--font-inter, 'Inter', system-ui, sans-serif);
          color: #161512;
          padding: 120px 48px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .tpa-inner { width: 100%; max-width: 1200px; }
        .tpa-head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }
        .tpa-head-main { max-width: 680px; }
        .tpa-eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--tpa-accent, #6c4cd4);
          margin-bottom: 28px;
        }
        .tpa-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--tpa-accent, #6c4cd4);
          display: inline-block;
        }
        .tpa-title {
          font-family: var(--font-newsreader, 'Newsreader', Georgia, serif);
          font-weight: 400;
          font-size: 60px;
          line-height: 1.05;
          letter-spacing: -0.015em;
          margin: 0;
          text-wrap: balance;
        }
        .tpa-subtitle {
          font-size: 17px;
          line-height: 1.6;
          color: #5f5b53;
          max-width: 300px;
          margin: 0 0 8px;
          text-wrap: pretty;
        }
        .tpa-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .tpa-card {
          text-decoration: none;
          color: inherit;
          background: #ffffff;
          border: 1px solid #e7e2d6;
          border-radius: 18px;
          padding: 26px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-height: 188px;
          transition: transform .22s cubic-bezier(.2,.7,.3,1), box-shadow .22s ease, border-color .22s ease;
        }
        .tpa-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .tpa-logo {
          border-radius: 13px;
          object-fit: cover;
          display: block;
          box-shadow: 0 1px 2px rgba(0,0,0,.08);
        }
        .tpa-arrow {
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 11px;
          letter-spacing: 0.1em;
          color: #b3ab9a;
        }
        .tpa-card-body { margin-top: auto; }
        .tpa-name {
          font-family: var(--font-newsreader, 'Newsreader', Georgia, serif);
          font-size: 25px;
          font-weight: 500;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }
        .tpa-role { font-size: 13.5px; color: #8a8473; margin-top: 5px; }
        .tpa-footnote {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: var(--font-mono, 'JetBrains Mono', monospace);
          font-size: 12.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9a9486;
        }
        .tpa-rule { flex: 1; height: 1px; background: #ddd8cd; }

        .tpa-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px -18px rgba(40,34,22,.35);
          border-color: #d8d1c1;
        }

        @media (max-width: 1080px) {
          .tpa-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .tpa { padding: 72px 24px; }
          .tpa-head {
            align-items: flex-start;
            gap: 24px;
            margin-bottom: 40px;
          }
          .tpa-title { font-size: 40px; }
          .tpa-subtitle { font-size: 16px; max-width: 100%; }
        }

        @media (max-width: 540px) {
          .tpa { padding: 56px 18px; }
          .tpa-eyebrow { font-size: 12px; margin-bottom: 20px; }
          .tpa-title { font-size: 32px; line-height: 1.1; }
          .tpa-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .tpa-card {
            flex-direction: row;
            align-items: center;
            gap: 16px;
            min-height: 0;
            padding: 18px 20px;
          }
          .tpa-card-top { flex: 0 0 auto; }
          .tpa-arrow { display: none; }
          .tpa-card-body { margin-top: 0; }
          .tpa-name { font-size: 20px; }
          .tpa-footnote {
            margin-top: 32px;
            font-size: 11px;
            letter-spacing: 0.08em;
          }
        }
      `}</style>
    </section>
  );
}
