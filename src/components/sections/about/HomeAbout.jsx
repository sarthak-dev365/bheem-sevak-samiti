import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiBookOpen, FiUsers, FiGlobe } from "react-icons/fi";

import "@/styles/about.css";

export default function HomeAbout() {
  return (
    <section
      className="home-about"
      id="about"
      aria-labelledby="home-about-title"
    >
      <div className="home-about__container">

        {/* ==================================================
           LEFT — CONTENT
        ================================================== */}

        <div className="home-about__content">

          <div className="home-about__heading">
            <span className="home-about__eyebrow">
              ABOUT BHEEM SEVAK SAMITI
            </span>

            <h2 id="home-about-title">
              Working for a
              <span>Better & Aware Society</span>
            </h2>
          </div>

          <p className="home-about__intro">
            Bheem Sevak Samiti is a social and educational organization
            working to promote education, social awareness and environmental
            responsibility among communities.
          </p>

          <p className="home-about__text">
            Established in 2018 in Saharanpur, Uttar Pradesh, the organization
            focuses on empowering children, youth and communities through
            meaningful social initiatives.
          </p>


          {/* ==================================================
             KEY AREAS
          ================================================== */}

          <div className="home-about__areas">

            <div className="home-about__area">
              <div className="home-about__area-icon">
                <FiBookOpen />
              </div>

              <div>
                <strong>Education</strong>
                <span>Creating learning opportunities</span>
              </div>
            </div>


            <div className="home-about__area">
              <div className="home-about__area-icon">
                <FiUsers />
              </div>

              <div>
                <strong>Social Awareness</strong>
                <span>Building stronger communities</span>
              </div>
            </div>


            <div className="home-about__area">
              <div className="home-about__area-icon">
                <FiGlobe />
              </div>

              <div>
                <strong>Environment</strong>
                <span>Promoting a greener future</span>
              </div>
            </div>

          </div>


          {/* ==================================================
             BOTTOM ACTION
          ================================================== */}

          <div className="home-about__bottom">

            <Link
              href="/about"
              className="home-about__button"
            >
              <span>Discover Our Story</span>
              <FiArrowRight />
            </Link>


            <div className="home-about__founded">

              <span>Established</span>

              <strong>2018</strong>

              <small>
                Uttar Pradesh
              </small>

            </div>

          </div>

        </div>


        {/* ==================================================
           RIGHT — VISUAL
        ================================================== */}

        <div className="home-about__visual">

          <div className="home-about__visual-bg" />

          <div className="home-about__image-wrapper">

            <Image
              src="/images/hero/hero-building.png"
              alt="Bheem Sevak Samiti building"
              className="home-about__image"
              fill
              sizes="(max-width: 768px) 100vw, 48vw"
            />

          </div>


          {/* ==================================================
             ESTABLISHED BADGE
          ================================================== */}

          <div className="home-about__year-card">

            <span>Since</span>

            <strong>2018</strong>

            <small>
              Serving society
            </small>

          </div>


          {/* ==================================================
             SLOGAN
          ================================================== */}

          <div className="home-about__quote">

            <span>OUR BELIEF</span>

            <p>
              Educate.
              <br />
              Organize.
              <br />
              Empower.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}