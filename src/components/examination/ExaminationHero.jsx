import Link from "next/link";

import "@/styles/examination/hero.css";


/* =========================================================
   EXAMINATION PORTAL HERO
========================================================= */

export default function PortalHero() {
  return (
    <section className="exam-hero">

      <div className="exam-hero__container">

        {/* =================================================
            HERO CONTENT
        ================================================= */}

        <div className="exam-hero__content">

          <h1 className="exam-hero__title">
            Your examination journey,
            <span>
              organised in one place.
            </span>
          </h1>


          <p className="exam-hero__description">
            Access examinations, official notices, application updates
            and essential student examination services through the
            Bheem Sevak Samiti Examination Portal.
          </p>


          {/* =================================================
              ACTION BUTTONS
          ================================================= */}

          <div className="exam-hero__actions">

            <Link
              href="/examination/examinations"
              className="exam-hero__primary"
            >
              <span className="exam-hero__button-icon" aria-hidden="true">
                ▤
              </span>

              <span>
                Explore Examinations
              </span>

              <span
                className="exam-hero__button-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>


            <Link
              href="/examination/notices"
              className="exam-hero__secondary"
            >
              <span className="exam-hero__button-icon" aria-hidden="true">
                ♧
              </span>

              <span>
                View Notices
              </span>
            </Link>

          </div>


          {/* =================================================
              QUICK INFORMATION
          ================================================= */}

          <div className="exam-hero__quick-info">

            <div className="exam-hero__quick-item">

              <div className="exam-hero__quick-icon" aria-hidden="true">
                ♙
              </div>

              <div className="exam-hero__quick-text">

                <span>
                  FOR VISITORS
                </span>

                <strong>
                  Explore examinations &amp; official updates
                </strong>

              </div>

            </div>


            <div className="exam-hero__quick-divider" />


            <div className="exam-hero__quick-item">

              <div className="exam-hero__quick-icon" aria-hidden="true">
                ♧
              </div>

              <div className="exam-hero__quick-text">

                <span>
                  FOR STUDENTS
                </span>

                <strong>
                  Login to access examination services
                </strong>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            EXAMINATION PORTAL CARD
        ================================================= */}

        <aside className="exam-hero__portal">

          {/* Portal Header */}

          <div className="exam-hero__portal-header">

            <div>

              <span className="exam-hero__portal-label">
                STUDENT SERVICES
              </span>

              <h2>
                Examination Portal
              </h2>

            </div>


            <span className="exam-hero__status">
              <span aria-hidden="true" />
              Portal Active
            </span>

          </div>


          {/* Portal Services */}

          <div className="exam-hero__services">

            <Link
              href="/examination/examinations"
              className="exam-hero__service"
            >

              <div className="exam-hero__service-icon">
                ▤
              </div>

              <span className="exam-hero__service-number">
                01
              </span>

              <div className="exam-hero__service-content">

                <strong>
                  Examinations
                </strong>

                <span>
                  Explore available examinations
                </span>

              </div>

              <span
                className="exam-hero__service-arrow"
                aria-hidden="true"
              >
                →
              </span>

            </Link>


            <Link
              href="/examination/notices"
              className="exam-hero__service"
            >

              <div className="exam-hero__service-icon">
                ♧
              </div>

              <span className="exam-hero__service-number">
                02
              </span>

              <div className="exam-hero__service-content">

                <strong>
                  Official Notices
                </strong>

                <span>
                  Important announcements and updates
                </span>

              </div>

              <span
                className="exam-hero__service-arrow"
                aria-hidden="true"
              >
                →
              </span>

            </Link>


            <Link
              href="/examination/login"
              className="exam-hero__service"
            >

              <div className="exam-hero__service-icon">
                ♙
              </div>

              <span className="exam-hero__service-number">
                03
              </span>

              <div className="exam-hero__service-content">

                <strong>
                  Student Login
                </strong>

                <span>
                  Access your examination dashboard
                </span>

              </div>

              <span
                className="exam-hero__service-arrow"
                aria-hidden="true"
              >
                →
              </span>

            </Link>

          </div>


          {/* Portal Footer */}

          <div className="exam-hero__portal-footer">

            <div>

              <strong>
                Bheem Sevak Samiti
              </strong>

              <span>
                Official Student Examination Services
              </span>

            </div>

            <span className="exam-hero__portal-mark">
              BSS
            </span>

          </div>

        </aside>

      </div>

    </section>
  );
}