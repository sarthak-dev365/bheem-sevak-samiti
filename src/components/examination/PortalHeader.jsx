"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import PortalLogo from "./PortalLogo";

import "@/styles/examination/header.css";


/* =========================================================
   NAVIGATION ITEMS
========================================================= */

const navigationItems = [
  {
    label: "Home",
    href: "/examination",
    icon: "home",
  },
  {
    label: "Examinations",
    href: "/examination/examinations",
    icon: "exam",
  },
  {
    label: "Notices",
    href: "/examination/notices",
    icon: "notice",
  },
  {
    label: "Help & Support",
    href: "/examination/support",
    icon: "help",
  },
];


/* =========================================================
   INLINE ICON
   No external icon package required
========================================================= */

function NavIcon({ type }) {
  if (type === "home") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M3.5 10.5 12 3.8l8.5 6.7" />
        <path d="M5.5 9.5v10h13v-10" />
        <path d="M9.5 19.5v-5h5v5" />
      </svg>
    );
  }

  if (type === "exam") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <rect
          x="5"
          y="3.5"
          width="14"
          height="17"
          rx="2"
        />
        <path d="M8.5 8h7" />
        <path d="M8.5 12h7" />
        <path d="M8.5 16h4" />
      </svg>
    );
  }

  if (type === "notice") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M18 9.5a6 6 0 0 0-12 0v5l-1.5 2h15L18 14.5z" />
        <path d="M9.5 19a3 3 0 0 0 5 0" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="8.5"
      />
      <path d="M9.8 9a2.3 2.3 0 1 1 4.2 1.3c-.9 1.2-2 1.5-2 3" />
      <path d="M12 16.5h.01" />
    </svg>
  );
}


/* =========================================================
   BUTTON ICONS
========================================================= */

function WebsiteIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <rect
        x="4"
        y="5"
        width="16"
        height="14"
        rx="2"
      />
      <path d="M4 9h16" />
      <path d="M8 7h.01" />
      <path d="M11 7h.01" />
    </svg>
  );
}


function UserIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="8"
        r="3"
      />
      <path d="M5.5 19c.8-3.2 3-4.8 6.5-4.8s5.7 1.6 6.5 4.8" />
    </svg>
  );
}


/* =========================================================
   PORTAL HEADER
========================================================= */

export default function PortalHeader() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);


  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };


  /* =======================================================
     TOGGLE MOBILE MENU
  ======================================================= */

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
  };


  /* =======================================================
     ACTIVE NAVIGATION
  ======================================================= */

  const isActive = (href) => {
    if (href === "/examination") {
      return pathname === "/examination";
    }

    return pathname?.startsWith(href);
  };


  return (
    <header className="exam-header">

      <div className="exam-header__inner">


        {/* =================================================
            BRAND
        ================================================= */}

        <Link
          href="/examination"
          className="exam-header__brand"
          aria-label="Bheem Sevak Samiti Examination Portal"
          onClick={closeMobileMenu}
        >
          <PortalLogo />
        </Link>


        {/* =================================================
            DESKTOP NAVIGATION
        ================================================= */}

        <nav
          className="exam-header__navigation"
          aria-label="Examination portal navigation"
        >

          {navigationItems.map((item) => {

            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "exam-header__nav-link",
                  active
                    ? "exam-header__nav-link--active"
                    : "",
                ].join(" ")}
                aria-current={
                  active
                    ? "page"
                    : undefined
                }
              >

                <span className="exam-header__nav-icon">
                  <NavIcon type={item.icon} />
                </span>

                <span>
                  {item.label}
                </span>

              </Link>
            );
          })}

        </nav>


        {/* =================================================
            HEADER ACTIONS
        ================================================= */}

        <div className="exam-header__actions">

          <Link
            href="/"
            className="exam-header__main-website"
          >

            <span className="exam-header__button-icon">
              <WebsiteIcon />
            </span>

            <span>
              Main Website
            </span>

          </Link>


          <Link
            href="/examination/login"
            className="exam-header__login"
          >

            <span className="exam-header__login-icon">
              <UserIcon />
            </span>

            <span>
              Student Login
            </span>

            <span
              className="exam-header__login-arrow"
              aria-hidden="true"
            >
              →
            </span>

          </Link>

        </div>


        {/* =================================================
            MOBILE MENU BUTTON
        ================================================= */}

        <button
          type="button"
          className={[
            "exam-header__menu-button",
            mobileMenuOpen
              ? "exam-header__menu-button--open"
              : "",
          ].join(" ")}
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={mobileMenuOpen}
          aria-controls="examination-mobile-navigation"
          onClick={toggleMobileMenu}
        >

          <span />
          <span />
          <span />

        </button>

      </div>


      {/* ===================================================
          MOBILE NAVIGATION
      =================================================== */}

      <div
        id="examination-mobile-navigation"
        className={[
          "exam-header__mobile",
          mobileMenuOpen
            ? "exam-header__mobile--open"
            : "",
        ].join(" ")}
      >

        <nav
          className="exam-header__mobile-navigation"
          aria-label="Mobile examination navigation"
        >

          <div className="exam-header__mobile-links">

            {navigationItems.map((item) => {

              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "exam-header__mobile-link",
                    active
                      ? "exam-header__mobile-link--active"
                      : "",
                  ].join(" ")}
                  tabIndex={
                    mobileMenuOpen
                      ? 0
                      : -1
                  }
                  onClick={closeMobileMenu}
                >

                  <span className="exam-header__mobile-link-left">

                    <span className="exam-header__mobile-icon">
                      <NavIcon type={item.icon} />
                    </span>

                    <span>
                      {item.label}
                    </span>

                  </span>

                  <span
                    className="exam-header__mobile-arrow"
                    aria-hidden="true"
                  >
                    →
                  </span>

                </Link>
              );
            })}

          </div>


          {/* ===============================================
              MOBILE ACTIONS
          =============================================== */}

          <div className="exam-header__mobile-actions">

            <Link
              href="/"
              className="exam-header__mobile-main"
              tabIndex={
                mobileMenuOpen
                  ? 0
                  : -1
              }
              onClick={closeMobileMenu}
            >

              <span className="exam-header__button-icon">
                <WebsiteIcon />
              </span>

              Main Website

            </Link>


            <Link
              href="/examination/login"
              className="exam-header__mobile-login"
              tabIndex={
                mobileMenuOpen
                  ? 0
                  : -1
              }
              onClick={closeMobileMenu}
            >

              <span className="exam-header__login-icon">
                <UserIcon />
              </span>

              <span>
                Student Login
              </span>

              <span aria-hidden="true">
                →
              </span>

            </Link>

          </div>

        </nav>

      </div>

    </header>
  );
}