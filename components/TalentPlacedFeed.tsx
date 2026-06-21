"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * "Talent we've placed at" — expandable placements feed.
 *
 * Fonts use CSS vars from the root layout:
 *   --font-newsreader -> Newsreader
 *   --font-inter      -> Inter (sans)
 *   --font-mono       -> JetBrains Mono
 */

export type Placement = {
  company: string;
  role: string;
  descriptor: string;
  brand: string;
  logo: string;
  url: string;
  time: string;
};

export const PLACEMENTS: Placement[] = [
  { company: "Mage AI", role: "Senior Software Engineer", descriptor: "AI-powered data pipeline tooling for engineers.", brand: "#1a1a1a", logo: "/logos/mage.jpeg", url: "https://www.mage.ai", time: "1mo ago" },
  { company: "Paraform", role: "Account Manager, Sales", descriptor: "The recruiting marketplace for fast-growing startups.", brand: "#111111", logo: "/logos/paraform.jpeg", url: "https://www.paraform.com", time: "2mo ago" },
  { company: "Paraform", role: "Strategic Projects Lead", descriptor: "The recruiting marketplace for fast-growing startups.", brand: "#111111", logo: "/logos/paraform.jpeg", url: "https://www.paraform.com", time: "3mo ago" },
  { company: "Whop", role: "Growth / Account Manager", descriptor: "The marketplace for digital products and communities.", brand: "#ff6243", logo: "/logos/whop.jpeg", url: "https://whop.com", time: "4mo ago" },
  { company: "Synthflow", role: "Machine Learning Engineer", descriptor: "No-code voice AI agents for every business.", brand: "#6d28d9", logo: "/logos/synthflow.jpeg", url: "https://synthflow.ai", time: "6mo ago" },
  { company: "Peec AI", role: "Senior Backend Engineer", descriptor: "AI search analytics for modern marketing teams.", brand: "#1a1a1a", logo: "/logos/peec.jpeg", url: "https://peec.ai", time: "7mo ago" },
  { company: "EverAI", role: "Engineering Lead", descriptor: "Building the world's largest conversational AI platform.", brand: "#1a1a1a", logo: "/logos/everai.jpeg", url: "https://www.everai.ai", time: "7mo ago" },
  { company: "Alex", role: "Customer Success Lead", descriptor: "The agentic AI recruiter for modern teams.", brand: "#16361f", logo: "/logos/alex.jpeg", url: "https://www.alex.com", time: "8mo ago" },
  { company: "Northflank", role: "Lead Platform Engineer", descriptor: "The developer platform to build and ship apps.", brand: "#2f6db0", logo: "/logos/northflank.jpeg", url: "https://northflank.com", time: "10mo ago" },
  { company: "Rilla", role: "Software Engineer II", descriptor: "AI sales coaching and conversation intelligence.", brand: "#c9a200", logo: "/logos/rilla.jpeg", url: "https://www.rilla.com", time: "10mo ago" },
];

function hexToRgba(hex: string, a: number) {
  const h = hex.replace("#", "");
  const v = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = parseInt(v, 16);
  return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
}

export interface TalentPlacedFeedProps {
  eyebrow?: string;
  count?: string;
  countLabel?: string;
  accent?: string;
  placements?: Placement[];
}

export default function TalentPlacedFeed({
  eyebrow = "Recent placements",
  count = "40+",
  countLabel = "placed this year",
  accent = "#6c4cd4",
  placements = PLACEMENTS,
}: TalentPlacedFeedProps) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="tpf">
      <div className="tpf__inner">
        <header className="tpf__head">
          <div className="tpf__headText">
            <div className="tpf__eyebrow" style={{ color: accent }}>
              <span className="tpf__dot" style={{ background: accent }} />
              <span>{eyebrow}</span>
            </div>
            <h2 className="tpf__title">
              Talent we&rsquo;ve placed at the companies{" "}
              <span className="tpf__italic">shaping their industries.</span>
            </h2>
          </div>
          <div className="tpf__stat">
            <span className="tpf__statNum">{count}</span>
            <span className="tpf__statLabel">{countLabel}</span>
          </div>
        </header>

        <div className="tpf__list">
          {placements.map((p, i) => {
            const isOpen = open === i;
            const panelId = `tpf-panel-${i}`;
            return (
              <div className="tpf__item" key={`${p.company}-${i}`}>
                <button
                  type="button"
                  className="tpf__row"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="tpf__logo" style={{ background: hexToRgba(p.brand, 0.1) }}>
                    <Image src={p.logo} alt={p.company} width={34} height={34} className="tpf__logoImg" />
                  </span>
                  <span className="tpf__company">{p.company}</span>
                  <span className="tpf__role">{p.role}</span>
                  <span className="tpf__time">{p.time}</span>
                  <span
                    className="tpf__toggle"
                    style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    aria-hidden
                  >
                    +
                  </span>
                </button>

                <div
                  id={panelId}
                  className="tpf__panel"
                  style={{ maxHeight: isOpen ? 320 : 0, opacity: isOpen ? 1 : 0 }}
                >
                  <div className="tpf__panelInner">
                    <div className="tpf__panelText">
                      <div className="tpf__panelKicker" style={{ color: p.brand }}>
                        Hired as
                      </div>
                      <div className="tpf__panelRole">{p.role}</div>
                      <div className="tpf__panelDesc">{p.descriptor}</div>
                    </div>
                    <a
                      className="tpf__visit"
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ borderColor: p.brand, color: p.brand, ["--brand" as string]: p.brand }}
                    >
                      Visit {p.company} <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        .tpf {
          background: #f2efe7;
          color: #161512;
          font-family: var(--font-inter, "Inter", system-ui, sans-serif);
          padding: 120px 32px;
          display: flex;
          justify-content: center;
        }
        .tpf__inner {
          width: 100%;
          max-width: 1180px;
        }
        .tpf__head {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
          margin-bottom: 72px;
        }
        .tpf__headText {
          max-width: 680px;
        }
        .tpf__eyebrow {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 13px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          margin-bottom: 28px;
        }
        .tpf__dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          display: inline-block;
        }
        .tpf__title {
          font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
          font-weight: 400;
          font-size: 56px;
          line-height: 1.07;
          letter-spacing: -0.015em;
          margin: 0;
          text-wrap: balance;
        }
        .tpf__italic {
          font-style: italic;
        }
        .tpf__stat {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          line-height: 1;
        }
        .tpf__statNum {
          font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
          font-size: 80px;
          letter-spacing: -0.03em;
        }
        .tpf__statLabel {
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 13px;
          color: #8a8473;
          letter-spacing: 0.04em;
          margin-top: 8px;
          text-transform: uppercase;
        }
        .tpf__list {
          border-top: 1px solid #ddd8cd;
        }
        .tpf__item {
          border-bottom: 1px solid #ddd8cd;
        }
        .tpf__row {
          width: 100%;
          background: none;
          border: 0;
          cursor: pointer;
          text-align: left;
          font: inherit;
          color: inherit;
          display: flex;
          align-items: center;
          gap: 22px;
          padding: 22px 8px;
          transition: padding-left 0.25s ease, background 0.25s ease;
        }
        .tpf__row:hover {
          padding-left: 18px;
          background: rgba(255, 255, 255, 0.4);
        }
        .tpf__logo {
          flex: none;
          width: 48px;
          height: 48px;
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tpf__logoImg {
          border-radius: 9px;
          object-fit: cover;
        }
        .tpf__company {
          font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
          font-size: 30px;
          font-weight: 500;
          letter-spacing: -0.015em;
          line-height: 1;
        }
        .tpf__role {
          flex: 1;
          min-width: 0;
          font-size: 14px;
          color: #9a9486;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .tpf__time {
          flex: none;
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 12px;
          color: #b3ab9a;
          letter-spacing: 0.04em;
        }
        .tpf__toggle {
          flex: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          border: 1px solid #ddd8cd;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 17px;
          color: #6b6556;
          transition: transform 0.3s ease, border-color 0.25s ease;
        }
        .tpf__panel {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.2, 0.7, 0.3, 1), opacity 0.3s ease;
        }
        .tpf__panelInner {
          padding: 6px 8px 30px 92px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 28px;
          flex-wrap: wrap;
        }
        .tpf__panelText {
          max-width: 560px;
        }
        .tpf__panelKicker {
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 11px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
        .tpf__panelRole {
          font-family: var(--font-newsreader, "Newsreader", Georgia, serif);
          font-size: 26px;
          font-weight: 500;
          letter-spacing: -0.01em;
          line-height: 1.15;
        }
        .tpf__panelDesc {
          font-size: 15px;
          color: #7d7768;
          line-height: 1.5;
          margin-top: 8px;
        }
        .tpf__visit {
          flex: none;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 999px;
          border: 1px solid;
          font-family: var(--font-mono, "JetBrains Mono", monospace);
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: background 0.2s ease, color 0.2s ease;
        }
        .tpf__visit:hover {
          background: var(--brand);
          color: #fff !important;
        }

        /* ---- Tablet ---- */
        @media (max-width: 860px) {
          .tpf {
            padding: 88px 32px;
          }
          .tpf__head {
            margin-bottom: 56px;
            gap: 32px;
          }
          .tpf__title {
            font-size: 44px;
          }
          .tpf__statNum {
            font-size: 64px;
          }
          .tpf__panelInner {
            padding-left: 70px;
          }
        }

        /* ---- Mobile ---- */
        @media (max-width: 560px) {
          .tpf {
            padding: 64px 20px;
          }
          .tpf__head {
            margin-bottom: 44px;
          }
          .tpf__eyebrow {
            margin-bottom: 20px;
            font-size: 12px;
          }
          .tpf__title {
            font-size: 34px;
          }
          .tpf__stat {
            align-items: flex-start;
          }
          .tpf__statNum {
            font-size: 56px;
          }
          .tpf__row {
            gap: 14px;
            padding: 18px 2px;
          }
          .tpf__row:hover {
            padding-left: 2px;
          }
          .tpf__logo {
            width: 42px;
            height: 42px;
            border-radius: 11px;
          }
          .tpf__company {
            font-size: 22px;
            flex: 1;
            min-width: 0;
          }
          .tpf__role,
          .tpf__time {
            display: none;
          }
          .tpf__panelInner {
            padding: 2px 2px 24px 56px;
            gap: 18px;
          }
          .tpf__panelRole {
            font-size: 22px;
          }
          .tpf__visit {
            width: 100%;
            justify-content: center;
          }
        }

        /* ---- Align side padding to global section rhythm ---- */
        @media (max-width: 1024px) {
          .tpf {
            padding-left: 24px;
            padding-right: 24px;
          }
        }
        @media (max-width: 768px) {
          .tpf {
            padding-left: 20px;
            padding-right: 20px;
          }
        }
      `}</style>
    </section>
  );
}
