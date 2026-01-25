"use client"

import { CSSProperties, useEffect, useRef } from "react"
import gsap from "gsap"

type HeroNavbarProps = {
    delay?: number
    logoSrc?: string
    logoAlt?: string
}

export default function HeroNavbar({
    delay = 1.8,
    logoSrc = "/botsdev-logo.svg",
    logoAlt = "bots.dev logo",
}: HeroNavbarProps) {
    const navRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        if (!navRef.current) {
            return
        }

        const ctx = gsap.context(() => {
            gsap.fromTo(
                navRef.current,
                { opacity: 0, y: -32, filter: "blur(8px)" },
                {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    duration: 3,
                    ease: "power3.out",
                    delay,
                }
            )
        }, navRef)

        return () => ctx.revert()
    }, [delay])

    return (
        <div style={navWrap}>
            <div ref={navRef} style={navBar}>
                <div style={brand}>
                    <span style={brandBadge}>
                        <img src={logoSrc} alt={logoAlt} style={logoImage} />
                    </span>
                    <span style={brandText}>bots.dev</span>
                </div>
                <div style={navRight}>
                    <nav style={navLinks}>
                        <a style={navLink} href="/">
                            Home
                        </a>
                        <a style={navLink} href="/about">
                            About
                        </a>
                        <a style={navLink} href="/blog">
                            Blog
                        </a>
                        <a style={navLink} href="/contact">
                            Contact
                        </a>
                    </nav>
                    <a style={ctaButton} href="/contact">
                        Book a call
                    </a>
                </div>
            </div>
        </div>
    )
}

const navWrap: CSSProperties = {
    position: "fixed",
    inset: "0 0 auto 0",
    zIndex: 5,
    pointerEvents: "none",
}

const navBar: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
    padding: "18px 6vw 14px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
    background:
        "linear-gradient(180deg, rgba(12, 18, 24, 0.72) 0%, rgba(8, 12, 16, 0.35) 100%)",
    backdropFilter: "blur(18px) saturate(150%)",
    WebkitBackdropFilter: "blur(18px) saturate(150%)",
    boxShadow: "0 18px 40px rgba(0, 0, 0, 0.35)",
    color: "rgba(220, 244, 255, 0.92)",
    pointerEvents: "auto",
}

const brand: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontWeight: 600,
    letterSpacing: "0.02em",
}

const brandBadge: CSSProperties = {
    width: 32,
    height: 32,
    borderRadius: 6,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    overflow: "hidden",
}

const logoImage: CSSProperties = {
    width: "200%",
    height: "200%",
    objectFit: "contain",
    display: "block",
}

const brandText: CSSProperties = {
    fontSize: 14,
}

const navRight: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 14,
}

const navLinks: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 14,
    fontSize: 13,
    textTransform: "capitalize",
}

const navLink: CSSProperties = {
    color: "rgba(220, 244, 255, 0.7)",
    textDecoration: "none",
}

const ctaButton: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 16px",
    borderRadius: 8,
    background: "rgba(126, 209, 242, 0.9)",
    color: "#031018",
    fontSize: 12,
    fontWeight: 600,
    textDecoration: "none",
    boxShadow: "0 10px 24px rgba(80, 170, 210, 0.35)",
}
