import { Calendar, BookOpen, FileText, Users, GraduationCap } from 'lucide-react';
import { PageHero } from '@/components/PageHero';
import { pageImages } from '@/data/pageImages';

const calendarItems = [
  { period: 'January intake', title: 'January intake orientation & registration', detail: 'Welcome week, course registration and start of semester for January cohort. Confirm exact dates with Academic Registrar.', icon: GraduationCap },
  { period: 'February 2026', title: 'Normal registration window', detail: 'End of normal registration period. Late registration may attract additional administrative requirements — check with the Registrar.', icon: FileText },
  { period: 'February–March 2026', title: 'Cultural Day & continuous assessment', detail: 'AVIU Cultural Gala / Cultural Day and Continuous Assessment Tests (CAT). Student associations and tours also scheduled.', icon: Users },
  { period: 'May intake', title: 'May intake orientation', detail: 'Orientation and registration for May intake students across all faculties.', icon: BookOpen },
  { period: 'August / September intake', title: 'Main August–September intake', detail: 'Primary intake for Certificate, Diploma and Bachelor programmes. Applications open well in advance — apply early.', icon: Calendar },
  { period: 'Ongoing', title: 'Library & e-learning', detail: 'Library: Mon–Fri 8:00 AM–10:00 PM · Sat 9:00 AM–6:00 PM. E-Library and virtual campus available 24/7 for enrolled students.', icon: BookOpen },
  { period: 'Ongoing', title: 'Academic year structure', detail: 'Typical academic year runs across two main semesters with continuous assessment, examinations and industrial/field attachment where required by the programme.', icon: Calendar },
];

const intakes = [
  { name: 'January Intake', period: 'January – April', applications: 'October – December', status: 'Open' },
  { name: 'May Intake', period: 'May – August', applications: 'February – April', status: 'Open' },
  { name: 'August Intake', period: 'August – December', applications: 'May – July', status: 'Open Now' },
];

export function AcademicCalendar() {
  return (
    <div className="page-content">
      <PageHero
        images={pageImages.home}
        eyebrow="Academic year"
        title={<>Academic <em>Calendar</em> &amp; intakes</>}
        subtitle="Key periods for students at Avance International University: intakes, registration, assessments and campus life. Always confirm official dates with the Academic Registrar."
      />

      <section className="section-pad">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> Student periods
            </div>
            <h2>
              Intakes &amp; <em>academic rhythm.</em>
            </h2>
          </div>
        </div>
        <p style={{ maxWidth: 720, marginBottom: 24, fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
          AVIU runs three main admission intakes each year so you can start when it suits you. Once enrolled, the academic year is organised into semesters with continuous assessment, examinations and, for many programmes, practical attachments. Exact registration and exam dates are published by the Academic Registrar each semester.
        </p>
        <div className="grid-3" style={{ gap: 16, marginBottom: 40 }}>
          {intakes.map((i) => (
            <div key={i.name} className="info-card" style={{ padding: 20 }}>
              <strong style={{ fontSize: 18, display: 'block', marginBottom: 6 }}>{i.name}</strong>
              <span style={{ fontSize: 14, color: 'var(--ink-soft)', lineHeight: 1.5 }}>{i.focus}</span>
            </div>
          ))}
        </div>

        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-line" /> 2026 key dates
            </div>
            <h2>
              Plan your <em>semester.</em>
            </h2>
          </div>
        </div>
        <div className="calendar-list">
          {calendarItems.map((item) => {
            const Icon = item.icon;
            return (
              <div className="calendar-item" key={item.title}>
                <div className="calendar-icon">
                  <Icon size={18} />
                </div>
                <div>
                  <span className="calendar-period">{item.period}</span>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
