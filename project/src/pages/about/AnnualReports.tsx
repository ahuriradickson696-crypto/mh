import { FileText, Download } from 'lucide-react';
import { SubPageHero } from '@/components/SubPageHero';
import { pageImages } from '@/data/pageImages';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';

const reports = [
  { year: '2025', title: 'AVIU Annual Report 2025', note: 'Highlights of academic year, enrolment, research and community engagement.' },
  { year: '2024', title: 'AVIU Annual Report 2024', note: 'Progress on quality assurance, programmes and campus development.' },
];

export function AnnualReports() {
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.about}
        eyebrow="About"
        title={<>Annual <em>Reports</em></>}
        subtitle="Published reports on the performance and direction of Avance International University."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }, { label: 'Annual Reports', path: '/about/annual-reports' }]}
      />
      <section className="section-pad">
        <p style={{ maxWidth: 680, marginBottom: 28, fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
          Annual reports summarise academic performance, student numbers, research activity, financial stewardship and strategic priorities. Printed and digital copies are available from the University Secretary’s office.
        </p>
        <div className="grid-2" style={{ gap: 16 }}>
          {reports.map((r) => (
            <div className="info-card" key={r.year} style={{ padding: 22 }}>
              <FileText size={24} style={{ color: 'var(--purple-600)', marginBottom: 10 }} />
              <strong style={{ display: 'block', marginBottom: 4 }}>{r.title}</strong>
              <p style={{ margin: '0 0 14px', fontSize: 14, color: 'var(--ink-soft)' }}>{r.note}</p>
              <a href="/images/admission-poster.jpeg" download className="btn btn-outline" style={{ fontSize: 13, display: 'inline-flex', gap: 6, alignItems: 'center' }}>
                <Download size={14} /> Download
              </a>
            </div>
          ))}
        </div>
      </section>
      <BackgroundCarousel images={pageImages.about} />
    </div>
  );
}
