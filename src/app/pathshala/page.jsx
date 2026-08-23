import Link from "next/link";
import Navbar from "../../components/layout/Navbar";

import "../../styles/pathshala-page.css";

/* ==========================================================
   BHEEM SEVAK SAMITI
   PATHSHALA PAGE
   FRESH PROFESSIONAL PAGE
========================================================== */

const PATHSHALA_INITIATIVES = [
    {
        number: "01",
        title: "निःशुल्क शिक्षा",
        description:
            "गरीब एवं जरूरतमंद बच्चों को शिक्षा से जोड़ने का निरंतर प्रयास।",
    },
    {
        number: "02",
        title: "ग्रामीण पाठशालाएँ",
        description:
            "ग्रामीण क्षेत्रों में बच्चों तक निःशुल्क शिक्षा पहुँचाने का प्रयास।",
    },
    {
        number: "03",
        title: "अध्ययन सामग्री",
        description:
            "जरूरतमंद विद्यार्थियों तक पुस्तकें, कॉपियाँ एवं आवश्यक शैक्षिक सामग्री पहुँचाना।",
    },
    {
        number: "04",
        title: "विद्यार्थी प्रोत्साहन",
        description:
            "विद्यार्थियों को शिक्षा, प्रतियोगिताओं और बेहतर भविष्य के लिए प्रोत्साहित करना।",
    },
];

const PATHSHALA_WORK = [
    {
        number: "01",
        title: "बच्चों को शिक्षा से जोड़ना",
        description:
            "शिक्षा से वंचित एवं जरूरतमंद बच्चों तक सीखने के अवसर पहुँचाना।",
    },
    {
        number: "02",
        title: "शिक्षा के प्रति जागरूकता",
        description:
            "बच्चों एवं अभिभावकों में शिक्षा के महत्व के प्रति जागरूकता उत्पन्न करना।",
    },
    {
        number: "03",
        title: "शैक्षिक सामग्री उपलब्ध कराना",
        description:
            "जरूरतमंद विद्यार्थियों को पुस्तकें एवं अध्ययन सामग्री उपलब्ध कराने का प्रयास।",
    },
    {
        number: "04",
        title: "ग्रामीण क्षेत्रों में पहुँच",
        description:
            "ग्रामीण एवं जरूरतमंद समुदायों तक शिक्षा संबंधी गतिविधियाँ पहुँचाना।",
    },
    {
        number: "05",
        title: "विद्यार्थियों को प्रोत्साहन",
        description:
            "शैक्षिक कार्यक्रमों, परीक्षाओं एवं सम्मान गतिविधियों के माध्यम से विद्यार्थियों को आगे बढ़ने के लिए प्रेरित करना।",
    },
    {
        number: "06",
        title: "स्वयंसेवक सहभागिता",
        description:
            "युवाओं एवं स्वयंसेवकों को शिक्षा से जुड़े सामाजिक कार्यों में जोड़ना।",
    },
];

const PATHSHALA_STATS = [
    {
        value: "50+",
        label: "ग्रामीण क्षेत्र",
    },
    {
        value: "5,000+",
        label: "विद्यार्थियों तक पहुँच",
    },
    {
        value: "2,000+",
        label: "पुस्तक / अध्ययन सामग्री",
    },
    {
        value: "500+",
        label: "स्वयंसेवक",
    },
];

export default function PathshalaPage() {
    return (
        <>
            {/* ==================================================
                NAVBAR
            ================================================== */}

            <Navbar />

            <main className="pathshala-page">

                {/* ==================================================
                    HERO
                ================================================== */}

                <section
                    className="pathshala-hero"
                    aria-labelledby="pathshala-hero-title"
                >
                    <div className="pathshala-container">

                        <div className="pathshala-hero__content">

                            <span className="pathshala-hero__eyebrow">
                                FREE PATHSHALA
                            </span>

                            <h1
                                id="pathshala-hero-title"
                                className="pathshala-hero__title"
                            >
                                निःशुल्क
                                <span>पाठशाला</span>
                            </h1>

                            <p className="pathshala-hero__description">
                                जरूरतमंद और ग्रामीण क्षेत्रों के बच्चों को
                                शिक्षा से जोड़ने की दिशा में भीम सेवक समिति
                                का निरंतर प्रयास।
                            </p>

                            <div className="pathshala-hero__actions">

                                <Link
                                    href="/join-us"
                                    className="pathshala-button pathshala-button--primary"
                                >
                                    Join Us
                                    <span aria-hidden="true">→</span>
                                </Link>

                                <a
                                    href="#pathshala-introduction"
                                    className="pathshala-button pathshala-button--secondary"
                                >
                                    Know More
                                </a>

                            </div>

                        </div>

                        <div
                            className="pathshala-hero__side"
                            aria-hidden="true"
                        >
                            <span className="pathshala-hero__side-number">
                                01
                            </span>

                            <span className="pathshala-hero__side-line" />

                            <span className="pathshala-hero__side-text">
                                EDUCATION
                            </span>
                        </div>

                    </div>
                </section>


                {/* ==================================================
                    INTRODUCTION
                ================================================== */}

                <section
                    className="pathshala-introduction"
                    id="pathshala-introduction"
                    aria-labelledby="pathshala-introduction-title"
                >
                    <div className="pathshala-container">

                        <div className="pathshala-section-heading">

                            <span className="pathshala-eyebrow">
                                OUR PATHSHALA
                            </span>

                            <h2
                                id="pathshala-introduction-title"
                                className="pathshala-section-title"
                            >
                                शिक्षा केवल सुविधा नहीं,
                                <span>हर बच्चे का अवसर है।</span>
                            </h2>

                        </div>

                        <div className="pathshala-introduction__body">

                            <p>
                                भीम सेवक समिति शिक्षा के माध्यम से समाज के
                                गरीब, वंचित एवं जरूरतमंद वर्गों को सशक्त बनाने
                                के लिए निरंतर कार्य कर रही है।
                            </p>

                            <p>
                                संस्था का प्रयास है कि आर्थिक परिस्थितियाँ
                                किसी बच्चे की शिक्षा के रास्ते में बाधा न बनें
                                और ग्रामीण एवं जरूरतमंद क्षेत्रों के बच्चों
                                तक शिक्षा के अवसर पहुँच सकें।
                            </p>

                        </div>

                    </div>
                </section>


                {/* ==================================================
                    INITIATIVES
                ================================================== */}

                <section
                    className="pathshala-initiatives"
                    aria-labelledby="pathshala-initiatives-title"
                >
                    <div className="pathshala-container">

                        <div className="pathshala-section-heading">

                            <span className="pathshala-eyebrow">
                                OUR INITIATIVES
                            </span>

                            <h2
                                id="pathshala-initiatives-title"
                                className="pathshala-section-title"
                            >
                                हमारी
                                <span>मुख्य पहल</span>
                            </h2>

                        </div>

                        <div className="pathshala-initiative-grid">

                            {PATHSHALA_INITIATIVES.map((item) => (
                                <article
                                    className="pathshala-initiative-card"
                                    key={item.number}
                                >
                                    <span className="pathshala-card-number">
                                        {item.number}
                                    </span>

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>
                                </article>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ==================================================
                    WHAT WE DO
                ================================================== */}

                <section
                    className="pathshala-work"
                    aria-labelledby="pathshala-work-title"
                >
                    <div className="pathshala-container">

                        <div className="pathshala-work__heading">

                            <span className="pathshala-eyebrow">
                                WHAT WE DO
                            </span>

                            <h2
                                id="pathshala-work-title"
                                className="pathshala-section-title"
                            >
                                शिक्षा को
                                <span>अवसर में बदलना।</span>
                            </h2>

                        </div>

                        <div className="pathshala-work__list">

                            {PATHSHALA_WORK.map((item) => (
                                <article
                                    className="pathshala-work__item"
                                    key={item.number}
                                >
                                    <span className="pathshala-work__number">
                                        {item.number}
                                    </span>

                                    <div>
                                        <h3>{item.title}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                </article>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ==================================================
                    PRIORITY
                ================================================== */}

                <section
                    className="pathshala-priority"
                    aria-labelledby="pathshala-priority-title"
                >
                    <div className="pathshala-container">

                        <div className="pathshala-priority__box">

                            <div>
                                <span className="pathshala-eyebrow">
                                    OUR PRIORITY
                                </span>

                                <h2 id="pathshala-priority-title">
                                    हमारी प्राथमिकता
                                </h2>

                                <p>
                                    उन बच्चों तक शिक्षा के अवसर पहुँचाना,
                                    जिन्हें इसकी सबसे अधिक आवश्यकता है।
                                </p>
                            </div>

                            <div className="pathshala-priority__points">

                                <span>गरीब एवं जरूरतमंद बच्चे</span>
                                <span>ग्रामीण क्षेत्र</span>
                                <span>शिक्षा से वंचित विद्यार्थी</span>
                                <span>अध्ययन सामग्री की आवश्यकता वाले विद्यार्थी</span>

                            </div>

                        </div>

                    </div>
                </section>


                {/* ==================================================
                    IMPACT
                ================================================== */}

                <section
                    className="pathshala-impact"
                    aria-labelledby="pathshala-impact-title"
                >
                    <div className="pathshala-container">

                        <div className="pathshala-section-heading">

                            <span className="pathshala-eyebrow">
                                PATHSHALA IMPACT
                            </span>

                            <h2
                                id="pathshala-impact-title"
                                className="pathshala-section-title"
                            >
                                प्रयासों से
                                <span>सकारात्मक प्रभाव।</span>
                            </h2>

                        </div>

                        <div className="pathshala-impact__grid">

                            {PATHSHALA_STATS.map((stat) => (
                                <div
                                    className="pathshala-impact__item"
                                    key={stat.label}
                                >
                                    <strong>{stat.value}</strong>
                                    <span>{stat.label}</span>
                                </div>
                            ))}

                        </div>

                    </div>
                </section>


                {/* ==================================================
                    VOLUNTEER
                ================================================== */}

                <section
                    className="pathshala-volunteer"
                    aria-labelledby="pathshala-volunteer-title"
                >
                    <div className="pathshala-container">

                        <div className="pathshala-volunteer__box">

                            <span className="pathshala-eyebrow">
                                VOLUNTEER WITH US
                            </span>

                            <h2 id="pathshala-volunteer-title">
                                शिक्षा के इस प्रयास का
                                <span>हिस्सा बनें।</span>
                            </h2>

                            <p>
                                युवाओं एवं स्वयंसेवकों की सहभागिता से
                                शिक्षा के इस प्रयास को और अधिक बच्चों तक
                                पहुँचाने में मदद मिल सकती है।
                            </p>

                            <Link
                                href="/join-us"
                                className="pathshala-button pathshala-button--primary"
                            >
                                Join Us
                                <span aria-hidden="true">→</span>
                            </Link>

                        </div>

                    </div>
                </section>


                {/* ==================================================
                    FINAL CTA
                ================================================== */}

                <section
                    className="pathshala-final-cta"
                    aria-labelledby="pathshala-final-title"
                >
                    <div className="pathshala-container">

                        <div className="pathshala-final-cta__content">

                            <span className="pathshala-eyebrow">
                                EDUCATION FOR ALL
                            </span>

                            <h2 id="pathshala-final-title">
                                हर बच्चे तक शिक्षा पहुँचाने के
                                <span>इस प्रयास में हमारा साथ दें।</span>
                            </h2>

                            <div className="pathshala-final-cta__actions">

                                <Link
                                    href="/join-us"
                                    className="pathshala-button pathshala-button--light"
                                >
                                    Join Us
                                    <span aria-hidden="true">→</span>
                                </Link>

                                <Link
                                    href="/donate-us"
                                    className="pathshala-button pathshala-button--outline-light"
                                >
                                    Support Our Work
                                </Link>

                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </>
    );
}