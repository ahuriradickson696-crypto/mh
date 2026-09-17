import { useState, useMemo, useEffect, useRef } from 'react';
import { X, Volume2, VolumeX } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';
import {
  galleryFeed,
  galleryCategories,
  type GalleryItem,
} from '@/data/galleryMedia';
import { TikTokEmbed } from '@/components/TikTokEmbed';

const YOUTUBE_IDS = ['7bcnZQhDfzM', 'AS6sHqFZek4', '-Z3M-jtCSDU'];

export function Gallery() {
  const [filter, setFilter] = useState<string>('all');
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [ytIndex, setYtIndex] = useState(0);
  const [muted, setMuted] = useState(true);
  const timerRef = useRef<number | null>(null);

  const items = useMemo(() => {
    if (filter === 'all') return galleryFeed;
    return galleryFeed.filter((i) => i.category === filter);
  }, [filter]);

  const photos = items.filter((i): i is Extract<GalleryItem, { type: 'photo' }> => i.type === 'photo');
  const videos = items.filter((i): i is Extract<GalleryItem, { type: 'tiktok' }> => i.type === 'tiktok');

  // Auto-advance YouTube every 45s
  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setYtIndex((i) => (i + 1) % YOUTUBE_IDS.length);
    }, 45000);
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  useEffect(() => {
    document.title = 'Gallery | Avance International University';
  }, []);

  const ytId = YOUTUBE_IDS[ytIndex];
  const mute = muted ? 1 : 0;

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.gallery?.slice?.(0, 6) || pageImages.home}
        eyebrow="Media gallery"
        title={
          <>
            Campus <em>media</em>
          </>
        }
        subtitle="YouTube campus videos first, then photos, then TikTok."
      />

      <section className="section-pad">
        {/* YOUTUBE FIRST */}
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> YouTube
            </div>
            <h2>
              Campus <em>videos.</em>
            </h2>
          </div>
        </div>

        <div className="gallery-youtube-player">
          <iframe
            key={`${ytId}-${mute}`}
            src={`https://www.youtube.com/embed/${ytId}?autoplay=1&mute=${mute}&playsinline=1&rel=0&modestbranding=1&controls=1`}
            title="AVIU campus video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
          />
          <div className="gallery-youtube-controls">
            <button type="button" onClick={() => setMuted((m) => !m)} aria-label={muted ? 'Unmute' : 'Mute'}>
              {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              <span>{muted ? 'Unmute' : 'Mute'}</span>
            </button>
            <div className="gallery-youtube-tabs">
              {YOUTUBE_IDS.map((id, i) => (
                <button
                  key={id}
                  type="button"
                  className={i === ytIndex ? 'is-active' : ''}
                  onClick={() => setYtIndex(i)}
                >
                  Video {i + 1}
                </button>
              ))}
            </div>
            <span className="gallery-youtube-hint">Auto-plays next every 45s</span>
          </div>
        </div>

        <div className="gallery-filters" role="tablist" aria-label="Gallery categories" style={{ marginTop: 40 }}>
          {galleryCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={filter === c.id}
              className={`gallery-filter-btn ${filter === c.id ? 'is-active' : ''}`}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </div>

        <p className="results-count" style={{ marginTop: 16 }}>
          {photos.length} photo{photos.length !== 1 ? 's' : ''}
          {videos.length > 0 ? ` · ${videos.length} TikTok${videos.length !== 1 ? 's' : ''}` : ''}
        </p>

        {/* PHOTOS */}
        {photos.length > 0 && (
          <>
            <div className="section-heading" style={{ marginTop: 28 }}>
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-line" /> Photos
                </div>
                <h2>
                  Photo <em>gallery.</em>
                </h2>
              </div>
            </div>
            <div className="gallery-grid">
              {photos.map((p) => (
                <button
                  type="button"
                  key={p.id}
                  className="gallery-item"
                  onClick={() => setLightbox(p.src)}
                  aria-label={`Open ${p.title}`}
                >
                  <img src={p.src} alt={p.alt} loading="lazy" />
                  <span className="gallery-caption">{p.title}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {/* TIKTOK LAST */}
        {videos.length > 0 && (
          <>
            <div className="section-heading" style={{ marginTop: 48 }}>
              <div>
                <div className="eyebrow">
                  <span className="eyebrow-line" /> TikTok
                </div>
                <h2>
                  On <em>TikTok.</em>
                </h2>
              </div>
            </div>
            <div className="tiktok-gallery-grid">
              {videos.map((v) => (
                <div key={v.id} className="tiktok-gallery-card">
                  <TikTokEmbed item={v} />
                </div>
              ))}
            </div>
          </>
        )}
      </section>

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-modal="true">
          <button type="button" className="lightbox-close" aria-label="Close" onClick={() => setLightbox(null)}>
            <X size={24} />
          </button>
          <img src={lightbox} alt="" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
}
