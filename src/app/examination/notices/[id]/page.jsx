import Link from "next/link";
import { notFound } from "next/navigation";

import PortalHeader from "@/components/examination/PortalHeader";
import examinationNotices from "@/data/examination/notices";

import "@/styles/examination/notice-details-page.css";


/* =========================================================
   STATIC PARAMS
   REQUIRED FOR: output: "export"
========================================================= */

export function generateStaticParams() {
  return examinationNotices.map((notice) => ({
    id: notice.id,
  }));
}


/* =========================================================
   NOTICE ICON
========================================================= */

function NoticeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 9.5a6 6 0 0 0-12 0v5l-1.5 2h15L18 14.5z" />
      <path d="M9.5 19a3 3 0 0 0 5 0" />
    </svg>
  );
}


/* =========================================================
   ARROW ICON
========================================================= */

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}


/* =========================================================
   DYNAMIC METADATA
========================================================= */

export function generateMetadata({ params }) {
  const notice = examinationNotices.find(
    (item) => item.id === params.id
  );

  if (!notice) {
    return {
      title: "Official Examination Notices | Bheem Sevak Samiti",
      description: "View official examination notices, announcements and important updates from Bheem Sevak Samiti.",
    };
  }

  return {
    title: `${notice.title} | Bheem Sevak Samiti`,
    description: notice.description,
  };
}


/* =========================================================
   NOTICE DETAIL PAGE
========================================================= */

export default async function NoticeDetailPage({ params }) {

  const { id } = await params;


  /* =======================================================
     FIND NOTICE
  ======================================================= */

  const notice = examinationNotices.find(
    (item) => item.id === id
  );


  /* =======================================================
     NOTICE NOT FOUND
  ======================================================= */

  if (!notice) {
    notFound();
  }


  return (
    <main className="notice-detail-page">

      {/* ===================================================
          PORTAL HEADER
      =================================================== */}

      <PortalHeader />


      {/* ===================================================
          NOTICE HERO
      =================================================== */}

      <section className="notice-detail-hero">

        <div className="notice-detail-container">


          {/* ===============================================
              BACK LINK
          =============================================== */}

          <Link
            href="/examination/notices"
            className="notice-detail-back"
          >

            <ArrowIcon />

            <span>
              All Notices
            </span>

          </Link>


          {/* ===============================================
              HERO CONTENT
          =============================================== */}

          <div className="notice-detail-hero__content">


            {/* =============================================
                NOTICE META
            ============================================= */}

            <div className="notice-detail-hero__meta">

              <span className="notice-detail-number">
                {notice.number}
              </span>

              <span className="notice-detail-category">
                {notice.category}
              </span>

            </div>


            {/* =============================================
                TITLE
            ============================================= */}

            <h1>
              {notice.title}
            </h1>


            {/* =============================================
                DESCRIPTION
            ============================================= */}

            <p>
              {notice.description}
            </p>

          </div>

        </div>

      </section>


      {/* ===================================================
          NOTICE CONTENT
      =================================================== */}

      <section className="notice-detail-content">

        <div className="notice-detail-container">


          {/* =================================================
              NOTICE CARD
          ================================================= */}

          <article className="notice-detail-card">


            {/* ===============================================
                CARD HEADER
            =============================================== */}

            <div className="notice-detail-card__header">

              <div className="notice-detail-card__icon">
                <NoticeIcon />
              </div>


              <div>

                <span>
                  {notice.type}
                </span>

                <h2>
                  Official Notice Information
                </h2>

              </div>

            </div>


            {/* ===============================================
                NOTICE BODY
            =============================================== */}

            <div className="notice-detail-card__body">

              {Array.isArray(notice.content) &&
                notice.content.map((paragraph, index) => (

                  <p key={index}>
                    {paragraph}
                  </p>

                ))}

            </div>


            {/* ===============================================
                CARD FOOTER
            =============================================== */}

            <div className="notice-detail-card__footer">

              <span>
                {notice.date}
              </span>

              <span>
                Bheem Sevak Samiti Examination Portal
              </span>

            </div>

          </article>


          {/* =================================================
              BOTTOM NAVIGATION
          ================================================= */}

          <div className="notice-detail-navigation">

            <Link
              href="/examination/notices"
              className="notice-detail-navigation__link"
            >

              <ArrowIcon />

              <span>
                Return to Notices
              </span>

            </Link>


            <Link
              href="/examination"
              className="notice-detail-navigation__link"
            >

              <span>
                Examination Portal
              </span>

              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>

            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}