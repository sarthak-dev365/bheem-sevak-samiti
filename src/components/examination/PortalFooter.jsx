import Link from "next/link";

import PortalLogo from "./PortalLogo";

import "@/styles/examination/footer.css";


export default function PortalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="exam-footer">

      <div className="exam-footer__container">


        {/* ============================================
            TOP SECTION
        ============================================ */}

        <div className="exam-footer__top">


          {/* BRAND */}

          <div className="exam-footer__brand">

            <Link
              href="/examination"
              className="exam-footer__logo"
              aria-label="Bheem Sevak Samiti Examination Portal"
            >
              <PortalLogo />
            </Link>

            <p>
              Official examination portal for accessing
              examination information, notices, applications
              and student services.
            </p>

          </div>


          {/* QUICK LINKS */}

          <div className="exam-footer__column">

            <h3>
              Quick Links
            </h3>

            <nav className="exam-footer__links">

              <Link href="/examination">
                Home
              </Link>

              <Link href="/examination/examinations">
                Examinations
              </Link>

              <Link href="/examination/notices">
                Official Notices
              </Link>

              <Link href="/examination/support">
                Help & Support
              </Link>

            </nav>

          </div>


          {/* STUDENT SERVICES */}

          <div className="exam-footer__column">

            <h3>
              Student Services
            </h3>

            <nav className="exam-footer__links">

              <Link href="/examination/login">
                Student Login
              </Link>

              <Link href="/examination/examinations">
                Available Examinations
              </Link>

              <Link href="/examination/notices">
                Latest Updates
              </Link>

              <Link href="/examination/support">
                Contact Support
              </Link>

            </nav>

          </div>


          {/* MAIN WEBSITE */}

          <div className="exam-footer__column">

            <h3>
              Organization
            </h3>

            <div className="exam-footer__organization">

              <p>
                Visit the official Bheem Sevak Samiti
                website for more information.
              </p>

              <Link
                href="/"
                className="exam-footer__website-button"
              >
                <span>
                  Main Website
                </span>

                <span aria-hidden="true">
                  →
                </span>
              </Link>

            </div>

          </div>

        </div>


        {/* ============================================
            BOTTOM SECTION
        ============================================ */}

        <div className="exam-footer__bottom">

          <p>
            © {currentYear} Bheem Sevak Samiti.
            All rights reserved.
          </p>


          <div className="exam-footer__bottom-links">

            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}