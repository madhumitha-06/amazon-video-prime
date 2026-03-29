import { useState } from "react";

type BillingCycle = "monthly" | "annually";

interface Plan {
    id: string;
    name: string;
    tagline: string;
    monthlyPrice: number;
    annualPrice: number;
    color: string;
    highlight: boolean;
    badge?: string;
    features: string[];
    notIncluded?: string[];
}

const PLANS: Plan[] = [
    {
        id: "lite",
        name: "Prime Lite",
        tagline: "Stream on the go",
        monthlyPrice: 299,
        annualPrice: 1499,
        color: "#00a8e1",
        highlight: false,
        features: [
            "Prime Video access",
            "Mobile & tablet only",
            "SD quality streaming",
            "Cancel anytime",
            "Prime Video channels",
        ],
        notIncluded: [
            "Free delivery on Amazon",
            "Prime Music",
            "Prime Gaming",
            "Offline downloads",
        ],
    },
    {
        id: "prime",
        name: "Prime",
        tagline: "The full experience",
        monthlyPrice: 599,
        annualPrice: 1499,
        color: "#00a8e1",
        highlight: true,
        badge: "Most Popular",
        features: [
            "Prime Video on all screens",
            "HD & Ultra HD streaming",
            "Offline downloads",
            "Free & fast delivery",
            "Prime Music – 100M songs",
            "Prime Gaming",
            "Prime Reading",
            "Cancel anytime",
        ],
    },
    {
        id: "student",
        name: "Prime Student",
        tagline: "Half the price, all the perks",
        monthlyPrice: 299,
        annualPrice: 749,
        color: "#067d62",
        highlight: false,
        badge: "Student Offer",
        features: [
            "All Prime benefits",
            "50% off regular price",
            "6-month free trial",
            "Prime Video on all screens",
            "Free delivery on Amazon",
            "Prime Music & Gaming",
        ],
        notIncluded: ["Requires valid student email"],
    },
];

const CHECK_ICON = (color: string) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
        <circle cx="8" cy="8" r="8" fill={color} opacity={0.15} />
        <polyline points="4,8 7,11 12,5" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);

const CROSS_ICON = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ flexShrink: 0, marginTop: 1 }}>
        <circle cx="8" cy="8" r="8" fill="#999" opacity={0.12} />
        <line x1="5" y1="5" x2="11" y2="11" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" />
        <line x1="11" y1="5" x2="5" y2="11" stroke="#aaa" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
);

export default function SubscriptionPage({ onSelectPlan }: { onSelectPlan?: (planId: string, price: number) => void }) {
    const [billing, setBilling] = useState<BillingCycle>("annually");
    const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

    const getPrice = (plan: Plan) =>
        billing === "monthly" ? plan.monthlyPrice : Math.round(plan.annualPrice / 12);

    const getSaving = (plan: Plan) => {
        const monthly = plan.monthlyPrice * 12;
        const annual = plan.annualPrice;
        return monthly - annual;
    };

    return (
        <div style={s.page}>

            {/* ── HERO ── */}
            <div style={s.hero}>
                <div style={s.heroGlow} />
                <div style={s.heroContent}>
                    <p style={s.heroEyebrow}>Amazon Prime Video</p>
                    <h1 style={s.heroTitle}>Unlimited streaming,<br />your way.</h1>
                    <p style={s.heroSub}>
                        Thousands of movies, series &amp; live events. Watch anywhere, cancel anytime.
                    </p>

                    {/* Billing Toggle */}
                    <div style={s.toggleWrap}>
                        <button
                            style={{ ...s.toggleBtn, ...(billing === "monthly" ? s.toggleBtnActive : {}) }}
                            onClick={() => setBilling("monthly")}
                        >
                            Monthly
                        </button>
                        <button
                            style={{ ...s.toggleBtn, ...(billing === "annually" ? s.toggleBtnActive : {}) }}
                            onClick={() => setBilling("annually")}
                        >
                            Annually
                            <span style={s.saveBadge}>Save up to 40%</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* ── PLANS ── */}
            <div style={s.plansSection}>
                <div style={s.plansGrid}>
                    {PLANS.map((plan) => {
                        const isHovered = hoveredPlan === plan.id;
                        const priceMonth = getPrice(plan);
                        const saving = getSaving(plan);

                        return (
                            <div
                                key={plan.id}
                                style={{
                                    ...s.planCard,
                                    ...(plan.highlight ? s.planCardHighlight : {}),
                                    ...(isHovered && !plan.highlight ? s.planCardHover : {}),
                                    transform: isHovered ? "translateY(-6px)" : plan.highlight ? "translateY(-8px)" : "translateY(0)",
                                }}
                                onMouseEnter={() => setHoveredPlan(plan.id)}
                                onMouseLeave={() => setHoveredPlan(null)}
                            >
                                {/* Badge */}
                                {plan.badge && (
                                    <div style={{ ...s.planBadge, background: plan.highlight ? "#ff9900" : plan.color }}>
                                        {plan.badge}
                                    </div>
                                )}

                                {/* Top accent bar */}
                                <div style={{ ...s.accentBar, background: plan.highlight ? "#ff9900" : plan.color }} />

                                <div style={s.planBody}>
                                    <div style={s.planNameRow}>
                                        <h2 style={s.planName}>{plan.name}</h2>
                                        <p style={s.planTagline}>{plan.tagline}</p>
                                    </div>

                                    {/* Price */}
                                    <div style={s.priceBlock}>
                                        <div style={s.priceRow}>
                                            <span style={s.priceCurrency}>₹</span>
                                            <span style={s.priceAmount}>{priceMonth}</span>
                                            <span style={s.pricePer}>/mo</span>
                                        </div>
                                        {billing === "annually" && (
                                            <p style={s.priceBilled}>
                                                ₹{plan.annualPrice.toLocaleString("en-IN")} billed annually
                                            </p>
                                        )}
                                        {billing === "annually" && saving > 0 && (
                                            <p style={{ ...s.savingPill, color: plan.highlight ? "#ff9900" : plan.color }}>
                                                You save ₹{saving.toLocaleString("en-IN")}/yr
                                            </p>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <button
                                        style={{
                                            ...s.ctaBtn,
                                            background: plan.highlight ? "#ff9900" : "transparent",
                                            color: plan.highlight ? "#111" : plan.color,
                                            border: plan.highlight ? "none" : `2px solid ${plan.color}`,
                                        }}
                                        onClick={() => onSelectPlan?.(plan.id, billing === "annually" ? plan.annualPrice : plan.monthlyPrice)}
                                    >
                                        {plan.id === "student" ? "Try 6 months free" : `Get ${plan.name}`}
                                    </button>

                                    {/* Divider */}
                                    <div style={s.divider} />

                                    {/* Features */}
                                    <ul style={s.featureList}>
                                        {plan.features.map((f) => (
                                            <li key={f} style={s.featureItem}>
                                                {CHECK_ICON(plan.highlight ? "#ff9900" : plan.color)}
                                                <span style={s.featureText}>{f}</span>
                                            </li>
                                        ))}
                                        {plan.notIncluded?.map((f) => (
                                            <li key={f} style={s.featureItem}>
                                                {CROSS_ICON}
                                                <span style={{ ...s.featureText, color: "#999" }}>{f}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* ── COMPARISON TABLE ── */}
            <div style={s.tableSection}>
                <h2 style={s.tableTitle}>Compare plans</h2>
                <div style={s.tableWrap}>
                    <table style={s.table}>
                        <thead>
                            <tr>
                                <th style={{ ...s.th, textAlign: "left", width: "40%" }}>Feature</th>
                                {PLANS.map((p) => (
                                    <th key={p.id} style={{ ...s.th, color: p.highlight ? "#ff9900" : "#fff" }}>{p.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ["Prime Video", true, true, true],
                                ["HD / Ultra HD", false, true, true],
                                ["Offline downloads", false, true, true],
                                ["Free delivery", false, true, true],
                                ["Prime Music", false, true, true],
                                ["Prime Gaming", false, true, true],
                                ["All screens", false, true, true],
                                ["Student discount", false, false, true],
                            ].map(([feature, lite, prime, student], i) => (
                                <tr key={String(feature)} style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent" }}>
                                    <td style={s.tdFeature}>{String(feature)}</td>
                                    <td style={s.tdCheck}>{lite ? <span style={{ color: "#00a8e1", fontSize: 18 }}>✓</span> : <span style={{ color: "#555" }}>–</span>}</td>
                                    <td style={s.tdCheck}>{prime ? <span style={{ color: "#ff9900", fontSize: 18 }}>✓</span> : <span style={{ color: "#555" }}>–</span>}</td>
                                    <td style={s.tdCheck}>{student ? <span style={{ color: "#067d62", fontSize: 18 }}>✓</span> : <span style={{ color: "#555" }}>–</span>}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── FAQ ── */}
            <div style={s.faqSection}>
                <h2 style={s.faqTitle}>Frequently asked questions</h2>
                <div style={s.faqGrid}>
                    {[
                        ["Can I cancel anytime?", "Yes. You can cancel your Prime membership at any time from your Account settings. If you cancel within 3 days of your most recent charge, you'll receive a full refund."],
                        ["What devices can I watch on?", "Prime Video is available on mobile, tablet, smart TV, Fire TV, game consoles, and the web. Lite plan is limited to mobile and tablets."],
                        ["Is there a free trial?", "New members get a 30-day free trial on the Prime plan. Student members get a 6-month free trial with a valid .edu or institutional email."],
                        ["What's included in Prime?", "Prime includes Prime Video, Prime Music (100M+ songs), Prime Gaming, Prime Reading, free delivery on millions of Amazon items, and more exclusive deals."],
                    ].map(([q, a]) => (
                        <div key={String(q)} style={s.faqItem}>
                            <h3 style={s.faqQ}>{String(q)}</h3>
                            <p style={s.faqA}>{String(a)}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── FOOTER ── */}
            <div className='footer footer1 footer2 footer3' >
                <img className='foot-img pr' src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Amazon"></img>
                <div className='down down1 down2 d3'>
                    <p>Terms and Privacy Notice</p>
                    <p>Send as Feedback</p>
                    <p>Help</p>
                    <p className="yyear yyear2">© 1996-2026, Amazon.com, Inc. or its affiliates</p>
                </div>
            </div>
        </div>
    );
}

/* ─── STYLES ─── */
const s: Record<string, React.CSSProperties> = {
    page: { fontFamily: "'Georgia', 'Times New Roman', serif", background: "#0a0e14", minHeight: "100vh", color: "#fff", display: "flex", flexDirection: "column" },


    // Hero
    hero: { background: "linear-gradient(160deg, #0d1520 0%, #0a0e14 60%)", padding: "72px 24px 60px", textAlign: "center", position: "relative", overflow: "hidden" },
    heroGlow: { position: "absolute", top: -80, left: "50%", transform: "translateX(-50%)", width: 600, height: 300, background: "radial-gradient(ellipse, rgba(0,168,225,0.12) 0%, transparent 70%)", pointerEvents: "none" },
    heroContent: { position: "relative", maxWidth: 680, margin: "0 auto" },
    heroEyebrow: { color: "#00a8e1", fontSize: 13, fontWeight: 600, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 },
    heroTitle: { fontSize: 48, fontWeight: 700, lineHeight: 1.15, marginBottom: 18, fontFamily: "'Georgia', serif", background: "linear-gradient(135deg, #fff 60%, #00a8e1)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
    heroSub: { color: "#8a9bb0", fontSize: 17, lineHeight: 1.7, marginBottom: 36 },

    // Toggle
    toggleWrap: { display: "inline-flex", background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 40, padding: 4, gap: 4 },
    toggleBtn: { background: "transparent", border: "none", color: "#8a9bb0", fontSize: 14, padding: "9px 22px", borderRadius: 36, cursor: "pointer", transition: "all 0.2s", position: "relative", fontFamily: "inherit" },
    toggleBtnActive: { background: "#fff", color: "#111", fontWeight: 700 },
    saveBadge: { display: "inline-block", background: "#ff990020", color: "#ff9900", fontSize: 10, padding: "2px 7px", borderRadius: 20, marginLeft: 8, fontWeight: 700, verticalAlign: "middle" },

    // Plans
    plansSection: { maxWidth: 1100, margin: "0 auto", padding: "48px 24px 60px", width: "100%" },
    plansGrid: { display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, alignItems: "start" },
    planCard: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, overflow: "hidden", transition: "all 0.25s ease", cursor: "default", position: "relative" },
    planCardHighlight: { background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,153,0,0.3)", boxShadow: "0 8px 40px rgba(255,153,0,0.12)" },
    planCardHover: { border: "1px solid rgba(255,255,255,0.16)", boxShadow: "0 8px 32px rgba(0,0,0,0.3)" },
    planBadge: { position: "absolute", top: 14, right: 14, fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 20, color: "#fff", letterSpacing: 0.5, textTransform: "uppercase" },
    accentBar: { height: 3, width: "100%" },
    planBody: { padding: "24px 24px 28px" },
    planNameRow: { marginBottom: 20 },
    planName: { fontSize: 22, fontWeight: 700, margin: "0 0 4px", fontFamily: "'Georgia', serif" },
    planTagline: { fontSize: 13, color: "#7a8fa5", margin: 0 },
    priceBlock: { marginBottom: 22 },
    priceRow: { display: "flex", alignItems: "baseline", gap: 3 },
    priceCurrency: { fontSize: 18, fontWeight: 600, color: "#ccc", marginTop: 4 },
    priceAmount: { fontSize: 42, fontWeight: 700, lineHeight: 1, fontFamily: "'Georgia', serif" },
    pricePer: { fontSize: 15, color: "#7a8fa5", marginLeft: 2 },
    priceBilled: { fontSize: 12, color: "#7a8fa5", marginTop: 5 },
    savingPill: { fontSize: 12, fontWeight: 700, marginTop: 6 },
    ctaBtn: { width: "100%", padding: "13px 0", borderRadius: 8, fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit", letterSpacing: 0.3 },
    divider: { height: 1, background: "rgba(255,255,255,0.07)", margin: "20px 0" },
    featureList: { listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 },
    featureItem: { display: "flex", gap: 10, alignItems: "flex-start" },
    featureText: { fontSize: 13.5, color: "#c4d0de", lineHeight: 1.4 },

    // Comparison table
    tableSection: { maxWidth: 1100, margin: "0 auto 60px", padding: "0 24px", width: "100%" },
    tableTitle: { fontSize: 28, fontWeight: 700, marginBottom: 24, fontFamily: "'Georgia', serif", color: "#fff" },
    tableWrap: { overflowX: "auto" },
    table: { width: "100%", borderCollapse: "collapse", fontSize: 14 },
    th: { padding: "14px 16px", background: "rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.08)", fontWeight: 700, textAlign: "center", fontSize: 15 },
    tdFeature: { padding: "13px 16px", color: "#c4d0de", borderBottom: "1px solid rgba(255,255,255,0.05)" },
    tdCheck: { padding: "13px 16px", textAlign: "center", borderBottom: "1px solid rgba(255,255,255,0.05)" },

    // FAQ
    faqSection: { maxWidth: 1100, margin: "0 auto 60px", padding: "0 24px", width: "100%" },
    faqTitle: { fontSize: 28, fontWeight: 700, marginBottom: 28, fontFamily: "'Georgia', serif" },
    faqGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 },
    faqItem: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "22px 24px" },
    faqQ: { fontSize: 15, fontWeight: 700, margin: "0 0 10px", fontFamily: "'Georgia', serif", color: "#fff" },
    faqA: { fontSize: 13.5, color: "#8a9bb0", lineHeight: 1.7, margin: 0 },

    // Footer
    footer: { background: "#060a10", borderTop: "1px solid rgba(255,255,255,0.06)", padding: "28px 24px", textAlign: "center", marginTop: "auto" },
    footerLogoRow: { display: "flex", justifyContent: "center", alignItems: "center", gap: 4, marginBottom: 14 },
    footerLinks: { display: "flex", justifyContent: "center", gap: 20, marginBottom: 10, flexWrap: "wrap" },
    footerLink: { color: "#556070", fontSize: 12, textDecoration: "none" },
    footerCopy: { color: "#3a4a5a", fontSize: 11, margin: 0 },
};