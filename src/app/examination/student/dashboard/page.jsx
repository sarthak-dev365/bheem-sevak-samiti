import Link from "next/link";

import PortalLogo from "@/components/examination/PortalLogo";

import "@/styles/examination/student-dashboard.css";


/* =========================================================
   BHEEM SEVAK SAMITI
   STUDENT DASHBOARD
========================================================= */

export const metadata = {
  title: "Student Dashboard | Bheem Sevak Samiti",

  description:
    "Access student examination services, results, certificates and official information.",
};


/* =========================================================
   ICONS
========================================================= */

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
    </svg>
  );
}


function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 21c.8-4 3.3-6 7-6s6.2 2 7 6" />
    </svg>
  );
}


function ExamIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7h8" />
      <path d="M8 11h8" />
      <path d="M8 15h5" />
    </svg>
  );
}


function AdmitCardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="9" r="2.5" />
      <path d="M8 17c.7-2.3 2-3.5 4-3.5s3.3 1.2 4 3.5" />
    </svg>
  );
}


function ResultIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 20V10" />
      <path d="M10 20V4" />
      <path d="M15 20v-7" />
      <path d="M20 20V7" />
    </svg>
  );
}


function CertificateIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 3h12v13H6z" />
      <path d="m9 21 3-3 3 3v-5H9z" />
      <path d="M9 7h6" />
      <path d="M9 10h6" />
    </svg>
  );
}


function PaymentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </svg>
  );
}


function NoticeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 9.5a6 6 0 0 0-12 0v5l-1.5 2h15L18 14.5z" />
      <path d="M9.5 19a3 3 0 0 0 5 0" />
    </svg>
  );
}


function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13h3v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 1-2Z" />
      <path d="M20 13h-3v5h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-1-2Z" />
    </svg>
  );
}


function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}


function LogoutIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10 5H5v14h5" />
      <path d="M14 8l4 4-4 4" />
      <path d="M8 12h10" />
    </svg>
  );
}


/* =========================================================
   STUDENT SERVICES DATA
========================================================= */

const studentServices = [
  {
    id: "profile",

    title: "My Profile",

    description:
      "View and manage your personal student information.",

    href: "/examination/student/profile",

    icon: UserIcon,
  },

  {
    id: "examinations",

    title: "My Examinations",

    description:
      "View examination details, schedules and participation information.",

    href: "/examination/student/examinations",

    icon: ExamIcon,
  },

  {
    id: "admit-card",

    title: "Admit Card",

    description:
      "Access and download your official examination admit card.",

    href: "/examination/student/admit-card",

    icon: AdmitCardIcon,
  },

  {
    id: "results",

    title: "Results",

    description:
      "View your official examination results and performance details.",

    href: "/examination/student/results",

    icon: ResultIcon,
  },

  {
    id: "certificate",

    title: "Certificates",

    description:
      "Access your issued certificates and verification information.",

    href: "/examination/student/certificates",

    icon: CertificateIcon,
  },

  {
    id: "payments",

    title: "Payments",

    description:
      "View examination fees, payment records and transaction details.",

    href: "/examination/student/payments",

    icon: PaymentIcon,
  },
];


/* =========================================================
   STUDENT DASHBOARD PAGE
========================================================= */

export default function StudentDashboardPage() {
  return (
    <main className="student-dashboard">


      {/* ===================================================
          SIDEBAR
      =================================================== */}

      <aside className="student-dashboard__sidebar">


        {/* LOGO */}

        <div className="student-dashboard__brand">

          <Link
            href="/examination"
            aria-label="Bheem Sevak Samiti Examination Portal"
          >
            <PortalLogo />
          </Link>

        </div>


        {/* NAVIGATION */}

        <nav
          className="student-dashboard__navigation"
          aria-label="Student dashboard navigation"
        >

          <span className="student-dashboard__nav-label">
            STUDENT PORTAL
          </span>


          <Link
            href="/examination/student/dashboard"
            className="student-dashboard__nav-link student-dashboard__nav-link--active"
          >

            <DashboardIcon />

            <span>
              Dashboard
            </span>

          </Link>


          <Link
            href="/examination/student/profile"
            className="student-dashboard__nav-link"
          >

            <UserIcon />

            <span>
              My Profile
            </span>

          </Link>


          <Link
            href="/examination/student/examinations"
            className="student-dashboard__nav-link"
          >

            <ExamIcon />

            <span>
              My Examinations
            </span>

          </Link>


          <Link
            href="/examination/student/results"
            className="student-dashboard__nav-link"
          >

            <ResultIcon />

            <span>
              Results
            </span>

          </Link>


          <Link
            href="/examination/student/certificates"
            className="student-dashboard__nav-link"
          >

            <CertificateIcon />

            <span>
              Certificates
            </span>

          </Link>

        </nav>


        {/* SIDEBAR BOTTOM */}

        <div className="student-dashboard__sidebar-bottom">

          <Link
            href="/examination/support"
            className="student-dashboard__support-link"
          >

            <SupportIcon />

            <span>
              Help & Support
            </span>

          </Link>


          <Link
            href="/examination/student/login"
            className="student-dashboard__logout-link"
          >

            <LogoutIcon />

            <span>
              Sign Out
            </span>

          </Link>

        </div>

      </aside>


      {/* ===================================================
          MAIN CONTENT
      =================================================== */}

      <section className="student-dashboard__main">


        {/* =================================================
            TOPBAR
        ================================================= */}

        <header className="student-dashboard__topbar">

          <div>

            <span className="student-dashboard__breadcrumb">
              STUDENT PORTAL
            </span>

            <h1>
              Student Dashboard
            </h1>

          </div>


          <div className="student-dashboard__topbar-actions">

            <Link
              href="/examination/notices"
              className="student-dashboard__notification"
              aria-label="View examination notices"
            >
              <NoticeIcon />

              <span className="student-dashboard__notification-dot" />
            </Link>


            <Link
              href="/examination/student/profile"
              className="student-dashboard__student"
            >

              <div className="student-dashboard__avatar">
                SR
              </div>

              <div>

                <strong>
                  Student
                </strong>

                <span>
                  Student Account
                </span>

              </div>

            </Link>

          </div>

        </header>


        {/* =================================================
            CONTENT AREA
        ================================================= */}

        <div className="student-dashboard__content">


          {/* ===============================================
              WELCOME SECTION
          =============================================== */}

          <section className="student-dashboard__welcome">

            <div className="student-dashboard__welcome-content">

              <span>
                WELCOME BACK
              </span>

              <h2>
                Your examination journey starts here.
              </h2>

              <p>
                Access your examination information, important documents,
                results, certificates and other student services from one
                secure dashboard.
              </p>

            </div>


            <div className="student-dashboard__welcome-status">

              <span>
                ACCOUNT STATUS
              </span>

              <strong>
                Active Student
              </strong>

              <p>
                Your student portal is ready for access.
              </p>

            </div>

          </section>


          {/* ===============================================
              QUICK OVERVIEW
          =============================================== */}

          <section className="student-dashboard__overview">

            <div className="student-dashboard__section-heading">

              <div>

                <span>
                  QUICK OVERVIEW
                </span>

                <h2>
                  Your student information.
                </h2>

              </div>

            </div>


            <div className="student-dashboard__stats">


              <article className="student-dashboard__stat">

                <div className="student-dashboard__stat-icon">
                  <ExamIcon />
                </div>

                <div>

                  <span>
                    EXAMINATIONS
                  </span>

                  <strong>
                    View Details
                  </strong>

                  <p>
                    Examination information
                  </p>

                </div>

              </article>


              <article className="student-dashboard__stat">

                <div className="student-dashboard__stat-icon">
                  <ResultIcon />
                </div>

                <div>

                  <span>
                    RESULTS
                  </span>

                  <strong>
                    Check Results
                  </strong>

                  <p>
                    Official result information
                  </p>

                </div>

              </article>


              <article className="student-dashboard__stat">

                <div className="student-dashboard__stat-icon">
                  <CertificateIcon />
                </div>

                <div>

                  <span>
                    CERTIFICATES
                  </span>

                  <strong>
                    Student Services
                  </strong>

                  <p>
                    Certificate access
                  </p>

                </div>

              </article>


            </div>

          </section>


          {/* ===============================================
              STUDENT SERVICES
          =============================================== */}

          <section className="student-dashboard__services">

            <div className="student-dashboard__section-heading">

              <div>

                <span>
                  STUDENT SERVICES
                </span>

                <h2>
                  Everything you need in one place.
                </h2>

              </div>

            </div>


            <div className="student-dashboard__services-grid">

              {studentServices.map((service) => {

                const Icon = service.icon;

                return (

                  <Link
                    key={service.id}
                    href={service.href}
                    className="student-dashboard__service-card"
                  >

                    <div className="student-dashboard__service-icon">
                      <Icon />
                    </div>


                    <div className="student-dashboard__service-content">

                      <h3>
                        {service.title}
                      </h3>

                      <p>
                        {service.description}
                      </p>

                    </div>


                    <span className="student-dashboard__service-arrow">
                      <ArrowIcon />
                    </span>

                  </Link>

                );

              })}

            </div>

          </section>


          {/* ===============================================
              IMPORTANT INFORMATION
          =============================================== */}

          <section className="student-dashboard__information">

            <div className="student-dashboard__information-icon">
              <NoticeIcon />
            </div>


            <div className="student-dashboard__information-content">

              <span>
                IMPORTANT INFORMATION
              </span>

              <h2>
                Stay updated with official notices.
              </h2>

              <p>
                Regularly check official examination notices for important
                announcements, examination updates and student-related
                information.
              </p>

            </div>


            <Link
              href="/examination/notices"
              className="student-dashboard__information-action"
            >

              View Notices

              <ArrowIcon />

            </Link>

          </section>


        </div>

      </section>

    </main>
  );
}