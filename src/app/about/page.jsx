import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "../../styles/about-page.css";

export const metadata = {
  title: "About Bheem Sevak Samiti | Our Mission & Vision",
  description:
    "Learn about Bheem Sevak Samiti, its journey, mission, vision and commitment to education, social reform, environmental protection and community development.",
};

const focusAreas = [
  {
    number: "01",
    title: "Education",
    text: "Creating learning opportunities for children and encouraging students to pursue education.",
  },
  {
    number: "02",
    title: "Social Reform",
    text: "Promoting equality, awareness, social responsibility and positive change in communities.",
  },
  {
    number: "03",
    title: "Environment",
    text: "Encouraging environmental awareness, tree plantation and responsible community action.",
  },
  {
    number: "04",
    title: "Community Service",
    text: "Supporting people and communities through meaningful social and educational initiatives.",
  },
];

const objectives = [
  "Provide educational support to children from underprivileged and needy communities.",
  "Promote free learning opportunities and educational resources in rural areas.",
  "Create awareness among students and families about the importance of education.",
  "Conduct awareness campaigns against social evils, substance abuse and child marriage.",
  "Promote environmental protection and tree plantation.",
  "Encourage youth and volunteers to participate in social service.",
  "Promote equality, brotherhood, social justice and humanitarian values.",
  "Encourage students through educational, competitive and recognition programs.",
];

const priorities = [
  "Expand educational opportunities for more children.",
  "Strengthen free learning initiatives in rural communities.",
  "Connect more young people and volunteers with social service.",
  "Increase environmental awareness and plantation activities.",
];

export default function AboutPage() {
  return (
    <main className="about-page">
      {/* ==================================================
          ORIGINAL NAVBAR — DO NOT MODIFY
      ================================================== */}
      <Navbar />

      {/* ==================================================
          HERO
      ================================================== */}
      <section className="about-hero">
        <div className="about-container">
          <div className="about-hero-content">
            <span className="about-kicker">ABOUT BHEEM SEVAK SAMITI</span>

            <h1>
              Building a more
              <span>educated & equal society.</span>
            </h1>

            <p>
              Bheem Sevak Samiti is a social and educational organization
              working to create meaningful change through education, social
              awareness, environmental protection and community service.
            </p>

            <div className="about-hero-details">
              <div className="about-hero-detail">
                <strong>2018</strong>
                <span>Established</span>
              </div>

              <div className="about-hero-detail">
                <strong>Uttar Pradesh</strong>
                <span>Primary working region</span>
              </div>

              <div className="about-hero-detail">
                <strong>Community</strong>
                <span>Driven by service</span>
              </div>
            </div>
          </div>

          <div className="about-hero-visual">
            <div className="about-hero-image-wrap">
              <Image
                src="/images/about/founder.png"
                alt="Founder of Bheem Sevak Samiti"
                width={650}
                height={650}
                priority
                className="about-hero-image"
              />

              <div className="about-hero-badge">
                <span>OUR JOURNEY</span>
                <strong>Since 2018</strong>
              </div>
            </div>

            <div className="about-hero-note">
              <span>Our belief</span>
              <strong>
                Education can become the beginning of lasting social change.
              </strong>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          OUR STORY
      ================================================== */}
      <section className="about-story" id="who-we-are">
        <div className="about-container">
          <div className="about-story-intro">
            <span className="about-kicker">WHO WE ARE</span>

            <h2>
              A journey built around
              <span>education, awareness & service.</span>
            </h2>
          </div>

          <div className="about-story-body">
            <p>
              Bheem Sevak Samiti was established on 9 April 2018 in Sunehti
              Khadkhadi, Saharanpur, Uttar Pradesh.
            </p>

            <p>
              The organization was founded with a focus on education, social
              awareness, social reform and environmental protection. Its
              efforts are aimed at supporting underprivileged and needy
              communities and creating opportunities for positive development.
            </p>

            <p>
              The organization believes that an educated and aware individual
              can contribute to a stronger, more equal and responsible society.
            </p>

            <div className="about-story-signature">
              <span>Established</span>
              <strong>09.04.2018</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          FOUNDER
      ================================================== */}
      <section className="about-founder" id="founder">
        <div className="about-container">
          <div className="about-founder-card">
            <div className="about-founder-photo">
              <Image
                src="/images/about/founder.png"
                alt="Shri Vikas Kumar, Founder and National President"
                width={700}
                height={700}
                className="about-founder-image"
              />
            </div>

            <div className="about-founder-content">
              <span className="about-kicker">LEADERSHIP</span>

              <h2>
                Shri Vikas Kumar
                <span>Founder & National President</span>
              </h2>

              <p>
                Shri Vikas Kumar has played an important role in establishing
                and developing Bheem Sevak Samiti. Under his leadership, the
                organization continues to work across educational, social and
                environmental initiatives.
              </p>

              <div className="about-founder-line">
                <span />
                <small>Bheem Sevak Samiti</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          VISION & MISSION
      ================================================== */}
      <section className="about-direction" id="vision-mission">
        <div className="about-container">
          <div className="about-section-heading">
            <span className="about-kicker">OUR DIRECTION</span>

            <h2>
              What we believe.
              <span>What we work for.</span>
            </h2>
          </div>

          <div className="about-direction-grid">
            <article className="about-direction-card about-direction-card--vision">
              <span className="about-card-number">01</span>

              <div>
                <small>OUR VISION</small>

                <h3>An educated, aware and equal society.</h3>

                <p>
                  We envision a society where every individual has access to
                  education, dignity, equal opportunity and social justice.
                </p>
              </div>
            </article>

            <article className="about-direction-card about-direction-card--mission">
              <span className="about-card-number">02</span>

              <div>
                <small>OUR MISSION</small>

                <h3>Empower communities through education and awareness.</h3>

                <p>
                  Our mission is to support weaker and underserved communities
                  through education, social reform, environmental awareness and
                  community participation.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ==================================================
          FOCUS AREAS
      ================================================== */}
      <section className="about-focus" id="work-areas">
        <div className="about-container">
          <div className="about-focus-header">
            <div>
              <span className="about-kicker">WHAT WE DO</span>

              <h2>
                Four areas.
                <span>One purpose.</span>
              </h2>
            </div>

            <p>
              Our work focuses on practical initiatives that encourage
              education, awareness, responsibility and community development.
            </p>
          </div>

          <div className="about-focus-grid">
            {focusAreas.map((area) => (
              <article className="about-focus-card" key={area.number}>
                <span className="about-focus-number">{area.number}</span>

                <div className="about-focus-icon">
                  <span />
                </div>

                <h3>{area.title}</h3>

                <p>{area.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          OBJECTIVES
      ================================================== */}
      <section className="about-objectives" id="objectives">
        <div className="about-container">
          <div className="about-objectives-layout">
            <div className="about-objectives-heading">
              <span className="about-kicker">OUR OBJECTIVES</span>

              <h2>
                Turning our
                <span>purpose into action.</span>
              </h2>

              <p>
                Our objectives guide the way we design and support educational,
                social and environmental initiatives.
              </p>
            </div>

            <div className="about-objectives-list">
              {objectives.map((objective, index) => (
                <div className="about-objective-item" key={index}>
                  <span>{String(index + 1).padStart(2, "0")}</span>

                  <p>{objective}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          REACH
      ================================================== */}
      <section className="about-reach" id="working-area">
        <div className="about-container">
          <div className="about-reach-inner">
            <div className="about-reach-content">
              <span className="about-kicker">OUR REACH</span>

              <h2>
                From local communities
                <span>towards wider impact.</span>
              </h2>

              <p>
                Bheem Sevak Samiti primarily works across areas of Uttar
                Pradesh and Uttarakhand, with a special focus on rural and
                underserved communities.
              </p>
            </div>

            <div className="about-reach-location">
              <span>PRIMARY REGION</span>

              <strong>Uttar Pradesh</strong>

              <small>Working towards communities across the region</small>

              <div className="about-reach-divider" />

              <span>EXTENDED REACH</span>

              <strong>Uttarakhand</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          LOOKING AHEAD
      ================================================== */}
      <section className="about-future" id="future-priorities">
        <div className="about-container">
          <div className="about-section-heading about-section-heading--center">
            <span className="about-kicker">LOOKING AHEAD</span>

            <h2>
              Continuing the
              <span>journey forward.</span>
            </h2>

            <p>
              We aim to deepen our work and create more opportunities for
              children, young people and communities.
            </p>
          </div>

          <div className="about-future-grid">
            {priorities.map((priority, index) => (
              <div className="about-future-item" key={index}>
                <span>✓</span>
                <p>{priority}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================================================
          FINAL MESSAGE
      ================================================== */}
      <section className="about-final">
        <div className="about-container">
          <div className="about-final-inner">
            <span className="about-kicker">OUR BELIEF</span>

            <h2>
              Educate.
              <span>Organize. Empower.</span>
            </h2>

            <p>
              We believe that education creates awareness, awareness creates
              participation, and participation can lead to meaningful social
              change.
            </p>
          </div>
        </div>
      </section>

      {/* ==================================================
          ORIGINAL FOOTER
      ================================================== */}
      <Footer />
    </main>
  );
}