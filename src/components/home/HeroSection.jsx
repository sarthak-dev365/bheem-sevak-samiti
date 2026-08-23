"use client";

import Image from "next/image";
import Link from "next/link";
import "../../styles/hero.css";

/*
============================================================
BHEEM SEVAK SAMITI
HERO SECTION
FINAL PRODUCTION VERSION
============================================================
*/

const IMPACT_STATS = [
  {
    value: "500+",
    label: "Students Educated",
    icon: "🎓",
    accent: "orange",
  },
  {
    value: "100+",
    label: "Trees Planted",
    icon: "🌱",
    accent: "green",
  },
  {
    value: "50+",
    label: "Community Programs",
    icon: "👥",
    accent: "blue",
  },
  {
    value: "1000+",
    label: "Lives Impacted",
    icon: "❤",
    accent: "red",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* ======================================================
          BACKGROUND DECORATION
      ====================================================== */}

      <div className="hero-bg-pattern" aria-hidden="true">
        <span className="hero-dot-grid hero-dot-grid-left" />
        <span className="hero-dot-grid hero-dot-grid-right" />
        <span className="hero-ring hero-ring-left" />
      </div>

      {/* ======================================================
          MAIN HERO CONTAINER
      ====================================================== */}

      <div className="hero-container">
        {/* ====================================================
            LEFT CONTENT
        ==================================================== */}

        <div className="hero-content">
          {/* TRUST BADGE */}

          <div className="hero-badge">
            <span className="hero-badge-icon" aria-hidden="true">
              👥
            </span>

            <span className="hero-badge-text">
              Registered NGO
            </span>

            <span
              className="hero-badge-separator"
              aria-hidden="true"
            >
              •
            </span>

            <span className="hero-badge-year">
              Since 2018
            </span>
          </div>

          {/* ==================================================
              MAIN HEADING
          ================================================== */}

          <h1 className="hero-title">
            शिक्षा से{" "}
            <span className="hero-title-primary">
              सशक्त समाज,
            </span>

            <br />

            सेवा से{" "}
            <span className="hero-title-accent">
              बेहतर भविष्य।
            </span>
          </h1>

          {/* ==================================================
              DESCRIPTION
          ================================================== */}

          <p className="hero-description">
            भीम सेवक समिति शिक्षा, सामाजिक उत्थान, पर्यावरण
            संरक्षण तथा मानव सेवा के माध्यम से समाज के अंतिम
            व्यक्ति तक अवसर, सम्मान, समानता और विकास पहुँचाने
            के लिए प्रतिबद्ध है।
          </p>

          {/* ==================================================
              CTA BUTTONS
          ================================================== */}

          <div className="hero-actions">
            <Link
              href="/donate-us"
              className="hero-btn hero-btn-primary"
              aria-label="Donate Now"
            >
              <span
                className="hero-btn-icon"
                aria-hidden="true"
              >
                ♡
              </span>

              <span>Donate Now</span>

              <span
                className="hero-btn-arrow"
                aria-hidden="true"
              >
                →
              </span>
            </Link>

            <Link
              href="/join-us"
              className="hero-btn hero-btn-secondary"
              aria-label="Join Us"
            >
              <span
                className="hero-btn-icon"
                aria-hidden="true"
              >
                ♧
              </span>

              <span>Join Us</span>
            </Link>
          </div>

          {/* ==================================================
              IMPACT STATISTICS
          ================================================== */}

          <div
            className="hero-stats"
            aria-label="Our impact statistics"
          >
            {IMPACT_STATS.map((stat) => (
              <div
                className={`hero-stat-card hero-stat-${stat.accent}`}
                key={stat.label}
              >
                <div
                  className="hero-stat-icon"
                  aria-hidden="true"
                >
                  {stat.icon}
                </div>

                <div className="hero-stat-content">
                  <strong className="hero-stat-value">
                    {stat.value}
                  </strong>

                  <span className="hero-stat-label">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ====================================================
            RIGHT VISUAL
        ==================================================== */}

        <div className="hero-visual">
          {/* ==================================================
              BUILDING VISUAL
          ================================================== */}

          <div className="hero-building-wrapper">
            <div
              className="hero-building-glow"
              aria-hidden="true"
            />

            <div className="hero-building-image">
              <Image
                src="/images/hero/hero-building.png"
                alt="Bheem Sevak Samiti building"
                fill
                loading="eager"
                fetchPriority="high"
                quality={75}
                sizes="
                  (max-width: 576px) 88vw,
                  (max-width: 768px) 90vw,
                  (max-width: 1050px) 80vw,
                  (max-width: 1200px) 55vw,
                  50vw
                "
                className="hero-building-img"
              />
            </div>
          </div>

          {/* ==================================================
              FLOATING IMAGE BADGE
          ================================================== */}

          <div className="hero-visual-badge">
            <span
              className="hero-visual-badge-icon"
              aria-hidden="true"
            >
              ✓
            </span>

            <div className="hero-visual-badge-content">
              <strong>Serving Society</strong>

              <span>
                Education • Service • Environment
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}