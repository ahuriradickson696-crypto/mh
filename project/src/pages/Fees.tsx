import { ArrowRight, Clock, Mail, Phone } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { useRouter } from '@/router/Router';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';
import { pageImages } from '@/data/pageImages';
import { useApply } from '@/components/ApplyContext';

export function Fees() {
  const { navigate } = useRouter();
  const { openApply } = useApply();

  return (
    <div className="page-content">
      <PageHero
        images={pageImages.fees}
        eyebrow="Tuition & costs"
        title={<>Fees &amp; <em>Payment</em></>}
        subtitle="Tuition information for Avance International University programmes is being finalised. Full fee structures will be published shortly."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Coming soon
            </div>
            <h2>
              Detailed fee structure <em>coming soon.</em>
            </h2>
          </div>
        </div>

        <div className="coming-soon-card" style={{
          maxWidth: 640,
          margin: '0 auto',
          textAlign: 'center',
          padding: '48px 32px',
          background: 'var(--purple-50)',
          borderRadius: 16,
          border: '1px solid var(--border)',
        }}>
          <Clock size={48} style={{ color: 'var(--purple-600)', marginBottom: 20 }} />
          <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: 28, marginBottom: 12, color: 'var(--purple-900)' }}>
            Tuition fees coming soon
          </h3>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--ink-soft)', marginBottom: 24 }}>
            We are updating our fee schedules for the upcoming intakes. In the meantime, please contact the Admissions or Bursar’s office for guidance on programme costs, payment plans, and available bursaries.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
            <a
              href="tel:+256700670691"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Phone size={16} /> +256 700 670 691
            </a>
            <a
              href="mailto:info@aviu.ac.ug"
              className="btn btn-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}
            >
              <Mail size={16} /> info@aviu.ac.ug
            </a>
          </div>
          <p style={{ marginTop: 28, fontSize: 14, color: 'var(--ink-soft)' }}>
            Merit scholarships and flexible payment plans will continue to be available once fees are published.
          </p>
        </div>
      </section>

      <section className="section-pad section-alt">
        <div className="cta-band">
          <div>
            <h2>Ready to apply?</h2>
            <p>Start your application now. Fee details will be shared during the admissions process.</p>
          </div>
          <div className="cta-actions">
            <button type="button" className="btn btn-primary" onClick={() => openApply()}>
              Apply to AVIU <ArrowRight size={16} />
            </button>
            <button type="button" className="btn btn-outline" onClick={() => navigate('/admissions')}>
              Admissions overview
            </button>
          </div>
        </div>
      </section>

      <BackgroundCarousel images={pageImages.fees} />
    </div>
  );
}
