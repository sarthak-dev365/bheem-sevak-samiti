import Link from "next/link";

import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
    FiArrowRight,
    FiSend,
    FiMessageCircle,
    FiUsers,
    FiHeart,
    FiCheckCircle,
} from "react-icons/fi";

import {
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
} from "react-icons/fa";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import "@/styles/contact-page.css";


/* ==========================================================
   CONTACT INFORMATION
========================================================== */

const contactInfo = [
    {
        icon: FiPhone,
        eyebrow: "CALL US",
        title: "Phone",
        value: "+91 9627833744",
        href: "tel:+919627833744",
    },
    {
        icon: FiMail,
        eyebrow: "WRITE TO US",
        title: "Email",
        value: "bhimsevaksamiti@gmail.com",
        href: "mailto:bhimsevaksamiti@gmail.com",
    },
    {
        icon: FiMapPin,
        eyebrow: "VISIT US",
        title: "Location",
        value: "Uttar Pradesh, India",
        href: "#location",
    },
    {
        icon: FiClock,
        eyebrow: "SUPPORT",
        title: "We're Here to Help",
        value: "Connect with us for more information",
        href: "#contact-form",
    },
];


/* ==========================================================
   FAQ DATA
========================================================== */

const contactFaqs = [
    {
        number: "01",
        question: "How can I contact Bheem Sevak Samiti?",
        answer:
            "You can contact our team by phone, email, or by submitting the contact form on this page.",
    },
    {
        number: "02",
        question: "Can I join the organisation as a volunteer?",
        answer:
            "Yes. You can visit our Join Us section and share your details and interest with the organisation.",
    },
    {
        number: "03",
        question: "Can I contact you regarding your activities?",
        answer:
            "Absolutely. You can contact us to know more about our educational, social and community initiatives.",
    },
];


/* ==========================================================
   SOCIAL LINKS
========================================================== */

const socialLinks = [
    {
        icon: FaFacebookF,
        label: "Facebook",
        href: "https://www.facebook.com/share/1E8c1c6nMV/",
    },
    {
        icon: FaInstagram,
        label: "Instagram",
        href: "https://www.instagram.com/bhimsevaksamiti/",
    },
    {
        icon: FaWhatsapp,
        label: "WhatsApp",
        href: "https://wa.me/919627833744",
    },
];


/* ==========================================================
   CONTACT PAGE
========================================================== */

export default function ContactPage() {
    return (
        <>
            {/* ==================================================
                NAVBAR
            ================================================== */}

            <Navbar />


            <main className="contact-page">

                {/* ==================================================
                    HERO
                ================================================== */}

                <section className="contact-hero">

                    <div className="contact-container">

                        <div className="contact-hero__content">

                            <span className="contact-hero__eyebrow">
                                LET&apos;S CONNECT
                            </span>

                            <h1>
                                We&apos;re Here to
                                <span>Hear From You.</span>
                            </h1>

                            <p>
                                Have a question, suggestion, or simply want
                                to know more about our work? Reach out to us
                                and let&apos;s connect for something meaningful.
                            </p>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    CONTACT INFORMATION
                ================================================== */}

                <section className="contact-info-section">

                    <div className="contact-container">

                        <div className="contact-section-heading">

                            <span>
                                CONTACT INFORMATION
                            </span>

                            <h2>
                                Simple ways to
                                <span>connect with us.</span>
                            </h2>

                            <p>
                                Choose the way that works best for you.
                                Our team will be happy to hear from you.
                            </p>

                        </div>


                        <div className="contact-info-grid">

                            {contactInfo.map((item) => {

                                const Icon = item.icon;

                                return (
                                    <a
                                        href={item.href}
                                        className="contact-info-card"
                                        key={item.title}
                                    >

                                        <div className="contact-info-card__top">

                                            <div className="contact-info-card__icon">
                                                <Icon aria-hidden="true" />
                                            </div>

                                            <FiArrowRight
                                                className="contact-info-card__arrow"
                                                aria-hidden="true"
                                            />

                                        </div>

                                        <span className="contact-info-card__eyebrow">
                                            {item.eyebrow}
                                        </span>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.value}
                                        </p>

                                    </a>
                                );
                            })}

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    MESSAGE + FORM
                ================================================== */}

                <section
                    className="contact-message-section"
                    id="contact-form"
                >

                    <div className="contact-container">

                        <div className="contact-message-layout">


                            {/* LEFT CONTENT */}

                            <div className="contact-message-intro">

                                <span className="contact-section-label">
                                    SEND US A MESSAGE
                                </span>

                                <h2>
                                    Let&apos;s start a
                                    <span>conversation.</span>
                                </h2>

                                <p>
                                    Whether you have a question, want to
                                    collaborate, or simply want to learn
                                    more about our work, feel free to reach
                                    out.
                                </p>


                                <div className="contact-message-points">

                                    <div className="contact-message-point">

                                        <div>
                                            <FiMessageCircle />
                                        </div>

                                        <section>
                                            <h3>
                                                Share Your Message
                                            </h3>

                                            <p>
                                                Tell us how we can help you.
                                            </p>
                                        </section>

                                    </div>


                                    <div className="contact-message-point">

                                        <div>
                                            <FiUsers />
                                        </div>

                                        <section>
                                            <h3>
                                                Connect With Our Team
                                            </h3>

                                            <p>
                                                Our team will review your
                                                message.
                                            </p>
                                        </section>

                                    </div>


                                    <div className="contact-message-point">

                                        <div>
                                            <FiHeart />
                                        </div>

                                        <section>
                                            <h3>
                                                Make a Difference
                                            </h3>

                                            <p>
                                                Every meaningful connection
                                                matters.
                                            </p>

                                        </section>

                                    </div>

                                </div>


                                {/* SOCIAL */}

                                <div className="contact-social">

                                    <span>
                                        FOLLOW OUR JOURNEY
                                    </span>

                                    <div>

                                        {socialLinks.map((social) => {

                                            const SocialIcon = social.icon;

                                            return (
                                                <a
                                                    key={social.label}
                                                    href={social.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={social.label}
                                                >
                                                    <SocialIcon />
                                                </a>
                                            );
                                        })}

                                    </div>

                                </div>

                            </div>


                            {/* FORM */}

                            <div className="contact-form-card">

                                <div className="contact-form-card__header">

                                    <div>

                                        <span>
                                            CONTACT FORM
                                        </span>

                                        <h3>
                                            Send us a message
                                        </h3>

                                    </div>

                                    <div className="contact-form-card__send-icon">
                                        <FiSend aria-hidden="true" />
                                    </div>

                                </div>


                                <form className="contact-form">

                                    <div className="contact-form__row">

                                        <div className="contact-form__field">

                                            <label htmlFor="contact-name">
                                                Full Name
                                            </label>

                                            <input
                                                id="contact-name"
                                                name="name"
                                                type="text"
                                                placeholder="Enter your full name"
                                                autoComplete="name"
                                                required
                                            />

                                        </div>


                                        <div className="contact-form__field">

                                            <label htmlFor="contact-phone">
                                                Mobile Number
                                            </label>

                                            <input
                                                id="contact-phone"
                                                name="phone"
                                                type="tel"
                                                placeholder="Enter mobile number"
                                                autoComplete="tel"
                                                required
                                            />

                                        </div>

                                    </div>


                                    <div className="contact-form__row">

                                        <div className="contact-form__field">

                                            <label htmlFor="contact-email">
                                                Email Address
                                            </label>

                                            <input
                                                id="contact-email"
                                                name="email"
                                                type="email"
                                                placeholder="Enter email address"
                                                autoComplete="email"
                                                required
                                            />

                                        </div>


                                        <div className="contact-form__field">

                                            <label htmlFor="contact-subject">
                                                Subject
                                            </label>

                                            <input
                                                id="contact-subject"
                                                name="subject"
                                                type="text"
                                                placeholder="What is this about?"
                                                required
                                            />

                                        </div>

                                    </div>


                                    <div className="contact-form__field">

                                        <label htmlFor="contact-message">
                                            Your Message
                                        </label>

                                        <textarea
                                            id="contact-message"
                                            name="message"
                                            rows="6"
                                            placeholder="Write your message here..."
                                            required
                                        />

                                    </div>


                                    <button
                                        type="submit"
                                        className="contact-form__submit"
                                    >
                                        <span>
                                            Send Message
                                        </span>

                                        <FiArrowRight
                                            aria-hidden="true"
                                        />
                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    LOCATION
                ================================================== */}

                <section
                    className="contact-location-section"
                    id="location"
                >

                    <div className="contact-container">

                        <div className="contact-location-heading">

                            <span>
                                OUR LOCATION
                            </span>

                            <h2>
                                Find us
                                <span>on the map.</span>
                            </h2>

                            <p>
                                Explore our location and get in touch with
                                Bheem Sevak Samiti.
                            </p>

                        </div>


                        <div className="contact-location">

                            <div className="contact-location__content">

                                <div className="contact-location__icon">
                                    <FiMapPin />
                                </div>

                                <span>
                                    BHEEM SEVAK SAMITI
                                </span>

                                <h3>
                                    Uttar Pradesh,
                                    <strong>India.</strong>
                                </h3>

                                <p>
                                    For meetings, enquiries and other
                                    information, please contact our team
                                    before visiting.
                                </p>


                                <a
                                    href="https://maps.app.goo.gl/m9vPtj7ohErY4Fu17"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="contact-location__button"
                                >
                                    <span>
                                        Open in Google Maps
                                    </span>

                                    <FiArrowRight />
                                </a>

                            </div>


                            <div className="contact-location__map">

                                <iframe
                                    title="Bheem Sevak Samiti Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3459.5125614666317!2d77.71067287554739!3d29.878328275007725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjnCsDUyJzQyLjAiTiA3N8KwNDInNDcuNyJF!5e0!3m2!1sen!2sin!4v1788492522211!5m2!1sen!2sin"
                                    loading="lazy"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                />

                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    FAQ
                ================================================== */}

                <section className="contact-faq-section">

                    <div className="contact-container">

                        <div className="contact-section-heading">

                            <span>
                                FREQUENTLY ASKED QUESTIONS
                            </span>

                            <h2>
                                Before you
                                <span>reach out.</span>
                            </h2>

                            <p>
                                A few quick answers to common questions
                                about contacting our organisation.
                            </p>

                        </div>


                        <div className="contact-faq-list">

                            {contactFaqs.map((faq) => (

                                <details
                                    className="contact-faq-item"
                                    key={faq.number}
                                >

                                    <summary>

                                        <span className="contact-faq-item__number">
                                            {faq.number}
                                        </span>

                                        <strong>
                                            {faq.question}
                                        </strong>

                                        <span className="contact-faq-item__plus">
                                            +
                                        </span>

                                    </summary>


                                    <div className="contact-faq-answer">

                                        <p>
                                            {faq.answer}
                                        </p>

                                    </div>

                                </details>

                            ))}

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    FINAL CTA
                ================================================== */}

                <section className="contact-final-cta">

                    <div className="contact-container">

                        <div className="contact-final-cta__inner">

                            <div className="contact-final-cta__content">

                                <span>
                                    BE A PART OF THE CHANGE
                                </span>

                                <h2>
                                    One connection can
                                    <strong>create a difference.</strong>
                                </h2>

                                <p>
                                    Connect with us, join our mission and
                                    become a part of meaningful change.
                                </p>

                            </div>


                            <div className="contact-final-cta__actions">

                                <Link
                                    href="/join-us"
                                    className="contact-final-cta__primary"
                                >
                                    Join Our Mission
                                    <FiArrowRight />
                                </Link>

                                <Link
                                    href="/donate-us"
                                    className="contact-final-cta__secondary"
                                >
                                    Support Our Work
                                    <FiHeart />
                                </Link>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    FOOTER
                ================================================== */}

                <Footer />

            </main>
        </>
    );
}