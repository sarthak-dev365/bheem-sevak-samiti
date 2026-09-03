import PortalHeader from "@/components/examination/PortalHeader";
import ExaminationHero from "@/components/examination/ExaminationHero";
import ExaminationProcess from "@/components/examination/ExaminationProcess";
import NoticePanel from "@/components/examination/NoticePanel";
import ExaminationServices from "@/components/examination/ExaminationServices";
import PortalFooter from "@/components/examination/PortalFooter";

export default function ExaminationPage() {
  return (
    <main className="examination-portal">

      <PortalHeader />

      <ExaminationHero />

      <ExaminationProcess />

      <NoticePanel />

      <ExaminationServices />

      <PortalFooter />

    </main>
  );
}