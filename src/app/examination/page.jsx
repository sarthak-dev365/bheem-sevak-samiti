import Link from "next/link";
import Image from "next/image";

import Footer from "../../components/layout/Footer";
import "../../styles/examination-page.css";

const PORTAL_SERVICES = [
    {
        icon: "01",
        title: "Available Exams",
        text: "अपनी उपलब्ध परीक्षाएँ, subjects, marks और examination details देखें।",
        href: "#available-exams",
    },
    {
        icon: "02",
        title: "Exam Schedule",
        text: "परीक्षा की date, time, duration और जरूरी schedule information देखें।",
        href: "#exam-schedule",
    },
    {
        icon: "03",
        title: "Admit Card",
        text: "उपलब्ध होने पर अपना official examination admit card access करें।",
        href: "#admit-card",
    },
    {
        icon: "04",
        title: "Results",
        text: "Official result जारी होने के बाद अपना performance और result देखें।",
        href: "#results",
    },
    {
        icon: "05",
        title: "Certificates",
        text: "Eligible होने पर अपने examination certificates access करें।",
        href: "#certificates",
    },
    {
        icon: "06",
        title: "Student Help",
        text: "Examination से जुड़े सवालों और support की जानकारी प्राप्त करें।",
        href: "#help",
    },
];

const EXAM_STEPS = [
    {
        number: "01",
        title: "Choose Exam",
        text: "अपनी उपलब्ध परीक्षा चुनें",
    },
    {
        number: "02",
        title: "Read Instructions",
        text: "सभी instructions ध्यान से पढ़ें",
    },
    {
        number: "03",
        title: "Attempt Exam",
        text: "निर्धारित समय में परीक्षा दें",
    },
    {
        number: "04",
        title: "Check Result",
        text: "Official result के बाद performance देखें",
    },
];

const FAQS = [
    {
        question: "मैं उपलब्ध परीक्षा कैसे देख सकता हूँ?",
        answer:
            "Available Exams section में जाकर वर्तमान में उपलब्ध examinations की जानकारी देखी जा सकती है।",
    },
    {
        question: "परीक्षा की तारीख और समय कहाँ मिलेगा?",
        answer:
            "Exam Schedule section में प्रत्येक examination की official date, time और duration प्रदर्शित की जाएगी।",
    },
    {
        question: "Admit Card कहाँ से मिलेगा?",
        answer:
            "जब किसी examination के लिए admit card उपलब्ध होगा, तो उसकी access information Admit Card section में दी जाएगी।",
    },
    {
        question: "Result कहाँ देख सकते हैं?",
        answer:
            "Official result जारी होने के बाद विद्यार्थी Results section से अपने result की जानकारी प्राप्त कर सकेंगे।",
    },
];

export default function ExaminationPage() {
    return (
        <div className="exam-portal">

            {/* =====================================================
                PORTAL HEADER
            ===================================================== */}

            <header className="exam-header">

                <div className="exam-container exam-header__inner">

                    <Link
                        href="/"
                        className="exam-brand"
                        aria-label="Bheem Sevak Samiti Home"
                    >
                        <div className="exam-brand__logo">
                            <Image
                                src="/icons/logo2.png"
                                alt="Bheem Sevak Samiti Logo"
                                width={58}
                                height={58}
                                priority
                            />
                        </div>

                        <div className="exam-brand__text">
                            <strong>
                                BHEEM SEVAK SAMITI
                            </strong>

                            <span>
                                STUDENT EXAMINATION PORTAL
                            </span>
                        </div>
                    </Link>

                    <nav
                        className="exam-nav"
                        aria-label="Examination navigation"
                    >
                        <a href="#available-exams">
                            Exams
                        </a>

                        <a href="#exam-schedule">
                            Schedule
                        </a>

                        <a href="#results">
                            Results
                        </a>

                        <a href="#help">
                            Help
                        </a>
                    </nav>

                    <Link
                        href="/"
                        className="exam-home-button"
                    >
                        Back to Website
                        <span>↗</span>
                    </Link>

                </div>

            </header>


            <main>

                {/* =====================================================
                    HERO
                ===================================================== */}

                <section className="exam-hero">

                    <div className="exam-container">

                        <div className="exam-hero__layout">

                            <div className="exam-hero__content">

                                <div className="exam-eyebrow">
                                    <span />
                                    STUDENT EXAMINATION PORTAL
                                </div>

                                <h1>
                                    Your Exam.
                                    <span>
                                        Your Opportunity.
                                    </span>
                                </h1>

                                <p className="exam-hero__hindi">
                                    परीक्षा की तैयारी से लेकर परिणाम तक,
                                    <strong>
                                        सब कुछ एक ही जगह।
                                    </strong>
                                </p>

                                <p className="exam-hero__description">
                                    भीम सेवक समिति का examination portal
                                    विद्यार्थियों को examinations, schedule,
                                    admit card, results और अन्य जरूरी
                                    सुविधाओं तक आसान और व्यवस्थित पहुँच
                                    प्रदान करने के लिए बनाया गया है।
                                </p>

                                <div className="exam-hero__actions">

                                    <a
                                        href="#available-exams"
                                        className="exam-button exam-button--primary"
                                    >
                                        Explore Examinations
                                        <span>→</span>
                                    </a>

                                    <a
                                        href="#instructions"
                                        className="exam-button exam-button--secondary"
                                    >
                                        Exam Instructions
                                    </a>

                                </div>

                                <div className="exam-hero__trust">

                                    <div>
                                        <strong>
                                            Student First
                                        </strong>
                                        <span>
                                            Simple &amp; clear experience
                                        </span>
                                    </div>

                                    <div>
                                        <strong>
                                            Secure
                                        </strong>
                                        <span>
                                            Official information portal
                                        </span>
                                    </div>

                                    <div>
                                        <strong>
                                            Accessible
                                        </strong>
                                        <span>
                                            Easy to use for students
                                        </span>
                                    </div>

                                </div>

                            </div>


                            {/* DASHBOARD */}

                            <div className="exam-dashboard">

                                <div className="exam-dashboard__top">

                                    <div>
                                        <small>
                                            STUDENT PORTAL
                                        </small>

                                        <strong>
                                            Examination Dashboard
                                        </strong>
                                    </div>

                                    <span className="exam-dashboard__status">
                                        ACTIVE
                                    </span>

                                </div>

                                <div className="exam-dashboard__welcome">

                                    <small>
                                        WELCOME STUDENT
                                    </small>

                                    <h2>
                                        Learn.
                                        <br />
                                        Prepare.
                                        <br />
                                        <span>
                                            Achieve.
                                        </span>
                                    </h2>

                                    <p>
                                        आपकी examination journey
                                        यहाँ से शुरू होती है।
                                    </p>

                                </div>

                                <div className="exam-dashboard__stats">

                                    <a href="#available-exams">
                                        <small>
                                            EXAMS
                                        </small>

                                        <strong>
                                            Explore
                                        </strong>
                                    </a>

                                    <a href="#results">
                                        <small>
                                            RESULT
                                        </small>

                                        <strong>
                                            Track
                                        </strong>
                                    </a>

                                    <a href="#help">
                                        <small>
                                            SUPPORT
                                        </small>

                                        <strong>
                                            Help
                                        </strong>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SERVICES
                ===================================================== */}

                <section className="exam-services">

                    <div className="exam-container">

                        <div className="exam-heading-row">

                            <div>

                                <span className="exam-label">
                                    STUDENT SERVICES
                                </span>

                                <h2>
                                    Everything you need,
                                    <span>
                                        in one portal.
                                    </span>
                                </h2>

                            </div>

                            <p>
                                परीक्षा से जुड़ी महत्वपूर्ण सुविधाओं
                                को एक साफ, सरल और व्यवस्थित portal
                                में access करें।
                            </p>

                        </div>

                        <div className="exam-services__grid">

                            {PORTAL_SERVICES.map((service) => (
                                <a
                                    href={service.href}
                                    className="exam-service-card"
                                    key={service.title}
                                >

                                    <div className="exam-service-card__top">

                                        <span className="exam-service-card__icon">
                                            {service.icon}
                                        </span>

                                        <span className="exam-service-card__arrow">
                                            ↗
                                        </span>

                                    </div>

                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.text}
                                    </p>

                                    <span className="exam-service-card__link">
                                        Explore service →
                                    </span>

                                </a>
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    AVAILABLE EXAMS
                ===================================================== */}

                <section
                    className="exam-section exam-section--soft"
                    id="available-exams"
                >

                    <div className="exam-container">

                        <div className="exam-centered-heading">

                            <span className="exam-label">
                                AVAILABLE EXAMINATIONS
                            </span>

                            <h2>
                                Find your
                                <span>
                                    examination.
                                </span>
                            </h2>

                            <p>
                                संस्था द्वारा उपलब्ध कराई गई
                                examinations यहाँ दिखाई जाएँगी।
                            </p>

                        </div>

                        <div className="exam-empty">

                            <div className="exam-empty__icon">
                                EX
                            </div>

                            <div className="exam-empty__content">

                                <span>
                                    EXAMINATION STATUS
                                </span>

                                <h3>
                                    अभी कोई examination उपलब्ध नहीं है।
                                </h3>

                                <p>
                                    नई examination उपलब्ध होने पर यहाँ
                                    exam name, class, subject, date,
                                    duration, marks और अन्य details
                                    दिखाई जाएँगी।
                                </p>

                            </div>

                            <span className="exam-coming">
                                COMING SOON
                            </span>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    SCHEDULE
                ===================================================== */}

                <section
                    className="exam-section"
                    id="exam-schedule"
                >

                    <div className="exam-container">

                        <div className="exam-split">

                            <div className="exam-split__content">

                                <span className="exam-label">
                                    EXAM SCHEDULE
                                </span>

                                <h2>
                                    Know your
                                    <span>
                                        exam schedule.
                                    </span>
                                </h2>

                                <p>
                                    परीक्षा से पहले date, time,
                                    duration और eligibility जैसी
                                    महत्वपूर्ण जानकारी यहाँ उपलब्ध होगी।
                                </p>

                            </div>

                            <div className="exam-schedule">

                                {[
                                    ["01", "EXAMINATION DATE", "Date will be announced"],
                                    ["02", "EXAMINATION TIME", "Time will be announced"],
                                    ["03", "DURATION", "Will be announced"],
                                    ["04", "ELIGIBILITY", "Check examination details"],
                                ].map(([number, label, value]) => (
                                    <div
                                        className="exam-schedule__row"
                                        key={number}
                                    >

                                        <span>
                                            {number}
                                        </span>

                                        <div>
                                            <small>
                                                {label}
                                            </small>

                                            <strong>
                                                {value}
                                            </strong>
                                        </div>

                                        <b>
                                            →
                                        </b>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FEATURES
                ===================================================== */}

                <section className="exam-section exam-section--soft">

                    <div className="exam-container">

                        <div className="exam-heading-row">

                            <div>

                                <span className="exam-label">
                                    PORTAL FEATURES
                                </span>

                                <h2>
                                    Designed around
                                    <span>
                                        students.
                                    </span>
                                </h2>

                            </div>

                            <p>
                                विद्यार्थी की examination journey को
                                ध्यान में रखकर बनाया गया experience।
                            </p>

                        </div>

                        <div className="exam-feature-grid">

                            {[
                                "Online Examination",
                                "Exam Schedule",
                                "Admit Card",
                                "Result Tracking",
                                "Certificate Access",
                                "Student Support",
                            ].map((feature, index) => (
                                <article
                                    className="exam-feature"
                                    key={feature}
                                >

                                    <div className="exam-feature__number">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <div className="exam-feature__icon">
                                        ✓
                                    </div>

                                    <h3>
                                        {feature}
                                    </h3>

                                    <p>
                                        Student focused service
                                        designed for easy access.
                                    </p>

                                </article>
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    STUDENT JOURNEY
                ===================================================== */}

                <section className="exam-section">

                    <div className="exam-container">

                        <div className="exam-centered-heading">

                            <span className="exam-label">
                                STUDENT JOURNEY
                            </span>

                            <h2>
                                From preparation
                                <span>
                                    to result.
                                </span>
                            </h2>

                            <p>
                                परीक्षा की पूरी journey को सरल तरीके से follow करें।
                            </p>

                        </div>

                        <div className="exam-journey">

                            {EXAM_STEPS.map((step, index) => (
                                <article
                                    className="exam-step"
                                    key={step.number}
                                >

                                    <div className="exam-step__top">

                                        <span>
                                            {step.number}
                                        </span>

                                        {index !== EXAM_STEPS.length - 1 && (
                                            <div className="exam-step__line" />
                                        )}

                                    </div>

                                    <small>
                                        {step.title}
                                    </small>

                                    <h3>
                                        {step.text}
                                    </h3>

                                </article>
                            ))}

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    INSTRUCTIONS
                ===================================================== */}

                <section
                    className="exam-section exam-section--soft"
                    id="instructions"
                >

                    <div className="exam-container">

                        <div className="exam-instruction-panel">

                            <div className="exam-instruction-panel__intro">

                                <span className="exam-label">
                                    EXAM INSTRUCTIONS
                                </span>

                                <h2>
                                    Be ready before
                                    <span>
                                        you begin.
                                    </span>
                                </h2>

                                <p>
                                    परीक्षा शुरू करने से पहले सभी
                                    instructions ध्यानपूर्वक पढ़ें।
                                </p>

                            </div>

                            <div className="exam-instruction-list">

                                {[
                                    "परीक्षा की date और time पहले से check करें।",
                                    "Examination instructions ध्यानपूर्वक पढ़ें।",
                                    "अपनी आवश्यक जानकारी पहले से तैयार रखें।",
                                    "परीक्षा के दौरान official instructions का पालन करें।",
                                    "Submit करने से पहले अपने answers को review करें।",
                                ].map((instruction, index) => (
                                    <div
                                        className="exam-instruction"
                                        key={instruction}
                                    >

                                        <span>
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <p>
                                            {instruction}
                                        </p>

                                    </div>
                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    ADMIT CARD
                ===================================================== */}

                <section
                    className="exam-section"
                    id="admit-card"
                >

                    <div className="exam-container">

                        <div className="exam-feature-panel">

                            <div>

                                <span className="exam-label">
                                    ADMIT CARD
                                </span>

                                <h2>
                                    Your examination
                                    <span>
                                        admit card.
                                    </span>
                                </h2>

                                <p>
                                    Admit Card सुविधा उपलब्ध होने पर
                                    विद्यार्थी यहाँ से अपनी examination
                                    information access कर सकेंगे।
                                </p>

                            </div>

                            <div className="exam-feature-panel__status">

                                <small>
                                    CURRENT STATUS
                                </small>

                                <strong>
                                    Coming Soon
                                </strong>

                                <span>
                                    Admit Card will appear here.
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    RESULTS
                ===================================================== */}

                <section
                    className="exam-section exam-section--soft"
                    id="results"
                >

                    <div className="exam-container">

                        <div className="exam-result-panel">

                            <div>

                                <span className="exam-label">
                                    RESULTS
                                </span>

                                <h2>
                                    See your
                                    <span>
                                        performance.
                                    </span>
                                </h2>

                                <p>
                                    Official result जारी होने के बाद
                                    विद्यार्थी यहाँ अपना examination
                                    result access कर सकेंगे।
                                </p>

                            </div>

                            <div className="exam-result-status">

                                <small>
                                    RESULT STATUS
                                </small>

                                <strong>
                                    Coming Soon
                                </strong>

                                <span>
                                    Results will appear here after
                                    official publication.
                                </span>

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    CERTIFICATES
                ===================================================== */}

                <section
                    className="exam-section"
                    id="certificates"
                >

                    <div className="exam-container">

                        <div className="exam-certificate-panel">

                            <div className="exam-certificate-panel__icon">
                                CE
                            </div>

                            <div>

                                <span className="exam-label">
                                    CERTIFICATES
                                </span>

                                <h2>
                                    Celebrate your
                                    <span>
                                        achievement.
                                    </span>
                                </h2>

                                <p>
                                    Certificate सुविधा उपलब्ध होने पर
                                    eligible students अपने certificates
                                    यहाँ access कर सकेंगे।
                                </p>

                            </div>

                            <span className="exam-coming">
                                COMING SOON
                            </span>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    HELP / FAQ
                ===================================================== */}

                <section
                    className="exam-section exam-section--soft"
                    id="help"
                >

                    <div className="exam-container">

                        <div className="exam-faq">

                            <div className="exam-faq__intro">

                                <span className="exam-label">
                                    STUDENT HELP
                                </span>

                                <h2>
                                    Need
                                    <span>
                                        help?
                                    </span>
                                </h2>

                                <p>
                                    Examination portal से जुड़े
                                    सामान्य सवालों के जवाब यहाँ देखें।
                                </p>

                                <Link
                                    href="/contact"
                                    className="exam-button exam-button--primary"
                                >
                                    Contact Support
                                    <span>→</span>
                                </Link>

                            </div>

                            <div className="exam-faq__list">

                                {FAQS.map((faq, index) => (
                                    <details
                                        className="exam-faq__item"
                                        key={faq.question}
                                        open={index === 0}
                                    >

                                        <summary>

                                            <span>
                                                {faq.question}
                                            </span>

                                            <b>
                                                +
                                            </b>

                                        </summary>

                                        <p>
                                            {faq.answer}
                                        </p>

                                    </details>
                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* =====================================================
                    FINAL CTA
                ===================================================== */}

                <section className="exam-final">

                    <div className="exam-container">

                        <div className="exam-final__content">

                            <span>
                                KEEP LEARNING • KEEP GROWING
                            </span>

                            <h2>
                                Your preparation.
                                <strong>
                                    Your future.
                                </strong>
                            </h2>

                            <p>
                                मेहनत करते रहें, सीखते रहें और
                                अपने लक्ष्य की ओर आगे बढ़ते रहें।
                            </p>

                            <div className="exam-final__actions">

                                <a
                                    href="#available-exams"
                                    className="exam-button exam-button--light"
                                >
                                    Explore Exams
                                    <span>→</span>
                                </a>

                                <Link
                                    href="/"
                                    className="exam-button exam-button--outline"
                                >
                                    Back to Website
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>

            </main>


            {/* =====================================================
                FOOTER
            ===================================================== */}

            <Footer />

        </div>
    );
}