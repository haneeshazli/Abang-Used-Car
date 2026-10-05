/* @ds-bundle: {"format":4,"namespace":"UtopiaLeadGenDesignSystem_f515b4","components":[{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"PackageCard","sourcePath":"components/cards/PackageCard.jsx"},{"name":"PriceBadge","sourcePath":"components/cards/PriceBadge.jsx"},{"name":"ProductCard","sourcePath":"components/cards/ProductCard.jsx"},{"name":"ReviewCard","sourcePath":"components/cards/ReviewCard.jsx"},{"name":"StatBlock","sourcePath":"components/cards/StatBlock.jsx"},{"name":"StepCard","sourcePath":"components/cards/StepCard.jsx"},{"name":"Highlight","sourcePath":"components/core/Highlight.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"FloatingWhatsApp","sourcePath":"components/cta/FloatingWhatsApp.jsx"},{"name":"OutlineButton","sourcePath":"components/cta/OutlineButton.jsx"},{"name":"PricePill","sourcePath":"components/cta/PricePill.jsx"},{"name":"WhatsAppButton","sourcePath":"components/cta/WhatsAppButton.jsx"},{"name":"WhatsAppCTA","sourcePath":"components/cta/WhatsAppCTA.jsx"},{"name":"PromoBar","sourcePath":"components/layout/PromoBar.jsx"},{"name":"Section","sourcePath":"components/layout/Section.jsx"},{"name":"SectionHeading","sourcePath":"components/layout/SectionHeading.jsx"},{"name":"SiteFooter","sourcePath":"components/layout/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/layout/SiteHeader.jsx"},{"name":"ComparisonTable","sourcePath":"components/lists/ComparisonTable.jsx"},{"name":"FAQItem","sourcePath":"components/lists/FAQItem.jsx"},{"name":"LocationList","sourcePath":"components/lists/LocationList.jsx"},{"name":"PhotoGrid","sourcePath":"components/lists/PhotoGrid.jsx"},{"name":"PillTabs","sourcePath":"components/lists/PillTabs.jsx"},{"name":"Hero","sourcePath":"components/sections/Hero.jsx"},{"name":"LeadPickerCard","sourcePath":"components/sections/LeadPickerCard.jsx"},{"name":"TrustStrip","sourcePath":"components/sections/TrustStrip.jsx"}],"sourceHashes":{"components/cards/FeatureCard.jsx":"afcf107c8dcb","components/cards/PackageCard.jsx":"4086a94b92c6","components/cards/PriceBadge.jsx":"5c0f00751263","components/cards/ProductCard.jsx":"37e6cd010e21","components/cards/ReviewCard.jsx":"2c7208ffd0e3","components/cards/StatBlock.jsx":"2648df3a99e5","components/cards/StepCard.jsx":"91331c140a8f","components/core/Highlight.jsx":"3846fd211f81","components/core/Icon.jsx":"1400e715f7cb","components/core/iconData.js":"e294d6f35de4","components/cta/FloatingWhatsApp.jsx":"f3639486d194","components/cta/OutlineButton.jsx":"bd537ad5379f","components/cta/PricePill.jsx":"464aaef4d2b0","components/cta/WhatsAppButton.jsx":"9b236f7cbd6f","components/cta/WhatsAppCTA.jsx":"d6c9ee86b795","components/layout/PromoBar.jsx":"e50e091260d8","components/layout/Section.jsx":"c414ee269284","components/layout/SectionHeading.jsx":"28147341ef89","components/layout/SiteFooter.jsx":"562772c38cb0","components/layout/SiteHeader.jsx":"3965c943fd0c","components/lists/ComparisonTable.jsx":"86e550afdc3d","components/lists/FAQItem.jsx":"9b114ba10c32","components/lists/LocationList.jsx":"9810c8f4fcf7","components/lists/PhotoGrid.jsx":"27b799ea469b","components/lists/PillTabs.jsx":"5235a82e2c31","components/sections/Hero.jsx":"e55516b8cded","components/sections/LeadPickerCard.jsx":"90a257e5723a","components/sections/TrustStrip.jsx":"b324ac94d781","ui_kits/lead-gen/KenduriPage.jsx":"0c6b031810a7","ui_kits/lead-gen/LampuPage.jsx":"bbf6cff578b2","ui_kits/lead-gen/MerryPage.jsx":"879b1e0a7409","ui_kits/lead-gen/ScaffoldingPage.jsx":"605bc3fc850e","ui_kits/lead-gen/Shell.jsx":"c6c7836f6e89"},"inlinedExternals":[],"unexposedExports":[{"name":"iconData","sourcePath":"components/core/iconData.js"}]} */

(() => {

const __ds_ns = (window.UtopiaLeadGenDesignSystem_f515b4 = window.UtopiaLeadGenDesignSystem_f515b4 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/PriceBadge.jsx
try { (() => {
/** Round "SEWA RM 200 / Gred Hospital" seal stuck onto hero product shots. */
function PriceBadge({
  top = 'SEWA',
  price = 'RM 200',
  bottom,
  size = 104,
  bg = 'var(--brand-primary)',
  accent = 'var(--brand-highlight)'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      background: bg,
      boxShadow: '0 2px 6px rgba(0,0,0,.25)',
      display: 'grid',
      placeItems: 'center',
      padding: 6,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      border: '1.5px dashed rgba(255,255,255,.7)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 1,
      color: '#fff',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * .09,
      fontWeight: 700,
      color: accent,
      letterSpacing: '.04em'
    }
  }, top), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: size * .18,
      fontWeight: 800,
      lineHeight: 1,
      color: accent
    }
  }, price), bottom && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: size * .085,
      fontWeight: 700,
      marginTop: 2
    }
  }, bottom)));
}
Object.assign(__ds_scope, { PriceBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PriceBadge.jsx", error: String((e && e.message) || e) }); }

// components/cards/StatBlock.jsx
try { (() => {
/** Big-number proof stat: "23+ / Years of experience". */
function StatBlock({
  value,
  label,
  tone = 'light'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-price)',
      lineHeight: 1,
      color: tone === 'dark' ? '#fff' : 'var(--ink-900)'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: tone === 'dark' ? 'rgba(255,255,255,.85)' : 'var(--ink-800)'
    }
  }, label));
}
Object.assign(__ds_scope, { StatBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StatBlock.jsx", error: String((e && e.message) || e) }); }

// components/cards/StepCard.jsx
try { (() => {
/** Numbered "how it works" step. Always 3 steps: WhatsApp → details → done. */
function StepCard({
  n = 1,
  title,
  body,
  variant = 'badge',
  children
}) {
  if (variant === 'ring') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        textAlign: 'left',
        background: '#fff',
        borderRadius: 'var(--radius-xs)',
        padding: '12px 14px',
        boxShadow: 'var(--shadow-card)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 56,
        height: 56,
        borderRadius: '50%',
        border: '6px solid var(--brand-accent)',
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0,
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 26,
        color: 'var(--brand-accent)',
        boxSizing: 'border-box'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--ink-900)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        lineHeight: 1.45,
        color: 'var(--text-muted)'
      }
    }, body)));
  }
  if (variant === 'outline') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '56px 1fr',
        gap: 14,
        textAlign: 'left',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 300,
        fontSize: 72,
        lineHeight: .9,
        color: 'transparent',
        WebkitTextStroke: '2px rgba(255,255,255,.35)'
      }
    }, n), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 6,
        paddingTop: 6
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: '#fff'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        lineHeight: 1.45,
        color: 'rgba(255,255,255,.85)'
      }
    }, body), children));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      padding: '34px 18px 20px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -22,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 44,
      height: 44,
      borderRadius: '50%',
      background: 'var(--brand-accent)',
      color: '#fff',
      display: 'grid',
      placeItems: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      border: '3px solid #fff'
    }
  }, n), children, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      color: 'var(--ink-900)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      lineHeight: 1.45,
      color: 'var(--text-body)'
    }
  }, body));
}
Object.assign(__ds_scope, { StepCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/StepCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Highlight.jsx
try { (() => {
/** Inline emphasis used inside headlines: the accent-coloured word, the neon marker, or underline. */
function Highlight({
  variant = 'accent',
  color,
  children
}) {
  const base = {
    fontWeight: 'inherit'
  };
  if (variant === 'marker') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      background: color || 'var(--brand-highlight)',
      color: 'inherit',
      padding: '0 2px',
      boxDecorationBreak: 'clone',
      WebkitBoxDecorationBreak: 'clone'
    }
  }, children);
  if (variant === 'underline') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: color || 'var(--brand-accent)',
      textDecoration: 'underline',
      textDecorationThickness: '2px',
      textUnderlineOffset: '3px'
    }
  }, children);
  if (variant === 'whatsapp') return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: 'var(--wa-green)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...base,
      color: color || 'var(--brand-accent)'
    }
  }, children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/core/iconData.js
try { (() => {
// Generated from assets/icons (Lucide 0.460 stroke icons + Simple Icons 13.21 brand-* fill icons). Do not hand-edit.
const iconData = {
  "arrow-right": "<path d=\"M5 12h14\"></path> <path d=\"m12 5 7 7-7 7\"></path>",
  "award": "<path d=\"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526\"></path> <circle cx=\"12\" cy=\"8\" r=\"6\"></circle>",
  "badge-check": "<path d=\"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z\"></path> <path d=\"m9 12 2 2 4-4\"></path>",
  "brand-google": "<path d=\"M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z\"></path>",
  "brand-tiktok": "<path d=\"M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z\"></path>",
  "brand-whatsapp": "<path d=\"M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z\"></path>",
  "calendar-check": "<path d=\"M8 2v4\"></path> <path d=\"M16 2v4\"></path> <rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"></rect> <path d=\"M3 10h18\"></path> <path d=\"m9 16 2 2 4-4\"></path>",
  "check": "<path d=\"M20 6 9 17l-5-5\"></path>",
  "chevron-down": "<path d=\"m6 9 6 6 6-6\"></path>",
  "chevron-left": "<path d=\"m15 18-6-6 6-6\"></path>",
  "chevron-right": "<path d=\"m9 18 6-6-6-6\"></path>",
  "chevron-up": "<path d=\"m18 15-6-6-6 6\"></path>",
  "circle-check": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <path d=\"m9 12 2 2 4-4\"></path>",
  "circle-plus": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <path d=\"M8 12h8\"></path> <path d=\"M12 8v8\"></path>",
  "clock": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <polyline points=\"12 6 12 12 16 14\"></polyline>",
  "facebook": "<path d=\"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\"></path>",
  "gift": "<rect x=\"3\" y=\"8\" width=\"18\" height=\"4\" rx=\"1\"></rect> <path d=\"M12 8v13\"></path> <path d=\"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7\"></path> <path d=\"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5\"></path>",
  "globe": "<circle cx=\"12\" cy=\"12\" r=\"10\"></circle> <path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"></path> <path d=\"M2 12h20\"></path>",
  "heart-handshake": "<path d=\"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z\"></path> <path d=\"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66\"></path> <path d=\"m18 15-2-2\"></path> <path d=\"m15 18-2-2\"></path>",
  "instagram": "<rect width=\"20\" height=\"20\" x=\"2\" y=\"2\" rx=\"5\" ry=\"5\"></rect> <path d=\"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\"></path> <line x1=\"17.5\" x2=\"17.51\" y1=\"6.5\" y2=\"6.5\"></line>",
  "layout-grid": "<rect width=\"7\" height=\"7\" x=\"3\" y=\"3\" rx=\"1\"></rect> <rect width=\"7\" height=\"7\" x=\"14\" y=\"3\" rx=\"1\"></rect> <rect width=\"7\" height=\"7\" x=\"14\" y=\"14\" rx=\"1\"></rect> <rect width=\"7\" height=\"7\" x=\"3\" y=\"14\" rx=\"1\"></rect>",
  "mail": "<rect width=\"20\" height=\"16\" x=\"2\" y=\"4\" rx=\"2\"></rect> <path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"></path>",
  "map-pin": "<path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"></path> <circle cx=\"12\" cy=\"10\" r=\"3\"></circle>",
  "menu": "<line x1=\"4\" x2=\"20\" y1=\"12\" y2=\"12\"></line> <line x1=\"4\" x2=\"20\" y1=\"6\" y2=\"6\"></line> <line x1=\"4\" x2=\"20\" y1=\"18\" y2=\"18\"></line>",
  "message-circle": "<path d=\"M7.9 20A9 9 0 1 0 4 16.1L2 22Z\"></path>",
  "phone": "<path d=\"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z\"></path>",
  "shield-check": "<path d=\"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z\"></path> <path d=\"m9 12 2 2 4-4\"></path>",
  "sparkles": "<path d=\"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z\"></path> <path d=\"M20 3v4\"></path> <path d=\"M22 5h-4\"></path> <path d=\"M4 17v2\"></path> <path d=\"M5 18H3\"></path>",
  "star": "<path d=\"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z\"></path>",
  "tag": "<path d=\"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z\"></path> <circle cx=\"7.5\" cy=\"7.5\" r=\".5\" fill=\"currentColor\"></circle>",
  "thumbs-up": "<path d=\"M7 10v12\"></path> <path d=\"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z\"></path>",
  "truck": "<path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\"></path> <path d=\"M15 18H9\"></path> <path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14\"></path> <circle cx=\"17\" cy=\"18\" r=\"2\"></circle> <circle cx=\"7\" cy=\"18\" r=\"2\"></circle>",
  "users": "<path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"></path> <circle cx=\"9\" cy=\"7\" r=\"4\"></circle> <path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"></path> <path d=\"M16 3.13a4 4 0 0 1 0 7.75\"></path>",
  "wallet": "<path d=\"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1\"></path> <path d=\"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4\"></path>",
  "wrench": "<path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z\"></path>",
  "x": "<path d=\"M18 6 6 18\"></path> <path d=\"m6 6 12 12\"></path>",
  "zap": "<path d=\"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z\"></path>"
};
Object.assign(__ds_scope, { iconData });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/iconData.js", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function Icon({
  name,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  style
}) {
  const body = __ds_scope.iconData[name];
  if (!body) return null;
  const brand = name.indexOf('brand-') === 0;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
    fill: brand ? color : 'none',
    stroke: brand ? 'none' : color,
    strokeWidth: brand ? undefined : strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: body
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
/** USP / benefit item. Four treatments seen across the portfolio. */
function FeatureCard({
  icon,
  iconSrc,
  title,
  body,
  variant = 'stacked'
}) {
  const glyph = iconSrc ? /*#__PURE__*/React.createElement("img", {
    src: iconSrc,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: variant === 'stacked' ? 64 : 26,
    strokeWidth: variant === 'stacked' ? 1.6 : 2,
    color: variant === 'row' ? '#fff' : 'var(--brand-primary)'
  }) : null;
  if (variant === 'row') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 14,
        alignItems: 'center',
        textAlign: 'left',
        border: '3px solid var(--brand-primary)',
        borderRadius: 'var(--radius-sm)',
        padding: '14px 16px',
        background: '#fff'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 52,
        height: 52,
        borderRadius: '50%',
        background: 'var(--brand-primary)',
        display: 'grid',
        placeItems: 'center',
        flexShrink: 0
      }
    }, glyph), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 3
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 'var(--fs-h4)',
        color: 'var(--brand-primary)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 'var(--fs-small)',
        lineHeight: 1.45,
        color: 'var(--text-body)'
      }
    }, body)));
  }
  if (variant === 'card') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        background: '#fff',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-card-strong)',
        padding: '22px 18px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 48,
        height: 48,
        display: 'grid',
        placeItems: 'center'
      }
    }, iconSrc ? glyph : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 40,
      strokeWidth: 1.75,
      color: "var(--brand-accent)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: 16,
        color: 'var(--ink-900)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        lineHeight: 1.45,
        color: 'var(--text-muted)'
      }
    }, body));
  }
  if (variant === 'list') {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: '40px 1fr',
        gap: '6px 12px',
        textAlign: 'left',
        alignItems: 'start'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: 'var(--brand-tint)',
        display: 'grid',
        placeItems: 'center'
      }
    }, iconSrc ? glyph : /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: icon,
      size: 22,
      color: "var(--brand-accent)"
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: 'var(--ink-900)'
      }
    }, title), /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 12,
        lineHeight: 1.45,
        color: 'var(--text-body)'
      }
    }, body)));
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 8,
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 84,
      height: 72,
      display: 'grid',
      placeItems: 'center'
    }
  }, glyph), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h4)',
      color: 'var(--brand-accent)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      lineHeight: 1.5,
      color: 'var(--brand-primary)'
    }
  }, body));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ReviewCard.jsx
try { (() => {
/** Google-style customer review tile for a 2-up grid. */
function ReviewCard({
  text,
  name,
  location,
  avatar,
  stars = 5
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-card)',
      padding: '12px 12px 14px',
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      textAlign: 'left',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2
    }
  }, Array.from({
    length: stars
  }).map((_, i) => /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    key: i,
    name: "star",
    size: 17,
    color: "var(--star)",
    style: {
      fill: 'var(--star)'
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11,
      lineHeight: 1.5,
      color: 'var(--ink-800)',
      flex: 1
    }
  }, text), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: "",
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      background: 'var(--brand-tint-2)',
      color: 'var(--brand-primary)',
      display: 'grid',
      placeItems: 'center',
      fontWeight: 700,
      fontSize: 12
    }
  }, (name || '?')[0]), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 11,
      color: 'var(--ink-900)'
    }
  }, name), location && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: 'var(--text-muted)'
    }
  }, location))));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/cta/FloatingWhatsApp.jsx
try { (() => {
/** White circular WhatsApp chat bubble pinned bottom-right on every page. */
function FloatingWhatsApp({
  href = '#',
  position = 'fixed',
  bottom = 24,
  right = 16
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    "aria-label": "WhatsApp",
    style: {
      position,
      bottom,
      right,
      zIndex: 50,
      width: 50,
      height: 50,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-float)',
      display: 'grid',
      placeItems: 'center',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "brand-whatsapp",
    size: 24,
    color: "var(--wa-green)"
  }));
}
Object.assign(__ds_scope, { FloatingWhatsApp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta/FloatingWhatsApp.jsx", error: String((e && e.message) || e) }); }

// components/cta/OutlineButton.jsx
try { (() => {
const {
  useState
} = React;
/** Secondary action ("Butiran Lanjut", "Get recommendation"). 2px outline, fills on hover. */
function OutlineButton({
  label = 'Butiran Lanjut',
  href = '#',
  color = 'var(--link)',
  size = 'card',
  fullWidth = false,
  square = false
}) {
  const [h, setH] = useState(false);
  const tall = size === 'hero';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      height: tall ? 50 : 38,
      padding: tall ? '0 28px' : '0 12px',
      border: '2px solid ' + color,
      borderRadius: square ? 0 : 'var(--radius-xs)',
      background: h ? color : '#fff',
      color: h ? '#fff' : color,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: tall ? 16 : 14,
      textDecoration: 'none',
      transition: 'all .2s ease',
      boxSizing: 'border-box',
      whiteSpace: 'nowrap'
    }
  }, label);
}
Object.assign(__ds_scope, { OutlineButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta/OutlineButton.jsx", error: String((e && e.message) || e) }); }

// components/cta/PricePill.jsx
try { (() => {
const {
  useState
} = React;
/** Orange price call-to-action: "RM15/pax" pill, or stacked "Sewa / RM 15/sebulan" block. */
function PricePill({
  price,
  label,
  variant = 'pill',
  color = 'var(--brand-accent)',
  href = '#',
  fullWidth = false
}) {
  const [h, setH] = useState(false);
  const common = {
    background: color,
    color: '#fff',
    textDecoration: 'none',
    fontFamily: 'var(--font-display)',
    fontWeight: 700,
    boxShadow: h ? 'none' : '0 4px 10px rgba(0,0,0,.18)',
    transform: h ? 'translateY(1px)' : 'none',
    transition: 'all .2s ease',
    boxSizing: 'border-box',
    cursor: 'pointer'
  };
  if (variant === 'stacked') {
    return /*#__PURE__*/React.createElement("a", {
      href: href,
      onMouseEnter: () => setH(true),
      onMouseLeave: () => setH(false),
      style: {
        ...common,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        padding: '8px 12px',
        borderRadius: 'var(--radius-xs)',
        width: fullWidth ? '100%' : undefined,
        minWidth: 116
      }
    }, label && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 12,
        fontWeight: 500
      }
    }, label), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        lineHeight: 1.1
      }
    }, price));
  }
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...common,
      display: fullWidth ? 'flex' : 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 48,
      padding: '0 40px',
      borderRadius: 'var(--radius-pill)',
      fontSize: 20,
      width: fullWidth ? '100%' : undefined
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      marginRight: 6
    }
  }, label) : null, price);
}
Object.assign(__ds_scope, { PricePill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta/PricePill.jsx", error: String((e && e.message) || e) }); }

// components/cards/PackageCard.jsx
try { (() => {
/** Tiered package: circular photo (gold ring), accent name, ✓ included / ⊕ add-on list, divider, orange price pill. */
function PackageCard({
  image,
  name,
  items = [],
  extras = [],
  price,
  ribbon
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-card-strong)',
      padding: '24px 22px 26px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 16
    }
  }, image && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 220,
      height: 220,
      borderRadius: '50%',
      padding: 4,
      background: 'linear-gradient(135deg,#E9C46A,#B8860B)',
      boxShadow: '0 4px 10px rgba(0,0,0,.2)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-h3)',
      color: 'var(--brand-accent)',
      textAlign: 'center'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      display: 'grid',
      gap: 10,
      padding: '0 20px',
      position: 'relative'
    }
  }, items.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#2B2B2B',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 13,
    color: "#fff",
    strokeWidth: 3
  })), t)), extras.map(t => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--brand-accent)',
      display: 'grid',
      placeItems: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "circle-plus",
    size: 20,
    color: "#fff",
    strokeWidth: 2.2,
    style: {
      margin: -1
    }
  })), t)), ribbon && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      right: 0,
      top: 0
    }
  }, ribbon)), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      height: 1,
      background: 'var(--gray-200)'
    }
  }), price && /*#__PURE__*/React.createElement(__ds_scope.PricePill, {
    price: price
  }));
}
Object.assign(__ds_scope, { PackageCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/PackageCard.jsx", error: String((e && e.message) || e) }); }

// components/cta/WhatsAppButton.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  hero: {
    height: 50,
    padding: '0 28px',
    minWidth: 200,
    fontSize: 'var(--fs-cta)',
    radius: 'var(--radius-cta)',
    icon: 22,
    gap: 10
  },
  card: {
    height: 38,
    padding: '0 10px',
    minWidth: 0,
    fontSize: 14,
    radius: 'var(--radius-xs)',
    icon: 18,
    gap: 7
  },
  sm: {
    height: 36,
    padding: '0 16px',
    minWidth: 0,
    fontSize: 14,
    radius: 'var(--radius-cta)',
    icon: 16,
    gap: 6
  }
};

/** The WhatsApp green CTA. Wix behaviour: on hover the fill flips to white, label/icon go green. */
function WhatsAppButton({
  label = 'Whatsapp Now',
  href = '#',
  size = 'hero',
  fullWidth = false,
  hoverStyle = 'invert',
  onClick
}) {
  const [h, setH] = useState(false);
  const s = SIZES[size] || SIZES.hero;
  const inverted = h && hoverStyle === 'invert';
  const bg = h ? hoverStyle === 'yellow' ? '#FFD000' : hoverStyle === 'darken' ? 'var(--wa-green-hover)' : '#fff' : 'var(--wa-green)';
  const fg = inverted ? 'var(--wa-green)' : h && hoverStyle === 'yellow' ? '#1D5E54' : 'var(--wa-on)';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      minWidth: s.minWidth,
      borderRadius: s.radius,
      background: bg,
      color: fg,
      border: '1px solid var(--wa-green)',
      fontFamily: 'var(--font-cta)',
      fontWeight: 700,
      fontSize: s.fontSize,
      lineHeight: 1,
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'all .2s ease',
      cursor: 'pointer',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "brand-whatsapp",
    size: s.icon,
    color: fg
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { WhatsAppButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta/WhatsAppButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProductCard.jsx
try { (() => {
/** Catalogue tile for a 2-up mobile grid: image, title, tag chip, "Dari RM159 /sebulan", WhatsApp + outline. */
function ProductCard({
  image,
  brand,
  title,
  tag,
  pricePrefix = 'Dari',
  price,
  unit,
  ctaLabel = 'Whatsapp Now',
  secondaryLabel = 'Butiran Lanjut',
  badge,
  href = '#'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      border: '1px solid var(--border-card)',
      borderRadius: 'var(--radius-sm)',
      padding: 8,
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      textAlign: 'left',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '1 / .78',
      background: '#fff',
      borderRadius: 6,
      overflow: 'hidden',
      display: 'grid',
      placeItems: 'center'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: 'var(--gray-100)'
    }
  }), brand && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 4,
      left: 4,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 11,
      color: 'var(--brand-primary)'
    }
  }, brand), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 2,
      right: 2
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--ink-900)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title), tag && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9.5,
      color: 'var(--text-muted)',
      background: 'var(--gray-100)',
      padding: '4px 6px',
      borderRadius: 3,
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, tag), price && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      fontFamily: 'var(--font-display)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11
    }
  }, pricePrefix), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 13
    }
  }, unit)), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, {
    size: "card",
    fullWidth: true,
    label: ctaLabel,
    href: href
  }), secondaryLabel && /*#__PURE__*/React.createElement(__ds_scope.OutlineButton, {
    fullWidth: true,
    label: secondaryLabel,
    color: "var(--brand-primary)"
  }));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/cta/WhatsAppCTA.jsx
try { (() => {
/** Button + phone number stack — the signature conversion unit repeated down every page. */
function WhatsAppCTA({
  label,
  href,
  phone,
  eyebrow,
  tone = 'light',
  align = 'center',
  hoverStyle
}) {
  const phoneColor = tone === 'dark' ? '#fff' : 'var(--wa-green)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'left' ? 'flex-start' : 'center',
      gap: 10
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-micro)',
      fontWeight: 700,
      color: tone === 'dark' ? '#fff' : 'var(--wa-green)',
      textAlign: align
    }
  }, eyebrow), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, {
    label: label,
    href: href,
    hoverStyle: hoverStyle
  }), phone && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--fs-phone)',
      color: phoneColor,
      letterSpacing: '.01em'
    }
  }, phone));
}
Object.assign(__ds_scope, { WhatsAppCTA });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cta/WhatsAppCTA.jsx", error: String((e && e.message) || e) }); }

// components/layout/PromoBar.jsx
try { (() => {
/** Thin black announcement bar above the header ("Jimat 30% … | Shop Now"). */
function PromoBar({
  text,
  linkText,
  href = '#',
  bg = '#000',
  color = '#fff',
  align = 'center'
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color,
      fontSize: 'var(--fs-micro)',
      lineHeight: 1.35,
      padding: '8px var(--gutter-mobile)',
      display: 'flex',
      gap: 8,
      justifyContent: align === 'left' ? 'flex-start' : 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      textAlign: align
    }
  }, /*#__PURE__*/React.createElement("span", null, text), linkText && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .6
    }
  }, "|"), /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color,
      textDecoration: 'underline'
    }
  }, linkText)));
}
Object.assign(__ds_scope, { PromoBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/PromoBar.jsx", error: String((e && e.message) || e) }); }

// components/layout/Section.jsx
try { (() => {
const BG = {
  white: {
    background: '#fff',
    color: 'var(--text-body)'
  },
  tint: {
    background: 'var(--brand-tint)',
    color: 'var(--text-body)'
  },
  tint2: {
    background: 'var(--brand-tint-2)',
    color: 'var(--text-body)'
  },
  dark: {
    background: 'var(--brand-dark)',
    color: '#fff'
  },
  primary: {
    background: 'var(--brand-primary)',
    color: '#fff'
  },
  accent: {
    background: 'var(--brand-accent)',
    color: '#fff'
  },
  black: {
    background: '#000',
    color: '#fff'
  }
};

/** Full-bleed colour band. The page is a vertical stack of these; alternate white / tint / dark. */
function Section({
  bg = 'white',
  padY = 'var(--section-y-mobile)',
  padX = 'var(--gutter-mobile)',
  center = true,
  gap = 24,
  children,
  style
}) {
  const b = BG[bg] || BG.white;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      ...b,
      padding: padY + ' ' + padX,
      textAlign: center ? 'center' : 'left',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: center ? 'center' : 'stretch',
      gap
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/Section.jsx", error: String((e && e.message) || e) }); }

// components/layout/SectionHeading.jsx
try { (() => {
/** Centred section title (two-tone via <Highlight>) with optional eyebrow and supporting line. */
function SectionHeading({
  eyebrow,
  title,
  sub,
  tone = 'light',
  align = 'center',
  size = 'h2',
  as = 'h2'
}) {
  const Tag = as;
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      textAlign: align,
      alignItems: align === 'left' ? 'flex-start' : 'center',
      maxWidth: 560
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 700,
      color: dark ? 'var(--brand-highlight)' : 'var(--brand-accent)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: size === 'display' ? 'var(--fs-display)' : size === 'h3' ? 'var(--fs-h3)' : 'var(--fs-h2)',
      lineHeight: 'var(--lh-tight)',
      color: dark ? '#fff' : 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-small)',
      lineHeight: 1.5,
      color: dark ? 'rgba(255,255,255,.9)' : 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, sub));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteFooter.jsx
try { (() => {
/** Black footer: wordmark, phone, email, company registration + address, optional socials. Centred. */
function SiteFooter({
  name = 'Brand',
  nameAccent,
  phone,
  email,
  company,
  address,
  socials = [],
  bg = '#000',
  copyright
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: bg,
      color: '#fff',
      padding: '32px var(--gutter-mobile) 36px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 22,
      lineHeight: 1
    }
  }, name, nameAccent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-accent)'
    }
  }, " ", nameAccent)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-micro)',
      lineHeight: 1.6,
      opacity: .92
    }
  }, phone && /*#__PURE__*/React.createElement("div", null, phone), email && /*#__PURE__*/React.createElement("div", null, "E-mail: ", email), company && /*#__PURE__*/React.createElement("div", null, company), address && /*#__PURE__*/React.createElement("div", null, address)), socials.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    style: {
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: s,
    size: 18,
    color: "#fff"
  })))), copyright && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      opacity: .7
    }
  }, copyright));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/layout/SiteHeader.jsx
try { (() => {
/** Mobile header: wordmark left, hamburger right. light = white bar; brand = brand-primary bar. Optional 5px brand stripe. */
function SiteHeader({
  name = 'Brand',
  nameAccent,
  tagline,
  logoSrc,
  variant = 'light',
  stripe = false,
  onMenu,
  sticky = false
}) {
  const dark = variant === 'brand';
  const fg = dark ? '#fff' : 'var(--brand-primary)';
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: sticky ? 'sticky' : 'relative',
      top: 0,
      zIndex: 40,
      background: dark ? 'var(--brand-primary)' : 'rgba(255,255,255,.96)',
      boxShadow: dark ? 'none' : 'var(--shadow-header)',
      borderBottom: stripe ? '5px solid var(--brand-primary)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 var(--gutter-mobile)',
      gap: 12
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: name,
    style: {
      height: 40,
      width: 'auto'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 20,
      color: fg,
      letterSpacing: '-.01em'
    }
  }, name, nameAccent && /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--brand-highlight)' : 'var(--brand-accent)'
    }
  }, " ", nameAccent)), tagline && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 9,
      fontWeight: 600,
      marginTop: 3,
      color: dark ? 'rgba(255,255,255,.85)' : 'var(--ink-800)'
    }
  }, tagline)), /*#__PURE__*/React.createElement("button", {
    onClick: onMenu,
    "aria-label": "Menu",
    style: {
      background: 'none',
      border: 0,
      padding: 6,
      cursor: 'pointer',
      color: fg
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "menu",
    size: 28,
    strokeWidth: 1.75
  }))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/layout/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/lists/ComparisonTable.jsx
try { (() => {
/** "Our Price vs them" table — our column highlighted in marker yellow. */
function ComparisonTable({
  columns = [],
  rows = [],
  highlight = 0,
  ourLabel = 'Our Price'
}) {
  const cell = {
    padding: '8px 4px',
    fontSize: 10.5,
    lineHeight: 1.3,
    textAlign: 'center',
    borderBottom: '1px solid var(--gray-200)',
    borderRight: '1px solid var(--gray-200)'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      overflowX: 'auto'
    }
  }, /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-text)',
      color: 'var(--ink-900)'
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      ...cell,
      background: 'transparent'
    }
  }), columns.map((c, i) => /*#__PURE__*/React.createElement("th", {
    key: i,
    style: {
      ...cell,
      fontWeight: 700,
      position: 'relative',
      background: i === highlight ? 'var(--brand-highlight)' : '#fff',
      fontSize: i === highlight ? 13 : 10
    }
  }, i === highlight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -16,
      left: '50%',
      transform: 'translateX(-50%)',
      background: 'var(--brand-highlight)',
      color: 'var(--brand-accent)',
      fontSize: 9,
      fontWeight: 700,
      padding: '2px 6px',
      borderRadius: 4,
      whiteSpace: 'nowrap'
    }
  }, ourLabel), c)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((r, ri) => /*#__PURE__*/React.createElement("tr", {
    key: ri
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      ...cell,
      fontWeight: 700,
      textAlign: 'left'
    }
  }, r.label), r.values.map((v, i) => /*#__PURE__*/React.createElement("td", {
    key: i,
    style: {
      ...cell,
      background: i === highlight ? 'var(--brand-dark)' : '#fff',
      color: i === highlight ? '#fff' : 'inherit',
      fontWeight: i === highlight ? 700 : 400
    }
  }, ri === rows.length - 1 && i === highlight ? /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--brand-highlight)',
      color: 'var(--brand-accent)',
      padding: '2px 4px',
      fontSize: 13
    }
  }, v) : v)))))));
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/lists/FAQItem.jsx
try { (() => {
const {
  useState
} = React;
/** Accordion row. Light = hairline divider on white; dark = white text on brand-dark band. */
function FAQItem({
  question,
  answer,
  defaultOpen = false,
  tone = 'dark'
}) {
  const [open, setOpen] = useState(defaultOpen);
  const dark = tone === 'dark';
  const fg = dark ? '#fff' : 'var(--ink-900)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid ' + (dark ? 'rgba(255,255,255,.18)' : 'var(--gray-200)'),
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setOpen(!open),
    style: {
      width: '100%',
      background: 'none',
      border: 0,
      padding: '18px 0',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 16,
      cursor: 'pointer',
      color: fg,
      textAlign: 'left',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      lineHeight: 1.35
    }
  }, /*#__PURE__*/React.createElement("span", null, question), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: open ? 'chevron-up' : 'chevron-down',
    size: 20,
    color: fg
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 0 18px',
      fontSize: 12.5,
      lineHeight: 1.6,
      color: dark ? 'rgba(255,255,255,.85)' : 'var(--text-body)'
    }
  }, answer));
}
Object.assign(__ds_scope, { FAQItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/FAQItem.jsx", error: String((e && e.message) || e) }); }

// components/lists/LocationList.jsx
try { (() => {
/** SEO coverage list: region headings + 2-column underlined area links with pin icons. */
function LocationList({
  groups = [],
  columns = 2
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 18,
      textAlign: 'left',
      width: '100%'
    }
  }, groups.map(g => /*#__PURE__*/React.createElement("div", {
    key: g.region,
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 12,
      textDecoration: 'underline',
      color: 'var(--ink-900)'
    }
  }, g.region), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', minmax(0,1fr))',
      gap: '8px 12px'
    }
  }, g.areas.map(a => /*#__PURE__*/React.createElement("a", {
    key: a,
    href: "#",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 11.5,
      color: 'var(--ink-900)',
      textDecoration: 'underline',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--brand-accent)",
    strokeWidth: 2.4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, a)))))));
}
Object.assign(__ds_scope, { LocationList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/LocationList.jsx", error: String((e && e.message) || e) }); }

// components/lists/PhotoGrid.jsx
try { (() => {
/** Dense proof gallery ("Lebih 8,300 Projek Selesai") — square thumbs, hairline gaps. */
function PhotoGrid({
  images = [],
  columns = 3,
  gap = 2,
  radius = 0,
  aspect = '1 / 1',
  framed = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + columns + ', minmax(0,1fr))',
      gap,
      width: '100%'
    }
  }, images.map((src, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      aspectRatio: aspect,
      overflow: 'hidden',
      borderRadius: radius,
      background: 'var(--gray-100)',
      border: framed ? '5px solid #fff' : 'none',
      boxShadow: framed ? '0 1px 4px rgba(0,0,0,.4)' : 'none'
    }
  }, src && /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))));
}
Object.assign(__ds_scope, { PhotoGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/PhotoGrid.jsx", error: String((e && e.message) || e) }); }

// components/lists/PillTabs.jsx
try { (() => {
/** Pill tab switcher (Founder / General Manager / Manager). */
function PillTabs({
  tabs = [],
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      justifyContent: 'center',
      width: '100%'
    }
  }, tabs.map(t => {
    const on = t === value;
    return /*#__PURE__*/React.createElement("button", {
      key: t,
      onClick: () => onChange && onChange(t),
      style: {
        flex: '1 1 40%',
        height: 34,
        borderRadius: 99,
        border: '2px solid ' + (on ? 'var(--brand-dark)' : 'var(--gray-200)'),
        background: on ? 'var(--brand-dark)' : '#fff',
        color: on ? '#fff' : 'var(--ink-900)',
        fontFamily: 'var(--font-text)',
        fontWeight: 700,
        fontSize: 12,
        cursor: 'pointer'
      }
    }, t);
  }));
}
Object.assign(__ds_scope, { PillTabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/lists/PillTabs.jsx", error: String((e && e.message) || e) }); }

// components/sections/Hero.jsx
try { (() => {
/** Mobile hero: eyebrow → two-tone H1 → subtext → WhatsApp CTA + phone → product/person image (bleeds to the next band). */
function Hero({
  eyebrow,
  title,
  sub,
  cta = {},
  image,
  imageAlt = '',
  badge,
  bg = 'var(--brand-tint)',
  bullets,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: bg,
      padding: '28px var(--gutter-mobile) 0',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 560,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 14
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      fontWeight: 600,
      color: 'var(--brand-primary)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 'var(--fs-display)',
      lineHeight: 'var(--lh-tight)',
      color: 'var(--text-heading)',
      textWrap: 'balance'
    }
  }, title), sub && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-small)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      textWrap: 'pretty'
    }
  }, sub), bullets && /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch'
    }
  }, bullets), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.WhatsAppCTA, cta)), children), image && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      margin: '18px calc(-1 * var(--gutter-mobile)) 0'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: 'auto',
      display: 'block'
    }
  }), badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 6,
      right: 14
    }
  }, badge)));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Hero.jsx", error: String((e && e.message) || e) }); }

// components/sections/LeadPickerCard.jsx
try { (() => {
const {
  useState
} = React;
/** Hero-embedded mini form: pick a location (or package) then WhatsApp. 3px black border card. */
function LeadPickerCard({
  prompt = 'Pilih Lokasi:',
  label = 'Lokasi',
  options = ['Kuala Lumpur', 'Selangor', 'Johor', 'Penang'],
  tab,
  ctaLabel = 'Whatsapp Now',
  onSubmit
}) {
  const [v, setV] = useState(options[0]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: 'rgba(255,255,255,.92)',
      border: 'var(--border-hero-card)',
      borderRadius: 'var(--radius-md)',
      padding: '26px 22px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      textAlign: 'left',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, tab && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -14,
      right: 14,
      background: '#000',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      padding: '6px 12px',
      borderRadius: 'var(--radius-sm)'
    }
  }, tab), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      textAlign: 'center',
      color: 'var(--ink-800)'
    }
  }, prompt), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      fontWeight: 600,
      color: 'var(--brand-accent)'
    }
  }, label), /*#__PURE__*/React.createElement("label", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: v,
    onChange: e => setV(e.target.value),
    style: {
      width: '100%',
      height: 48,
      appearance: 'none',
      WebkitAppearance: 'none',
      border: '1px solid var(--brand-accent)',
      borderRadius: 'var(--radius-xs)',
      background: '#fff',
      padding: '0 40px 0 18px',
      fontFamily: 'var(--font-text)',
      fontSize: 16,
      color: 'var(--brand-accent)'
    }
  }, options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o
  }, o))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: 14,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 20,
    color: "var(--brand-accent)"
  }))), /*#__PURE__*/React.createElement(__ds_scope.WhatsAppButton, {
    label: ctaLabel,
    fullWidth: true,
    onClick: e => {
      e.preventDefault();
      onSubmit && onSubmit(v);
    }
  }));
}
Object.assign(__ds_scope, { LeadPickerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/LeadPickerCard.jsx", error: String((e && e.message) || e) }); }

// components/sections/TrustStrip.jsx
try { (() => {
/** Dark social-proof band: "Google 4.9 ★★★★★" + one-line experience/review claim. */
function TrustStrip({
  rating = '4.9',
  text,
  bg = 'var(--brand-dark)',
  showGoogle = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      color: '#fff',
      padding: '14px var(--gutter-mobile)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6
    }
  }, showGoogle && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      fontWeight: 700,
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "brand-google",
    size: 14,
    color: "#fff"
  }), " Google ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--star)'
    }
  }, rating), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 1
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      background: 'var(--star)',
      width: 15,
      height: 15,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 11,
    color: "#fff",
    strokeWidth: 2.5
  }))))), text && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-micro)',
      fontWeight: 700,
      lineHeight: 1.45,
      textWrap: 'balance'
    }
  }, text));
}
Object.assign(__ds_scope, { TrustStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/TrustStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lead-gen/KenduriPage.jsx
try { (() => {
const K = window.UtopiaLeadGenDesignSystem_f515b4;
function KenduriPage({
  setWaMsg,
  waMsg
}) {
  const {
    PromoBar,
    SiteHeader,
    Hero,
    Highlight,
    Section,
    SectionHeading,
    FeatureCard,
    WhatsAppCTA,
    PackageCard,
    StepCard,
    PhotoGrid,
    SiteFooter
  } = K;
  const phone = '6010-252 9688';
  const base = ['Nasi Minyak', 'Ayam Merah', 'Acar Timun', 'Papadom'];
  return /*#__PURE__*/React.createElement(PageShell, {
    theme: "kenduri",
    waMsg: waMsg,
    setWaMsg: setWaMsg,
    links: ['Utama', 'Pakej Katering', 'Sewa Kerusi & Khemah', 'Lokasi'],
    header: open => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PromoBar, {
      align: "left",
      bg: "var(--brand-dark)",
      text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("u", null, "Cik Yah Katering Seluruh Malaysia"), " \xB7 Hubungi Kami Sekarang!")
    }), /*#__PURE__*/React.createElement(SiteHeader, {
      name: "Cik Yah",
      nameAccent: "Katering",
      onMenu: open
    }))
  }, /*#__PURE__*/React.createElement(Hero, {
    bg: "#F4F4F4",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Menu Katering Kahwin & Kenduri ", /*#__PURE__*/React.createElement(Highlight, null, "Pakej Katering Dari RM10 Seorang")),
    sub: "Pakej katering kahwin & katering kenduri yang enak dan berbaloi. Juga terima tempahan untuk katering buffet, seminar dan katering Hari Raya.",
    cta: {
      phone
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 10
    }
  }, ['food-1', 'food-3', 'food-4'].map(f => /*#__PURE__*/React.createElement("img", {
    key: f,
    src: '../../assets/images/' + f + '.png',
    style: {
      width: 96,
      height: 96,
      borderRadius: '50%'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 24
    }
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "dark",
    gap: 12
  }, [['Katering Halal', 'Menggunakan bahan yang dijamin halal dan berkualiti.', 'badge-check'], ['Pakej Katering Termurah', 'Dijamin sedap dan murah dengan pelbagai menu katering.', 'wallet'], ['Penghantaran Percuma', 'Penghantaran percuma Klang Valley untuk setiap pesanan.', 'truck']].map(([t, b, i]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      alignSelf: 'stretch',
      background: '#fff',
      borderRadius: 'var(--radius-xs)',
      padding: 14
    }
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    variant: "list",
    icon: i,
    title: t,
    body: b
  })))), /*#__PURE__*/React.createElement(Section, {
    bg: "tint",
    gap: 20
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Pakej Katering dan Menu Katering ", /*#__PURE__*/React.createElement(Highlight, null, "Termurah")),
    sub: "Pelbagai pilihan menu katering yang sedap dan berbaloi. Order Katering Seawal 3 Hari Sebelum."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PackageCard, {
    image: "../../assets/images/food-2.png",
    name: "Pakej Katering Jimat",
    items: base,
    price: "RM15/pax"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PackageCard, {
    image: "../../assets/images/food-1.png",
    name: "Pakej Katering Standard",
    items: base,
    extras: ['Daging Hitam'],
    price: "RM21/pax"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(PackageCard, {
    image: "../../assets/images/food-4.png",
    name: "Pakej Katering Premium",
    items: [...base, 'Daging Hitam'],
    extras: ['Buah', 'Kuih'],
    price: "RM25/pax"
  })), /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: phone
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Menu Katering ", /*#__PURE__*/React.createElement(Highlight, null, "Bestseller"), " Kami")
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 18,
      alignSelf: 'stretch'
    }
  }, [['food-1', 'Ayam Merah'], ['food-2', 'Nasi Hujan Panas'], ['food-3', 'Kari Kambing'], ['food-4', 'Ayam Kurma']].map(([f, n]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      display: 'grid',
      justifyItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: '../../assets/images/' + f + '.png',
    style: {
      width: 130,
      height: 130,
      borderRadius: '50%'
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontSize: 13
    }
  }, n))))), /*#__PURE__*/React.createElement(Section, {
    bg: "tint",
    gap: 4
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Tempah Katering dalam ", /*#__PURE__*/React.createElement(Highlight, null, "5 minit")),
    sub: "Katering kahwin, katering buffet, katering syarikat, seminar, katering Hari Raya dan banyak lagi serendah RM12 Seorang!"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      alignSelf: 'stretch',
      padding: '0 18px'
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    n: 1,
    title: "WhatsApp Kami",
    body: "Hubungi Kami. Kami akan membalas dalam 5 minit!"
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: 2,
    title: "Beri Quotation",
    body: "Beritahu kami tarikh, lokasi, dan jumlah tetamu yang anda jangkakan."
  }), /*#__PURE__*/React.createElement(StepCard, {
    n: 3,
    title: "Selesai!",
    body: "Anda boleh membuat pembayaran deposit secara 'online bank-in'."
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: phone
  }))), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Highlight, null, "4,520+"), " Kenduri, Jamuan, Seminar & Perkahwinan!"),
    sub: "Harga katering murah, berbaloi dan kepuasan terjamin."
  }), /*#__PURE__*/React.createElement(PhotoGrid, {
    columns: 4,
    gap: 6,
    images: ['../../assets/images/food-1.png', '', '', '../../assets/images/food-3.png', '', '../../assets/images/food-2.png', '', '']
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    name: "Cik Yah",
    nameAccent: "Katering",
    phone: phone,
    bg: "var(--brand-dark)"
  }));
}
Object.assign(window, {
  KenduriPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lead-gen/KenduriPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lead-gen/LampuPage.jsx
try { (() => {
const L = window.UtopiaLeadGenDesignSystem_f515b4;
function LampuPage({
  setWaMsg,
  waMsg
}) {
  const {
    SiteHeader,
    Hero,
    Highlight,
    PriceBadge,
    Section,
    SectionHeading,
    FeatureCard,
    WhatsAppCTA,
    PricePill,
    StepCard,
    LocationList,
    PhotoGrid,
    SiteFooter
  } = L;
  const phone = '6010-399 9733';
  return /*#__PURE__*/React.createElement(PageShell, {
    theme: "lampu",
    waMsg: waMsg,
    setWaMsg: setWaMsg,
    links: ['Utama', 'Sewa Lampu', 'Cara Guna', 'Lokasi', 'Hubungi'],
    header: open => /*#__PURE__*/React.createElement(SiteHeader, {
      name: "Lampu",
      nameAccent: "Jaundice",
      tagline: "\xB7 fototerapi bayi kuning \xB7",
      variant: "brand",
      onMenu: open
    })
  }, /*#__PURE__*/React.createElement(Hero, {
    eyebrow: /*#__PURE__*/React.createElement(React.Fragment, null, "Sewa mesin fototerapi melalui ", /*#__PURE__*/React.createElement(Highlight, {
      variant: "whatsapp"
    }, "WhatsApp.")),
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Highlight, null, "Sewa Lampu Jaundice"), " Rawatan Fototerapi Bayi Kuning"),
    sub: "Sewa lampu jaundice untuk rawat kuning bayi / demam kuning. Lampu gred hospital, rawatan di rumah.",
    cta: {
      phone
    },
    image: "../../assets/images/lampu-hero.png",
    bg: "linear-gradient(180deg,#FFFCE1 0%,#FFFCE1 70%,#D0E8FF 100%)"
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "tint2",
    gap: 44
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "truck",
    title: "4 Jam Penghantaran",
    body: "Bayi anda penting. Kami hantarkan lampu berserta arahan penggunaan dalam masa 4 jam."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "check",
    title: "Disahkan Selamat KKM",
    body: "Lampu jaundice kami digunakan di hospital seluruh Malaysia. Dijamin efektif & selamat oleh KKM."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    icon: "tag",
    title: "Rawat di Rumah",
    body: "Sewa mesin fototerapi termurah dari RM200 sahaja dan rawat di rumah. Jimat kos & masa tunggu di hospital."
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Jimat Masa. ", /*#__PURE__*/React.createElement(Highlight, null, "Rawat di Rumah.")),
    sub: "Rawat bayi kuning dalam keselesaan rumah anda. Harga sewa termurah RM200 di seluruh Malaysia."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6,
      justifyItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--brand-primary)'
    }
  }, /*#__PURE__*/React.createElement(Highlight, null, "Lampu Jaundice"), " 2 Arah"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      color: 'var(--brand-primary)'
    }
  }, "Lampu Philips LUXEON. Untuk penggunaan berterusan."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10
    }
  }, /*#__PURE__*/React.createElement(PricePill, {
    price: "Sewa RM200"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 10,
      color: 'var(--brand-accent)',
      fontWeight: 600,
      marginTop: 6
    }
  }, "Sewaan 1 Malam. Lagi lama sewa lagi jimat dan berbaloi"))), /*#__PURE__*/React.createElement(Section, {
    bg: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Mudah Digunakan.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(Highlight, null, "99% Efektif.")),
    sub: "Senang dikendalikan. Arahan pengunaan lampu jaundice akan diberi."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-accent)'
      }
    }, "Langkah 1:"), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-primary)'
      }
    }, "Hubungi Kami")),
    body: "Kami akan balas & hantar dengan segera."
  }), /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: phone
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-accent)'
      }
    }, "Langkah 2:"), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-primary)'
      }
    }, "Siap sediakan bayi")),
    body: "Lindungi mata bayi dan bayi harus tidak berpakaian."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-accent)'
      }
    }, "Langkah 3:"), " ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-primary)'
      }
    }, "Rawat & Perhatikan")),
    body: "Ambil bacaan kuning bayi setiap hari di klinik terdekat."
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Servis & ", /*#__PURE__*/React.createElement(Highlight, null, "Kelajuan"), /*#__PURE__*/React.createElement("br", null), "Hantar 4 Jam"),
    sub: "Arahan penggunaan & penghantaran 4 jam mesin fototerapi demam kuning."
  }), /*#__PURE__*/React.createElement(PhotoGrid, {
    columns: 4,
    gap: 4,
    images: ['', '', '', '', '', '', '', '']
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "tint2"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Senarai 100 Lokasi ", /*#__PURE__*/React.createElement(Highlight, null, "Sewa Lampu Jaundice")),
    sub: "Kami menyediakan sewa lampu jaundice di kawasan berikut. Jika lokasi anda tiada dalam senarai, jangan risau! Hubungi kami."
  }), /*#__PURE__*/React.createElement(LocationList, {
    groups: [{
      region: 'Kuala Lumpur',
      areas: ['Cheras', 'Bukit Jalil', 'Wangsa Maju', 'Setapak', 'TTDI', 'Taman Tun Dr Ismail', 'Kepong', 'Sentul']
    }, {
      region: 'Selangor',
      areas: ['Setia Alam', 'Kota Damansara', 'Cyberjaya', 'Bukit Jelutong', 'Shah Alam', 'Subang Jaya']
    }]
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "primary"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Rawatan bersama Bayi Anda ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-highlight)'
      }
    }, "Tempah Lampu Jaundice Sekarang.")),
    sub: /*#__PURE__*/React.createElement(React.Fragment, null, "Stok lampu kami terhad kepada ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-highlight)'
      }
    }, "13 unit."), " Rawatkan demam kuning dengan fototerapi sekarang.")
  }), /*#__PURE__*/React.createElement(WhatsAppCTA, {
    tone: "dark",
    phone: phone
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    name: "Lampu",
    nameAccent: "Jaundice",
    phone: phone,
    email: "jaundicemy@gmail.com",
    company: "Ibnu Sina Care Berhad (1484666-H)",
    address: "6, Jalan Tukang 16/4, Seksyen 16, 40200, Shah Alam, Selangor"
  }));
}
Object.assign(window, {
  LampuPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lead-gen/LampuPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lead-gen/MerryPage.jsx
try { (() => {
const M = window.UtopiaLeadGenDesignSystem_f515b4;
function MerryPage({
  setWaMsg,
  waMsg
}) {
  const {
    SiteHeader,
    Highlight,
    Section,
    SectionHeading,
    WhatsAppCTA,
    TrustStrip,
    StatBlock,
    FeatureCard,
    ComparisonTable,
    PillTabs,
    FAQItem,
    SiteFooter
  } = M;
  const phone = '6014-636 6884';
  const [tab, setTab] = React.useState('Founder');
  return /*#__PURE__*/React.createElement(PageShell, {
    theme: "merry",
    waMsg: waMsg,
    setWaMsg: setWaMsg,
    links: ['Home', 'Our Centers', 'Pricing', 'FAQ'],
    header: open => /*#__PURE__*/React.createElement(SiteHeader, {
      name: "merry",
      tagline: "since 2001 \xB7 elderly care center",
      onMenu: open
    })
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px var(--gutter-mobile) 0',
      display: 'grid',
      gap: 12,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 26,
      color: '#000',
      textAlign: 'left'
    }
  }, "From ", /*#__PURE__*/React.createElement(Highlight, {
    variant: "underline"
  }, "RM2,500+"), " Monthly, Our Elderly Care Service Will Save You ", /*#__PURE__*/React.createElement(Highlight, {
    variant: "underline"
  }, "56 Hours Per Week.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      lineHeight: 1.5
    }
  }, "At Merry Elderly Care, we provide our customers with 100% full service, ensuring that all the basic requirements i.e. bathing, exercising, meals, and medications are taken care of."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      paddingLeft: 18,
      fontSize: 10.5,
      lineHeight: 1.6
    }
  }, /*#__PURE__*/React.createElement("li", null, "93% of our customers have ", /*#__PURE__*/React.createElement(Highlight, {
    variant: "marker"
  }, "tried and failed using home-maid / Indonesian helper"), ", mainly due to untraining helpers."), /*#__PURE__*/React.createElement("li", null, "Our customers save up to ", /*#__PURE__*/React.createElement(Highlight, {
    variant: "marker"
  }, "56 hours of weekly"), " & countless headaches."), /*#__PURE__*/React.createElement("li", null, "Almost all of our customers say ", /*#__PURE__*/React.createElement(Highlight, {
    variant: "marker"
  }, "we are the cheapest"), " with the best service.")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/merry-hero.png",
    alt: "",
    style: {
      width: 'calc(100% + 40px)',
      margin: '0 -20px'
    }
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white",
    padY: "20px"
  }, /*#__PURE__*/React.createElement(WhatsAppCTA, {
    label: "Check Our Availability",
    phone: phone,
    eyebrow: "Usually 2-3 Spot Available Every Month. Find Out Earlier!"
  })), /*#__PURE__*/React.createElement(TrustStrip, {
    text: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--star)'
      }
    }, "20 Years"), " of Elderly Care Experience \xB7 Over ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--star)'
      }
    }, "200+ Reviews"), " in Facebook & Google Business with ", /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--star)'
      }
    }, "4.9 Stars"))
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'linear-gradient(180deg,#ECC8FF,#fff)',
      padding: '32px 20px',
      display: 'grid',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(StatBlock, {
    value: "23+",
    label: "Years of experience in Elderly Care"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "380+",
    label: "Elderly & Old Folks Since 2001"
  }), /*#__PURE__*/React.createElement(StatBlock, {
    value: "RM2,500",
    label: "Cheapest Elderly Care in Klang Valley"
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white",
    gap: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#000',
      color: '#fff',
      fontSize: 11,
      fontWeight: 700,
      padding: '2px 6px'
    }
  }, "41 Out of 43 Elderly Care Centers Overcharge at ", /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--brand-highlight)',
      color: '#000'
    }
  }, "RM4,500 to RM8,500.")), /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "At Merry Care, You Will Get Better Services for 70% Cheaper - ", /*#__PURE__*/React.createElement(Highlight, {
      variant: "marker"
    }, "from RM2,500+")),
    sub: "Our prices are inclusive of 5 meals a day, daily laundry and cleaning."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(ComparisonTable, {
    columns: ['merry', 'Other Elderly Care', 'Retirement Home', 'Home Maid'],
    rows: [{
      label: 'Room Type',
      values: ['Shared', 'Shared', 'Private', '-']
    }, {
      label: 'Meals',
      values: ['5 Meal', '3 Meal', '5 Meal', 'Self-Pay']
    }, {
      label: 'Service',
      values: ['24-Hour Assistant', '24-Hour Assistant', '24-Hour Assistant', 'Self-Train']
    }, {
      label: 'Price',
      values: ['RM2,500', 'RM4,500+', 'RM7,500+', 'RM4,000']
    }]
  })), /*#__PURE__*/React.createElement(WhatsAppCTA, {
    label: "Check Out Availability",
    phone: phone
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "tint",
    gap: 16
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Have ", /*#__PURE__*/React.createElement(Highlight, {
      variant: "marker"
    }, "Peace of Mind"), " with Our Team's ", /*#__PURE__*/React.createElement(Highlight, {
      variant: "marker"
    }, "20+ Years"), " of Elderly Care Experience")
  }), /*#__PURE__*/React.createElement(PillTabs, {
    tabs: ['Founder', 'General Manager', 'Manager'],
    value: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'stretch',
      background: '#fff',
      borderRadius: 'var(--radius-xl)',
      padding: 22,
      display: 'grid',
      justifyItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      height: 120,
      borderRadius: 24,
      background: 'var(--brand-tint)'
    }
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18
    }
  }, tab === 'Founder' ? 'Karen Yong' : tab), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 11,
      lineHeight: 1.7,
      textAlign: 'center'
    }
  }, "The heart and soul behind Merry Care Center. With over 23 years of dedicated service, she is the driving force behind this warm community."))), /*#__PURE__*/React.createElement(Section, {
    bg: "dark",
    center: false,
    gap: 0
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    title: "Let Us Take Good Care of Your Parents with 24/7 Assistance"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 16
    }
  }), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Why is your monthly fee so affordable?",
    defaultOpen: true,
    answer: "We believe that every family\u2014regardless of income\u2014should have access to quality elderly care. Our centres operate with a streamlined, cost-effective approach."
  }), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Are there any hidden charges?",
    answer: "No. Meals, laundry, medication management and daily exercise are included."
  }), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Do you provide day care?",
    answer: "Yes \u2014 WhatsApp us to check day-care slots at your nearest centre."
  }), /*#__PURE__*/React.createElement(FAQItem, {
    question: "Your homes are always full. How can I check for availability?",
    answer: "Usually 2-3 spots open every month. WhatsApp us to be notified first."
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    name: "merry",
    nameAccent: "elderly care",
    phone: phone,
    bg: "var(--brand-dark)"
  }));
}
Object.assign(window, {
  MerryPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lead-gen/MerryPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lead-gen/ScaffoldingPage.jsx
try { (() => {
const S = window.UtopiaLeadGenDesignSystem_f515b4;
function ScaffoldingPage({
  setWaMsg,
  waMsg
}) {
  const {
    SiteHeader,
    Highlight,
    Section,
    SectionHeading,
    FeatureCard,
    WhatsAppCTA,
    PricePill,
    StepCard,
    LeadPickerCard,
    PhotoGrid,
    LocationList,
    SiteFooter,
    Icon
  } = S;
  const phone = '6011-1337 4233';
  const items = [['Cat Walk', 'RM 20/sebulan', 'RM 200'], ['Ladder Tangga', 'RM 30/sebulan', 'RM 220'], ['Jack Base (x2)', 'RM 10/sebulan', 'RM 90']];
  return /*#__PURE__*/React.createElement(PageShell, {
    theme: "scaffolding",
    waMsg: waMsg,
    setWaMsg: setWaMsg,
    links: ['Utama', 'Harga Sewa', 'Lokasi', 'Hubungi'],
    header: open => /*#__PURE__*/React.createElement(SiteHeader, {
      name: "Scaffolding",
      tagline: "Sewa \xB7 Murah \xB7 Cepat",
      onMenu: open
    })
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#fff',
      padding: '24px var(--gutter-mobile) 28px',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 11,
      fontWeight: 600
    }
  }, "5 Minit Tempahan Melalui ", /*#__PURE__*/React.createElement(Highlight, {
    variant: "whatsapp"
  }, "WhatsApp.")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--fs-display)',
      margin: 0,
      color: '#000'
    }
  }, /*#__PURE__*/React.createElement(Highlight, null, "Sewa Scaffolding Malaysia"), /*#__PURE__*/React.createElement("br", null), "Hanya RM10/set!"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12
    }
  }, "Penghantaran ", /*#__PURE__*/React.createElement("b", null, "4 Jam"), " Dijamin Sampai."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      alignSelf: 'stretch',
      textAlign: 'left'
    }
  }, ['Kuala Lumpur & Selangor', 'Seremban & Melaka', 'Johor', 'Penang Kedah Perak Perlis (Utara)'].map(r => /*#__PURE__*/React.createElement("div", {
    key: r,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--brand-accent)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "truck",
    size: 22,
    color: "var(--brand-accent)"
  }), r))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(LeadPickerCard, {
    prompt: /*#__PURE__*/React.createElement(React.Fragment, null, "Pilih Lokasi untuk ", /*#__PURE__*/React.createElement("b", null, "Sewa Scaffolding!")),
    tab: "Scaffolding",
    onSubmit: v => setWaMsg('Hi, saya nak sewa scaffolding di ' + v + '. Boleh bagi quotation?')
  }))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/scaffold-hero.png",
    alt: "",
    style: {
      width: '100%',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement(Section, {
    bg: "tint",
    gap: 14
  }, /*#__PURE__*/React.createElement(FeatureCard, {
    variant: "card",
    icon: "truck",
    title: "Servis Serta-Merta",
    body: "Perkhidmatan hari yang sama. Tempahan mudah melalui Whatsapp."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    variant: "card",
    icon: "tag",
    title: "Harga Termurah",
    body: "Jaminan Harga Terendah di Seluruh Malaysia. Harga Tetap."
  }), /*#__PURE__*/React.createElement(FeatureCard, {
    variant: "card",
    icon: "shield-check",
    title: "Sewa Bermutu",
    body: "Jaminan Sewa Bermutu! 100% Guarantee Tak Rosak."
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white",
    gap: 14
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Highlight, null, "Semua RM10."), " Harga Terbaloi di Malaysia."),
    sub: "Menyediakan sewa scaffold dengan harga paling murah di Malaysia dengan jaminan kualiti terbaik."
  }), items.map(([n, r, b]) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      alignSelf: 'stretch',
      background: '#fff',
      borderRadius: 'var(--radius-xs)',
      boxShadow: 'var(--shadow-card-strong)',
      padding: 12,
      display: 'grid',
      gridTemplateColumns: '1fr 132px',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      background: 'var(--yellow-400)',
      borderRadius: '42% 58% 50% 50%',
      opacity: .9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 15,
      textAlign: 'center'
    }
  }, n), /*#__PURE__*/React.createElement(PricePill, {
    variant: "stacked",
    label: "Sewa",
    price: r,
    fullWidth: true
  }), /*#__PURE__*/React.createElement(PricePill, {
    variant: "stacked",
    label: "Beli Baru",
    price: b,
    fullWidth: true
  })))), /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: phone
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "accent",
    gap: 12
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    tone: "dark",
    title: "Tempahan Dalam 5 Minit.",
    sub: "Tempahan cepat dan mudah Scaffolding Malaysia dengan harga paling murah untuk pelbagai kegunaan."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10,
      alignSelf: 'stretch'
    }
  }, /*#__PURE__*/React.createElement(StepCard, {
    variant: "ring",
    n: 1,
    title: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Highlight, {
      variant: "whatsapp"
    }, "WhatsApp"), " Kami"),
    body: "Kami akan balas dalam masa tersingkat."
  }), /*#__PURE__*/React.createElement(StepCard, {
    variant: "ring",
    n: 2,
    title: "Maklumat & Lokasi",
    body: "Beritahu kami saiz mana yang diperlukan, dengan tarikh, masa dan lokasi drop-off."
  }), /*#__PURE__*/React.createElement(StepCard, {
    variant: "ring",
    n: 3,
    title: "Selesai",
    body: "Bayaran boleh dibuat secara 'online bank-in'."
  })), /*#__PURE__*/React.createElement(WhatsAppCTA, {
    tone: "dark",
    phone: phone
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "white"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Lebih ", /*#__PURE__*/React.createElement(Highlight, null, "8,300"), " Projek Selesai Dengan ", /*#__PURE__*/React.createElement(Highlight, null, "Sewa Scaffolding Malaysia"), " Kami."),
    sub: "Projek kecil atau besar, kami sedia bantu."
  }), /*#__PURE__*/React.createElement(PhotoGrid, {
    columns: 3,
    images: ['', '', '', '', '', '', '', '', '']
  }), /*#__PURE__*/React.createElement(WhatsAppCTA, {
    phone: phone
  })), /*#__PURE__*/React.createElement(Section, {
    bg: "tint"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Senarai Lebih 150 Lokasi ", /*#__PURE__*/React.createElement(Highlight, null, "Sewa Scaffolding Malaysia"))
  }), /*#__PURE__*/React.createElement(LocationList, {
    groups: [{
      region: 'Kuala Lumpur',
      areas: ['Dang Wangi', 'Taman Ibukota', 'Lake Gardens', 'Happy Garden', 'Jalan Duta', 'Shamelin Perkasa']
    }]
  })), /*#__PURE__*/React.createElement(SiteFooter, {
    name: "Scaffolding",
    nameAccent: "Malaysia",
    phone: phone,
    email: "kerjayakayamas@gmail.com",
    company: "Scaffolding Malaysia Bhd. (1399770-K)",
    address: "HQ: No. 3, Lot 156, Jalan Jurubina U1/18, Hicom Glenmarie Industrial Park, 40150 Shah Alam"
  }));
}
Object.assign(window, {
  ScaffoldingPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lead-gen/ScaffoldingPage.jsx", error: String((e && e.message) || e) }); }

// ui_kits/lead-gen/Shell.jsx
try { (() => {
const {
  SiteHeader,
  FloatingWhatsApp,
  Icon,
  WhatsAppButton
} = window.UtopiaLeadGenDesignSystem_f515b4;
function MenuDrawer({
  open,
  onClose,
  links
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.45)',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '78%',
      background: '#fff',
      padding: '18px 22px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      alignSelf: 'flex-end',
      background: 'none',
      border: 0,
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 26
  })), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: onClose,
    style: {
      padding: '14px 0',
      borderBottom: '1px solid var(--gray-200)',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 16,
      color: 'var(--brand-primary)',
      textDecoration: 'none'
    }
  }, l)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(WhatsAppButton, {
    fullWidth: true
  }))));
}
function WaSheet({
  msg,
  onClose
}) {
  if (!msg) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(0,0,0,.45)',
      zIndex: 70,
      display: 'flex',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      width: '100%',
      borderRadius: '16px 16px 0 0',
      padding: '22px 20px 28px',
      display: 'grid',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "brand-whatsapp",
    size: 28,
    color: "var(--wa-green)"
  }), /*#__PURE__*/React.createElement("b", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17
    }
  }, "Buka WhatsApp?")), /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#DCF8C6',
      borderRadius: 10,
      padding: '10px 12px',
      fontSize: 13,
      lineHeight: 1.45
    }
  }, msg), /*#__PURE__*/React.createElement(WhatsAppButton, {
    fullWidth: true,
    label: "Hantar Mesej",
    onClick: e => {
      e.preventDefault();
      onClose();
    }
  })));
}

/** Phone-width page shell: scrolling column + header + floating bubble + menu + WhatsApp sheet. */
function PageShell({
  theme,
  header,
  links,
  children,
  waMsg,
  setWaMsg
}) {
  const [menu, setMenu] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme,
    style: {
      position: 'relative',
      width: 390,
      height: '100%',
      background: '#fff',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      overflowY: 'auto'
    },
    onClickCapture: e => {
      const a = e.target.closest('a');
      if (a && a.textContent.match(/whatsapp|order|check/i)) {
        e.preventDefault();
        setWaMsg('Hi, saya berminat. Boleh share harga & ketersediaan?');
      }
    }
  }, header(() => setMenu(true)), children), /*#__PURE__*/React.createElement("div", {
    onClick: () => setWaMsg('Hi! Saya nak tanya lebih lanjut.')
  }, /*#__PURE__*/React.createElement(FloatingWhatsApp, {
    position: "absolute",
    bottom: 28,
    right: 16
  })), /*#__PURE__*/React.createElement(MenuDrawer, {
    open: menu,
    onClose: () => setMenu(false),
    links: links
  }), /*#__PURE__*/React.createElement(WaSheet, {
    msg: waMsg,
    onClose: () => setWaMsg(null)
  }));
}
Object.assign(window, {
  PageShell
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/lead-gen/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.PackageCard = __ds_scope.PackageCard;

__ds_ns.PriceBadge = __ds_scope.PriceBadge;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.StatBlock = __ds_scope.StatBlock;

__ds_ns.StepCard = __ds_scope.StepCard;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.FloatingWhatsApp = __ds_scope.FloatingWhatsApp;

__ds_ns.OutlineButton = __ds_scope.OutlineButton;

__ds_ns.PricePill = __ds_scope.PricePill;

__ds_ns.WhatsAppButton = __ds_scope.WhatsAppButton;

__ds_ns.WhatsAppCTA = __ds_scope.WhatsAppCTA;

__ds_ns.PromoBar = __ds_scope.PromoBar;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.FAQItem = __ds_scope.FAQItem;

__ds_ns.LocationList = __ds_scope.LocationList;

__ds_ns.PhotoGrid = __ds_scope.PhotoGrid;

__ds_ns.PillTabs = __ds_scope.PillTabs;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.LeadPickerCard = __ds_scope.LeadPickerCard;

__ds_ns.TrustStrip = __ds_scope.TrustStrip;

})();
