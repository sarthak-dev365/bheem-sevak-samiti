import Link from "next/link";
import {
    FiInfo,
    FiFileText,
    FiAward,
    FiArrowRight,
} from "react-icons/fi";

import "../../../styles/examination.css";

const EXAMINATION_HIGHLIGHTS = [
    {
        number: "01",
        title: "Examination Information",
        icon: <FiInfo />,
    },
    {
        number: "02",
        title: "Registration & Admit Card",
        icon: <FiFileText />,
    },
    {
        number: "03",
        title: "Results & Announcements",
        icon: <FiAward />,
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

                {/* Section Heading */}
                <header className="examination-section__header">
                    <span className="examination-section__eyebrow">
                        EXAMINATION
                    </span>

                    <h2
                        id="examination-section-title"
                        className="examination-section__title"
                    >
                        Learn. Register. <span>Achieve.</span>
                    </h2>
                </header>


                {/* Examination Cards */}
                <div className="examination-section__highlights">
                    {EXAMINATION_HIGHLIGHTS.map((item) => (
                        <Link
                            href="/examination"
                            className="examination-highlight"
                            key={item.number}
                        >
                            <div className="examination-highlight__top">
                                <span className="examination-highlight__number">
                                    {item.number}
                                </span>

                                <span className="examination-highlight__icon">
                                    {item.icon}
                                </span>
                            </div>

                            <h3 className="examination-highlight__title">
                                {item.title}
                            </h3>

                            <span
                                className="examination-highlight__arrow"
                                aria-hidden="true"
                            >
                                <FiArrowRight />
                            </span>
                        </Link>
                    ))}
                </div>


                {/* CTA */}
                <div className="examination-section__action">
                    <Link
                        href="/examination"
                        className="examination-section__button"
                    >
                        <span>Explore Examination</span>
                        <FiArrowRight />
                    </Link>
                </div>

            </div>
        </section>
    );
}