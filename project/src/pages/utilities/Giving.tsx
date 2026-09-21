import { Heart, GraduationCap, Building2, Users, FlaskConical, BookOpen } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';

export function Giving() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="Support AVIU"
        title={<>Give to <em>AVIU</em></>}
        subtitle="Invest in students, laboratories, library resources and community programmes."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Giving', path: '/giving' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: 14 }}>
              Every gift — whether a one-time scholarship contribution or a multi-year partnership — helps AVIU deliver on its mission of transformative, innovative higher education.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
              Donors receive stewardship updates through Alumni &amp; Development. Formal receipts and recognition follow university financial procedures.
            </p>
          </div>
          <img src="/images/award-ceremony.jpg" alt="Award and recognition ceremony" style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 12 }} />
        </div>
        <div className="grid-3" style={{ gap: 16, marginBottom: 32 }}>
          {[
            { icon: GraduationCap, title: 'Scholarships & bursaries', text: 'Support academically strong students who need financial assistance to complete Bachelor programmes.' },
            { icon: Building2, title: 'Learning spaces', text: 'Contribute to classrooms, simulation labs and campus improvements at Nabweru.' },
            { icon: BookOpen, title: 'Library & digital resources', text: 'Expand print and e-collections so students can research effectively.' },
            { icon: FlaskConical, title: 'Research & innovation', text: 'Seed funding for student projects, conference participation and the Innovation Hub.' },
            { icon: Users, title: 'Community engagement', text: 'Underwrite outreach days, school partnerships and public health education drives.' },
            { icon: Heart, title: 'Unrestricted support', text: 'Allow leadership to allocate funds where need is greatest within policy.' },
          ].map((x) => (
            <div className="info-card" key={x.title} style={{ padding: 20 }}>
              <x.icon size={22} style={{ color: 'var(--purple-600)', marginBottom: 8 }} />
              <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
              <p style={{ margin: 0, fontSize: 13, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{x.text}</p>
            </div>
          ))}
        </div>
        <img src="/images/graduand-portrait.jpg" alt="Graduand" style={{ width: '100%', maxHeight: 260, objectFit: 'cover', borderRadius: 12, marginBottom: 24 }} />
        <div className="info-card" style={{ padding: 24, marginBottom: 20 }}>
          <h3 style={{ margin: '0 0 8px', fontSize: 18 }}>Talk to us</h3>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)' }}>
            Email info@aviu.ac.ug with subject line “Giving / Partnership”. Include your name or organisation, interest area and preferred contact method. The University Secretary or Alumni office will respond.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/about/alumni')}>Alumni &amp; donors</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/contact')}>Contact</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/strategic-plan')}>Strategic plan</button>
        </div>
      </section>
      <BackgroundCarousel images={pageImages.about} />
    </div>
  );
}
