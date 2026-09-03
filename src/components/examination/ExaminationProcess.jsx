import Link from "next/link";

import "@/styles/examination/examination-process.css";


const processSteps = [
  {
    number: "01",
    title: "Choose an Examination",
    description:
      "Select the examination you wish to apply for.",
  },
  {
    number: "02",
    title: "Check Eligibility",
    description:
      "Review the required eligibility criteria carefully.",
  },
  {
    number: "03",
    title: "Complete Application",
    description:
      "Submit your application with the required information.",
  },
  {
    number: "04",
    title: "Receive Updates",
    description:
      "Stay informed through official examination notices.",
  },
  {
    number: "05",
    title: "Attend Examination",
    description:
      "Follow the official schedule and examination instructions.",
  },
];


export default function ExaminationProcess() {
  return (
    <section className="exam-process">

      <div className="exam-process__container">


        {/* ============================================
            HEADING
        ============================================ */}

        <header className="exam-process__heading">

          <span className="exam-process__eyebrow">
            EXAMINATION GUIDELINE
          </span>

          <h2>
            Examination Process
          </h2>

          <p>
            A simple step-by-step guide for participating
            in an official examination.
          </p>

        </header>


        {/* ============================================
            PROCESS STEPS
        ============================================ */}

        <div className="exam-process__steps">

          {processSteps.map((step, index) => (

            <div
              key={step.number}
              className="exam-process__step"
            >

              <div className="exam-process__step-top">

                <span className="exam-process__number">
                  {step.number}
                </span>

                {index < processSteps.length - 1 && (
                  <span
                    className="exam-process__line"
                    aria-hidden="true"
                  />
                )}

              </div>


              <div className="exam-process__content">

                <h3>
                  {step.title}
                </h3>

                <p>
                  {step.description}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* ============================================
            ACTION
        ============================================ */}

        <div className="exam-process__footer">

          <Link
            href="/examination/examinations"
            className="exam-process__button"
          >
            <span>
              Explore Examinations
            </span>

            <span
              aria-hidden="true"
              className="exam-process__button-arrow"
            >
              →
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}