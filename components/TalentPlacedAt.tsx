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
      style={{
        background: "#f2efe7",
        fontFamily: "var(--font-inter, 'Inter', system-ui, sans-serif)",
        color: "#161512",
        padding: "120px 48px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 1200 }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 48,
            flexWrap: "wrap",
            marginBottom: 64,
          }}
        >
          <div style={{ maxWidth: 680 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                fontSize: 13,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: accent,
                marginBottom: 28,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: accent, display: "inline-block" }} />
              <span>{eyebrow}</span>
            </div>
            <h2
              style={{
                fontFamily: "var(--font-newsreader, 'Newsreader', Georgia, serif)",
                fontWeight: 400,
                fontSize: 60,
                lineHeight: 1.05,
                letterSpacing: "-0.015em",
                margin: 0,
                textWrap: "balance",
              }}
            >
              Talent we&rsquo;ve placed at the companies{" "}
              <span style={{ fontStyle: "italic" }}>shaping their industries.</span>
            </h2>
          </div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#5f5b53",
              maxWidth: 300,
              margin: "0 0 8px",
              textWrap: "pretty",
            }}
          >
            {subtitle}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 18,
          }}
        >
          {companies.map((co) => (
            <a
              key={co.name}
              href={co.url}
              target="_blank"
              rel="noopener noreferrer"
              className="tpa-card"
              style={{
                textDecoration: "none",
                color: "inherit",
                background: "#ffffff",
                border: "1px solid #e7e2d6",
                borderRadius: 18,
                padding: 26,
                display: "flex",
                flexDirection: "column",
                gap: 22,
                minHeight: 188,
                transition:
                  "transform .22s cubic-bezier(.2,.7,.3,1), box-shadow .22s ease, border-color .22s ease",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <Image
                  src={co.logo}
                  alt={`${co.name} logo`}
                  width={52}
                  height={52}
                  style={{
                    borderRadius: 13,
                    objectFit: "cover",
                    display: "block",
                    boxShadow: "0 1px 2px rgba(0,0,0,.08)",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    color: "#b3ab9a",
                  }}
                >
                  ↗
                </span>
              </div>
              <div style={{ marginTop: "auto" }}>
                <div
                  style={{
                    fontFamily: "var(--font-newsreader, 'Newsreader', Georgia, serif)",
                    fontSize: 25,
                    fontWeight: 500,
                    letterSpacing: "-0.01em",
                    lineHeight: 1.1,
                  }}
                >
                  {co.name}
                </div>
                <div style={{ fontSize: 13.5, color: "#8a8473", marginTop: 5 }}>{co.role}</div>
              </div>
            </a>
          ))}
        </div>

        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontFamily: "var(--font-mono, 'JetBrains Mono', monospace)",
            fontSize: 12.5,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9a9486",
          }}
        >
          <span style={{ flex: 1, height: 1, background: "#ddd8cd" }} />
          <span>{footnote}</span>
          <span style={{ flex: 1, height: 1, background: "#ddd8cd" }} />
        </div>
      </div>

      <style>{`
        .tpa-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px -18px rgba(40,34,22,.35);
          border-color: #d8d1c1;
        }
        @media (max-width: 1080px) {
          .tpa-card { width: 100%; }
        }
      `}</style>
    </section>
  );
}
