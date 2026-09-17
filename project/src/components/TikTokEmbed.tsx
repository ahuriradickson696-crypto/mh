import { useEffect, type ReactNode } from 'react';
import type { GalleryTikTok } from '@/data/galleryMedia';

let scriptLoading = false;

function ensureTikTokScript() {
  if (typeof window === 'undefined') return;
  const w = window as unknown as { tiktokEmbedLoaded?: boolean };
  if (document.querySelector('script[data-aviu-tiktok]')) {
    // Re-scan embeds when script already present
    const tt = (window as unknown as { tiktok?: { embed?: { lib?: { render?: () => void } } } }).tiktok;
    tt?.embed?.lib?.render?.();
    return;
  }
  if (scriptLoading) return;
  scriptLoading = true;
  const s = document.createElement('script');
  s.src = 'https://www.tiktok.com/embed.js';
  s.async = true;
  s.setAttribute('data-aviu-tiktok', '1');
  s.onload = () => {
    w.tiktokEmbedLoaded = true;
  };
  document.body.appendChild(s);
}

export function TikTokEmbed({ item, compact }: { item: GalleryTikTok; compact?: boolean }) {
  useEffect(() => {
    ensureTikTokScript();
    const t = window.setTimeout(() => ensureTikTokScript(), 400);
    return () => window.clearTimeout(t);
  }, [item.videoId]);

  return (
    <div className={`tiktok-embed-wrap ${compact ? 'tiktok-compact' : ''}`}>
      <blockquote
        className="tiktok-embed"
        cite={item.cite}
        data-video-id={item.videoId}
        style={{ maxWidth: 605, minWidth: 280, margin: '0 auto' }}
      >
        <section>
          <a
            target="_blank"
            rel="noopener noreferrer"
            title={item.author}
            href={`https://www.tiktok.com/${item.author.replace('@', '@')}?refer=embed`}
          >
            {item.author}
          </a>
          {item.caption && <p>{item.caption}</p>}
          <a target="_blank" rel="noopener noreferrer" href={item.cite}>
            Watch on TikTok
          </a>
        </section>
      </blockquote>
      {!compact && (
        <div className="tiktok-meta">
          <strong>{item.title}</strong>
          <span>{item.author}</span>
        </div>
      )}
    </div>
  );
}

/** Horizontal / grid strip of TikToks for Home, Admissions, Events, etc. */
export function TikTokStrip({
  items,
  title,
  subtitle,
}: {
  items: GalleryTikTok[];
  title?: ReactNode;
  subtitle?: string;
}) {
  if (!items.length) return null;
  return (
    <section className="section-pad tiktok-strip-section">
      {(title || subtitle) && (
        <div className="section-heading">
          <div>
            {title && (
              <>
                <div className="eyebrow">
                  <span className="eyebrow-line" /> On TikTok
                </div>
                <h2>{title}</h2>
              </>
            )}
            {subtitle && <p style={{ color: 'var(--ink-soft)', marginTop: 8 }}>{subtitle}</p>}
          </div>
        </div>
      )}
      <div className="tiktok-strip-grid">
        {items.map((item) => (
          <TikTokEmbed key={item.id} item={item} compact />
        ))}
      </div>
    </section>
  );
}
