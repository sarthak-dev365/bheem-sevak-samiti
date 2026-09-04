"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiBookOpen,
  FiHeart,
  FiUsers,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

import "../../styles/hero.css";

const IMPACT_STATS = [
  {
    value: "500+",
    label: "Students Educated",
    icon: <FiBookOpen />,
    accent: "orange",
  },
  {
    value: "100+",
    label: "Trees Planted",
    icon: <FiGlobe />,
    accent: "green",
  },
  {
    value: "50+",
    label: "Community Programs",
    icon: <FiUsers />,
    accent: "blue",
  },
  {
    value: "1000+",
    label: "Lives Impacted",
    icon: <FiHeart />,
    accent: "red",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="hero__background" aria-hidden="true">
        <span className="hero__grid hero__grid--left" />
        <span className="hero__grid hero__grid--right" />
        <span className="hero__orb hero__orb--one" />
        <span className="hero__orb hero__orb--two" />
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div className="hero__container">

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div className="hero__content">

          {/* Trust Badge */}

          <div className="hero__badge">
            <span className="hero__badge-icon" aria-hidden="true">
              <FiUsers />
            </span>

            <span className="hero__badge-title">
              Registered NGO
            </span>

            <span className="hero__badge-dot" aria-hidden="true">
              •
            </span>

            <span className="hero__badge-year">
              Since 2018
            </span>
          </div>

          {/* Main Heading */}

          <h1 className="hero__title">
            Empowering society
            <span>through education,</span>
            <strong>service &amp; change.</strong>
          </h1>

          {/* Description */}

          <p className="hero__description">
            Bheem Sevak Samiti works for education, social development,
            environmental protection and community welfare—creating
            opportunities for a stronger and more inclusive society.
          </p>

          {/* CTA */}

          <div className="hero__actions">
            <Link
              href="/donate-us"
              className="hero__button hero__button--primary"
            >
              <FiHeart aria-hidden="true" />

              <span>Donate Now</span>

              <FiArrowRight
                className="hero__button-arrow"
                aria-hidden="true"
              />
            </Link>

            <Link
              href="/join-us"
              className="hero__button hero__button--secondary"
            >
              <FiUsers aria-hidden="true" />

              <span>Join Us</span>
            </Link>
          </div>

          {/* Impact Statistics */}

          <div
            className="hero__stats"
            aria-label="Our impact statistics"
          >
            {IMPACT_STATS.map((stat) => (
              <div
                className={`hero__stat hero__stat--${stat.accent}`}
                key={stat.label}
              >
                <div className="hero__stat-icon" aria-hidden="true">
                  {stat.icon}
                </div>

                <div className="hero__stat-content">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===================================================
            RIGHT VISUAL
        =================================================== */}

        <div className="hero__visual">

          <div className="hero__image-area">

            {/* Decorative Ring */}

            <div
              className="hero__image-ring"
              aria-hidden="true"
            />

            {/* Main Image */}

            <div className="hero__image">
              <Image
                src="/images/hero/hero-building.png"
                alt="Bheem Sevak Samiti building"
                fill
                priority
                quality={80}
                sizes="
                  (max-width: 640px) 90vw,
                  (max-width: 900px) 82vw,
                  (max-width: 1200px) 50vw,
                  48vw
                "
                className="hero__image-img"
              />
            </div>

            {/* Small Floating Badge */}

            <div className="hero__service-card">
              <div className="hero__service-icon">
                <FiCheckCircle aria-hidden="true" />
              </div>

              <div className="hero__service-content">
                <strong>Serving Society</strong>

                <span>
                  Education • Service • Environment
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}