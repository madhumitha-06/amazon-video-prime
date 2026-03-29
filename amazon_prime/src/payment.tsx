import React, { useState } from "react";

type PaymentOption = "card1" | "newCard" | "upi";
type Price = 299 | 799 | 1499;
type Screen = "payment" | "success";

interface PaymentPageProps {
  price?: Price;
  onBack?: () => void;
}

const planLabel: Record<Price, string> = {
  299: "Prime Lite",
  799: "Prime Lite",
  1499: "Prime",
};

const planPeriod: Record<Price, string> = {
  299: "month",
  799: "year",
  1499: "year",
};

const MONTHS = ["01","02","03","04","05","06","07","08","09","10","11","12"];
const YEARS  = Array.from({ length: 12 }, (_, i) => String(2025 + i));

const PaymentPage: React.FC<PaymentPageProps> = ({ price = 799, onBack }) => {
  const [selected, setSelected]       = useState<PaymentOption>("card1");
  const [upiId, setUpiId]             = useState<string>("");
  const [cvv, setCvv]                 = useState<string>("");
  const [showCvvTip, setShowCvvTip]   = useState<boolean>(false);
  const [showAddCard, setShowAddCard] = useState<boolean>(false);
  const [screen, setScreen]           = useState<Screen>("payment");

  // Add-card form
  const [cardNum, setCardNum]   = useState<string>("");
  const [cardName, setCardName] = useState<string>("Mythili");
  const [expMonth, setExpMonth] = useState<string>("01");
  const [expYear, setExpYear]   = useState<string>("2026");
  const [savedCards, setSavedCards] = useState<{ num: string; name: string }[]>([]);

  const isContinueEnabled =
    (selected === "card1" && cvv.trim().length >= 3) ||
    selected === "newCard" ||
    (selected === "upi" && upiId.trim() !== "");

  const label  = planLabel[price];
  const period = planPeriod[price];

  const formatCardNum = (val: string) =>
    val.replace(/\D/g, "").slice(0, 16).replace(/(.{4})/g, "$1 ").trim();

  const handleAddCardContinue = () => {
    if (cardNum.replace(/\s/g, "").length >= 12) {
      setSavedCards((prev) => [...prev, { num: cardNum.replace(/\s/g,"").slice(-4), name: cardName }]);
      setShowAddCard(false);
      setCardNum(""); setCardName("Mythili"); setExpMonth("01"); setExpYear("2026");
    }
  };

  /* ══════════════ SUCCESS SCREEN ══════════════ */
  if (screen === "success") {
    return (
      <div style={s.page}>
        <div style={s.header}>
          <div style={s.headerInner}>
            <div style={s.primeLogoWrap}>
              <span style={s.primeLogo}>prime</span>
              <svg width="50" height="10" style={{ marginTop: 2 }}>
                <path d="M2 5 Q25 12 48 5" stroke="#00a8e1" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
              </svg>
            </div>
          </div>
        </div>

        <div style={s.successWrap}>
          <div style={s.successCard}>
            <div style={s.tickCircle}>
              <svg width="56" height="56" viewBox="0 0 56 56">
                <circle cx="28" cy="28" r="28" fill="#067d62"/>
                <polyline points="15,29 24,38 41,19" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={s.successTitle}>Payment Successful!</h2>
            <p style={s.successSub}>Welcome to <strong>{label}</strong>! Your membership is now active.</p>
            <div style={s.successDetails}>
              {[
                ["Plan", label],
                ["Amount charged", `₹${price.toLocaleString("en-IN")}`],
                ["Billing cycle", `Every ${period}`],
                ["Payment method",
                  selected === "card1" ? "City Union Bank •••• 9906"
                  : selected === "newCard" ? "New card added"
                  : `UPI – ${upiId}`],
              ].map(([k, v], i, arr) => (
                <div key={k} style={{ ...s.successRow, borderBottom: i < arr.length - 1 ? "1px solid #eee" : "none" }}>
                  <span style={s.successKey}>{k}</span>
                  <span style={s.successVal}>{v}</span>
                </div>
              ))}
            </div>
            <button style={s.goHomeBtn} onClick={() => { setScreen("payment"); onBack?.(); }}>
              Go to Home
            </button>
          </div>
        </div>

        <div style={s.footer}>
          <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Prime Video" style={s.footerLogo}/>
          <div style={s.footerLinks}>
            <a href="#" style={s.footerLink}>Terms and Privacy Notice</a>
            <span style={s.footerDot}>·</span>
            <a href="#" style={s.footerLink}>Send us feedback</a>
            <span style={s.footerDot}>·</span>
            <a href="#" style={s.footerLink}>Help</a>
          </div>
          <p style={s.footerCopy}>©️ 1996–2026, Amazon.com, Inc. or its affiliates</p>
        </div>
      </div>
    );
  }

  /* ══════════════ PAYMENT SCREEN ══════════════ */
  return (
    <div style={s.page}>

      {/* Backdrop */}
      {(showCvvTip || showAddCard) && (
        <div style={s.overlay} onClick={() => { setShowCvvTip(false); setShowAddCard(false); }}/>
      )}

      {/* ── CVV TOOLTIP ── */}
      {showCvvTip && (
        <div style={s.cvvPopup}>
          <button style={s.popupClose} onClick={() => setShowCvvTip(false)}>✕</button>
          <p style={s.cvvPopupText}>
            The CVV number is the last three digits at the back of your card.
            For American Express cards, the CVV is a 4-digit number on the front of the card.
          </p>
          <div style={s.cardIllustration}>
            <div style={s.cardIllustBack}>
              <div style={s.cardMagStripe}/>
              <div style={s.cardSignatureStrip}>
                <span style={s.cardSignatureNum}>1182 217</span>
                <span style={s.cardCvvLabel}>CVV</span>
              </div>
              <div style={s.cardIllustNumber}>1000 0000 0000 000^</div>
            </div>
          </div>
        </div>
      )}

      {/* ── ADD CARD MODAL ── */}
      {showAddCard && (
        <div style={s.modal}>
          <div style={s.modalHeader}>
            <span style={s.modalTitle}>Add new credit or debit card</span>
            <button style={s.modalClose} onClick={() => setShowAddCard(false)}>✕</button>
          </div>
          <div style={s.modalBody}>
            <div style={s.modalLeft}>
              <div style={s.modalField}>
                <label style={s.modalLabel}>Card number</label>
                <input style={s.modalInput} type="text" maxLength={19} value={cardNum} onChange={(e) => setCardNum(formatCardNum(e.target.value))}/>
              </div>
              <div style={s.modalField}>
                <label style={s.modalLabel}>Name on card</label>
                <input style={s.modalInput} type="text" value={cardName} onChange={(e) => setCardName(e.target.value)}/>
              </div>
              <div style={s.modalField}>
                <label style={s.modalLabel}>Expiration date</label>
                <div style={{ display: "flex", gap: 8 }}>
                  <select style={s.modalSelect} value={expMonth} onChange={(e) => setExpMonth(e.target.value)}>
                    {MONTHS.map((m) => <option key={m}>{m}</option>)}
                  </select>
                  <select style={s.modalSelect} value={expYear} onChange={(e) => setExpYear(e.target.value)}>
                    {YEARS.map((y) => <option key={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div style={s.modalRight}>
              <p style={s.modalAcceptText}>Amazon accepts all major credit and debit cards:</p>
              <div style={s.modalCardRow}>
                <svg width="44" height="28" viewBox="0 0 44 28"><rect width="44" height="28" rx="4" fill="#fff" stroke="#ddd"/><text x="22" y="19" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#1a1f71">VISA</text></svg>
                <svg width="44" height="28" viewBox="0 0 44 28"><rect width="44" height="28" rx="4" fill="#fff" stroke="#ddd"/><circle cx="17" cy="14" r="8" fill="#EB001B"/><circle cx="27" cy="14" r="8" fill="#F79E1B"/><path d="M22 7.5a8 8 0 0 1 0 13A8 8 0 0 1 22 7.5z" fill="#FF5F00"/></svg>
                <svg width="44" height="28" viewBox="0 0 44 28"><rect width="44" height="28" rx="4" fill="#016FD0"/><text x="22" y="19" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#fff">AMEX</text></svg>
              </div>
              <div style={s.modalCardRow}>
                <svg width="44" height="28" viewBox="0 0 44 28"><rect width="44" height="28" rx="4" fill="#fff" stroke="#ddd"/><text x="22" y="19" textAnchor="middle" fontSize="8" fill="#333">Diners</text></svg>
                <svg width="44" height="28" viewBox="0 0 44 28"><rect width="44" height="28" rx="4" fill="#fff" stroke="#ddd"/><circle cx="17" cy="14" r="8" fill="#EB001B" opacity={0.9}/><circle cx="27" cy="14" r="8" fill="#0099DF" opacity={0.9}/></svg>
                <svg width="44" height="28" viewBox="0 0 44 28"><rect width="44" height="28" rx="4" fill="#fff" stroke="#ddd"/><text x="22" y="19" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#1a6b3c">RuPay</text></svg>
              </div>
            </div>
          </div>
          <div style={s.modalFooter}>
            <button style={s.modalCancelBtn} onClick={() => setShowAddCard(false)}>Cancel</button>
            <button
              style={cardNum.replace(/\s/g,"").length >= 12 ? s.modalContinueBtnActive : s.modalContinueBtnDisabled}
              onClick={handleAddCardContinue}
              disabled={cardNum.replace(/\s/g,"").length < 12}
            >Continue</button>
          </div>
        </div>
      )}

      {/* ── HEADER ── */}
      <div style={s.header}>
        <div style={s.headerInner}>
          <div style={s.primeLogoWrap}>
            <span style={s.primeLogo}>prime</span>
            <svg width="50" height="10" style={{ marginTop: 2 }}>
              <path d="M2 5 Q25 12 48 5" stroke="#00a8e1" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
          <p style={s.tagline}>Watch now, cancel anytime</p>
          <h1 style={s.headerTitle}>Start your membership today</h1>
        </div>
      </div>

      {/* ── BODY ── */}
      <div style={s.body}>
        {onBack && <button style={s.backBtn} onClick={onBack}>← Back to plans</button>}

        {/* Info Banner */}
        <div style={s.infoBanner}>
          <div style={s.infoIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="11" stroke="#4a90d9" strokeWidth="1.5"/>
              <text x="12" y="17" textAnchor="middle" fontSize="14" fill="#4a90d9" fontWeight="bold">i</text>
            </svg>
          </div>
          <p style={s.infoText}>
            <span style={s.bullet}>•</span>{" "}
            You will be charged <strong>₹{price.toLocaleString("en-IN")}</strong> for a {period} of {label}. Your {label} membership
            auto-renews every {period} if purchased using any of these{" "}
            <a href="#" style={s.infoLink}>eligible</a> credit, debit cards, or UPI ID.
          </p>
        </div>

        <p style={s.sectionTitle}>Select a payment method</p>

        <div style={s.payBox}>
          {/* Header */}
          <div style={s.payBoxHeader}>
            <span style={s.payBoxHeaderText}>CREDIT &amp; DEBIT CARDS</span>
            <span style={s.payBoxNickLabel}>Nickname</span>
          </div>

          {/* Saved Card */}
          <div style={{ ...s.savedRow, background: selected === "card1" ? "#eaf4fb" : "#fff" }} onClick={() => setSelected("card1")}>
            <input type="radio" checked={selected === "card1"} onChange={() => setSelected("card1")} style={s.radio}/>
            <div style={s.savedCardInfo}>
              <div style={s.savedCardTop}>
                <span style={s.savedCardName}>City Union Bank ending in 9906</span>
                <svg width="34" height="22" viewBox="0 0 34 22" style={{ marginLeft: 6 }}>
                  <rect width="34" height="22" rx="3" fill="#fff" stroke="#ddd"/>
                  <circle cx="13" cy="11" r="7" fill="#EB001B"/>
                  <circle cx="21" cy="11" r="7" fill="#F79E1B"/>
                  <path d="M17 5.8a7 7 0 0 1 0 10.4A7 7 0 0 1 17 5.8z" fill="#FF5F00"/>
                </svg>
                <span style={s.nicknameBadge}>Mythili</span>
              </div>
              {selected === "card1" && (
                <div style={s.cvvRow}>
                  <span style={s.cvvLabel}>Security Code (CVV/CVC)</span>
                  <button style={s.cvvLinkBtn} onClick={(e) => { e.stopPropagation(); setShowCvvTip((v) => !v); }}>
                    (What's this?)
                  </button>
                  <span style={s.cvvColon}> :</span>
                  <input
                    type="password"
                    maxLength={4}
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                    style={s.cvvInput}
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Dynamically added cards */}
          {savedCards.map((card, i) => (
            <div key={i} style={{ ...s.savedRow, background: "#fff" }}>
              <input type="radio" name="payment" style={s.radio}/>
              <div style={s.savedCardTop}>
                <span style={s.savedCardName}>New Card ending in {card.num}</span>
                <span style={s.nicknameBadge}>{card.name}</span>
              </div>
            </div>
          ))}

          {/* More payment options divider */}
          <div style={s.morePayLabel}>More payment options</div>

          {/* New Card */}
          <div style={{ ...s.optionRow, background: selected === "newCard" ? "#eaf4fb" : "#fff" }} onClick={() => setSelected("newCard")}>
            <input type="radio" checked={selected === "newCard"} onChange={() => setSelected("newCard")} style={s.radio}/>
            <div style={{ flex: 1 }}>
              <span style={s.optionLabel}>Credit or debit card</span>
              <div style={s.cardIconRow}>
                <svg width="38" height="24" viewBox="0 0 38 24" style={s.cardSvg}><rect width="38" height="24" rx="3" fill="#fff" stroke="#ddd"/><text x="19" y="16" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#1a1f71">VISA</text></svg>
                <svg width="38" height="24" viewBox="0 0 38 24" style={s.cardSvg}><rect width="38" height="24" rx="3" fill="#fff" stroke="#ddd"/><circle cx="15" cy="12" r="6" fill="#EB001B"/><circle cx="23" cy="12" r="6" fill="#F79E1B"/><path d="M19 7.2a6 6 0 0 1 0 9.6A6 6 0 0 1 19 7.2z" fill="#FF5F00"/></svg>
                <svg width="38" height="24" viewBox="0 0 38 24" style={s.cardSvg}><rect width="38" height="24" rx="3" fill="#016FD0"/><text x="19" y="16" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#fff">AMEX</text></svg>
                <svg width="38" height="24" viewBox="0 0 38 24" style={s.cardSvg}><rect width="38" height="24" rx="3" fill="#fff" stroke="#ddd"/><text x="19" y="16" textAnchor="middle" fontSize="7" fill="#333">Diners</text></svg>
                <svg width="38" height="24" viewBox="0 0 38 24" style={s.cardSvg}><rect width="38" height="24" rx="3" fill="#fff" stroke="#ddd"/><circle cx="15" cy="12" r="6" fill="#EB001B" opacity={0.9}/><circle cx="23" cy="12" r="6" fill="#0099DF" opacity={0.9}/></svg>
                <svg width="38" height="24" viewBox="0 0 38 24" style={s.cardSvg}><rect width="38" height="24" rx="3" fill="#fff" stroke="#ddd"/><text x="19" y="16" textAnchor="middle" fontSize="7" fontWeight="bold" fill="#1a6b3c">RuPay</text></svg>
              </div>
              {selected === "newCard" && (
                <div style={s.addCardRow} onClick={(e) => { e.stopPropagation(); setShowAddCard(true); }}>
                  <span style={s.addCardPlus}>＋</span>
                  <svg width="28" height="18" viewBox="0 0 38 24" style={{ borderRadius: 2 }}><rect width="38" height="24" rx="3" fill="#e8f0fe" stroke="#aac"/></svg>
                  <a href="#" style={s.addCardLink} onClick={(e) => e.preventDefault()}>Add new credit or debit card</a>
                  <span style={s.addCardArrow}>›</span>
                  <span style={s.addCardNote}>Amazon accepts all major credit cards.</span>
                </div>
              )}
            </div>
          </div>

          {/* UPI */}
          <div style={{ ...s.optionRow, borderBottom: "none", background: selected === "upi" ? "#eaf4fb" : "#fff" }} onClick={() => setSelected("upi")}>
            <input type="radio" checked={selected === "upi"} onChange={() => setSelected("upi")} style={s.radio}/>
            <div style={{ flex: 1 }}>
              <span style={s.optionLabel}>Other UPI apps</span>
              {selected === "upi" && (
                <div style={s.upiExpand} onClick={(e) => e.stopPropagation()}>
                  <p style={s.upiInputLabel}>Enter your UPI ID</p>
                  <div style={s.upiRow}>
                    <input type="text" placeholder="yourname@bank" value={upiId} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUpiId(e.target.value)} style={s.upiInput}/>
                    <button style={s.verifyBtn}>Verify</button>
                  </div>
                  <small style={s.upiHint}>The UPI ID is in the format of name/phone@bankname</small>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* More payment options */}
        <p style={s.morePay2}>More payment options</p>

        {/* Gift Cards */}
        <div style={s.giftSection}>
          <p style={s.giftTitle}>Gift Cards and Promotional Codes</p>
          <div style={s.giftRight}>
            <a href="#" style={s.giftLink}>Enter a gift card or promotional code</a>
            <span style={s.giftChevron}>⌄</span>
            <div style={s.gcBadge}>
              <span style={s.gcAmazon}>amazon</span>
              <span style={s.gcLabel}>.GC</span>
            </div>
          </div>
        </div>

        {/* Continue */}
        <div style={s.continueRow}>
          <button
            disabled={!isContinueEnabled}
            style={isContinueEnabled ? s.continueBtnActive : s.continueBtnDisabled}
            onClick={() => isContinueEnabled && setScreen("success")}
          >
            Continue
          </button>
        </div>
      </div>

      {/* Footer */}
      <div style={s.footer}>
        <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/logo/pv_logo_white._CB548637580_.png" alt="Prime Video" style={s.footerLogo}/>
        <div style={s.footerLinks}>
          <a href="#" style={s.footerLink}>Terms and Privacy Notice</a>
          <span style={s.footerDot}>·</span>
          <a href="#" style={s.footerLink}>Send us feedback</a>
          <span style={s.footerDot}>·</span>
          <a href="#" style={s.footerLink}>Help</a>
        </div>
        <p style={s.footerCopy}>©️ 1996–2026, Amazon.com, Inc. or its affiliates</p>
      </div>
    </div>
  );
};

export default PaymentPage;

/* ─────────────────────────────────────
   STYLES
───────────────────────────────────── */
const s: Record<string, React.CSSProperties> = {
  page:                     { fontFamily: "Arial, Helvetica, sans-serif", background: "#f3f3f3", minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" },
  overlay:                  { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 100 },

  // CVV popup
  cvvPopup:                 { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#fff", border: "1px solid #ccc", borderRadius: 6, padding: "20px 24px", width: 340, zIndex: 200, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" },
  popupClose:               { position: "absolute", top: 10, right: 12, background: "none", border: "none", fontSize: 16, cursor: "pointer", color: "#555" },
  cvvPopupText:             { fontSize: 13.5, lineHeight: 1.6, color: "#111", marginBottom: 16 },
  cardIllustration:         { display: "flex", justifyContent: "center" },
  cardIllustBack:           { width: 200, height: 60, background: "#2a2a2a", borderRadius: 6, display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" },
  cardMagStripe:            { width: "100%", height: 16, background: "#111" },
  cardSignatureStrip:       { background: "#e8e8e8", margin: "0 8px", padding: "3px 8px", display: "flex", justifyContent: "space-between", alignItems: "center", borderRadius: 2 },
  cardSignatureNum:         { fontSize: 10, color: "#333", fontStyle: "italic" },
  cardCvvLabel:             { fontSize: 10, fontWeight: 700, color: "#333" },
  cardIllustNumber:         { color: "#aaa", fontSize: 9, textAlign: "center", paddingBottom: 4 },

  // Add card modal
  modal:                    { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "#fff", borderRadius: 6, width: 580, zIndex: 200, boxShadow: "0 4px 24px rgba(0,0,0,0.25)" },
  modalHeader:              { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 20px", borderBottom: "1px solid #ddd" },
  modalTitle:               { fontSize: 16, fontWeight: 700, color: "#111" },
  modalClose:               { background: "none", border: "1px solid #ccc", borderRadius: 4, width: 30, height: 30, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", color: "#555" },
  modalBody:                { display: "flex", gap: 32, padding: "20px 24px" },
  modalLeft:                { flex: 1, display: "flex", flexDirection: "column", gap: 16 },
  modalRight:               { width: 180 },
  modalField:               { display: "flex", flexDirection: "column", gap: 5 },
  modalLabel:               { fontSize: 13, color: "#111", fontWeight: 500 },
  modalInput:               { border: "1px solid #888", borderRadius: 4, padding: "7px 10px", fontSize: 14, outline: "none" },
  modalSelect:              { border: "1px solid #888", borderRadius: 4, padding: "6px 8px", fontSize: 13, outline: "none" },
  modalAcceptText:          { fontSize: 13, color: "#111", marginBottom: 10 },
  modalCardRow:             { display: "flex", gap: 6, marginBottom: 6 },
  modalFooter:              { display: "flex", justifyContent: "flex-end", gap: 10, padding: "14px 20px", borderTop: "1px solid #ddd" },
  modalCancelBtn:           { background: "#fff", border: "1px solid #999", borderRadius: 20, padding: "8px 20px", fontSize: 13, cursor: "pointer" },
  modalContinueBtnActive:   { background: "#ffd814", border: "1px solid #c7a600", borderRadius: 20, padding: "8px 22px", fontSize: 13, fontWeight: 700, cursor: "pointer", color: "#111" },
  modalContinueBtnDisabled: { background: "#d5d9d9", border: "1px solid #aaa", borderRadius: 20, padding: "8px 22px", fontSize: 13, color: "#888", cursor: "not-allowed" },

  // Header
  header:                   { background: "#111921", paddingBottom: 20 },
  headerInner:              { maxWidth: 860, margin: "0 auto", padding: "20px 24px 10px" },
  primeLogoWrap:            { display: "flex", flexDirection: "column", alignItems: "flex-start", marginBottom: 6 },
  primeLogo:                { color: "#fff", fontSize: 28, fontWeight: 700, letterSpacing: 1, lineHeight: 1 },
  tagline:                  { color: "#ccc", fontSize: 13, margin: "4px 0 6px" },
  headerTitle:              { color: "#fff", fontSize: 24, fontWeight: 400, margin: 0 },

  body:                     { maxWidth: 860, margin: "0 auto", width: "100%", padding: "20px 16px", flex: 1 },
  backBtn:                  { background: "none", border: "none", color: "#007aa8", fontSize: 13, cursor: "pointer", padding: 0, marginBottom: 12 },

  infoBanner:               { display: "flex", gap: 10, border: "1px solid #c8e0f5", background: "#eaf4fb", borderRadius: 4, padding: "12px 16px", marginBottom: 20, alignItems: "flex-start" },
  infoIcon:                 { flexShrink: 0, marginTop: 1 },
  infoText:                 { margin: 0, fontSize: 13, lineHeight: 1.6, color: "#111" },
  bullet:                   { marginRight: 4 },
  infoLink:                 { color: "#007aa8", textDecoration: "none" },
  sectionTitle:             { fontSize: 16, fontWeight: 400, margin: "0 0 10px", color: "#111" },

  payBox:                   { background: "#fff", border: "1px solid #ccc", borderRadius: 4, marginBottom: 16 },
  payBoxHeader:             { display: "flex", justifyContent: "space-between", padding: "10px 16px", background: "#f7f7f7", borderBottom: "1px solid #ddd" },
  payBoxHeaderText:         { fontSize: 13, fontWeight: 700, color: "#111" },
  payBoxNickLabel:          { fontSize: 13, color: "#555" },

  savedRow:                 { display: "flex", gap: 12, padding: "14px 16px", borderBottom: "1px solid #eee", cursor: "pointer", alignItems: "flex-start" },
  savedCardInfo:            { flex: 1 },
  savedCardTop:             { display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap" },
  savedCardName:            { fontSize: 14, color: "#111" },
  nicknameBadge:            { marginLeft: "auto", fontSize: 13, color: "#555" },

  cvvRow:                   { display: "flex", alignItems: "center", gap: 8, marginTop: 10, flexWrap: "wrap" },
  cvvLabel:                 { fontSize: 13, color: "#111" },
  cvvLinkBtn:               { background: "none", border: "none", color: "#007aa8", fontSize: 12, cursor: "pointer", padding: 0 },
  cvvColon:                 { fontSize: 13 },
  cvvInput:                 { border: "1px solid #888", borderRadius: 3, padding: "4px 8px", width: 80, fontSize: 13, outline: "none" },

  morePayLabel:             { padding: "10px 16px", fontSize: 13, fontWeight: 700, color: "#111", borderBottom: "1px solid #eee", borderTop: "1px solid #eee" },
  optionRow:                { display: "flex", gap: 12, padding: "12px 16px", borderBottom: "1px solid #eee", cursor: "pointer", alignItems: "flex-start" },
  optionLabel:              { fontSize: 14, color: "#111", display: "block", marginBottom: 8 },
  radio:                    { marginTop: 3, accentColor: "#007aa8", flexShrink: 0 },
  cardIconRow:              { display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 10 },
  cardSvg:                  { borderRadius: 3 },

  addCardRow:               { display: "flex", alignItems: "center", gap: 8, marginTop: 4, cursor: "pointer" },
  addCardPlus:              { fontSize: 18, color: "#555" },
  addCardLink:              { fontSize: 13, color: "#007aa8", textDecoration: "none" },
  addCardArrow:             { fontSize: 14, color: "#007aa8" },
  addCardNote:              { fontSize: 12, color: "#555" },

  upiExpand:                { marginTop: 8 },
  upiInputLabel:            { fontSize: 13, margin: "0 0 6px", color: "#111" },
  upiRow:                   { display: "flex", gap: 8, alignItems: "center" },
  upiInput:                 { border: "1px solid #aaa", borderRadius: 4, padding: "6px 10px", fontSize: 13, width: 180, outline: "none" },
  verifyBtn:                { background: "#0073bb", color: "#fff", border: "none", borderRadius: 20, padding: "6px 16px", fontSize: 13, cursor: "pointer" },
  upiHint:                  { fontSize: 11, color: "#666", marginTop: 6, display: "block" },

  morePay2:                 { fontSize: 15, fontWeight: 700, margin: "0 0 8px", color: "#111" },
  giftSection:              { background: "#fff", border: "1px solid #ccc", borderRadius: 4, padding: "12px 16px", marginBottom: 16, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 },
  giftTitle:                { fontSize: 15, fontWeight: 700, margin: 0, color: "#111" },
  giftRight:                { display: "flex", alignItems: "center", gap: 10 },
  giftLink:                 { fontSize: 13, color: "#007aa8", textDecoration: "none" },
  giftChevron:              { fontSize: 16, color: "#007aa8" },
  gcBadge:                  { background: "#fff", border: "1px solid #999", borderRadius: 4, padding: "4px 8px", display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1.2 },
  gcAmazon:                 { fontSize: 10, color: "#111", fontWeight: 700 },
  gcLabel:                  { fontSize: 10, color: "#e47911", fontWeight: 700 },

  continueRow:              { display: "flex", justifyContent: "flex-end", marginBottom: 24 },
  continueBtnDisabled:      { background: "#d5d9d9", color: "#666", border: "1px solid #aaa", borderRadius: 4, padding: "10px 30px", fontSize: 14, cursor: "not-allowed" },
  continueBtnActive:        { background: "#ffd814", color: "#111", border: "1px solid #c7a600", borderRadius: 4, padding: "10px 30px", fontSize: 14, cursor: "pointer", fontWeight: 700 },

  // Success
  successWrap:              { flex: 1, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" },
  successCard:              { background: "#fff", border: "1px solid #ddd", borderRadius: 8, padding: "40px 36px", maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" },
  tickCircle:               { display: "flex", justifyContent: "center", marginBottom: 20 },
  successTitle:             { fontSize: 24, fontWeight: 700, color: "#111", marginBottom: 8 },
  successSub:               { fontSize: 15, color: "#444", marginBottom: 28 },
  successDetails:           { background: "#f7f7f7", borderRadius: 6, padding: "16px 20px", marginBottom: 28, textAlign: "left" },
  successRow:               { display: "flex", justifyContent: "space-between", padding: "7px 0", fontSize: 14 },
  successKey:               { color: "#555" },
  successVal:               { color: "#111", fontWeight: 600 },
  goHomeBtn:                { background: "#ffd814", border: "1px solid #c7a600", borderRadius: 6, padding: "12px 36px", fontSize: 15, fontWeight: 700, cursor: "pointer", color: "#111" },

  footer:                   { background: "#111921", padding: "20px 16px", textAlign: "center" },
  footerLogo:               { height: 30, marginBottom: 12 },
  footerLinks:              { display: "flex", justifyContent: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" },
  footerLink:               { color: "#ddd", fontSize: 12, textDecoration: "none" },
  footerDot:                { color: "#888", fontSize: 12 },
  footerCopy:               { color: "#888", fontSize: 11, margin: 0 },
};