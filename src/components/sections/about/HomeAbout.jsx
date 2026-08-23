import Link from "next/link";
import Image from "next/image";

import "../../../styles/about-page.css";

export default function HomeAbout() {
  return (
    <section
      className="home-about"
      id="about"
      aria-labelledby="home-about-title"
    >
      <div className="home-about__container">
        {/* ==================================================
                   LEFT CONTENT
                ================================================== */}

        <div className="home-about__content">
          <span className="home-about__eyebrow">ABOUT BHEEM SEVAK SAMITI</span>

          <h2 id="home-about-title" className="home-about__title">
            शिक्षा से जागरूकता,
            <span>जागरूकता से बदलाव।</span>
          </h2>

          <p className="home-about__intro">
            भीम सेवक समिति, उत्तर प्रदेश एक सामाजिक एवं शैक्षिक संस्था है, जिसकी
            स्थापना 9 अप्रैल 2018 को ग्राम सुनेहटी खड़खड़ी, जनपद सहारनपुर, उत्तर
            प्रदेश में की गई।
          </p>

          <p className="home-about__text">
            संस्था शिक्षा, सामाजिक सुधार, पर्यावरण संरक्षण एवं जन-जागरूकता के
            माध्यम से समाज के गरीब, वंचित एवं जरूरतमंद वर्गों को सशक्त बनाने के
            लिए निरंतर कार्य कर रही है।
          </p>

          {/* ==================================================
                       KEY VALUES
                    ================================================== */}

          <div className="home-about__values">
            <div className="home-about__value">
              <span className="home-about__value-number">01</span>

              <div>
                <strong>शिक्षा</strong>

                <span>Free Education</span>
              </div>
            </div>

            <div className="home-about__value">
              <span className="home-about__value-number">02</span>

              <div>
                <strong>सामाजिक सुधार</strong>

                <span>Social Awareness</span>
              </div>
            </div>

            <div className="home-about__value">
              <span className="home-about__value-number">03</span>

              <div>
                <strong>पर्यावरण</strong>

                <span>Environment Protection</span>
              </div>
            </div>
          </div>

          {/* ==================================================
                       CTA
                    ================================================== */}

          <div className="home-about__actions">
            <Link href="/about" className="home-about__button">
              <span>Know More About Us</span>

              <span className="home-about__button-arrow" aria-hidden="true">
                →
              </span>
            </Link>

            <div className="home-about__founder">
              <span>Founded & Led by</span>

              <strong>Shri Vikas Kumar</strong>
            </div>
          </div>
        </div>

        {/* ==================================================
                   RIGHT VISUAL
                ================================================== */}

        <div className="home-about__visual">
          <div className="home-about__visual-glow" />

          {/* Decorative ring */}

          <div className="home-about__ring" />

          {/* Building */}

          <div className="home-about__image-frame">
            <Image
              src="/images/hero/hero-building.png"
              alt="Bheem Sevak Samiti building"
              className="home-about__image"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* ==================================================
                       ESTABLISHED CARD
                    ================================================== */}

          <div className="home-about__established">
            <span className="home-about__established-year">2018</span>

            <div>
              <strong>Established</strong>

              <span>Serving society with education & awareness</span>
            </div>
          </div>

          {/* ==================================================
                       SLOGAN CARD
                    ================================================== */}

          <div className="home-about__slogan">
            <span className="home-about__slogan-mark">“</span>

            <p>शिक्षित बनो, संगठित रहो, संघर्ष करो</p>
          </div>
        </div>
      </div>
    </section>
  );
}
