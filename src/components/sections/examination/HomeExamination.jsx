import Link from "next/link";
import "../../../styles/examination.css";

/* ==========================================================
   BHEEM SEVAK SAMITI
   HOME — EXAMINATION SECTION
   FRESH PROFESSIONAL VERSION
========================================================== */

const EXAMINATION_HIGHLIGHTS = [
    {
        number: "01",
        title: "Examination Information",
    },
    {
        number: "02",
        title: "Registration & Admit Card",
    },
    {
        number: "03",
        title: "Results & Announcements",
    },
];

export default function Examinations() {
    return (
        <section
            className="examination-section"
            id="examination"
            aria-labelledby="examination-section-title"
        >
            <div className="examination-section__container">

                {/* ==================================================
                    SECTION HEADER
                ================================================== */}

                <div className="examination-section__header">

                    <span className="examination-section__eyebrow">
                        EXAMINATION
                    </span>

                    <h2
                        id="examination-section-title"
                        className="examination-section__title"
                    >
                        शिक्षा से आगे,
                        <span>अवसरों की ओर।</span>
                    </h2>

                    <p className="examination-section__description">
                        विद्यार्थियों को शैक्षिक एवं प्रतियोगी अवसरों से
                        जोड़ने के लिए examinations की जानकारी और आवश्यक
                        सुविधाएँ एक ही स्थान पर।
                    </p>

                </div>


                {/* ==================================================
                    HIGHLIGHTS
                ================================================== */}

                <div className="examination-section__highlights">

                    {EXAMINATION_HIGHLIGHTS.map((item) => (
                        <div
                            className="examination-highlight"
                            key={item.number}
                        >
                            <span className="examination-highlight__number">
                                {item.number}
                            </span>

                            <span className="examination-highlight__title">
                                {item.title}
                            </span>
                        </div>
                    ))}

                </div>


                {/* ==================================================
                    CTA
                ================================================== */}

                <div className="examination-section__action">

                    <Link
                        href="/examination"
                        className="examination-section__button"
                    >
                        <span>
                            Explore Examination
                        </span>

                        <span
                            className="examination-section__button-arrow"
                            aria-hidden="true"
                        >
                            →
                        </span>
                    </Link>

                </div>

            </div>
        </section>
    );
}