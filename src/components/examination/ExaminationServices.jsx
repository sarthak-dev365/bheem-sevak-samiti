import Link from "next/link";

import "@/styles/examination/services.css";


/* =========================================================
   EXAMINATION PORTAL — SERVICES
========================================================= */

const services = [
  {
    number: "01",
    title: "Available Examinations",
    description:
      "Explore available examinations and access complete examination information.",
    href: "/examination/examinations",
  },
  {
    number: "02",
    title: "Official Notices",
    description:
      "Stay updated with important announcements and official examination notices.",
    href: "/examination/notices",
  },
  {
    number: "03",
    title: "Student Login",
    description:
      "Access your student account and manage examination-related activities.",
    href: "/examination/login",
  },
  {
    number: "04",
    title: "Help & Support",
    description:
      "Get assistance and find answers to examination-related questions.",
    href: "/examination/support",
  },
];


export default function ExaminationServices() {
  return (
    <section className="exam-services">

      <div className="exam-services__container">

        {/* =============================================
            SECTION HEADING
        ============================================== */}

        <div className="exam-services__heading">
          <h2>
            Our Services
          </h2>
        </div>


        {/* =============================================
            SERVICES GRID
        ============================================== */}

        <div className="exam-services__grid">

          {services.map((service) => (

            <Link
              key={service.number}
              href={service.href}
              className="exam-service-card"
            >

              {/* CARD TOP */}

              <div className="exam-service-card__header">

                <span className="exam-service-card__number">
                  {service.number}
                </span>

                <span
                  className="exam-service-card__arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </div>


              {/* CARD CONTENT */}

              <div className="exam-service-card__content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  );
}