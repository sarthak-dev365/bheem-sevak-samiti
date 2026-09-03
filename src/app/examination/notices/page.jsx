import Link from "next/link";

import PortalHeader from "@/components/examination/PortalHeader";

import examinationNotices from "@/data/examination/notices";

import "@/styles/examination/notices-page.css";


/* =========================================================
   EXAMINATION NOTICES PAGE
   BHEEM SEVAK SAMITI
========================================================= */

export const metadata = {
  title: "Notices | Bheem Sevak Samiti Examination Portal",

  description:
    "View official examination notices, important announcements and latest updates from the Bheem Sevak Samiti Examination Portal.",
};


/* =========================================================
   NOTICE ICON
========================================================= */

function NoticeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 9.5a6 6 0 0 0-12 0v5l-1.5 2h15L18 14.5z" />
      <path d="M9.5 19a3 3 0 0 0 5 0" />
    </svg>
  );
}


/* =========================================================
   CALENDAR ICON
========================================================= */

function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect
        x="4"
        y="5"
        width="16"
        height="15"
        rx="2"
      />

      <path d="M8 3v4" />
      <path d="M16 3v4" />
      <path d="M4 10h16" />
    </svg>
  );
}


/* =========================================================
   ARROW ICON
========================================================= */

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}


/* =========================================================
   NOTICES PAGE
========================================================= */

export default function NoticesPage() {

  const featuredNotice =
    examinationNotices.find(
      (notice) => notice.featured
    );


  const regularNotices =
    examinationNotices.filter(
      (notice) => !notice.featured
    );


  return (
    <main className="notices-page">

      <PortalHeader />


      {/* =================================================
          HERO
      ================================================= */}

      <section className="notices-hero">

        <div className="notices-container">

          <div className="notices-hero__content">

            <span className="notices-eyebrow">
              BHEEM SEVAK SAMITI
            </span>

            <h1>
              Examination notices
              <span> and updates.</span>
            </h1>

            <p>
              Stay informed with official examination announcements,
              important updates and notifications from the Bheem Sevak
              Samiti Examination Portal.
            </p>

          </div>


          <div className="notices-hero__panel">

            <div className="notices-hero__panel-icon">
              <NoticeIcon />
            </div>


            <div>

              <span>
                OFFICIAL NOTIFICATION CENTRE
              </span>

              <strong>
                Examination information in one place
              </strong>

              <p>
                Important announcements and examination-related updates
                are organised here for easy access.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =================================================
          FEATURED NOTICE
      ================================================= */}

      {featuredNotice && (

        <section className="notices-featured">

          <div className="notices-container">

            <article className="notices-featured__card">


              <div className="notices-featured__header">

                <div className="notices-featured__icon">
                  <NoticeIcon />
                </div>


                <div>

                  <span>
                    FEATURED {featuredNotice.category} NOTICE
                  </span>

                  <h2>
                    {featuredNotice.title}
                  </h2>

                </div>

              </div>


              <p>
                {featuredNotice.description}
              </p>


              <Link
                href={`/examination/notices/${featuredNotice.id}`}
                className="notices-featured__action"
              >

                Read Full Notice

                <ArrowIcon />

              </Link>

            </article>

          </div>

        </section>

      )}


      {/* =================================================
          NOTICE DIRECTORY
      ================================================= */}

      <section className="notices-directory">

        <div className="notices-container">


          <div className="notices-section-heading">

            <div>

              <span>
                OFFICIAL NOTICES
              </span>

              <h2>
                Latest examination notifications.
              </h2>

            </div>


            <p>
              Browse official examination updates related to registration,
              schedules, student services and examination results.
            </p>

          </div>


          <div className="notices-grid">

            {regularNotices.map((notice) => (

              <article
                key={notice.id}
                className="notice-card"
              >


                <div className="notice-card__top">

                  <div className="notice-card__category">

                    <span>
                      {notice.number}
                    </span>

                    <strong>
                      {notice.category}
                    </strong>

                  </div>


                  <span className="notice-card__badge">
                    {notice.type}
                  </span>

                </div>


                <div className="notice-card__content">

                  <h3>
                    {notice.title}
                  </h3>

                  <p>
                    {notice.description}
                  </p>

                </div>


                <div className="notice-card__footer">

                  <div className="notice-card__date">

                    <CalendarIcon />

                    <span>
                      {notice.date}
                    </span>

                  </div>


                  <Link
                    href={`/examination/notices/${notice.id}`}
                    className="notice-card__action"
                    aria-label={`View ${notice.title}`}
                  >

                    <span>
                      View Notice
                    </span>

                    <ArrowIcon />

                  </Link>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* =================================================
          INFORMATION
      ================================================= */}

      <section className="notices-information">

        <div className="notices-container">

          <div className="notices-information__layout">


            <div className="notices-information__content">

              <span>
                STAY INFORMED
              </span>

              <h2>
                Official information in one place.
              </h2>

              <p>
                The notification centre provides visitors and participants
                with clear access to important public examination information
                and official updates.
              </p>

            </div>


            <div className="notices-information__points">

              <div className="notices-information__point">

                <span>01</span>

                <p>
                  Check official examination notices regularly for
                  important announcements and updates.
                </p>

              </div>


              <div className="notices-information__point">

                <span>02</span>

                <p>
                  Carefully follow instructions provided through official
                  examination communication.
                </p>

              </div>


              <div className="notices-information__point">

                <span>03</span>

                <p>
                  Student-specific examination services are available
                  through the student portal after login.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}