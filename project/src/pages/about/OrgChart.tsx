import { ArrowRight } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';

export function OrgChart() {
  const { navigate } = useRouter();

  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="About"
        title={<>University <em>Organisation</em></>}
        subtitle="Explore the governance and academic hierarchy of Avance International University (AIU / AVIU). From the General Meeting through the Board, Council, Senate and academic boards."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Organisation', path: '/about/organisation' }]}
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Leadership hierarchy</div>
            <h2>Our <em>governance structure.</em></h2>
          </div>
        </div>

        <p style={{ maxWidth: 720, marginBottom: 32, fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
          Avance International University is governed by a clear hierarchy that balances corporate oversight with academic excellence. The General Meeting of the founding company appoints the Board of Directors, which works alongside the University Council and Senate to ensure quality teaching, research and student experience.
        </p>

        <div style={{
          width: '100%',
          maxWidth: 900,
          margin: '0 auto 40px',
          borderRadius: 12,
          overflow: 'hidden',
          border: '1px solid var(--border)',
          boxShadow: '0 8px 32px rgba(0,0,0,.08)',
          background: '#fff',
        }}>
          <img
            src="/images/governance-structure.jpg"
            alt="Avance International University Governance Structure — General Meeting, Board of Directors, Chancellor, University Council, Senate, College and School Boards"
            style={{ width: '100%', height: 'auto', display: 'block' }}
          />
        </div>

        <div className="grid-2" style={{ gap: 24, marginTop: 24 }}>
          <div className="info-card">
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, marginBottom: 8 }}>Corporate &amp; Council</h3>
            <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
              <li>General Meeting of the founding company</li>
              <li>Board of Directors &amp; its Committees</li>
              <li>Chancellor (ceremonial head)</li>
              <li>University Council &amp; Committees of Council</li>
            </ul>
          </div>
          <div className="info-card">
            <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 20, marginBottom: 8 }}>Academic structure</h3>
            <ul style={{ paddingLeft: 18, fontSize: 14, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
              <li>University Senate &amp; Committees of Senate</li>
              <li>College Board of Studies</li>
              <li>School Board</li>
              <li>Departmental Board</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad section-alt">
        <div className="cta-band">
          <div>
            <h2>Meet our leadership</h2>
            <p>Learn more about the people guiding Avance International University.</p>
          </div>
          <div className="cta-actions">
            <button type="button" className="btn btn-primary" onClick={() => navigate('/about/leadership')}>
              Leadership profiles <ArrowRight size={16} />
            </button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/staff')}>
              Staff directory
            </button>
          </div>
        </div>
      </section>

      <BackgroundCarousel images={pageImages.about} />
    </div>
  );
}
