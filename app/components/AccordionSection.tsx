"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

export default function AccordionSection({
  id,
  title,
  count,
  children,
}: {
  id: string;
  title: string;
  count?: number;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  // Animate height imperatively. React never controls the `height` style
  // (it's initialised to 0 in CSS), so these writes survive re-renders.
  const animate = useCallback((next: boolean) => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (openRef.current === next) return;
    openRef.current = next;
    setOpen(next);

    if (!outer || !inner) return;

    const target = inner.offsetHeight;
    if (next) {
      // ensure a committed 0 start, then transition to content height
      outer.style.height = "0px";
      void outer.offsetHeight; // force reflow
      outer.style.height = `${target}px`;
      const done = (e: TransitionEvent) => {
        if (e.propertyName !== "height") return;
        if (openRef.current) outer.style.height = "auto"; // flexible when open
        outer.removeEventListener("transitionend", done);
      };
      outer.addEventListener("transitionend", done);
    } else {
      // from auto/target -> fixed px -> reflow -> 0
      outer.style.height = `${target}px`;
      void outer.offsetHeight; // force reflow
      outer.style.height = "0px";
    }
  }, []);

  // Open (and scroll to) the section when its hash is navigated to.
  useEffect(() => {
    const sync = () => {
      if (window.location.hash === `#${id}`) animate(true);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [id, animate]);

  return (
    <section id={id} className="wrap">
      <button
        className="acc-head"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => animate(!openRef.current)}
      >
        <span className="acc-plus">{open ? "−" : "+"}</span>
        <span className="acc-title">
          {title}
          <span className="dot">.</span>
        </span>
        {count !== undefined && (
          <span className="acc-count">{String(count).padStart(2, "0")}</span>
        )}
      </button>

      <div
        id={`${id}-panel`}
        className="acc-outer"
        ref={outerRef}
        aria-hidden={!open}
      >
        <div ref={innerRef}>
          <div className="acc-content">{children}</div>
        </div>
      </div>
    </section>
  );
}
