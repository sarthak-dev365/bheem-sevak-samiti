import Link from "next/link";

import "@/styles/examination/examinations-page.css";
import PortalHeader from "@/components/examination/PortalHeader";


/* =========================================================
   EXAMINATIONS INFORMATION PAGE
   BHEEM SEVAK SAMITI
========================================================= */

export const metadata = {
  title: "Examinations | Bheem Sevak Samiti",

  description:
    "Learn about the examination process, categories, registration procedure and important guidelines of Bheem Sevak Samiti.",
};


export default function ExaminationsPage() {
  return (
    <main className="examinations-page">

      <PortalHeader />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="examinations-hero">

        <div className="examinations-container">

          <div className="examinations-hero__content">

            <span className="examinations-eyebrow">
              BHEEM SEVAK SAMITI
            </span>

            <h1>
              Understand the
              <span> examination journey.</span>
            </h1>

            <p>
              Find clear information about our examination process,
              participation journey and important stages from registration
              to completion of the examination.
            </p>

          </div>


          <div className="examinations-hero__summary">

            <div className="examinations-summary__top">

              <span>
                EXAMINATION JOURNEY
              </span>

              <strong>
                01 — 05
              </strong>

            </div>


            <div className="examinations-summary__steps">

              <div>
                <span>01</span>
                Registration
              </div>

              <div>
                <span>02</span>
                Verification
              </div>

              <div>
                <span>03</span>
                Examination
              </div>

              <div>
                <span>04</span>
                Evaluation
              </div>

              <div>
                <span>05</span>
                Result
              </div>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================================
          OVERVIEW
      ====================================================== */}

      <section className="examinations-overview">

        <div className="examinations-container">

          <div className="examinations-section-heading">

            <span>
              EXAMINATION OVERVIEW
            </span>

            <h2>
              A clear and organised examination process.
            </h2>

            <p>
              Our examination system is designed to provide participants
              with a structured process and clear information at every
              important stage.
            </p>

          </div>


          <div className="examinations-overview__grid">


            <article className="examinations-overview__card">

              <div className="examinations-card__number">
                01
              </div>

              <h3>
                Registration
              </h3>

              <p>
                Participants begin their examination journey by completing
                the required registration and application process.
              </p>

            </article>


            <article className="examinations-overview__card">

              <div className="examinations-card__number">
                02
              </div>

              <h3>
                Examination Process
              </h3>

              <p>
                Examination instructions and important requirements are
                communicated through the official examination system.
              </p>

            </article>


            <article className="examinations-overview__card">

              <div className="examinations-card__number">
                03
              </div>

              <h3>
                Evaluation & Result
              </h3>

              <p>
                After completion, examinations proceed through evaluation
                and the official result process.
              </p>

            </article>


          </div>

        </div>

      </section>



      {/* =====================================================
          EXAMINATION PROCESS
      ====================================================== */}

      <section className="examinations-process">

        <div className="examinations-container">


          <div className="examinations-section-heading examinations-section-heading--center">

            <span>
              STEP-BY-STEP PROCESS
            </span>

            <h2>
              How the examination process works.
            </h2>

            <p>
              Follow the complete journey from the initial application
              stage to the final result.
            </p>

          </div>


          <div className="examinations-process__timeline">


            {/* STEP 01 */}

            <article className="examinations-process__step">

              <div className="examinations-process__marker">
                <span>01</span>
              </div>


              <div className="examinations-process__content">

                <span className="examinations-process__label">
                  STEP ONE
                </span>

                <h3>
                  Choose the appropriate examination
                </h3>

                <p>
                  Review the available examination information and identify
                  the examination relevant to your participation or programme.
                </p>

              </div>

            </article>



            {/* STEP 02 */}

            <article className="examinations-process__step">

              <div className="examinations-process__marker">
                <span>02</span>
              </div>


              <div className="examinations-process__content">

                <span className="examinations-process__label">
                  STEP TWO
                </span>

                <h3>
                  Complete the registration process
                </h3>

                <p>
                  Submit the required information and complete the
                  registration process according to the official instructions.
                </p>

              </div>

            </article>



            {/* STEP 03 */}

            <article className="examinations-process__step">

              <div className="examinations-process__marker">
                <span>03</span>
              </div>


              <div className="examinations-process__content">

                <span className="examinations-process__label">
                  STEP THREE
                </span>

                <h3>
                  Verification and examination preparation
                </h3>

                <p>
                  Submitted details are reviewed as required and participants
                  should follow all official examination instructions.
                </p>

              </div>

            </article>



            {/* STEP 04 */}

            <article className="examinations-process__step">

              <div className="examinations-process__marker">
                <span>04</span>
              </div>


              <div className="examinations-process__content">

                <span className="examinations-process__label">
                  STEP FOUR
                </span>

                <h3>
                  Attend the examination
                </h3>

                <p>
                  Participate in the examination according to the official
                  schedule, instructions and examination requirements.
                </p>

              </div>

            </article>



            {/* STEP 05 */}

            <article className="examinations-process__step">

              <div className="examinations-process__marker">
                <span>05</span>
              </div>


              <div className="examinations-process__content">

                <span className="examinations-process__label">
                  STEP FIVE
                </span>

                <h3>
                  Evaluation and result declaration
                </h3>

                <p>
                  After the examination process is completed, evaluation is
                  carried out and official results are announced through the
                  appropriate examination system.
                </p>

              </div>

            </article>


          </div>

        </div>

      </section>



      {/* =====================================================
          EXAMINATION INFORMATION
      ====================================================== */}

      <section className="examinations-information">

        <div className="examinations-container">


          <div className="examinations-information__layout">


            <div className="examinations-information__intro">

              <span>
                IMPORTANT INFORMATION
              </span>

              <h2>
                Things participants should know.
              </h2>

              <p>
                Participants should carefully follow official examination
                instructions and stay informed about relevant examination
                updates.
              </p>

            </div>


            <div className="examinations-information__list">


              <div className="examinations-information__item">

                <span>01</span>

                <div>
                  <h3>
                    Official Instructions
                  </h3>

                  <p>
                    Always follow the instructions provided through official
                    examination communication.
                  </p>
                </div>

              </div>


              <div className="examinations-information__item">

                <span>02</span>

                <div>
                  <h3>
                    Examination Schedule
                  </h3>

                  <p>
                    Examination dates and schedules should be checked through
                    the appropriate official student services.
                  </p>
                </div>

              </div>


              <div className="examinations-information__item">

                <span>03</span>

                <div>
                  <h3>
                    Required Documents
                  </h3>

                  <p>
                    Keep all required examination-related information and
                    documents ready when requested.
                  </p>
                </div>

              </div>


              <div className="examinations-information__item">

                <span>04</span>

                <div>
                  <h3>
                    Student Examination Services
                  </h3>

                  <p>
                    Personal examination details and student-specific
                    services are available through the student system.
                  </p>
                </div>

              </div>


            </div>

          </div>

        </div>

      </section>

    </main>
  );
}