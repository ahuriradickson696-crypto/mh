import { useEffect, useState } from 'react';
import { ArrowRight, Play, Globe2, Check, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { faculties, homeStats, testimonials, universityInfo, newsItems, events, partners } from '@/data/university';
import { useRouter } from '@/router/Router';
import { useApply } from '@/components/ApplyContext';
import { pageImages } from '@/data/pageImages';
import { homeSlideVideos, youtubeBgSrc, AVIU_VIDEOS } from '@/data/pageVideos';

/** Official campus / leadership videos — muted autoplay, playsinline */
const CAMPUS_VIDEOS = [
  {
    id: 'XPQdBYI9vcU',
    title: 'Bishop Ssebagala Installation',
    blurb: 'Installation ceremony — leadership and faith at AVIU',
  },
  {
    id: 'qqWsn74VlT0',
    title: 'VC on the uniqueness of Avance',
    blurb: 'Dr. Kato Kinata Joshua on what sets AVIU apart',
  },
  {
    id: 'cQWuuKjoh44',
    title: 'Campus facilities & discussion',
    blurb: 'Full campus facilities walkthrough and dialogue',
  },
  {
    id: 'aTqd3eX377U',
    title: 'Faculty & programme highlights',
    blurb: 'Faculty and physiology programme highlights',
  },
  {
    id: 'gOdpEUC96vY',
    title: 'University media update',
    blurb: 'Latest official university media update',
  },
];

const AD_SLIDES = [
  {
    video: homeSlideVideos[0],
    image: '/images/graduation-ceremony.jpg',
    eyebrow: 'Leadership · Ceremony',
    title: 'Bishop Ssebagala Installation',
    text: 'Watch the installation ceremony — faith, leadership and community at AVIU.',
  },
  {
    video: homeSlideVideos[1],
    image: '/images/campus-aviu-students-1.jpg',
    eyebrow: 'From the Vice Chancellor',
    title: 'What makes Avance unique',
    text: 'Dr. Kato Kinata Joshua on the distinctives of Avance International University.',
  },
  {
    video: homeSlideVideos[2],
    image: '/images/campus-building.jpg',
    eyebrow: 'Campus life',
    title: 'Facilities & discussion',
    text: 'Full campus facilities walkthrough and academic dialogue.',
  },
  {
    video: homeSlideVideos[3],
    image: '/images/classroom-students.jpg',
    eyebrow: 'Academics',
    title: 'Faculty & programme highlights',
    text: 'Faculty and programme showcases — including health sciences pathways.',
  },
  {
    video: homeSlideVideos[4],
    image: '/images/university-gate.jpg',
    eyebrow: 'AVIU media',
    title: 'University update',
    text: 'Latest official media from Avance International University.',
  },
];

function ytEmbed(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1&modestbranding=1&rel=0&playsinline=1`;
}

export function Home() {
  const { navigate } = useRouter();
  const { openApply } = useApply();
  const [adIndex, setAdIndex] = useState(0);

  useEffect(() => {
    const t = window.setInterval(() => {
      setAdIndex((i) => (i + 1) % AD_SLIDES.length);
    }, 7000);
    return () => window.clearInterval(t);
  }, []);

  const ad = AD_SLIDES[adIndex];

  return (
    <div className="page-content home-premium">
      {/* ========== SPLIT HERO ========== */}
      <section className="split-hero" aria-label="Avance International University">
        {/* LEFT — institutional content */}
        <div className="split-hero-main">
          <div className="split-hero-main-video" aria-hidden="true">
            <iframe
              src={youtubeBgSrc(AVIU_VIDEOS.facilities)}
              title="Campus background"
              allow="autoplay; encrypted-media"
            />
          </div>
          <div className="split-hero-main-inner">
            <p className="split-eyebrow">
              <span className="split-eyebrow-line" />
              Avance International University · Nabweru, Uganda
            </p>
            <h1 className="split-title">
              Enhancing <em>innovations.</em>
              <br />
              Building futures.
            </h1>
            <p className="split-lead">
              A modern private university with <strong>25 NCHE-accredited</strong> bachelor programmes
              across Education, Business, Computing, and Health Sciences. English-medium teaching,
              international students welcome, graduation every <strong>25 September</strong>.
            </p>

            <div className="split-actions">
              <button type="button" className="btn-premium" onClick={openApply}>
                Apply now <ArrowRight size={18} />
              </button>
              <button
                type="button"
                className="btn-premium-ghost"
                onClick={() => navigate('/study/course-finder')}
              >
                Browse programmes
              </button>
              <button
                type="button"
                className="btn-premium-ghost"
                onClick={() => navigate('/admissions/international')}
              >
                <Globe2 size={16} /> International
              </button>
            </div>

            <div className="split-stats">
              {homeStats.map((s) => (
                <div key={s.label} className="split-stat">
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>

            <div className="split-social">
              <span className="split-social-label">Follow AVIU</span>
              <a
                href="https://x.com/AvanceIU_uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="split-social-link"
              >
                X · @AvanceIU_uganda
              </a>
              <a
                href="https://www.tiktok.com/@avance_iu_uganda"
                target="_blank"
                rel="noopener noreferrer"
                className="split-social-link"
              >
                TikTok · @avance_iu_uganda
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT — full-bleed rotating ad panel */}
        <aside className="split-hero-ads" aria-label="University highlights">
          {AD_SLIDES.map((slide, i) => (
            <div
              key={slide.title}
              className={`split-ad-slide ${i === adIndex ? 'is-active' : ''}`}
            >
              {i === adIndex ? (
                <iframe
                  className="split-ad-video"
                  src={youtubeBgSrc(slide.video)}
                  title={slide.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              ) : (
                <div className="split-ad-fallback" style={{ backgroundImage: `url(${slide.image})` }} />
              )}
            </div>
          ))}
          <div className="split-ad-overlay" />
          <div className="split-ad-content">
            <p className="split-ad-eyebrow">{ad.eyebrow}</p>
            <h2 className="split-ad-title">{ad.title}</h2>
            <p className="split-ad-text">{ad.text}</p>
            <div className="split-ad-dots" role="tablist">
              {AD_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === adIndex}
                  className={i === adIndex ? 'is-active' : ''}
                  onClick={() => setAdIndex(i)}
                  aria-label={`Ad ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" className="btn-ad-cta" onClick={openApply}>
              Start application <ArrowRight size={16} />
            </button>
          </div>
        </aside>
      </section>

      {/* ========== PROGRAMME HIGHLIGHTS ========== */}
      <section className="section-pad home-faculties">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Academic excellence
            </div>
            <h2>
              Faculties built for <em>impact.</em>
            </h2>
            <p className="section-lead">
              Explore NCHE-accredited pathways designed for local and international careers.
            </p>
          </div>
          <button type="button" className="button button-outline" onClick={() => navigate('/study')}>
            All programmes <ArrowRight size={16} />
          </button>
        </div>
        <div className="faculty-grid premium-faculty-grid">
          {faculties.map((f, index) => (
            <article
              key={f.id}
              className="faculty-card glass-card"
              onClick={() => navigate('/study/course-finder')}
            >
              <span className="school-index">0{index + 1}</span>
              <f.icon size={28} strokeWidth={1.5} />
              <strong>{f.name}</strong>
              <p>{f.description}</p>
              <span className="faculty-level">{f.level}</span>
            </article>
          ))}
        </div>
      </section>

      {/* ========== WHY AVIU ========== */}
      <section className="section-pad alt-bg">
        <div className="two-col premium-two-col">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Why Avance
            </div>
            <h2>
              Clear standards. <em>Real opportunity.</em>
            </h2>
            <ul className="check-list">
              <li>
                <Check size={16} /> 25 NCHE-accredited bachelor programmes
              </li>
              <li>
                <Check size={16} /> English as the medium of instruction
              </li>
              <li>
                <Check size={16} /> Intakes: January, May, August, September
              </li>
              <li>
                <Check size={16} /> Graduation every 25 September
              </li>
              <li>
                <Check size={16} /> International admissions support
              </li>
              <li>
                <Check size={16} /> Campus in Nabweru, Wakiso District
              </li>
            </ul>
            <button type="button" className="button" onClick={() => navigate('/admissions')} style={{ marginTop: 20 }}>
              Admissions overview <ArrowRight size={16} />
            </button>
          </div>
          <div className="premium-image-stack">
            <img src="/images/campus-building.jpg" alt="AVIU campus" />
            <img src="/images/classroom-discussion.jpg" alt="Students in class" />
          </div>
        </div>
      </section>

      {/* ========== NEWS & EVENTS ========== */}
      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Campus pulse
            </div>
            <h2>
              News &amp; <em>events.</em>
            </h2>
          </div>
        </div>
        <div className="home-news-grid">
          {newsItems.slice(0, 3).map((n) => (
            <article key={n.id} className="glass-card news-card-home" onClick={() => navigate('/news')}>
              <time>{n.date}</time>
              <h3>{n.title}</h3>
              <p>{n.summary}</p>
            </article>
          ))}
          {events.slice(0, 2).map((e) => (
            <article key={e.id} className="glass-card news-card-home" onClick={() => navigate('/events')}>
              <time>
                <Calendar size={14} /> {e.date}
              </time>
              <h3>{e.title}</h3>
              <p>
                <MapPin size={14} /> {e.location || 'AVIU Campus'}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ========== PARTNERS ========== */}
      <section className="section-pad alt-bg">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Partnerships
            </div>
            <h2>
              Trusted <em>connections.</em>
            </h2>
          </div>
        </div>
        <div className="partners-grid">
          {partners.map((partner) => (
            <div className="partner-card partner-card-media" key={partner.name}>
              <div className="partner-img-wrap">
                <img src={partner.image} alt={partner.name} loading="lazy" />
              </div>
              <strong>{partner.name}</strong>
              <span>{partner.type}</span>
              <p className="partner-desc">{partner.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== TESTIMONIALS ========== */}
      {testimonials?.length > 0 && (
        <section className="section-pad">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                <span className="eyebrow-line" /> Voices
              </div>
              <h2>
                From our <em>community.</em>
              </h2>
            </div>
          </div>
          <div className="testimonial-grid">
            {testimonials.slice(0, 3).map((t) => (
              <blockquote key={t.name} className="glass-card testimonial-card">
                <p>“{t.quote}”</p>
                <footer>
                  <strong>{t.name}</strong>
                  <span>{t.program}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      {/* ========== BOTTOM AUTO-PLAY VIDEO FEED ========== */}
      <section className="home-video-feed" aria-label="University videos">
        <div className="home-video-feed-head">
          <div>
            <div className="eyebrow eyebrow-light">
              <span className="eyebrow-line" /> Watch AVIU
            </div>
            <h2>Campus, leadership &amp; programmes</h2>
            <p>Muted autoplay · Unmute on YouTube or in the floating player · Works on mobile</p>
          </div>
          <div className="home-video-social">
            <a href="https://x.com/AvanceIU_uganda" target="_blank" rel="noopener noreferrer">
              @AvanceIU_uganda <ExternalLink size={14} />
            </a>
            <a href="https://www.tiktok.com/@avance_iu_uganda" target="_blank" rel="noopener noreferrer">
              @avance_iu_uganda <ExternalLink size={14} />
            </a>
          </div>
        </div>
        <div className="home-video-track">
          {CAMPUS_VIDEOS.map((v) => (
            <div key={v.id} className="home-video-card">
              <div className="home-video-frame">
                <iframe
                  src={ytEmbed(v.id)}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="home-video-meta">
                <Play size={14} />
                <div>
                  <strong>{v.title}</strong>
                  <span>{v.blurb}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="cta-section premium-cta">
        <div className="premium-cta-bg premium-cta-video">
          <iframe
            src={youtubeBgSrc(AVIU_VIDEOS.mediaUpdate)}
            title="CTA background"
            allow="autoplay; encrypted-media"
          />
        </div>
        <div className="premium-cta-overlay" />
        <div className="premium-cta-inner">
          <div className="eyebrow eyebrow-light">
            <span className="eyebrow-line" /> Your next chapter
          </div>
          <h2>Make your move.</h2>
          <p>
            Join {universityInfo.name}. Our admissions team is ready to guide you — locally and
            internationally.
          </p>
          <div className="split-actions" style={{ justifyContent: 'center' }}>
            <button type="button" className="btn-premium light" onClick={openApply}>
              Start your application <ArrowRight size={17} />
            </button>
            <button type="button" className="btn-premium-ghost light" onClick={() => navigate('/contact')}>
              Contact us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
