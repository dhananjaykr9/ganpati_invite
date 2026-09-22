import { useRef, useState, useEffect } from 'react';
import './InvitationCard.css';
import WarkariDindi from './WarkariDindi';

/* ─── Image paths ─── */
const IMG_WARKARI_LOGO = '/ChatGPT Image Sep 22, 2026, 10_44_39 AM.png';
const IMG_WARKARI_MAN = '/ChatGPT Image Sep 22, 2026, 10_45_46 AM.png';
const IMG_VEENA_SINGER = '/ChatGPT Image Sep 22, 2026, 10_48_18 AM.png';
const IMG_GRANDPA_CHILD = '/ChatGPT Image Sep 22, 2026, 10_55_30 AM.png';
const IMG_GAN_GAN = '/ChatGPT Image Sep 22, 2026, 10_56_48 AM.png';
const IMG_NAMDEV_TEMPLE = '/ChatGPT Image Sep 22, 2026, 11_10_22 AM.png';
const IMG_AAMCHE_GHAR = '/ChatGPT Image Sep 22, 2026, 11_15_21 AM.png';  // आमचे घर येथे — sthal section

/* ─── Wari route stops ─── */
const WARI_ROUTE = [
  { name: 'हिंगणघाट', icon: '🏨️', tag: 'प्रारंभ' },
  { name: 'शेगाव', icon: '🛕', tag: 'गजानन महाराज' },
  { name: 'आळंदी', icon: '🙏', tag: 'ज्ञानेश्वर महाराज' },
  { name: 'देहू', icon: '🕉️', tag: 'तुकाराम महाराज' },
  { name: 'पुणे', icon: '🏙️', tag: '' },
  { name: 'पंढरपूर', icon: '⭐', tag: 'माऊली' },
];

/* ─── Chant items (doubled for infinite ticker) ─── */
const CHANTS = [
  'राम कृष्ण हरि',
  'माझे माहेर पंढरी',
  'पांडुरंग हरि',
  'गणपती बाप्पा मोरया',
  'गण गण गणात बोते',
  'राम कृष्ण हरि',
  'माझे माहेर पंढरी',
  'पांडुरंग हरि',
  'गणपती बाप्पा मोरया',
  'गण गण गणात बोते',
];

/* ─── Section divider ─── */
function Divider({ ornament = '❖' }) {
  return (
    <div className="section-divider">
      <div className="divider-line" />
      <span className="divider-ornament">{ornament}</span>
      <div className="divider-line" />
    </div>
  );
}

export default function InvitationCard() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  /* Try autoplay on mount */
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.5;
    const promise = audio.play();
    if (promise !== undefined) {
      promise
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false)); // blocked by browser — show button
    }
  }, []);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div id="invitation-site">

      {/* ── Background Music ── */}
      <audio ref={audioRef} src="/ganpati.mp3" loop preload="auto" />

      {/* ── Floating Music Toggle Button ── */}
      <button
        className={`music-btn ${playing ? 'music-btn--playing' : ''}`}
        onClick={toggleMusic}
        aria-label={playing ? 'संगीत थांबवा' : 'संगीत सुरू करा'}
        title={playing ? 'संगीत थांबवा' : 'संगीत सुरू करा'}
      >
        <span className="music-btn-icon">{playing ? '🔊' : '🔇'}</span>
        <span className="music-btn-label">{playing ? 'संगीत' : 'संगीत'}</span>
      </button>

      {/* ══════════════════════════════════
          STICKY CHANT TICKER
      ══════════════════════════════════ */}
      <div className="chant-bar" aria-label="वारकरी घोष">
        <div className="chant-track">
          {CHANTS.map((c, i) => (
            <span key={i} className="chant-item">
              {c}&ensp;<span className="chant-dot">✦</span>&ensp;
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════
          HERO SECTION
      ══════════════════════════════════ */}
      <div className="hero" id="hero">

        <p className="hero-om">🪔 &nbsp; ॐ नमो भगवते &nbsp; 🪔</p>
        <h1 className="hero-header">॥ श्री गणेशाय नमः ॥</h1>

        {/* Flags removed — Ganpati only */}
        <div className="hero-visual">
          {/* Ganpati circle */}
          <div className="ganpati-circle">
            <div className="ganpati-halo" />
            <div className="ganpati-ring" />
            <img
              src="/ganpati.jpg"
              alt="श्री गणपती बाप्पा"
              className="ganpati-img"
              loading="eager"
            />
          </div>
        </div>

        <p className="hero-vitthal">
          || &nbsp;राम कृष्ण हरी ||
        </p>

        {/* पंढरीचे वारकरी logo */}
        <img
          src={IMG_WARKARI_LOGO}
          alt="पंढरीचे वारकरी"
          className="hero-warkari-logo"
        />

        <p className="hero-title-main">आपणांस सर्वांना</p>
        <p className="hero-title-accent">आग्रहाचे निमंत्रण</p>
        <p className="hero-sub">🌼 सहकुटुंब सहपरिवार 🌼</p>

        {/* —— Sant Sankruti badge —— */}
        <div className="sant-sankruti-badge">
          <span className="sant-pipe">∥</span>
          <span className="sant-text">संत संस्कृती</span>
          <span className="sant-pipe">∥</span>
        </div>

        {/* —— Abhang line —— */}
        <p className="shrirang-line">
          “ रंगी रंगला श्रीरंग ”
        </p>

        {/* Scroll hint */}
        <div className="scroll-hint" aria-hidden="true">
          <span>खाली पाहा</span>
          <span style={{ fontSize: 20 }}>↓</span>
        </div>
      </div>

      {/* ══════════════════════════════════
          INVITATION BODY
      ══════════════════════════════════ */}
      <section className="invite-section" id="invitation">
        <Divider ornament="🌸" />

        <div className="invite-box">
          <span className="invite-box-icon" aria-hidden="true">🕉️</span>
          <p className="invite-heading">आग्रहाचे निमंत्रण</p>

          <p className="invite-para">
            दरवर्षी प्रमाणे आमच्या घरी<br />
            <strong>सोमवार, दि. १४ सप्टेंबर २०२६</strong> रोजी<br />
            आपल्या लाडक्या <strong>बाप्पाचे आगमन</strong><br />
            <strong>दहा दिवसांकरिता</strong> झाले आहे.
          </p>

          <p className="invite-para">
            तरी आपण सर्वांनी माझ्या विनंतीस मान देऊन<br />
            सहकुटुंब–सहपरिवार लाडक्या बाप्पाच्या<br />
            <strong>दर्शनास येण्याची कृपा करावी.</strong><br />
            तसेच <strong>तीर्थप्रसादाचा लाभ घ्यावा.</strong>
          </p>

          <p className="invite-namra">✿ &nbsp; ही नम्र विनंती..! &nbsp; ✿</p>

          {/* गण गण गणात बोते logo */}
          <img
            src={IMG_GAN_GAN}
            alt="गण गण गणात बोते"
            className="gan-gan-img"
          />
        </div>
      </section>

      {/* ══════════════════════════════════
          WARKARI VEENA SINGER — circular rotating
      ══════════════════════════════════ */}
      <div className="veena-section">
        <div className="veena-circle-wrap">
          {/* Spinning dashed ring */}
          <div className="veena-spin-ring" />
          {/* Static gold ring */}
          <div className="veena-gold-ring" />
          <img
            src={IMG_VEENA_SINGER}
            alt="वारकरी — वीणा भजन"
            className="veena-img"
          />
        </div>
        <p className="veena-caption">🎵 &nbsp; भजन — कीर्तन — अभंग &nbsp; 🎵</p>
      </div>

      {/* ══════════════════════════════════
          BHOJAN SAMARAMBH
      ══════════════════════════════════ */}
      <div className="bhojan-section-outer" id="bhojan">
        <div className="bhojan-inner">
          <p className="bhojan-sec-label">विशेष</p>
          <h2 className="bhojan-sec-title">🍽️ भोजन समारंभ 🍽️</h2>

          <div className="bhojan-card">
            <p className="bhojan-anna-quote">“ अन्न हे पूर्णब्रह्म ”</p>
            <p className="bhojan-date-text">गुरुवार, दि. २४ सप्टेंबर २०२६</p>
            <p className="bhojan-time-text">सायं. ०७ ते १०</p>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          निमंत्रक — HOST SECTION
      ══════════════════════════════════ */}
      <section className="nimantrak-section" id="nimantrak">
        <Divider ornament="✦" />
        <div className="nimantrak-card">
          <img
            src={IMG_GRANDPA_CHILD}
            alt="वारकरी परिवार"
            className="nimantrak-family-img"
          />
          <p className="nimantrak-label">निमंत्रक</p>
          <p className="nimantrak-name">श्री. महादेवराव आ. गावस्कर</p>
          <p className="nimantrak-aani">आणि</p>
          <p className="nimantrak-family">समस्त गावस्कर परिवार</p>
        </div>
      </section>

      {/* ══════════════════════════════════
          स्थळ — VENUE SECTION
      ══════════════════════════════════ */}
      <div className="sthal-section" id="sthal">
        <div className="sthal-inner">

          {/* Image — left side */}
          <div className="aamche-ghar-side">
            <img
              src={IMG_AAMCHE_GHAR}
              alt="आमचे घर येथे — विठ्ठल आणि गणपती"
              className="aamche-ghar-img"
            />
          </div>

          {/* Text — right side */}
          <div className="sthal-text-col">
            <p className="sthal-label">स्थळ</p>
            <h2 className="sthal-name">माता मंदिर वॉर्ड</h2>
            <p className="sthal-city">हिंगणघाट,<br />वर्धा जिल्हा, महाराष्ट्र</p>
            <a
              href="https://maps.app.goo.gl/rqGV8Hkrgh3k1kvv6"
              target="_blank"
              rel="noopener noreferrer"
              className="location-pin-btn"
              aria-label="Google Maps वर स्थळ पाहा"
            >
              <span className="location-pin-icon">📍</span>
              नकाशावर पाहा
            </a>
          </div>

        </div>
      </div>

      {/* ══════════════════════════════════
          CONTACT
      ══════════════════════════════════ */}
      <div className="contact-section-outer" id="contact">
        <div className="contact-inner">
          <p className="contact-title">संपर्क</p>
          <div className="contact-row">
            <a href="tel:+919923104703" className="contact-pill">
              <span className="contact-pill-icon">📞</span>
              ९९२३१०४७०३
            </a>
            <a href="tel:+918600333163" className="contact-pill">
              <span className="contact-pill-icon">📞</span>
              ८६००३३३१६३
            </a>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          WARI ROUTE
      ══════════════════════════════════ */}
      <div className="wari-section" id="wari">
        <div className="wari-inner">
          <p className="wari-heading-label">🚶 वारी मार्ग 🚶</p>
          <h2 className="wari-heading">हिंगणघाट ते पंढरपूर</h2>

          {/* Warkari man with flag image */}
          <div className="wari-man-wrap">
            <img
              src={IMG_WARKARI_MAN}
              alt="पंढरीचे वारकरी — भगवा पताका"
              className="wari-man-img"
            />
          </div>

          <div className="wari-route-flow">
            {WARI_ROUTE.map((stop, i) => (
              <div key={stop.name} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div className="wari-stop-card">
                  <span className="wari-stop-icon">{stop.icon}</span>
                  <span className="wari-stop-name">{stop.name}</span>
                  {stop.tag && <span className="wari-stop-tag">{stop.tag}</span>}
                </div>
                {i < WARI_ROUTE.length - 1 && (
                  <span className="wari-arrow">→</span>
                )}
              </div>
            ))}
          </div>

          <p className="wari-final-chant">
            🏁 &nbsp; माझे माहेर पंढरी &nbsp; 🏁
          </p>

          {/* ★ श्री संत नामदेव महाद्वार — Real Pandharpur Temple Photo */}
          <div className="namdev-temple-wrap">
            <p className="namdev-temple-label">🛕 श्री संत नामदेव महाद्वार, पंढरपूर 🛕</p>
            <img
              src={IMG_NAMDEV_TEMPLE}
              alt="श्री संत नामदेव महाद्वार — पंढरपूर"
              className="namdev-temple-img"
            />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          WARKARI DINDI + FOOTER
      ══════════════════════════════════ */}
      <div className="dindi-footer">
        <WarkariDindi />
      </div>

      <div className="footer-chant">
        🙏 &nbsp; राम कृष्ण हरि &nbsp; ✦ &nbsp; पांडुरंग हरि &nbsp; ✦ &nbsp; गणपती बाप्पा मोरया &nbsp; 🙏
      </div>

    </div>
  );
}
