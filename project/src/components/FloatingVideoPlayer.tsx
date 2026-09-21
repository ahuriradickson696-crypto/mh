import { useState, useEffect, useRef } from 'react';
import { X, Minimize2, Maximize2, ChevronLeft, ChevronRight, Volume2, VolumeX } from 'lucide-react';

const VIDEO_IDS = [
  'XPQdBYI9vcU',
  'qqWsn74VlT0',
  'cQWuuKjoh44',
  'aTqd3eX377U',
  'gOdpEUC96vY',
  '7bcnZQhDfzM',
  '-Z3M-jtCSDU',
  'AS6sHqFZek4',
];

export function FloatingVideoPlayer() {
  const [current, setCurrent] = useState(0);
  const [minimized, setMinimized] = useState(false);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(true);
  const [position, setPosition] = useState({ x: 20, y: 20 });
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const boxRef = useRef<HTMLDivElement>(null);

  // Cycle videos every 90 seconds when not minimized
  useEffect(() => {
    if (minimized || !visible) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % VIDEO_IDS.length);
    }, 90000);
    return () => clearInterval(timer);
  }, [minimized, visible]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('button, iframe, a')) return;
    setDragging(true);
    const rect = boxRef.current?.getBoundingClientRect();
    if (rect) {
      dragOffset.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    }
  };

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!dragging) return;
      const maxX = window.innerWidth - (minimized ? 120 : 320);
      const maxY = window.innerHeight - (minimized ? 40 : 220);
      setPosition({
        x: Math.max(0, Math.min(maxX, e.clientX - dragOffset.current.x)),
        y: Math.max(0, Math.min(maxY, e.clientY - dragOffset.current.y)),
      });
    };
    const handleUp = () => setDragging(false);
    if (dragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [dragging, minimized]);

  // Touch support for mobile
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const handleTouchStart = (e: TouchEvent) => {
      if ((e.target as HTMLElement).closest('button, iframe, a')) return;
      setDragging(true);
      const touch = e.touches[0];
      const rect = el.getBoundingClientRect();
      dragOffset.current = { x: touch.clientX - rect.left, y: touch.clientY - rect.top };
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      const maxX = window.innerWidth - (minimized ? 120 : 320);
      const maxY = window.innerHeight - (minimized ? 40 : 220);
      setPosition({
        x: Math.max(0, Math.min(maxX, touch.clientX - dragOffset.current.x)),
        y: Math.max(0, Math.min(maxY, touch.clientY - dragOffset.current.y)),
      });
    };
    const handleTouchEnd = () => setDragging(false);
    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd);
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [dragging, minimized]);

  if (!visible) return null;

  const videoId = VIDEO_IDS[current];
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${muted ? 1 : 0}&rel=0&modestbranding=1&playsinline=1&loop=1&playlist=${videoId}`;

  return (
    <div
      ref={boxRef}
      className="floating-video-box"
      style={{
        left: position.x,
        top: position.y,
        width: minimized ? 140 : 300,
        height: minimized ? 36 : 200,
        cursor: dragging ? 'grabbing' : 'grab',
        zIndex: 9999,
      }}
      onMouseDown={handleMouseDown}
    >
      <div className="floating-video-header">
        <span className="floating-video-title">
          {minimized ? 'AVIU Videos' : `Campus Video ${current + 1}/${VIDEO_IDS.length}`}
        </span>
        <div className="floating-video-controls">
          {!minimized && (
            <>
              <button
                type="button"
                onClick={() => setCurrent((c) => (c - 1 + VIDEO_IDS.length) % VIDEO_IDS.length)}
                aria-label="Previous video"
                title="Previous"
              >
                <ChevronLeft size={14} />
              </button>
              <button
                type="button"
                onClick={() => setCurrent((c) => (c + 1) % VIDEO_IDS.length)}
                aria-label="Next video"
                title="Next"
              >
                <ChevronRight size={14} />
              </button>
              <button
                type="button"
                onClick={() => setMuted((m) => !m)}
                aria-label={muted ? 'Unmute' : 'Mute'}
                title={muted ? 'Unmute' : 'Mute'}
              >
                {muted ? <VolumeX size={14} /> : <Volume2 size={14} />}
              </button>
            </>
          )}
          <button
            type="button"
            onClick={() => setMinimized((m) => !m)}
            aria-label={minimized ? 'Expand' : 'Minimize'}
            title={minimized ? 'Expand' : 'Minimize'}
          >
            {minimized ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
          </button>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Close"
            title="Close"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      {!minimized && (
        <div className="floating-video-iframe-wrap">
          <iframe
            key={videoId + (muted ? '-m' : '-u')}
            src={embedUrl}
            title={`AVIU Campus Video ${current + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
