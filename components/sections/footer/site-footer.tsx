import { CSSProperties } from "react";

type SiteFooterProps = {
    logoSrc?: string;
    logoAlt?: string;
};

export default function SiteFooter({
    logoSrc = "/botsdev-logo.svg",
    logoAlt = "bots.dev logo",
}: SiteFooterProps) {
    return (
        <footer style={footerWrap}>
            <div style={footerInner}>
                <div style={brandBlock}>
                    <span style={brandBadge}>
                        <img src={logoSrc} alt={logoAlt} style={logoImage} />
                    </span>
                    <div>
                        <div style={brandText}>bots.dev</div>
                        <p style={brandCaption}>
                            Automated systems that keep your business moving faster.
                        </p>
                    </div>
                </div>

                <nav style={footerNav} aria-label="Footer navigation">
                    <a style={footerLink} href="#mejora">
                        Services
                    </a>
                    <a style={footerLink} href="#process">
                        Process
                    </a>
                    <a style={footerLink} href="#benefits">
                        Benefits
                    </a>
                </nav>

                <div style={footerMeta}>
                    <span>© 2026 bots.dev. All rights reserved.</span>
                    <div style={footerMetaLinks}>
                        <a style={footerLink} href="#">
                            Privacy
                        </a>
                        <a style={footerLink} href="#">
                            Terms
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

const footerWrap: CSSProperties = {
    position: "relative",
    padding: "36px 0 48px",
    background:
        "linear-gradient(0deg, rgba(8, 12, 16, 0.92) 0%, rgba(8, 12, 16, 0.65) 100%)",
    borderTop: "1px solid rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(18px) saturate(150%)",
    WebkitBackdropFilter: "blur(18px) saturate(150%)",
    boxShadow: "0 -18px 40px rgba(0, 0, 0, 0.35)",
    color: "rgba(220, 244, 255, 0.78)",
};

const footerInner: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 24,
    alignItems: "center",
    textAlign: "center",
    padding: "0 7vw",
    maxWidth: 1200,
    margin: "0 auto",
};

const brandBlock: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 12,
    flexWrap: "wrap",
    justifyContent: "center",
};

const brandBadge: CSSProperties = {
    width: 34,
    height: 34,
    borderRadius: 8,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(255, 255, 255, 0.12)",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    overflow: "hidden",
};

const logoImage: CSSProperties = {
    width: "200%",
    height: "200%",
    objectFit: "contain",
    display: "block",
};

const brandText: CSSProperties = {
    fontSize: 14,
    fontWeight: 600,
    letterSpacing: "0.02em",
    color: "rgba(220, 244, 255, 0.92)",
};

const brandCaption: CSSProperties = {
    margin: "6px 0 0",
    fontSize: 12,
    color: "rgba(220, 244, 255, 0.6)",
    maxWidth: 360,
};

const footerNav: CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 18,
    flexWrap: "wrap",
    justifyContent: "center",
    fontSize: 13,
};

const footerLink: CSSProperties = {
    color: "rgba(220, 244, 255, 0.7)",
    textDecoration: "none",
};

const footerMeta: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 14,
    fontSize: 12,
    color: "rgba(220, 244, 255, 0.5)",
};

const footerMetaLinks: CSSProperties = {
    display: "flex",
    gap: 12,
    alignItems: "center",
};
