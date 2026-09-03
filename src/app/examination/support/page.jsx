import Link from "next/link";

import PortalHeader from "@/components/examination/PortalHeader";

import "@/styles/examination/support-page.css";


/* =========================================================
   HELP & SUPPORT PAGE
   BHEEM SEVAK SAMITI EXAMINATION PORTAL
========================================================= */

export const metadata = {
  title: "Help & Support | Bheem Sevak Samiti Examination Portal",

  description:
    "Get help and support for examination information, registration, notices, student services and other examination portal assistance.",
};


/* =========================================================
   ICONS
========================================================= */

function HelpIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M9.8 9a2.3 2.3 0 1 1 4.2 1.3c-.9 1.2-2 1.5-2 3" />
      <path d="M12 16.5h.01" />
    </svg>
  );
}


function ExaminationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M8.5 8h7" />
      <path d="M8.5 12h7" />
      <path d="M8.5 16h4" />
    </svg>
  );
}


function RegistrationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 4.5h10" />
      <path d="M7 19.5h10" />
      <path d="M6 4.5v15" />
      <path d="M18 4.5v15" />
      <path d="M9 9h6" />
      <path d="M9 13h4" />
    </svg>
  );
}


function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="8" r="3" />
      <path d="M5.5 19c.8-3.2 3-4.8 6.5-4.8s5.7 1.6 6.5 4.8" />
    </svg>
  );
}


function NoticeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 9.5a6 6 0 0 0-12 0v5l-1.5 2h15L18 14.5z" />
      <path d="M9.5 19a3 3 0 0 0 5 0" />
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


function ContactIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 5.5h15v13h-15z" />
      <path d="m5 7 7 5 7-5" />
    </svg>
  );
}


/* =========================================================
   SUPPORT CATEGORIES
========================================================= */

const supportCategories = [
  {
    number: "01",
    title: "Examination Information",
    description:
      "Find guidance about the examination process, participation journey and important examination stages.",
    href: "/examination/examinations",
    icon: <ExaminationIcon />,
  },

  {
    number: "02",
    title: "Registration Assistance",
    description:
      "Review important information related to registration and application procedures.",
    href: "/examination/examinations",
    icon: <RegistrationIcon />,
  },

  {
    number: "03",
    title: "Student Services",
    description:
      "Access student-specific examination services and information through the student portal.",
    href: "/examination/login",
    icon: <UserIcon />,
  },

  {
    number: "04",
    title: "Notices & Updates",
    description:
      "Stay informed with official examination notices, announcements and important updates.",
    href: "/examination/notices",
    icon: <NoticeIcon />,
  },
];


/* =========================================================
   FAQ DATA
========================================================= */

const faqs = [
  {
    question:
      "Where can I find examination information?",

    answer:
      "General information about the examination process and important stages is available on the Examinations section of the portal.",
  },

  {
    question:
      "Where can I check official examination notices?",

    answer:
      "Official announcements, important notifications and examination-related updates are available on the Notices page.",
  },

  {
    question:
      "How can I access student-specific information?",

    answer:
      "Student-specific examination services and personal information can be accessed through the Student Login section.",
  },

  {
    question:
      "What should I do if I need additional assistance?",

    answer:
      "If the available information does not answer your question, you can contact the appropriate support team through our Contact page.",
  },
];


/* =========================================================
   HELP & SUPPORT PAGE
========================================================= */

export default function SupportPage() {
  return (
    <main className="support-page">

      {/* ===================================================
          PORTAL HEADER
      =================================================== */}

      <PortalHeader />


      {/* ===================================================
          HERO
      =================================================== */}

      <section className="support-hero">

        <div className="support-container">

          <div className="support-hero__content">

            <span className="support-eyebrow">
              BHEEM SEVAK SAMITI
            </span>

            <h1>
              Help and support
              <span> when you need it.</span>
            </h1>

            <p>
              Find guidance, official information and quick access to
              important examination services through our Examination
              Portal Support Centre.
            </p>

          </div>


          <div className="support-hero__panel">

            <div className="support-hero__icon">
              <HelpIcon />
            </div>

            <div>

              <span>
                EXAMINATION SUPPORT CENTRE
              </span>

              <strong>
                Find the right information and guidance.
              </strong>

              <p>
                Explore examination services, notices and support resources
                from one organised place.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* ===================================================
          QUICK SUPPORT
      =================================================== */}

      <section className="support-categories">

        <div className="support-container">

          <div className="support-section-heading">

            <span>
              QUICK SUPPORT
            </span>

            <h2>
              Find help for what you need.
            </h2>

            <p>
              Select a support category to access the most relevant
              examination information and services.
            </p>

          </div>


          <div className="support-categories__grid">

            {supportCategories.map((category) => (

              <Link
                key={category.number}
                href={category.href}
                className="support-category-card"
              >

                <div className="support-category-card__top">

                  <span className="support-category-card__number">
                    {category.number}
                  </span>

                  <span className="support-category-card__icon">
                    {category.icon}
                  </span>

                </div>


                <div className="support-category-card__content">

                  <h3>
                    {category.title}
                  </h3>

                  <p>
                    {category.description}
                  </p>

                </div>


                <span className="support-category-card__action">

                  <span>
                    Explore
                  </span>

                  <ArrowIcon />

                </span>

              </Link>

            ))}

          </div>

        </div>

      </section>



      {/* ===================================================
          SUPPORT JOURNEY
      =================================================== */}

      <section className="support-process">

        <div className="support-container">

          <div className="support-process__layout">


            <div className="support-process__intro">

              <span>
                HOW SUPPORT WORKS
              </span>

              <h2>
                A simple way to find the right help.
              </h2>

              <p>
                The Examination Portal is organised to help visitors and
                participants quickly locate information and access the
                appropriate service.
              </p>

            </div>


            <div className="support-process__steps">


              <article className="support-process__step">

                <span className="support-process__number">
                  01
                </span>

                <div>

                  <span className="support-process__label">
                    STEP ONE
                  </span>

                  <h3>
                    Choose your topic
                  </h3>

                  <p>
                    Select the area where you need information or support.
                  </p>

                </div>

              </article>


              <article className="support-process__step">

                <span className="support-process__number">
                  02
                </span>

                <div>

                  <span className="support-process__label">
                    STEP TWO
                  </span>

                  <h3>
                    Review available guidance
                  </h3>

                  <p>
                    Check official information, notices and available portal
                    guidance related to your requirement.
                  </p>

                </div>

              </article>


              <article className="support-process__step">

                <span className="support-process__number">
                  03
                </span>

                <div>

                  <span className="support-process__label">
                    STEP THREE
                  </span>

                  <h3>
                    Access the appropriate service
                  </h3>

                  <p>
                    Continue to the relevant examination service or contact
                    support if additional assistance is required.
                  </p>

                </div>

              </article>


            </div>

          </div>

        </div>

      </section>



      {/* ===================================================
          FAQ
      =================================================== */}

      <section className="support-faq">

        <div className="support-container">

          <div className="support-section-heading support-section-heading--center">

            <span>
              FREQUENTLY ASKED QUESTIONS
            </span>

            <h2>
              Answers to common questions.
            </h2>

            <p>
              Find quick answers to commonly asked questions about the
              Examination Portal and available services.
            </p>

          </div>


          <div className="support-faq__list">

            {faqs.map((faq, index) => (

              <details
                key={faq.question}
                className="support-faq__item"
              >

                <summary>

                  <span className="support-faq__number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="support-faq__question">
                    {faq.question}
                  </span>

                  <span className="support-faq__toggle">
                    +
                  </span>

                </summary>


                <div className="support-faq__answer">

                  <p>
                    {faq.answer}
                  </p>

                </div>

              </details>

            ))}

          </div>

        </div>

      </section>



      {/* ===================================================
          CONTACT SUPPORT
      =================================================== */}

      <section className="support-contact">

        <div className="support-container">

          <div className="support-contact__card">


            <div className="support-contact__content">

              <span>
                NEED MORE HELP?
              </span>

              <h2>
                Contact the appropriate support team.
              </h2>

              <p>
                If you need additional assistance beyond the information
                available on the Examination Portal, visit our Contact page
                to get in touch with the appropriate team.
              </p>

            </div>


            <Link
              href="/contact"
              className="support-contact__button"
            >

              <span className="support-contact__button-icon">
                <ContactIcon />
              </span>

              <span>
                Contact Us
              </span>

              <ArrowIcon />

            </Link>


          </div>

        </div>

      </section>

    </main>
  );
}