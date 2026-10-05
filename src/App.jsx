import React, { useState } from 'react';
import { DS } from './ds.js';
import { site, stock, tabs, gallery } from './config.js';

const {
  PromoBar, SiteHeader, TrustStrip, Section, SectionHeading, FeatureCard, PillTabs,
  WhatsAppButton, WhatsAppCTA, StepCard, ReviewCard, FAQItem, SiteFooter, FloatingWhatsApp, Icon
} = DS;

const digits = site.phone.replace(/\D/g, '');
const wa = msg => 'https://wa.me/' + digits + '?text=' + encodeURIComponent(msg);
const waHref = wa('Hi Abang, saya nak tanya pasal kereta terpakai dan loan.');
const rm = n => 'RM' + n.toLocaleString('en-MY');

const theme = {
  '--brand-primary': '#1A1A1A', '--brand-accent': '#A51002', '--brand-tint': '#FEF8F4',
  '--brand-tint-2': '#F7F7F7', '--brand-dark': '#7A0C01', '--brand-highlight': '#F7E41C',
  '--text-heading': '#1A1A1A', '--surface-tint': '#FEF8F4', '--surface-tint-2': '#F7F7F7',
  '--surface-dark': '#7A0C01', '--text-accent': '#A51002', background: '#fff', minHeight: '100vh'
};

const accent = { color: 'var(--brand-accent)', fontWeight: 'inherit' };
const h2Style = {
  margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-h2)',
  lineHeight: 'var(--lh-tight)', color: 'var(--text-heading)', textWrap: 'balance', maxWidth: 560
};
const iconBox = { display: 'flex', width: 20, height: 20, flexShrink: 0 };

const navLinks = [
  ['#stok', 'Stok Kereta'],
  ['#cara-beli', 'Cara Beli'],
  ['#pelanggan', 'Pelanggan'],
  ['#soalan-lazim', 'Soalan Lazim'],
  ['#video', 'Video'],
  ['#showroom', 'Showroom']
];

/** Empty photo slot (matches the design's <image-slot> placeholder) or the photo once `src` is set. */
function PhotoSlot({ src, alt, label, radius = 0 }) {
  if (src) {
    return <img src={src} alt={alt} loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', borderRadius: radius }} />;
  }
  return (
    <div className="photo-slot" style={{ borderRadius: radius }} aria-hidden="true">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" /></svg>
      <span>{label}</span>
    </div>
  );
}

function Check({ children }) {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 'var(--fs-small)', fontWeight: 700, color: 'var(--ink-900)' }}>
      <span style={iconBox}><Icon name="circle-check" size={20} color="var(--brand-accent)" /></span>
      <span>{children}</span>
    </div>
  );
}

function CarCard({ car }) {
  const monthly = site.priceMode === 'bulanan';
  return (
    <div style={{ background: '#fff', border: '1px solid var(--border-card)', borderRadius: 'var(--radius-sm)', padding: 8, display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left', minWidth: 0 }}>
      <div style={{ position: 'relative', aspectRatio: '4/3', borderRadius: 6, overflow: 'hidden' }}>
        <PhotoSlot src={car.img} alt={car.name + ' ' + car.year} label="Gambar kereta" radius={6} />
        <div style={{ position: 'absolute', top: 6, left: 6, background: '#1A1A1A', color: '#fff', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 10, padding: '3px 7px', borderRadius: 3, pointerEvents: 'none' }}>{car.year}</div>
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: 'var(--ink-900)', lineHeight: 1.25 }}>{car.name}</div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
        <div className="chip">{car.km}</div>
        <div className="chip">{car.trans}</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, fontFamily: 'var(--font-display)', color: 'var(--ink-900)', flexWrap: 'wrap' }}>
        <span style={{ fontSize: 11 }}>{monthly ? 'Dari' : 'Harga'}</span>
        <span style={{ fontWeight: 800, fontSize: 18, color: 'var(--brand-accent)' }}>{monthly ? rm(car.month) : rm(car.cash)}</span>
        <span style={{ fontWeight: 700, fontSize: 12 }}>{monthly ? '/bulan' : ''}</span>
      </div>
      <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: -4 }}>{monthly ? 'Harga penuh ' + rm(car.cash) : 'Bulanan dari ' + rm(car.month)}</div>
      <WhatsAppButton size="card" fullWidth label="Whatsapp Now" href={wa('Hi Abang, saya berminat dengan ' + car.name + ' (' + car.year + '). Masih ada?')} />
    </div>
  );
}

function Menu({ open, onClose }) {
  if (!open) return null;
  return (
    <nav className="menu" aria-label="Menu utama">
      {navLinks.map(([href, label]) => <a key={href} href={href} onClick={onClose}>{label}</a>)}
      <div style={{ padding: '12px 20px 16px' }}>
        <WhatsAppButton size="card" fullWidth label="Whatsapp Now" href={waHref} />
      </div>
    </nav>
  );
}

export default function App() {
  const [tab, setTab] = useState('Semua');
  const [menuOpen, setMenuOpen] = useState(false);
  const cars = stock.filter(c => tab === 'Semua' || c.type === tab);
  const s = site.socials;

  return (
    <div data-screen-label="ABG Landing" style={theme}>
      {site.showPromo && <PromoBar text="Loan Mudah Lulus · Deposit Rendah" linkText="WhatsApp Kami" href={waHref} bg="#A51002" />}

      <div className="header-wrap">
        <SiteHeader name="Abang" nameAccent="Usedcar" logoSrc="assets/abg-logo.jpg" onMenu={() => setMenuOpen(o => !o)} />
        <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>

      <section style={{ background: 'var(--brand-tint)', padding: '28px var(--gutter-mobile) 0', textAlign: 'center' }}>
        <div style={{ maxWidth: 560, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
          <div style={{ fontSize: 'var(--fs-small)', fontWeight: 600, color: 'var(--brand-primary)' }}>Semak Kelayakan Loan Dalam 5 Minit Melalui <span style={{ color: 'var(--wa-green)', fontWeight: 'inherit' }}>WhatsApp.</span></div>
          <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 'var(--fs-display)', lineHeight: 'var(--lh-tight)', color: 'var(--text-heading)', textWrap: 'balance' }}><span style={accent}>Kereta Terpakai Murah</span> Bulanan Dari RM299!</h1>
          <p style={{ margin: 0, fontSize: 'var(--fs-small)', lineHeight: 1.55, textWrap: 'pretty' }}>Semua kereta diperiksa, servis penuh dan siap untuk dipandu. Harga telus, tiada caj tersembunyi.</p>
          <div style={{ display: 'grid', gap: 8, alignSelf: 'stretch', maxWidth: 340, margin: '0 auto', textAlign: 'left' }}>
            <Check>Loan Mudah Lulus, Deposit Rendah</Check>
            <Check>Pemeriksaan 150 Titik Setiap Kereta</Check>
            <Check>Warranty Enjin &amp; Gearbox Disediakan</Check>
          </div>
          <div style={{ marginTop: 6, alignSelf: 'stretch', whiteSpace: 'nowrap' }}>
            <WhatsAppCTA label="Whatsapp Now" href={waHref} phone={site.phone} />
          </div>
        </div>
        <div style={{ maxWidth: 720, margin: '20px auto 0', aspectRatio: '16/10', position: 'relative' }}>
          <PhotoSlot src={site.heroImage} alt="Kereta terpakai Abang Usedcar" label="Gambar hero — kereta / showroom" />
        </div>
      </section>

      <TrustStrip rating={site.rating} text="Dipercayai ribuan pembeli di Malaysia" bg="#1A1A1A" />

      <Section bg="white" gap={14}>
        <SectionHeading title="Kenapa Beli Dengan Abang?" sub="Beli kereta terpakai tanpa risau. Kami uruskan semuanya dari loan sampai tukar nama." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 14, alignSelf: 'stretch' }}>
          <FeatureCard variant="card" icon="wallet" title="Loan Mudah Lulus" body="Bank & loan kedai. Gaji rendah, kerja sendiri atau baru kerja boleh cuba." />
          <FeatureCard variant="card" icon="shield-check" title="Kereta Diperiksa" body="Setiap unit melalui pemeriksaan penuh. Tiada kereta banjir, tiada kereta potong." />
          <FeatureCard variant="card" icon="wrench" title="Warranty Disediakan" body="Warranty enjin & gearbox supaya anda pandu dengan tenang." />
          <FeatureCard variant="card" icon="heart-handshake" title="Trade-In Kereta Lama" body="Tukar kereta lama anda dengan harga terbaik terus jadi deposit." />
        </div>
      </Section>

      <div id="stok" className="anchor">
        <Section bg="tint" gap={16}>
          <h2 style={h2Style}>Stok <span style={accent}>Kereta Terpakai</span> Terkini</h2>
          <p style={{ margin: 0, fontSize: 'var(--fs-small)', lineHeight: 1.5, maxWidth: 560 }}>Stok bertukar setiap minggu. WhatsApp kami untuk unit yang anda cari.</p>
          <div style={{ alignSelf: 'stretch', maxWidth: 560, margin: '0 auto', width: '100%' }}>
            <PillTabs tabs={tabs} value={tab} onChange={setTab} />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(165px,1fr))', gap: 10, alignSelf: 'stretch' }}>
            {cars.map(car => <CarCard key={car.id} car={car} />)}
          </div>
          <WhatsAppCTA label="Tanya Stok Lain" href={waHref} phone={site.phone} />
        </Section>
      </div>

      <div id="cara-beli" className="anchor">
        <Section bg="accent" gap={14}>
          <SectionHeading tone="dark" title="Bawa Balik Kereta Dalam 3 Langkah." sub="Proses cepat dan mudah. Kebanyakan pelanggan ambil kunci dalam masa beberapa hari." />
          <div style={{ display: 'grid', gap: 10, alignSelf: 'stretch', maxWidth: 560, margin: '0 auto', width: '100%' }}>
            <StepCard variant="ring" n={1} title="WhatsApp Kami" body="Beritahu kereta yang anda minat dan bajet bulanan anda." />
            <StepCard variant="ring" n={2} title="Semak Loan & Test Drive" body="Hantar IC dan slip gaji. Kami semak kelayakan dan atur test drive." />
            <StepCard variant="ring" n={3} title="Ambil Kunci" body="Loan lulus, tukar nama & insurans kami uruskan. Terus bawa balik." />
          </div>
          <WhatsAppCTA tone="dark" label="Whatsapp Now" href={waHref} phone={site.phone} />
        </Section>
      </div>

      <div id="pelanggan" className="anchor">
        <Section bg="white" gap={16}>
          <h2 style={h2Style}>Pelanggan <span style={accent}>Abang Usedcar</span> Yang Dah Bawa Balik Kereta</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 4, alignSelf: 'stretch', maxWidth: 720, margin: '0 auto', width: '100%' }}>
            {gallery.map(g => (
              <div key={g.src} style={{ aspectRatio: '1/1', position: 'relative', overflow: 'hidden', background: '#eee' }}>
                <img src={g.src} alt="Pelanggan Abang Usedcar" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: g.pos }} />
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 12, alignSelf: 'stretch' }}>
            <ReviewCard text="Gaji saya kecil tapi Abang tolong carikan loan sampai lulus. Kereta pun elok, takde masalah sampai sekarang." name="Aiman R." location="Shah Alam" />
            <ReviewCard text="Harga telus, tak ada caj tambahan masa tandatangan. Trade-in kereta lama pun dapat harga ok." name="Nurul H." location="Kajang" />
            <ReviewCard text="WhatsApp pagi, petang dah test drive. Seminggu lepas tu dah bawa balik. Recommended!" name="Kumar S." location="Klang" />
          </div>
          <WhatsAppCTA label="Whatsapp Now" href={waHref} phone={site.phone} />
        </Section>
      </div>

      <div id="soalan-lazim" className="anchor">
        <Section bg="dark" gap={8}>
          <SectionHeading tone="dark" title="Soalan Lazim" />
          <div style={{ alignSelf: 'stretch', maxWidth: 640, margin: '0 auto', width: '100%' }}>
            <FAQItem question="Saya blacklist / CTOS, boleh buat loan?" answer="Boleh cuba. Kami ada pilihan bank dan loan kedai. WhatsApp kami untuk semakan percuma." defaultOpen />
            <FAQItem question="Berapa deposit yang perlu?" answer="Bergantung pada kereta dan profil loan. Ada unit dengan deposit serendah RM0 untuk yang layak." />
            <FAQItem question="Dokumen apa yang diperlukan?" answer="Salinan IC, lesen memandu, 3 bulan slip gaji dan penyata bank. Kerja sendiri: SSM dan penyata bank 6 bulan." />
            <FAQItem question="Boleh trade-in kereta lama?" answer="Boleh. Hantar gambar dan nombor plat melalui WhatsApp, kami bagi harga dalam hari yang sama." />
          </div>
          <div style={{ marginTop: 16, whiteSpace: 'nowrap' }}>
            <WhatsAppCTA tone="dark" label="Whatsapp Now" href={waHref} phone={site.phone} />
          </div>
        </Section>
      </div>

      <div id="video" className="anchor">
        <Section bg="white" gap={16}>
          <SectionHeading title="Tonton Video Kami" />
          <div style={{ alignSelf: 'stretch', maxWidth: 720, margin: '0 auto', width: '100%', aspectRatio: '16/9', borderRadius: 15, overflow: 'hidden', background: '#000', boxShadow: '0 1px 4px rgba(0,0,0,.3)' }}>
            <iframe width="560" height="315" src={site.youtubeEmbed} title="YouTube video player" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen style={{ width: '100%', height: '100%', border: 0, display: 'block' }} />
          </div>
        </Section>
      </div>

      <div id="showroom" className="anchor">
        <Section bg="tint" gap={16}>
          <SectionHeading title="Lawat Showroom Kami" sub="Datang tengok sendiri, test drive dan bincang loan terus dengan team kami." />
          <a href={site.mapsHref} target="_blank" rel="noopener" style={{ display: 'block', alignSelf: 'stretch', maxWidth: 720, margin: '0 auto', width: '100%', aspectRatio: '16/9', position: 'relative', borderRadius: 15, overflow: 'hidden' }}>
            <img src="uploads/showroom.webp" alt="Showroom Abang Usedcar" loading="lazy" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </a>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap', alignSelf: 'stretch' }}>
            <a href={site.mapsHref} target="_blank" rel="noopener" className="nav-btn nav-btn--maps">
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5a8 8 0 0 0-8 8c0 5.6 8 13 8 13s8-7.4 8-13a8 8 0 0 0-8-8z" fill="#EA4335" /><path d="M12 1.5a8 8 0 0 0-5.7 2.4l5.7 6.6z" fill="#4285F4" /><path d="M20 9.5a8 8 0 0 0-2.3-5.6L12 10.5z" fill="#FBBC04" /><path d="M12 22.5s8-7.4 8-13c0-1-.2-2-.5-2.8L12 10.5z" fill="#34A853" /><circle cx="12" cy="9.5" r="3" fill="#fff" /></svg>
              <span>Google Maps</span>
            </a>
            <a href={site.wazeHref} target="_blank" rel="noopener" className="nav-btn nav-btn--waze">
              <svg width="26" height="26" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.5c-4.7 0-8.5 3.6-8.5 8.2 0 1.8.6 3.4 1.6 4.7-.1 1.2-.6 2.2-1.5 3 1.7.2 3.1-.3 4.1-1.1 1.3.7 2.8 1.1 4.3 1.1 4.7 0 8.5-3.7 8.5-8.2S16.7 2.5 12 2.5z" fill="#33CCFF" stroke="#1a1a1a" strokeWidth="1.2" /><circle cx="9" cy="10" r="1.2" fill="#1a1a1a" /><circle cx="15" cy="10" r="1.2" fill="#1a1a1a" /><path d="M9 13.2c1.7 1.3 4.3 1.3 6 0" fill="none" stroke="#1a1a1a" strokeWidth="1.2" strokeLinecap="round" /></svg>
              <span>Waze</span>
            </a>
          </div>
          <div style={{ display: 'grid', gap: 10, maxWidth: 420, textAlign: 'left', alignSelf: 'center' }}>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 'var(--fs-small)', lineHeight: 1.45 }}>
              <span style={iconBox}><Icon name="map-pin" size={20} color="var(--brand-accent)" /></span>
              <span><b>{site.company}</b><br />{site.address}</span>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 'var(--fs-small)', lineHeight: 1.45 }}>
              <span style={iconBox}><Icon name="clock" size={20} color="var(--brand-accent)" /></span>
              <span>{site.hours}</span>
            </div>
          </div>
          <WhatsAppCTA label="Whatsapp Now" href={waHref} phone={site.phone} />
        </Section>
      </div>

      <SiteFooter name="Abang" nameAccent="Usedcar" phone={site.phone} company={site.company} address={site.address} />

      <div style={{ background: '#000', padding: '0 20px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: -1 }}>
        <div style={{ color: '#fff', font: "700 13px 'Wix Madefor Text',sans-serif" }}>Ikuti Kami</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14 }}>
          <a href={s.facebook} target="_blank" rel="noopener" aria-label="Facebook" className="social"><Icon name="facebook" size={22} /></a>
          <a href={s.instagram} target="_blank" rel="noopener" aria-label="Instagram" className="social"><Icon name="instagram" size={22} /></a>
          <a href={s.tiktok} target="_blank" rel="noopener" aria-label="TikTok" className="social"><Icon name="brand-tiktok" size={20} /></a>
          <a href={s.youtube} target="_blank" rel="noopener" aria-label="YouTube" className="social">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" /></svg>
          </a>
        </div>
      </div>

      <FloatingWhatsApp href={waHref} />
    </div>
  );
}
