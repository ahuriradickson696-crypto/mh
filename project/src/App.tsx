import { RouterProvider, useRouter } from '@/router/Router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ApplyProvider } from '@/components/ApplyContext';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { FloatingVideoPlayer } from '@/components/FloatingVideoPlayer';
import { Home } from '@/pages/Home';
import { Study } from '@/pages/Study';
import { Admissions } from '@/pages/Admissions';
import { Research } from '@/pages/Research';
import { StudentLife } from '@/pages/StudentLife';
import { Staff } from '@/pages/Staff';
import { Library } from '@/pages/Library';
import { Fees } from '@/pages/Fees';
import { About } from '@/pages/About';
import { News } from '@/pages/News';
import { Events } from '@/pages/Events';
import { Contact } from '@/pages/Contact';

import { UndergraduateStudy } from '@/pages/study/UndergraduateStudy';
import { PostgraduateStudy } from '@/pages/study/PostgraduateStudy';
import { OnlineLearning } from '@/pages/study/OnlineLearning';
import { InternationalStudy } from '@/pages/study/InternationalStudy';
import { CourseFinder } from '@/pages/study/CourseFinder';

import { HowToApply } from '@/pages/admissions/HowToApply';
import { EntryRequirements } from '@/pages/admissions/EntryRequirements';
import { InternationalAdmissions } from '@/pages/admissions/InternationalAdmissions';
import { CreditTransfer } from '@/pages/admissions/CreditTransfer';
import { Scholarships } from '@/pages/admissions/Scholarships';
import { CampusVisits } from '@/pages/admissions/CampusVisits';

import { ResearchCentres } from '@/pages/research/ResearchCentres';
import { PhdOpportunities } from '@/pages/research/PhdOpportunities';
import { Publications } from '@/pages/research/Publications';

import { Accommodation } from '@/pages/studentlife/Accommodation';
import { HealthWellbeing } from '@/pages/studentlife/HealthWellbeing';
import { SportsRecreation } from '@/pages/studentlife/SportsRecreation';
import { CareerServices } from '@/pages/studentlife/CareerServices';

import { Leadership } from '@/pages/about/Leadership';
import { Campus } from '@/pages/about/Campus';
import { Alumni } from '@/pages/about/Alumni';
import { Careers } from '@/pages/about/Careers';
import { OrgChart } from '@/pages/about/OrgChart';

import { Directory } from '@/pages/contact/Directory';
import { CampusSafety } from '@/pages/contact/CampusSafety';
import { Gallery } from '@/pages/Gallery';
import { AcademicCalendar } from '@/pages/AcademicCalendar';
import { Privacy } from '@/pages/Privacy';
import { Terms } from '@/pages/Terms';
import { Policies } from '@/pages/about/Policies';
import { AnnualReports } from '@/pages/about/AnnualReports';
import { JoiningInstructions } from '@/pages/admissions/JoiningInstructions';
import { StudentGuild } from '@/pages/studentlife/StudentGuild';
import { InnovationHub } from '@/pages/studentlife/InnovationHub';
import { Conferences } from '@/pages/research/Conferences';
import { Journals } from '@/pages/research/Journals';
import { Offices } from '@/pages/offices/Offices';
import { CommunityEngagement } from '@/pages/studentlife/CommunityEngagement';
import { Timetables } from '@/pages/studentlife/Timetables';
import { GraduationLists } from '@/pages/studentlife/GraduationLists';


import { Downloads } from '@/pages/Downloads';


import { StrategicPlan } from '@/pages/strategic/StrategicPlan';
import { Museums } from '@/pages/Museums';
import { OpenDays } from '@/pages/OpenDays';
import { Glossary } from '@/pages/Glossary';
import { EqualityPolicy } from '@/pages/policies/EqualityPolicy';
import { FreedomOfSpeech } from '@/pages/policies/FreedomOfSpeech';
import { ModernSlavery } from '@/pages/policies/ModernSlavery';
import { Gdpr } from '@/pages/policies/Gdpr';
import { ProspectiveUndergraduates } from '@/pages/prospective/Undergraduates';
import { ProspectiveGraduates } from '@/pages/prospective/Graduates';
import { LifelongLearning } from '@/pages/prospective/LifelongLearning';
import { ProspectiveOnline } from '@/pages/prospective/OnlineLearning';
import { CurrentStudents } from '@/pages/current/Students';
import { CurrentStaff } from '@/pages/current/StaffPortal';
import { Visitors } from '@/pages/Visitors';
import { Media } from '@/pages/Media';
import { Teachers } from '@/pages/Teachers';
import { Business } from '@/pages/Business';
import { CampusMap } from '@/pages/utilities/Map';
import { AccessGuide } from '@/pages/utilities/AccessGuide';
import { Giving } from '@/pages/utilities/Giving';
import { LegalAccessibility } from '@/pages/legal/Accessibility';
import { LegalCookies } from '@/pages/legal/Cookies';
import { CookieConsent } from '@/components/CookieConsent';

function Routes() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/study':
        return <Study />;
      case '/study/undergraduate':
        return <UndergraduateStudy />;
      case '/study/postgraduate':
        return <PostgraduateStudy />;
      case '/study/online':
        return <OnlineLearning />;
      case '/study/international':
        return <InternationalStudy />;
      case '/study/course-finder':
        return <CourseFinder />;

      case '/admissions':
        return <Admissions />;
      case '/admissions/how-to-apply':
        return <HowToApply />;
      case '/admissions/entry-requirements':
        return <EntryRequirements />;
      case '/admissions/international':
        return <InternationalAdmissions />;
      case '/admissions/credit-transfer':
        return <CreditTransfer />;
      case '/admissions/scholarships':
        return <Scholarships />;
      case '/admissions/campus-visits':
        return <CampusVisits />;

      case '/research':
        return <Research />;
      case '/research/centres':
        return <ResearchCentres />;
      case '/research/phd-opportunities':
        return <PhdOpportunities />;
      case '/research/publications':
        return <Publications />;

      case '/student-life':
        return <StudentLife />;
      case '/student-life/accommodation':
        return <Accommodation />;
      case '/student-life/health':
        return <HealthWellbeing />;
      case '/student-life/sports':
        return <SportsRecreation />;
      case '/student-life/careers':
        return <CareerServices />;

      case '/staff':
        return <Staff />;
      case '/library':
        return <Library />;
      case '/fees':
        return <Fees />;

      case '/about':
        return <About />;
      case '/about/leadership':
        return <Leadership />;
      case '/about/campus':
        return <Campus />;
      case '/about/alumni':
        return <Alumni />;
      case '/about/careers':
        return <Careers />;
      case '/about/organisation':
        return <OrgChart />;
      case '/about/policies':
        return <Policies />;
      case '/about/annual-reports':
        return <AnnualReports />;
      case '/admissions/joining-instructions':
        return <JoiningInstructions />;
      case '/student-life/guild':
        return <StudentGuild />;
      case '/student-life/innovation-hub':
        return <InnovationHub />;
      case '/student-life/community-engagement':
        return <CommunityEngagement />;
      case '/student-life/timetables':
        return <Timetables />;
      case '/student-life/graduation-lists':
        return <GraduationLists />;

      case '/research/conferences':
        return <Conferences />;
      case '/research/journals':
        return <Journals />;
      case '/offices':
        return <Offices />;


      case '/news':
        return <News />;
      case '/events':
        return <Events />;

      case '/contact':
        return <Contact />;
      case '/contact/directory':
        return <Directory />;
      case '/contact/campus-safety':
        return <CampusSafety />;

      case '/gallery':
        return <Gallery />;
      case '/academic-calendar':
        return <AcademicCalendar />;
      case '/privacy':
        return <Privacy />;
      case '/terms':
        return <Terms />;
      case '/downloads':
        return <Downloads />;

      
      case '/strategic-plan':
        return <StrategicPlan />;
      case '/museums':
        return <Museums />;
      case '/open-days':
        return <OpenDays />;
      case '/glossary':
        return <Glossary />;
      case '/equality-policy':
        return <EqualityPolicy />;
      case '/freedom-of-speech':
        return <FreedomOfSpeech />;
      case '/modern-slavery-statement':
        return <ModernSlavery />;
      case '/gdpr':
        return <Gdpr />;
      case '/prospective/undergraduates':
        return <ProspectiveUndergraduates />;
      case '/prospective/graduates':
        return <ProspectiveGraduates />;
      case '/prospective/lifelong-learning':
        return <LifelongLearning />;
      case '/prospective/online-learning':
        return <ProspectiveOnline />;
      case '/current/students':
        return <CurrentStudents />;
      case '/current/staff':
        return <CurrentStaff />;
      case '/visitors':
        return <Visitors />;
      case '/media':
        return <Media />;
      case '/teachers':
        return <Teachers />;
      case '/business':
        return <Business />;
      case '/map':
        return <CampusMap />;
      case '/access-guide':
        return <AccessGuide />;
      case '/giving':
        return <Giving />;
      case '/legal/privacy':
        return <Privacy />;
      case '/legal/accessibility':
        return <LegalAccessibility />;
      case '/legal/cookies':
        return <LegalCookies />;
      case '/fees-and-funding':
        return <Fees />;
      case '/libraries':
        return <Library />;
      case '/jobs':
        return <Careers />;
      case '/term-dates':
        return <AcademicCalendar />;
      case '/alumni':
        return <Alumni />;

      case '/':
      default:
        return <Home />;
    }
  };

  return (
    <div className="site-shell">
      <Header />
      <main>{renderPage()}</main>
      <Footer />
      <WhatsAppButton />
      <FloatingVideoPlayer />
      <CookieConsent />
    </div>
  );
}

function App() {
  return (
    <RouterProvider>
      <ApplyProvider>
        <Routes />
      </ApplyProvider>
    </RouterProvider>
  );
}

export default App;
