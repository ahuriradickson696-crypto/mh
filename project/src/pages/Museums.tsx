import { SubPageHero } from '@/components/SubPageHero';
import { useRouter } from '@/router/Router';
import { pageImages } from '@/data/pageImages';
import { BackgroundCarousel } from '@/components/BackgroundCarousel';

export function Museums() {
  const { navigate } = useRouter();
  return (
    <div className="page-content">
      <SubPageHero
        images={pageImages.gallery || pageImages.home}
        eyebrow="Culture"
        title={<>Collections &amp; <em>exhibitions</em></>}
        subtitle="Student showcases, institutional memory and cultural life on the AVIU calendar."
        crumbs={[{ label: 'Home', path: '/' }, { label: 'Museums', path: '/museums' }]}
      />
      <section className="section-pad">
        <div className="grid-2" style={{ gap: 28, alignItems: 'center', marginBottom: 36 }}>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.8, color: 'var(--ink-soft)', marginBottom: 14 }}>
              Culture and exhibition practice sit alongside formal study at AVIU. Students in education, design-related modules, nursing awareness campaigns and social sciences regularly display work for peers and the public.
            </p>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-soft)' }}>
              Graduation periods transform campus into a celebration of achievement; photographs and videos are archived in the public Gallery for families and alumni.
            </p>
          </div>
          <img src="/images/graduation-crowd.jpg" alt="Graduation crowd" style={{ width: '100%', height: 250, objectFit: 'cover', borderRadius: 12 }} />
        </div>
        <div className="section-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-line" /> Experiences</div>
            <h2>What you can <em>explore.</em></h2>
          </div>
        </div>
        <div className="grid-3" style={{ gap: 16, marginBottom: 32 }}>
          {[
            { title: 'Graduation gallery', text: 'Ceremonial moments, class photos and portraits from recent graduations.', img: '/images/graduation-ceremony.jpg' },
            { title: 'Learning in action', text: 'Classrooms, laboratories and field activities that show how programmes are taught.', img: '/images/lab-equipment-visit.jpg' },
            { title: 'Campus & events', text: 'Cultural Day, conferences, poetry and public lectures.', img: '/images/poetry-presentation.jpg' },
          ].map((x) => (
            <div key={x.title} className="info-card" style={{ overflow: 'hidden', padding: 0 }}>
              <img src={x.img} alt={x.title} style={{ width: '100%', height: 140, objectFit: 'cover', display: 'block' }} />
              <div style={{ padding: 16 }}>
                <strong style={{ display: 'block', marginBottom: 6 }}>{x.title}</strong>
                <p style={{ margin: 0, fontSize: 13, lineHeight: 1.5, color: 'var(--ink-soft)' }}>{x.text}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ maxWidth: 700, fontSize: 14, lineHeight: 1.65, color: 'var(--ink-soft)', marginBottom: 20 }}>
          Physical exhibition schedules are announced under Events. School groups may request guided visits via Contact. Digital visitors should start with the Gallery, which includes autoplay campus videos.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
          <button type="button" className="btn btn-primary" onClick={() => navigate('/gallery')}>Open full gallery</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/events')}>Events</button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/student-life/community-engagement')}>Community engagement</button>
        </div>
      </section>
      <BackgroundCarousel images={pageImages.home} />
    </div>
  );
}
