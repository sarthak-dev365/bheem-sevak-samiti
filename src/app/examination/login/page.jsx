"use client";

import { useState } from "react";
import Link from "next/link";

import PortalLogo from "@/components/examination/PortalLogo";

import "@/styles/examination/login-page.css";


/* =========================================================
   ICONS
========================================================= */

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20c.9-3.8 3.4-5.8 7-5.8s6.1 2 7 5.8" />
    </svg>
  );
}


function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" />
    </svg>
  );
}


function EyeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </svg>
  );
}


function EyeOffIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 3l18 18" />
      <path d="M10.6 5.2A10.7 10.7 0 0 1 12 5c6.2 0 9.5 7 9.5 7a17.8 17.8 0 0 1-3.2 4.1" />
      <path d="M6.2 6.2A17.8 17.8 0 0 0 2.5 12S5.8 19 12 19a9.8 9.8 0 0 0 3.1-.5" />
      <path d="M9.8 9.8a3 3 0 0 0 4.4 4.4" />
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


function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 19 6v5c0 4.7-2.9 8.3-7 10-4.1-1.7-7-5.3-7-10V6l7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}


function SupportIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <path d="M4 13h3v5H5a2 2 0 0 1-2-2v-1a2 2 0 0 1 1-2Z" />
      <path d="M20 13h-3v5h2a2 2 0 0 0 2-2v-1a2 2 0 0 0-1-2Z" />
      <path d="M17 18c-.6 1.2-1.7 2-3 2h-2" />
    </svg>
  );
}


/* =========================================================
   STUDENT LOGIN PAGE
========================================================= */

export default function StudentLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    /*
      BACKEND LOGIN WILL BE CONNECTED HERE LATER.
    */

    console.log({
      studentId,
      password,
    });
  };


  return (
    <main className="student-login-page">


      {/* ===================================================
          DECORATIVE BACKGROUND
      =================================================== */}

      <div
        className="student-login__background"
        aria-hidden="true"
      >
        <span className="student-login__orb student-login__orb--one" />
        <span className="student-login__orb student-login__orb--two" />
        <span className="student-login__orb student-login__orb--three" />

        <span className="student-login__grid" />
      </div>


      {/* ===================================================
          TOP NAVIGATION
      =================================================== */}

      <header className="student-login__topbar">

        <Link
          href="/examination"
          className="student-login__portal-link"
        >
          <span className="student-login__portal-arrow">
            ←
          </span>

          <span>
            Examination Portal
          </span>
        </Link>

      </header>


      {/* ===================================================
          MAIN
      =================================================== */}

      <div className="student-login__layout">


        {/* =================================================
            LOGIN CARD
        ================================================= */}

        <section
          className="student-login__card"
          aria-labelledby="student-login-title"
        >


          {/* ===============================================
              LOGO
          =============================================== */}

          <div className="student-login__logo">

            <Link
              href="/examination"
              aria-label="Bheem Sevak Samiti Examination Portal"
            >
              <PortalLogo />
            </Link>

          </div>


          {/* ===============================================
              HEADER
          =============================================== */}

          <div className="student-login__header">

            <span className="student-login__eyebrow">
              STUDENT PORTAL
            </span>

            <h1 id="student-login-title">
              Student Sign In
            </h1>

            <p>
              Sign in to access your examination dashboard
              and student services.
            </p>

          </div>


          {/* ===============================================
              FORM
          =============================================== */}

          <form
            className="student-login__form"
            onSubmit={handleSubmit}
          >


            {/* =============================================
                STUDENT ID
            ============================================= */}

            <div className="student-login__field">

              <label htmlFor="student-id">
                Student ID
              </label>

              <div className="student-login__input">

                <span className="student-login__input-icon">
                  <UserIcon />
                </span>

                <input
                  id="student-id"
                  name="studentId"
                  type="text"
                  placeholder="Enter your Student ID"
                  value={studentId}
                  onChange={(event) =>
                    setStudentId(event.target.value)
                  }
                  autoComplete="username"
                  required
                />

              </div>

            </div>


            {/* =============================================
                PASSWORD
            ============================================= */}

            <div className="student-login__field">

              <div className="student-login__field-heading">

                <label htmlFor="password">
                  Password
                </label>

                <Link
                  href="/examination/support"
                  className="student-login__forgot"
                >
                  Need help?
                </Link>

              </div>


              <div className="student-login__input">

                <span className="student-login__input-icon">
                  <LockIcon />
                </span>

                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  autoComplete="current-password"
                  required
                />


                <button
                  type="button"
                  className="student-login__password-toggle"
                  onClick={() =>
                    setShowPassword((current) => !current)
                  }
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >

                  {showPassword ? (
                    <EyeOffIcon />
                  ) : (
                    <EyeIcon />
                  )}

                </button>

              </div>

            </div>


            {/* =============================================
                SIGN IN BUTTON
            ============================================= */}

            <button
              type="submit"
              className="student-login__submit"
            >

              <span>
                Sign in to Student Portal
              </span>

              <span className="student-login__submit-icon">
                <ArrowIcon />
              </span>

            </button>


            {/* =============================================
                SECURITY
            ============================================= */}

            <div className="student-login__security">

              <ShieldIcon />

              <span>
                Secure student access
              </span>

            </div>

          </form>


          {/* ===============================================
              SUPPORT
          =============================================== */}

          <div className="student-login__support">

            <div className="student-login__support-icon">
              <SupportIcon />
            </div>


            <div className="student-login__support-content">

              <strong>
                Need assistance?
              </strong>

              <span>
                Having trouble accessing your account?
              </span>

              <Link href="/examination/support">

                Contact Help &amp; Support

                <ArrowIcon />

              </Link>

            </div>

          </div>


        </section>

      </div>


      {/* ===================================================
          FOOTER
      =================================================== */}

      <footer className="student-login__footer">

        <span>
          © 2026 Bheem Sevak Samiti
        </span>


        <div className="student-login__footer-links">

          <Link href="/examination">
            Examination Portal
          </Link>

          <span>
            •
          </span>

          <Link href="/">
            Main Website
          </Link>

        </div>


        <span>
          Official Student Portal
        </span>

      </footer>


    </main>
  );
}