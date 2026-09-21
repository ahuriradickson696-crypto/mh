import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Send } from 'lucide-react';
import { universityInfo } from '@/data/university';
import { useRouter } from '@/router/Router';

type Col = { title: string; links: { label: string; path: string; external?: boolean }[] };

const columns: Col[] = [
  {
    title: 'Study & Admissions',
    links: [
      { label: 'All programmes', path: '/study' },
      { label: 'Undergraduate', path: '/prospective/undergraduates' },
      { label: 'Postgraduate', path: '/prospective/graduates' },
      { label: 'Online learning', path: '/prospective/online-learning' },
      { label: 'Lifelong learning', path: '/prospective/lifelong-learning' },
      { label: 'How to apply', path: '/admissions/how-to-apply' },
      { label: 'Open days', path: '/open-days' },
      { label: 'Fees & funding', path: '/fees-and-funding' },
      { label: 'Term dates', path: '/term-dates' },
    ],
  },
  {
    title: 'Research & Libraries',
    links: [
      { label: 'Research', path: '/research' },
      { label: 'Libraries', path: '/libraries' },
      { label: 'Museums & gallery', path: '/museums' },
      { label: 'Conferences', path: '/research/conferences' },
      { label: 'Journals', path: '/research/journals' },
      { label: 'Strategic plan', path: '/strategic-plan' },
    ],
  },
  {
    title: 'For you',
    links: [
      { label: 'Current students', path: '/current/students' },
      { label: 'Current staff', path: '/current/staff' },
      { label: 'Visitors', path: '/visitors' },
      { label: 'Alumni', path: '/alumni' },
      { label: 'Teachers', path: '/teachers' },
      { label: 'Business partners', path: '/business' },
      { label: 'Media', path: '/media' },
      { label: 'Jobs', path: '/jobs' },
    ],
  },
  {
    title: 'Campus & policies',
    links: [
      { label: 'Campus map', path: '/map' },
      { label: 'Access guide', path: '/access-guide' },
      { label: 'Giving', path: '/giving' },
      { label: 'Contact', path: '/contact' },
      { label: 'Equality policy', path: '/equality-policy' },
      { label: 'Freedom of speech', path: '/freedom-of-speech' },
      { label: 'Modern slavery', path: '/modern-slavery-statement' },
      { label: 'GDPR / data', path: '/gdpr' },
      { label: 'Policy framework', path: '/about/policies' },
      { label: 'Glossary', path: '/glossary' },
    ],
  },
];

export function Footer() {
  const { navigate } = useRouter();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const go = (path: string, external?: boolean) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (external) window.open(path, '_blank', 'noopener,noreferrer');
    else navigate(path);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 28 }}>
        <div style={{ gridColumn: 'span 1' }}>
          <a
            className="brand brand-footer"
            href="/"
            onClick={(e) => {
              e.preventDefault();
              navigate('/');
            }}
          >
            <img src="/images/aviu-logo.png" alt="Avance International University logo" />
            <span>
              <strong>AVANCE</strong>
              <small>INTERNATIONAL UNIVERSITY</small>
            </span>
          </a>
          <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--ink-soft)', marginTop: 12, maxWidth: 260 }}>
            NCHE-accredited private university · Nabweru, Wakiso. Intakes: January, May &amp; August.
          </p>
          <div style={{ marginTop: 12, fontSize: 13, color: 'var(--ink-soft)' }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 6 }}>
              <MapPin size={14} style={{ flexShrink: 0, marginTop: 2 }} />
              <span>{universityInfo.address}</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 6 }}>
              <Phone size={14} />
              <a href={`tel:${universityInfo.phone.replace(/\s/g, '')}`}>{universityInfo.phone}</a>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <Mail size={14} />
              <a href={`mailto:${universityInfo.email}`}>{universityInfo.email}</a>
            </div>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <strong style={{ display: 'block', marginBottom: 12, fontSize: 13, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {col.title}
            </strong>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {col.links.map((l) => (
                <li key={l.path + l.label} style={{ marginBottom: 6 }}>
                  <a href={l.path} onClick={go(l.path, l.external)} style={{ fontSize: 13, cursor: 'pointer' }}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-newsletter" style={{ marginTop: 32, paddingTop: 24, borderTop: '1px solid var(--border)' }}>
        <form onSubmit={handleSubscribe} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 14, fontWeight: 600 }}>Stay informed</span>
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ flex: '1 1 200px', maxWidth: 280, padding: '10px 12px', borderRadius: 8, border: '1px solid var(--border)' }}
          />
          <button type="submit" className="btn btn-primary" style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}>
            <Send size={14} /> Subscribe
          </button>
          {subscribed && <span style={{ fontSize: 13, color: 'var(--purple-600)' }}>Thank you for subscribing!</span>}
        </form>
      </div>

      <div className="footer-bottom" style={{ flexWrap: 'wrap', gap: 12 }}>
        <span>© 2026 {universityInfo.name} (AVIU)</span>
        <span>NCHE accredited · unche.or.ug</span>
        <a href="/legal/privacy" onClick={go('/legal/privacy')} style={{ cursor: 'pointer' }}>Privacy</a>
        <a href="/legal/cookies" onClick={go('/legal/cookies')} style={{ cursor: 'pointer' }}>Cookies</a>
        <a href="/legal/accessibility" onClick={go('/legal/accessibility')} style={{ cursor: 'pointer' }}>Accessibility</a>
        <a href="/terms" onClick={go('/terms')} style={{ cursor: 'pointer' }}>Terms</a>
        <a href="https://elearning.aviu.ac.ug/" target="_blank" rel="noopener noreferrer">Student portal</a>
      </div>
    </footer>
  );
}
