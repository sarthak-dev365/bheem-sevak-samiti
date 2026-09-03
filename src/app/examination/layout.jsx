/* =========================================================
   EXAMINATION PORTAL
   LAYOUT
========================================================= */

import "@/styles/examination/header.css";
import "@/styles/examination/logo.css";


/* =========================================================
   METADATA
========================================================= */

export const metadata = {
  title: "Examination Portal | Bheem Sevak Samiti",

  description:
    "Official student examination portal of Bheem Sevak Samiti.",
};


/* =========================================================
   LAYOUT
========================================================= */

export default function ExaminationLayout({
  children,
}) {
  return (
    <div className="examination-portal">
      {children}
    </div>
  );
}