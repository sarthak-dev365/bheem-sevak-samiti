"use client";

/* ==========================================================
   BHEEM SEVAK SAMITI
   JOIN US / VOLUNTEER PAGE
   PREMIUM NGO DESIGN
========================================================== */

import { useState } from "react";
import Link from "next/link";

import {
    FiArrowRight,
    FiArrowUpRight,
    FiCheck,
    FiChevronDown,
    FiClock,
    FiHeart,
    FiMapPin,
    FiSend,
    FiShield,
    FiUsers,
    FiTarget,
    FiGlobe,
} from "react-icons/fi";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "@/styles/join-us.css";


/* ==========================================================
   VOLUNTEER OPPORTUNITIES
========================================================== */

const volunteerOpportunities = [
    {
        value: "education",
        number: "01",
        title: "Education Support",
        description:
            "Support learning initiatives, educational activities and opportunities that help students grow with confidence.",
        icon: FiTarget,
        accent: "orange",
        tags: ["Teaching", "Mentoring", "Learning"],
    },

    {
        value: "community",
        number: "02",
        title: "Community Service",
        description:
            "Take part in meaningful community activities and contribute your time, skills and energy where it matters.",
        icon: FiUsers,
        accent: "blue",
        tags: ["Outreach", "Support", "Community"],
    },

    {
        value: "environment",
        number: "03",
        title: "Environment",
        description:
            "Participate in cleanliness, environmental awareness and initiatives focused on a healthier community.",
        icon: FiGlobe,
        accent: "green",
        tags: ["Cleanliness", "Awareness", "Green"],
    },

    {
        value: "awareness",
        number: "04",
        title: "Social Awareness",
        description:
            "Help spread useful information and awareness around education, social responsibility and community development.",
        icon: FiShield,
        accent: "purple",
        tags: ["Campaigns", "Awareness", "Outreach"],
    },

    {
        value: "events",
        number: "05",
        title: "Events & Campaigns",
        description:
            "Help organize, coordinate and support events, campaigns and community-focused activities.",
        icon: FiSend,
        accent: "pink",
        tags: ["Events", "Planning", "Coordination"],
    },

    {
        value: "special",
        number: "06",
        title: "Special Initiatives",
        description:
            "Contribute your unique skills to special projects and initiatives based on current organizational needs.",
        icon: FiHeart,
        accent: "yellow",
        tags: ["Skills", "Projects", "Innovation"],
    },
];


/* ==========================================================
   JOIN STEPS
========================================================== */

const joinSteps = [
    {
        number: "01",
        title: "Register",
        description:
            "Share your basic details and tell us how you would like to contribute.",
        icon: FiSend,
    },

    {
        number: "02",
        title: "Connect",
        description:
            "Our team can review your information and connect with you.",
        icon: FiUsers,
    },

    {
        number: "03",
        title: "Choose Your Area",
        description:
            "Select an area where your interests, skills and availability fit best.",
        icon: FiTarget,
    },

    {
        number: "04",
        title: "Make an Impact",
        description:
            "Take part in meaningful activities and contribute to the community.",
        icon: FiHeart,
    },
];


/* ==========================================================
   VOLUNTEER BENEFITS
========================================================== */

const benefits = [
    "Contribute to meaningful community initiatives",
    "Use your skills for social development",
    "Work with people who care about positive change",
    "Gain practical experience through participation",
    "Choose opportunities based on your interests",
    "Be part of a purpose-driven community",
];


/* ==========================================================
   FAQ
========================================================== */

const joinFaqs = [
    {
        question: "Who can volunteer with Bheem Sevak Samiti?",
        answer:
            "Anyone who genuinely wants to contribute to community-focused initiatives can express their interest. Opportunities may vary depending on current activities and requirements.",
    },

    {
        question: "Do I need previous volunteering experience?",
        answer:
            "Previous experience is not always necessary. You can share your skills, interests and availability through the registration form.",
    },

    {
        question: "Can I choose a specific area of volunteering?",
        answer:
            "Yes. You can select your preferred area from the form. You can also mention your specific interests or skills in the message field.",
    },

    {
        question: "What happens after I submit the form?",
        answer:
            "Your information can be reviewed by the organization and the team can connect with you regarding suitable opportunities and next steps.",
    },
];


/* ==========================================================
   PAGE
========================================================== */

export default function JoinUsPage() {

    const [selectedInterest, setSelectedInterest] = useState("");

    /* ========================================================
       SELECT OPPORTUNITY + SCROLL TO FORM
    ======================================================== */

    const handleOpportunitySelect = (value) => {

        setSelectedInterest(value);

        window.history.replaceState(
            null,
            "",
            "#join-form"
        );

        requestAnimationFrame(() => {

            document
                .getElementById("join-form")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });

        });
    };


    /* ========================================================
       SELECTED OPPORTUNITY LABEL
    ======================================================== */

    const selectedOpportunity =
        volunteerOpportunities.find(
            (item) => item.value === selectedInterest
        );


    return (
        <>
            {/* ==================================================
                EXISTING NAVBAR
            ================================================== */}

            <Navbar />


            <main className="join-page">

                {/* ==================================================
                    HERO
                ================================================== */}

                <section className="join-hero">

                    <div className="join-hero__glow join-hero__glow--one" />
                    <div className="join-hero__glow join-hero__glow--two" />

                    <div className="join-container join-hero__container">

                        <div className="join-hero__content">

                            <div className="join-eyebrow">
                                <span className="join-eyebrow__dot" />
                                VOLUNTEER • PARTICIPATE • MAKE AN IMPACT
                            </div>

                            <h1>
                                Be the reason
                                <span> positive change </span>
                                happens.
                            </h1>

                            <p className="join-hero__description">
                                Your time, skills and ideas can become a
                                meaningful contribution to the community.
                                Join Bheem Sevak Samiti and be part of
                                purpose-driven initiatives.
                            </p>

                            <div className="join-hero__actions">

                                <a
                                    href="#join-form"
                                    className="join-primary-btn"
                                >
                                    Become a Volunteer
                                    <FiArrowRight />
                                </a>

                                <a
                                    href="#opportunities"
                                    className="join-secondary-btn"
                                >
                                    Explore Opportunities
                                    <FiArrowDownIcon />
                                </a>

                            </div>

                            <div className="join-hero__trust">

                                <div>
                                    <FiCheck />
                                    <span>Flexible Participation</span>
                                </div>

                                <div>
                                    <FiCheck />
                                    <span>Skill-Based Contribution</span>
                                </div>

                                <div>
                                    <FiCheck />
                                    <span>Community Focused</span>
                                </div>

                            </div>

                        </div>


                        {/* ==========================================
                            HERO VISUAL
                        ========================================== */}

                        <div className="join-hero__visual">

                            <div className="join-orbit join-orbit--one" />
                            <div className="join-orbit join-orbit--two" />

                            <div className="join-hero-card">

                                <div className="join-hero-card__top">

                                    <span className="join-hero-card__badge">
                                        VOLUNTEER
                                    </span>

                                    <span className="join-hero-card__icon">
                                        <FiHeart />
                                    </span>

                                </div>

                                <div className="join-hero-card__main-icon">
                                    <FiUsers />
                                </div>

                                <h3>
                                    Your Time.
                                    <br />
                                    Your Skills.
                                    <br />
                                    <span>Your Impact.</span>
                                </h3>

                                <p>
                                    Every contribution can help create
                                    meaningful change.
                                </p>

                                <div className="join-hero-card__line" />

                                <div className="join-hero-card__footer">

                                    <div>
                                        <strong>6+</strong>
                                        <span>Focus Areas</span>
                                    </div>

                                    <div>
                                        <strong>01</strong>
                                        <span>Mission</span>
                                    </div>

                                    <div>
                                        <strong>∞</strong>
                                        <span>Possibilities</span>
                                    </div>

                                </div>

                            </div>

                            <div className="join-floating-card join-floating-card--top">
                                <FiTarget />
                                <div>
                                    <strong>Purpose</strong>
                                    <span>Driven Work</span>
                                </div>
                            </div>

                            <div className="join-floating-card join-floating-card--bottom">
                                <FiUsers />
                                <div>
                                    <strong>Community</strong>
                                    <span>First Approach</span>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    INTRO / WHY JOIN
                ================================================== */}

                <section className="join-intro">

                    <div className="join-container">

                        <div className="join-section-heading join-section-heading--center">

                            <span className="join-section-label">
                                WHY JOIN US
                            </span>

                            <h2>
                                Don&apos;t just watch change.
                                <br />
                                <span>Be part of it.</span>
                            </h2>

                            <p>
                                Volunteering is more than giving time.
                                It is about bringing your abilities,
                                ideas and commitment together for
                                something meaningful.
                            </p>

                        </div>


                        <div className="join-benefit-grid">

                            {benefits.map((benefit, index) => (

                                <div
                                    className="join-benefit-card"
                                    key={benefit}
                                >

                                    <span className="join-benefit-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="join-benefit-icon">
                                        <FiCheck />
                                    </div>

                                    <p>{benefit}</p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    OPPORTUNITIES
                ================================================== */}

                <section
                    className="join-opportunities"
                    id="opportunities"
                >

                    <div className="join-container">

                        <div className="join-section-heading">

                            <div>

                                <span className="join-section-label">
                                    FIND YOUR PLACE
                                </span>

                                <h2>
                                    Choose an area
                                    <br />
                                    <span>that inspires you.</span>
                                </h2>

                            </div>

                            <p>
                                Explore different ways to contribute.
                                Select an area and continue directly
                                to the volunteer form.
                            </p>

                        </div>


                        <div className="join-opportunity-grid">

                            {volunteerOpportunities.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <article
                                        className={`join-opportunity-card join-opportunity-card--${item.accent}`}
                                        key={item.value}
                                    >

                                        <div className="join-opportunity-card__top">

                                            <span className="join-opportunity-number">
                                                {item.number}
                                            </span>

                                            <div className="join-opportunity-icon">
                                                <Icon />
                                            </div>

                                        </div>

                                        <h3>{item.title}</h3>

                                        <p>
                                            {item.description}
                                        </p>

                                        <div className="join-opportunity-tags">

                                            {item.tags.map((tag) => (
                                                <span key={tag}>
                                                    {tag}
                                                </span>
                                            ))}

                                        </div>

                                        <button
                                            type="button"
                                            className="join-opportunity-button"
                                            onClick={() =>
                                                handleOpportunitySelect(
                                                    item.value
                                                )
                                            }
                                        >
                                            Join This Area
                                            <FiArrowUpRight />
                                        </button>

                                    </article>
                                );

                            })}

                        </div>


                        <div className="join-opportunity-note">

                            <FiClock />

                            <p>
                                Volunteer opportunities may vary
                                according to current activities,
                                projects and organizational requirements.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    HOW IT WORKS
                ================================================== */}

                <section className="join-process">

                    <div className="join-process__background" />

                    <div className="join-container">

                        <div className="join-section-heading join-section-heading--center">

                            <span className="join-section-label">
                                SIMPLE PROCESS
                            </span>

                            <h2>
                                From interest to
                                <span> impact.</span>
                            </h2>

                            <p>
                                Getting started is simple. Follow four
                                straightforward steps and begin your
                                volunteering journey.
                            </p>

                        </div>


                        <div className="join-process-grid">

                            {joinSteps.map((step, index) => {

                                const Icon = step.icon;

                                return (
                                    <div
                                        className="join-process-item"
                                        key={step.number}
                                    >

                                        <div className="join-process-number">
                                            {step.number}
                                        </div>

                                        <div className="join-process-icon">
                                            <Icon />
                                        </div>

                                        <h3>{step.title}</h3>

                                        <p>
                                            {step.description}
                                        </p>

                                        {index !== joinSteps.length - 1 && (
                                            <div className="join-process-arrow">
                                                <FiArrowRight />
                                            </div>
                                        )}

                                    </div>
                                );

                            })}

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    VOLUNTEER FORM
                ================================================== */}

                <section
                    className="join-form-section"
                    id="join-form"
                >

                    <div className="join-container">

                        <div className="join-form-wrapper">

                            {/* ======================================
                                FORM INTRO PANEL
                            ====================================== */}

                            <div className="join-form-intro">

                                <span className="join-form-intro__label">
                                    LET&apos;S GET STARTED
                                </span>

                                <h2>
                                    Ready to make
                                    <span> an impact?</span>
                                </h2>

                                <p>
                                    Tell us a little about yourself and
                                    the area where you would like to
                                    contribute.
                                </p>


                                <div className="join-form-checklist">

                                    <div>
                                        <span>
                                            <FiCheck />
                                        </span>
                                        <p>Share your interests</p>
                                    </div>

                                    <div>
                                        <span>
                                            <FiCheck />
                                        </span>
                                        <p>Tell us about your skills</p>
                                    </div>

                                    <div>
                                        <span>
                                            <FiCheck />
                                        </span>
                                        <p>Choose your preferred area</p>
                                    </div>

                                    <div>
                                        <span>
                                            <FiCheck />
                                        </span>
                                        <p>Take your first step</p>
                                    </div>

                                </div>


                                <div className="join-form-contact">

                                    <div className="join-form-contact__icon">
                                        <FiMapPin />
                                    </div>

                                    <div>
                                        <span>Our Location</span>
                                        <strong>Saharanpur, Uttar Pradesh</strong>
                                    </div>

                                </div>

                            </div>


                            {/* ======================================
                                FORM
                            ====================================== */}

                            <div className="join-form-card">

                                <div className="join-form-card__header">

                                    <div>
                                        <span>
                                            VOLUNTEER REGISTRATION
                                        </span>

                                        <h3>
                                            Join the Mission
                                        </h3>
                                    </div>

                                    <div className="join-form-card__secure">
                                        <FiShield />
                                        <span>Secure Form</span>
                                    </div>

                                </div>


                                {/* SELECTED AREA MESSAGE */}

                                {selectedOpportunity && (
                                    <div
                                        className="join-selected-interest"
                                        aria-live="polite"
                                    >

                                        <div>
                                            <span>
                                                Selected Volunteer Area
                                            </span>

                                            <strong>
                                                {selectedOpportunity.title}
                                            </strong>
                                        </div>

                                        <button
                                            type="button"
                                            onClick={() =>
                                                setSelectedInterest("")
                                            }
                                        >
                                            Change
                                        </button>

                                    </div>
                                )}


                                <form className="join-form">

                                    <div className="join-form-grid">

                                        <div className="join-field">

                                            <label htmlFor="fullName">
                                                Full Name
                                                <span>*</span>
                                            </label>

                                            <input
                                                id="fullName"
                                                name="fullName"
                                                type="text"
                                                placeholder="Enter your full name"
                                                autoComplete="name"
                                                required
                                            />

                                        </div>


                                        <div className="join-field">

                                            <label htmlFor="mobile">
                                                Mobile Number
                                                <span>*</span>
                                            </label>

                                            <input
                                                id="mobile"
                                                name="mobile"
                                                type="tel"
                                                inputMode="tel"
                                                placeholder="+91 XXXXX XXXXX"
                                                autoComplete="tel"
                                                required
                                            />

                                        </div>


                                        <div className="join-field">

                                            <label htmlFor="email">
                                                Email Address
                                                <span>*</span>
                                            </label>

                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder="you@example.com"
                                                autoComplete="email"
                                                required
                                            />

                                        </div>


                                        <div className="join-field">

                                            <label htmlFor="city">
                                                City / District
                                                <span>*</span>
                                            </label>

                                            <input
                                                id="city"
                                                name="city"
                                                type="text"
                                                placeholder="Enter your city or district"
                                                autoComplete="address-level2"
                                                required
                                            />

                                        </div>


                                        <div className="join-field join-field--full">

                                            <label htmlFor="interest">
                                                Area of Interest
                                                <span>*</span>
                                            </label>

                                            <div className="join-select-wrap">

                                                <select
                                                    id="interest"
                                                    name="interest"
                                                    value={selectedInterest}
                                                    onChange={(event) =>
                                                        setSelectedInterest(
                                                            event.target.value
                                                        )
                                                    }
                                                    required
                                                >

                                                    <option value="">
                                                        Select your preferred area
                                                    </option>

                                                    <option value="education">
                                                        Education Support
                                                    </option>

                                                    <option value="community">
                                                        Community Service
                                                    </option>

                                                    <option value="environment">
                                                        Environment
                                                    </option>

                                                    <option value="awareness">
                                                        Social Awareness
                                                    </option>

                                                    <option value="events">
                                                        Events & Campaigns
                                                    </option>

                                                    <option value="special">
                                                        Special Initiatives
                                                    </option>

                                                </select>

                                                <FiChevronDown />

                                            </div>

                                        </div>


                                        <div className="join-field join-field--full">

                                            <label htmlFor="message">
                                                Tell Us More
                                            </label>

                                            <textarea
                                                id="message"
                                                name="message"
                                                rows="5"
                                                placeholder="Tell us about your skills, interests, availability or how you would like to contribute..."
                                            />

                                        </div>

                                    </div>


                                    <div className="join-form-footer">

                                        <p>
                                            <FiShield />
                                            Your information should be
                                            submitted only for volunteer
                                            registration and communication.
                                        </p>

                                        <button
                                            type="submit"
                                            className="join-submit-button"
                                        >
                                            Submit Volunteer Form
                                            <FiSend />
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    FAQ
                ================================================== */}

                <section className="join-faq">

                    <div className="join-container">

                        <div className="join-faq-layout">

                            <div className="join-faq-intro">

                                <span className="join-section-label">
                                    FAQ
                                </span>

                                <h2>
                                    Have questions?
                                    <span> We&apos;ve got answers.</span>
                                </h2>

                                <p>
                                    Here are some common questions
                                    about joining and volunteering
                                    with Bheem Sevak Samiti.
                                </p>

                                <a
                                    href="mailto:bhimsevaksamiti@gmail.com"
                                    className="join-faq-contact"
                                >
                                    Contact Our Team
                                    <FiArrowUpRight />
                                </a>

                            </div>


                            <div className="join-faq-list">

                                {joinFaqs.map((faq) => (

                                    <details
                                        className="join-faq-item"
                                        key={faq.question}
                                    >

                                        <summary>

                                            <span>
                                                {faq.question}
                                            </span>

                                            <span className="join-faq-icon">
                                                <FiChevronDown />
                                            </span>

                                        </summary>

                                        <div className="join-faq-answer">
                                            <p>{faq.answer}</p>
                                        </div>

                                    </details>

                                ))}

                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    FINAL CTA
                ================================================== */}

                <section className="join-final-cta">

                    <div className="join-final-cta__glow" />

                    <div className="join-container">

                        <div className="join-final-cta__content">

                            <span className="join-section-label">
                                YOUR CONTRIBUTION MATTERS
                            </span>

                            <h2>
                                One decision can be
                                <br />
                                the beginning of something
                                <span> meaningful.</span>
                            </h2>

                            <p>
                                Take the first step and explore how
                                you can contribute to our mission.
                            </p>

                            <a
                                href="#join-form"
                                className="join-final-button"
                            >
                                Join Us Today
                                <FiArrowRight />
                            </a>

                        </div>

                    </div>

                </section>

            </main>


            {/* ==================================================
                EXISTING FOOTER
            ================================================== */}

            <Footer />
        </>
    );
}


/* ==========================================================
   SMALL ICON HELPER
========================================================== */

function FiArrowDownIcon() {
    return (
        <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
        >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
        </svg>
    );
}