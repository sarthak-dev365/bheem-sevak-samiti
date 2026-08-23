import Link from "next/link";
import "../../styles/contact.css";

import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
    FiArrowRight,
    FiSend,
} from "react-icons/fi";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

import Footer from "../../components/layout/Footer";


/* ==========================================================
   CONTACT INFORMATION
========================================================== */

const contactInfo = [
    {
        icon: FiPhone,
        title: "Phone",
        label: "Call Us",
        value: "+91 9627833744",
        href: "tel:+919627833744",
    },
    {
        icon: FiMail,
        title: "Email",
        label: "Write to Us",
        value: "bhimsevaksamiti@gmail.com",
        href: "mailto:bhimsevaksamiti@gmail.com",
    },
    {
        icon: FiMapPin,
        title: "Address",
        label: "Visit Us",
        value: "उत्तर प्रदेश, भारत",
        href: "#location",
    },
    {
        icon: FiClock,
        title: "Support",
        label: "We Are Here to Help",
        value: "Contact us for more information",
        href: "#contact-form",
    },
];


/* ==========================================================
   FAQ DATA
========================================================== */

const contactFaqs = [
    {
        question: "मैं संस्था से कैसे संपर्क कर सकता हूँ?",
        answer:
            "आप फोन, ईमेल या नीचे दिए गए Contact Form के माध्यम से हमारी टीम से संपर्क कर सकते हैं।",
    },
    {
        question: "क्या मैं संस्था से जुड़कर volunteer कर सकता हूँ?",
        answer:
            "हाँ। आप Join Us page के माध्यम से अपनी रुचि और जानकारी साझा करके संस्था से जुड़ सकते हैं।",
    },
    {
        question: "क्या संस्था से संबंधित जानकारी के लिए संपर्क कर सकते हैं?",
        answer:
            "हाँ। संस्था की activities, services, events और अन्य जानकारी के लिए हमारी टीम से संपर्क किया जा सकता है।",
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
        icon: FaYoutube,
        label: "YouTube",
        href: "#",
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
        <main className="contact-page">


            {/* ==================================================
                HERO SECTION
            ================================================== */}

            <section className="contact-hero">

                <div className="contact-container">

                    <div className="contact-hero__content">

                        <span className="contact-hero__eyebrow">
                            GET IN TOUCH
                        </span>

                        <h1>
                            हमसे <span>संपर्क करें</span>
                        </h1>

                        <p>
                            संस्था से जुड़ी किसी भी जानकारी, सुझाव,
                            सहयोग या अन्य विषय के लिए हमसे संपर्क करें।
                            हमारी टीम आपकी सहायता करने के लिए हमेशा
                            प्रयासरत है।
                        </p>

                        <div className="contact-hero__actions">

                            <a
                                href="tel:+919627833744"
                                className="contact-button contact-button--primary"
                            >
                                <FiPhone />

                                <span>
                                    Call Us
                                </span>

                            </a>


                            <a
                                href="mailto:bhimsevaksamiti@gmail.com"
                                className="contact-button contact-button--outline"
                            >
                                <FiMail />

                                <span>
                                    Email Us
                                </span>

                            </a>

                        </div>

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
                            हमसे जुड़ने के आसान तरीके
                        </h2>

                        <p>
                            अपने सवाल, सुझाव या सहयोग से जुड़ी जानकारी
                            के लिए नीचे दिए गए माध्यमों का उपयोग करें।
                        </p>

                    </div>


                    <div className="contact-info-grid">

                        {contactInfo.map((item) => {

                            const Icon = item.icon;

                            return (

                                <a
                                    key={item.title}
                                    href={item.href}
                                    className="contact-info-card"
                                >

                                    <span className="contact-info-card__icon">
                                        <Icon />
                                    </span>


                                    <div className="contact-info-card__content">

                                        <span>
                                            {item.label}
                                        </span>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.value}
                                        </p>

                                    </div>


                                    <FiArrowRight
                                        className="contact-info-card__arrow"
                                    />

                                </a>

                            );

                        })}

                    </div>

                </div>

            </section>



            {/* ==================================================
                CONTACT FORM + SIDE CONTENT
            ================================================== */}

            <section
                className="contact-form-section"
                id="contact-form"
            >

                <div className="contact-container">

                    <div className="contact-form-layout">


                        {/* ==================================================
                            LEFT CONTENT
                        ================================================== */}

                        <div className="contact-form-intro">

                            <span className="contact-form-intro__eyebrow">
                                SEND US A MESSAGE
                            </span>

                            <h2>
                                आपकी बात हमारे लिए महत्वपूर्ण है।
                            </h2>

                            <p>
                                यदि आपके पास कोई प्रश्न, सुझाव,
                                सहयोग का प्रस्ताव या संस्था से संबंधित
                                कोई जानकारी है, तो हमें संदेश भेजें।
                            </p>


                            <div className="contact-form-intro__points">

                                <div>
                                    <span>
                                        01
                                    </span>

                                    <div>
                                        <strong>
                                            अपना सवाल साझा करें
                                        </strong>

                                        <p>
                                            अपनी query या message
                                            स्पष्ट रूप से लिखें।
                                        </p>
                                    </div>
                                </div>


                                <div>
                                    <span>
                                        02
                                    </span>

                                    <div>
                                        <strong>
                                            सही जानकारी दें
                                        </strong>

                                        <p>
                                            अपना नाम और contact details
                                            सही दर्ज करें।
                                        </p>
                                    </div>
                                </div>


                                <div>
                                    <span>
                                        03
                                    </span>

                                    <div>
                                        <strong>
                                            हमारी टीम से जुड़ें
                                        </strong>

                                        <p>
                                            हमारी टीम आपके संदेश की
                                            समीक्षा करेगी।
                                        </p>
                                    </div>
                                </div>

                            </div>


                            {/* SOCIAL */}

                            <div className="contact-form-social">

                                <span>
                                    FOLLOW US
                                </span>


                                <div>

                                    {socialLinks.map((social) => {

                                        const SocialIcon = social.icon;

                                        return (

                                            <a
                                                key={social.label}
                                                href={social.href}
                                                aria-label={social.label}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <SocialIcon />
                                            </a>

                                        );

                                    })}

                                </div>

                            </div>

                        </div>



                        {/* ==================================================
                            FORM
                        ================================================== */}

                        <div className="contact-form-card">

                            <div className="contact-form-card__header">

                                <div>

                                    <span>
                                        CONTACT FORM
                                    </span>

                                    <h3>
                                        अपना संदेश भेजें
                                    </h3>

                                </div>

                                <span className="contact-form-card__icon">
                                    <FiSend />
                                </span>

                            </div>


                            <form className="contact-form">

                                <div className="contact-form__row">

                                    <div className="contact-form__field">

                                        <label htmlFor="name">
                                            Full Name
                                        </label>

                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter your name"
                                            required
                                        />

                                    </div>


                                    <div className="contact-form__field">

                                        <label htmlFor="phone">
                                            Mobile Number
                                        </label>

                                        <input
                                            id="phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter mobile number"
                                            required
                                        />

                                    </div>

                                </div>


                                <div className="contact-form__row">

                                    <div className="contact-form__field">

                                        <label htmlFor="email">
                                            Email Address
                                        </label>

                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter email address"
                                            required
                                        />

                                    </div>


                                    <div className="contact-form__field">

                                        <label htmlFor="subject">
                                            Subject
                                        </label>

                                        <input
                                            id="subject"
                                            name="subject"
                                            type="text"
                                            placeholder="Enter subject"
                                            required
                                        />

                                    </div>

                                </div>


                                <div className="contact-form__field">

                                    <label htmlFor="message">
                                        Your Message
                                    </label>

                                    <textarea
                                        id="message"
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

                                    <FiArrowRight />

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

                    <div className="contact-location">

                        <div className="contact-location__content">

                            <span>
                                OUR LOCATION
                            </span>

                            <h2>
                                हमसे मिलने आएँ
                            </h2>

                            <p>
                                हमारा संगठन उत्तर प्रदेश में समाज
                                के विकास और सशक्तिकरण के लिए कार्यरत है।
                                संस्था से जुड़ी जानकारी के लिए हमसे
                                संपर्क करें।
                            </p>


                            <div className="contact-location__address">

                                <FiMapPin />

                                <div>

                                    <strong>
                                        Bheem Sevak Samiti
                                    </strong>

                                    <p>
                                        उत्तर प्रदेश, भारत
                                    </p>

                                </div>

                            </div>

                        </div>


                        <div className="contact-location__map">

                            <div className="contact-location__map-placeholder">

                                <FiMapPin />

                                <strong>
                                    Uttar Pradesh, India
                                </strong>

                                <span>
                                    Location Map
                                </span>

                            </div>

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
                            Contact से जुड़े सवाल
                        </h2>

                        <p>
                            संस्था से संपर्क करने से संबंधित कुछ
                            सामान्य प्रश्नों के उत्तर।
                        </p>

                    </div>


                    <div className="contact-faq-list">

                        {contactFaqs.map((faq, index) => (

                            <details
                                className="contact-faq-item"
                                key={faq.question}
                            >

                                <summary>

                                    <span>
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <strong>
                                        {faq.question}
                                    </strong>

                                    <FiArrowRight />

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
                JOIN / DONATE CTA
            ================================================== */}

            <section className="contact-cta-section">

                <div className="contact-container">

                    <div className="contact-cta">

                        <div>

                            <span>
                                BE A PART OF THE CHANGE
                            </span>

                            <h2>
                                समाज के बेहतर भविष्य के लिए
                                हमारे साथ जुड़ें।
                            </h2>

                        </div>


                        <div className="contact-cta__actions">

                            <Link
                                href="/join-us"
                                className="contact-cta__button contact-cta__button--primary"
                            >
                                Join Us
                                <FiArrowRight />
                            </Link>


                            <Link
                                href="/donate-us"
                                className="contact-cta__button contact-cta__button--secondary"
                            >
                                Donate Us
                                <FiArrowRight />
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
    );
}