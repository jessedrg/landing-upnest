'use client';

import Image from 'next/image';
import { useEffect, useId, useRef } from 'react';
import { PRACTICES } from './practices';

type DepartmentsMenuProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onNavigate: () => void;
};

export default function DepartmentsMenu({ open, onOpenChange, onNavigate }: DepartmentsMenuProps) {
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent | FocusEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) onOpenChange(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('focusin', closeOutside);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('focusin', closeOutside);
    };
  }, [open, onOpenChange]);

  return (
    <div className="departments" ref={rootRef} onKeyDown={event => {
      if (event.key === 'Escape' && open) {
        event.stopPropagation();
        onOpenChange(false);
        triggerRef.current?.focus();
      }
    }}>
      <button type="button" ref={triggerRef} className="departments-trigger" aria-expanded={open} aria-controls={panelId} onClick={() => onOpenChange(!open)}>
        Departments
        <svg className="departments-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div className="departments-panel" id={panelId} hidden={!open}>
        <div className="departments-heading"><span>THE UPNEST NETWORK</span><p>Specialists in your world.</p></div>
        <ul className="departments-list" aria-label="Upnest departments">
          {PRACTICES.map(practice => (
            <li key={practice.name}>
              <a className="departments-link" href={practice.href} onClick={onNavigate}>
                <span className={`departments-logo practice-${practice.theme}`}><Image src={practice.logo} alt="" width={32} height={32} /></span>
                <span className="departments-label"><span>Upnest <span className="departments-name">{practice.name}</span></span><span className="departments-description">{practice.emphasis}</span></span>
                <svg className="departments-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14" /></svg>
              </a>
            </li>
          ))}
        </ul>
        <a href="/#other-niches" className="departments-overview" onClick={onNavigate}>Explore all departments <span aria-hidden="true">→</span></a>
      </div>
    </div>
  );
}
