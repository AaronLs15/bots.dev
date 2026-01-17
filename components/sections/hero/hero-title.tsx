"use client";

import { CSSProperties, useEffect, useMemo, useRef } from "react";
import gsap from "gsap";
import { PhoneCallIcon } from "@phosphor-icons/react";
import {
  RippleButton,
  RippleButtonRipples,
} from "@/components/animate-ui/components/buttons/ripple";

const defaultLines = ["Modern Software Solutions", "That Scale Your Business"];
const defaultSubtitle =
  "ERP, CRM, POS, e-commerce, Web Design, AI and custom software tailored to modern businesses.";
const badgeLabel = "New";
const badgeText = "Automated Lead Generation";

type HeroTitleProps = {
  lines?: string[];
  subtitle?: string;
  delay?: number;
};

export default function HeroTitle({
  lines = defaultLines,
  subtitle = defaultSubtitle,
  delay = 1,
}: HeroTitleProps) {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const lineSignature = useMemo(() => lines.join("|"), [lines]);
  const subtitleSignature = useMemo(() => subtitle, [subtitle]);

  useEffect(() => {
    if (!titleRef.current) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ delay });
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const titleDuration = 0.7;
      const titleStagger = 0.03;
      const lineDurations = lines.map((line) =>
        line.length > 0 ? titleDuration + (line.length - 1) * titleStagger : 0,
      );
      const lineStarts: number[] = lineDurations.map((_, index) => {
        if (index === 0) {
          return 0;
        }

        if (index === 1) {
          return (lineDurations[0] ?? 0) * 0.7;
        }

        const prevStart = lineStarts[index - 1] ?? 0;
        const prevDuration = lineDurations[index - 1] ?? 0;
        return prevStart + prevDuration;
      });
      const titleTotal = Math.max(
        0,
        ...lineDurations.map(
          (lineDuration, index) => (lineStarts[index] ?? 0) + lineDuration,
        ),
      );
      const subtitleStart = titleTotal * 0.5;
      const subtitleNode =
        titleRef.current?.querySelector("[data-subtitle]") ?? null;
      const buttonsNode =
        titleRef.current?.querySelector("[data-hero-buttons]") ?? null;
      const badgeCompactNode =
        titleRef.current?.querySelector("[data-badge-compact]") ?? null;
      const badgeExpandedNode =
        titleRef.current?.querySelector("[data-badge-expanded]") ?? null;
      const badgeChipNode =
        titleRef.current?.querySelector("[data-badge-chip]") ?? null;
      const badgeTextNode =
        titleRef.current?.querySelector("[data-badge-text]") ?? null;

      if (prefersReducedMotion) {
        return;
      }

      const badgeStart = subtitleStart;

      if (badgeExpandedNode && badgeChipNode && badgeTextNode) {
        const wrapper = badgeExpandedNode as HTMLElement;
        const chip = badgeChipNode as HTMLElement;
        const text = badgeTextNode as HTMLElement;

        // Si el usuario prefiere reduced motion: deja el badge "final"
        if (prefersReducedMotion) {
          gsap.set(wrapper, { opacity: 1, width: "auto" });
          gsap.set(chip, { opacity: 1, scale: 1, x: 0 });
          gsap.set(text, { clipPath: "inset(0 0% 0 0)", opacity: 1, x: 0 });
          return;
        }

        // --- Medimos ancho final (target) ---
        // Forzamos width:auto para medir scrollWidth real
        const prevWidth = wrapper.style.width;
        wrapper.style.width = "fit-content";
        const targetW = Math.ceil(wrapper.scrollWidth);
        wrapper.style.width = prevWidth;

        // --- Medimos ancho compacto (solo chip + paddings del wrapper) ---
        const cs = window.getComputedStyle(wrapper);
        const padL = parseFloat(cs.paddingLeft || "0");
        const padR = parseFloat(cs.paddingRight || "0");
        const borderL = parseFloat(cs.borderLeftWidth || "0");
        const borderR = parseFloat(cs.borderRightWidth || "0");

        const chipW = Math.ceil(chip.getBoundingClientRect().width);
        const compactW = Math.ceil(chipW + padL + padR + borderL + borderR);

        // Offset para que el chip quede CENTRADO cuando el wrapper está compacto,
        // y luego se anima a 0 para que quede a la izquierda con padding.
        // (compactW / 2) = centro del wrapper, (padL + chipW/2) = centro del chip cuando está pegado a la izquierda.
        const chipCenterWhenLeft = padL + chipW / 2;
        const chipCenterWhenCompact = compactW / 2;
        const initialChipX = chipCenterWhenCompact - chipCenterWhenLeft;

        // Estado inicial (equivalente al video)
        gsap.set(wrapper, {
          opacity: 0,
          width: compactW,
          overflow: "hidden",
        });

        gsap.set(chip, {
          opacity: 0,
          scale: 0.85,
          x: initialChipX,
          transformOrigin: "50% 50%",
        });

        gsap.set(text, {
          opacity: 1,
          x: 0,
          clipPath: "inset(0 100% 0 0)", // oculto por máscara (reveal)
          willChange: "clip-path",
        });

        // Timeline: pop chip -> expand width + mover chip -> reveal texto
        timeline
          .to(wrapper, { opacity: 1, duration: 0.4 }, badgeStart)
          .to(
            chip,
            { opacity: 1, scale: 1, duration: 0.9, ease: "power2.out" },
            badgeStart,
          )
          .to(
            wrapper,
            { width: targetW, duration: 1.2, ease: "power3.out" },
            badgeStart + 0.3,
          )
          .to(
            chip,
            { x: 0, duration: 1.2, ease: "power3.out" },
            badgeStart + 0.3,
          )
          .to(
            text,
            { clipPath: "inset(0 0% 0 0)", duration: 1.2, ease: "power3.out" },
            badgeStart + 0.3,
          );
      }

      lines.forEach((_, lineIndex) => {
        const chars = titleRef.current?.querySelectorAll(
          `[data-line="${lineIndex}"]`,
        );

        if (chars && chars.length > 0) {
          timeline.fromTo(
            chars,
            { opacity: 0, y: 14 },
            {
              opacity: 1,
              y: 0,
              duration: titleDuration,
              ease: "power3.out",
              stagger: titleStagger,
            },
            lineStarts[lineIndex] ?? 0,
          );
        }
      });

      if (subtitleNode) {
        timeline.fromTo(
          subtitleNode,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          subtitleStart,
        );
      }

      if (buttonsNode) {
        timeline.fromTo(
          buttonsNode,
          { opacity: 0, y: 14 },
          {
            opacity: 1,
            y: 0,
            duration: 1.8,
            ease: "power3.out",
          },
          subtitleStart + 0.2,
        );
      }
    }, titleRef);

    return () => ctx.revert();
  }, [delay, lineSignature, lines, subtitleSignature]);

  return (
    <div ref={titleRef} style={titleWrap}>
      <div style={titleStack}>
        <div style={badgeWrap}>
          <div style={badgeExpanded} data-badge-expanded>
            <div style={badgeContent}>
              <span style={badgeChip} data-badge-chip>
                {badgeLabel}
              </span>

              {/* Texto con máscara via clipPath (GSAP lo anima) */}
              <span style={badgeLabelText} data-badge-text>
                {badgeText}
              </span>
            </div>
          </div>
        </div>

        <h1 style={titleText} aria-label={lines.join(" ")}>
          {lines.map((line, lineIndex) => (
            <span key={`${line}-${lineIndex}`} style={lineStyle} aria-hidden>
              {Array.from(line).map((char, charIndex) => (
                <span
                  key={`${lineIndex}-${charIndex}`}
                  style={charStyle}
                  data-line={lineIndex}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>
        <p style={subtitleText} data-subtitle>
          {subtitle}
        </p>
      </div>
      <div style={buttonswrap} data-hero-buttons>
        <RippleButton
          size="lg"
          variant="default"
          hoverScale={1}
          tapScale={0.98}
          className={heroButtonClass}
        >
          Get in touch
          <PhoneCallIcon size={18} weight="bold" aria-hidden="true" />
          <RippleButtonRipples />
        </RippleButton>
        <RippleButton
          size="lg"
          variant="default"
          hoverScale={1}
          tapScale={0.98}
          className={heroButtonClassSecondary}
        >
          Services
          <RippleButtonRipples />
        </RippleButton>
      </div>
    </div>
  );
}

const buttonswrap: CSSProperties = {
  position: "absolute",
  display: "flex",
  zIndex: 2,
  bottom: "29%",
  gap: "50px",
};

const heroButtonClass =
  "h-14 px-9 text-base font-semibold rounded-lg gap-2 bg-[#85cfec] text-[#031018] touch-manipulation shadow-[0_12px_30px_rgba(133,207,236,0.35)] [--ripple-button-ripple-color:#031018]";

const heroButtonClassSecondary =
  "h-14 px-9 text-base font-semibold rounded-lg bg-[#ffffff] text-[#031018] touch-manipulation shadow-[0_12px_30px_rgba(255,255,255,0.35)] [--ripple-button-ripple-color:#031018] hover:bg-[#e0e0e0]";

const titleWrap: CSSProperties = {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pointerEvents: "auto",
  zIndex: 2,
};

const titleStack: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 18,
  textAlign: "center",
  padding: "0 8vw",
  maxWidth: 960,
};

const titleText: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: 8,
  fontSize: "clamp(28px, 4vw, 52px)",
  fontWeight: 600,
  letterSpacing: "0.04em",
  color: "rgba(220, 244, 255, 0.9)",
  textShadow: "0 12px 40px rgba(80, 140, 180, 0.35)",
  textWrap: "balance",
  whiteSpace: "pre",
  margin: 0,
};

const lineStyle: CSSProperties = {
  display: "block",
  lineHeight: 1.05,
};

const charStyle: CSSProperties = {
  display: "inline-block",
};

const subtitleText: CSSProperties = {
  margin: 0,
  fontSize: "clamp(14px, 1.3vw, 20px)",
  lineHeight: 1.6,
  color: "rgba(220, 244, 255, 0.7)",
  maxWidth: 800,
};

const badgeWrap: CSSProperties = {
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: 36,
};

const badgeExpanded: CSSProperties = {
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "flex-start", // importante para que el chip "termine" a la izquierda
  padding: "6px 18px",
  borderRadius: 999,
  background: "rgba(10, 16, 20, 0.7)",
  border: "1px solid rgba(255, 255, 255, 0.08)",
  boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
  transformOrigin: "left center",
  overflow: "hidden",
  boxSizing: "border-box",
};

const badgeContent: CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 12,
  whiteSpace: "nowrap",
  fontSize: 15,
  color: "rgba(220, 244, 255, 0.9)",
  letterSpacing: "0.01em",
};

const badgeChip: CSSProperties = {
  padding: "6px 16px",
  borderRadius: 999,
  background: "#85cfec",
  color: "#ffffff",
  fontWeight: 600,
  fontSize: 14,
  boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.2)",
};

const badgeLabelText: CSSProperties = {
  fontWeight: 500,
  display: "inline-block", // para clipPath
  whiteSpace: "nowrap",
};
