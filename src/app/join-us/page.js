import Link from "next/link";
import "../../styles/join-us.css";

import {
    FiUsers,
    FiHeart,
    FiBookOpen,
    FiGlobe,
    FiCalendar,
    FiArrowRight,
    FiCheckCircle,
    FiSend,
    FiMapPin,
} from "react-icons/fi";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

import Footer from "../../components/layout/Footer";


/* ==========================================================
   VOLUNTEER OPPORTUNITIES
========================================================== */

const volunteerOpportunities = [
    {
        icon: FiBookOpen,
        number: "01",
        title: "Education Support",
        description:
            "शिक्षा से जुड़े कार्यक्रमों, विद्यार्थियों और शैक्षिक गतिविधियों में सहयोग करें।",
    },
    {
        icon: FiUsers,
        number: "02",
        title: "Community Service",
        description:
            "समुदाय के जरूरतमंद लोगों तक सहायता और सामाजिक सेवाओं को पहुँचाने में सहयोग करें।",
    },
    {
        icon: FiGlobe,
        number: "03",
        title: "Environment",
        description:
            "पर्यावरण संरक्षण, स्वच्छता और जागरूकता अभियानों में अपनी भागीदारी दें।",
    },
    {
        icon: FiHeart,
        number: "04",
        title: "Social Awareness",
        description:
            "सामाजिक जागरूकता अभियानों और सकारात्मक बदलाव से जुड़े कार्यों में योगदान दें।",
    },
    {
        icon: FiCalendar,
        number: "05",
        title: "Events & Campaigns",
        description:
            "संस्था के events, campaigns और community activities में volunteer के रूप में जुड़ें।",
    },
    {
        icon: FiUsers,
        number: "06",
        title: "Special Initiatives",
        description:
            "अपनी skills और रुचि के अनुसार संस्था की विशेष initiatives में योगदान करें।",
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
            "नीचे दिए गए form में अपनी basic information साझा करें।",
    },
    {
        number: "02",
        title: "Connect",
        description:
            "हमारी team आपकी जानकारी देखकर आपसे संपर्क करेगी।",
    },
    {
        number: "03",
        title: "Choose Your Area",
        description:
            "अपनी रुचि और skills के अनुसार volunteering area चुनें।",
    },
    {
        number: "04",
        title: "Make an Impact",
        description:
            "हमारे साथ मिलकर समाज के लिए सकारात्मक योगदान दें।",
    },
];


/* ==========================================================
   VOLUNTEER BENEFITS
========================================================== */

const benefits = [
    "समाज सेवा से जुड़ने का अवसर",
    "सामाजिक और शैक्षिक अभियानों में भागीदारी",
    "Community activities में practical experience",
    "अपनी skills का सकारात्मक उपयोग",
    "समान सोच रखने वाले लोगों के साथ जुड़ने का अवसर",
    "समाज में सकारात्मक बदलाव लाने में योगदान",
];


/* ==========================================================
   FAQ
========================================================== */

const joinFaqs = [
    {
        question: "क्या volunteer बनने के लिए कोई विशेष qualification जरूरी है?",
        answer:
            "Volunteer बनने के लिए हर activity के लिए अलग qualification जरूरी नहीं है। आपकी रुचि, समय और skills के अनुसार volunteering opportunities उपलब्ध हो सकती हैं।",
    },
    {
        question: "क्या मैं part-time volunteer कर सकता हूँ?",
        answer:
            "हाँ। अपनी उपलब्धता के अनुसार संस्था की activities और campaigns में सहयोग करने के लिए अपनी रुचि साझा कर सकते हैं।",
    },
    {
        question: "क्या students भी volunteer कर सकते हैं?",
        answer:
            "हाँ। Students अपनी रुचि और उपलब्ध समय के अनुसार educational, awareness और community activities में सहयोग कर सकते हैं।",
    },
    {
        question: "Join Us form submit करने के बाद क्या होगा?",
        answer:
            "Form submit करने के बाद आपकी जानकारी हमारी team तक पहुँचेगी। आवश्यकता और उपलब्ध अवसर के अनुसार team आपसे संपर्क कर सकती है।",
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
   JOIN US PAGE
========================================================== */

export default function JoinUsPage() {

    return (
        <main className="join-page">


            {/* ==================================================
                HERO
            ================================================== */}

            <section className="join-hero">

                <div className="join-container">

                    <div className="join-hero__content">

                        <span className="join-hero__eyebrow">
                            JOIN OUR MISSION
                        </span>

                        <h1>
                            बदलाव का हिस्सा <span>बनें।</span>
                        </h1>

                        <p>
                            समाज के बेहतर भविष्य के लिए आपके समय,
                            skills और सहयोग की जरूरत है। हमारे साथ
                            जुड़ें और सकारात्मक बदलाव की इस यात्रा
                            में अपना योगदान दें।
                        </p>


                        <div className="join-hero__actions">

                            <a
                                href="#join-form"
                                className="join-button join-button--primary"
                            >
                                <FiUsers />

                                <span>
                                    Join Our Mission
                                </span>

                            </a>


                            <Link
                                href="/contact"
                                className="join-button join-button--outline"
                            >
                                <span>
                                    Contact Us
                                </span>

                                <FiArrowRight />

                            </Link>

                        </div>

                    </div>

                </div>

            </section>



            {/* ==================================================
                INTRO / WHY JOIN
            ================================================== */}

            <section className="join-intro-section">

                <div className="join-container">

                    <div className="join-section-heading">

                        <span>
                            WHY JOIN US
                        </span>

                        <h2>
                            आपके छोटे से प्रयास से
                            बड़ा बदलाव संभव है।
                        </h2>

                        <p>
                            समाज में सकारात्मक बदलाव केवल एक व्यक्ति
                            से नहीं, बल्कि साथ मिलकर काम करने वाले लोगों
                            के प्रयास से आता है। आपका समय और आपकी skills
                            किसी के जीवन में महत्वपूर्ण बदलाव ला सकती हैं।
                        </p>

                    </div>


                    <div className="join-benefits">

                        <div className="join-benefits__visual">

                            <div className="join-benefits__number">
                                <span>
                                    JOIN
                                </span>

                                <strong>
                                    US
                                </strong>
                            </div>

                            <div className="join-benefits__quote">
                                मिलकर सेवा,
                                <br />
                                मिलकर बदलाव।
                            </div>

                        </div>


                        <div className="join-benefits__content">

                            <span>
                                YOUR CONTRIBUTION MATTERS
                            </span>

                            <h3>
                                हमारे साथ जुड़ने से
                                आपको क्या मिलेगा?
                            </h3>


                            <div className="join-benefits__list">

                                {benefits.map((benefit) => (

                                    <div
                                        key={benefit}
                                    >

                                        <FiCheckCircle />

                                        <span>
                                            {benefit}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>



            {/* ==================================================
                VOLUNTEER OPPORTUNITIES
            ================================================== */}

            <section className="join-opportunities-section">

                <div className="join-container">

                    <div className="join-section-heading">

                        <span>
                            VOLUNTEER OPPORTUNITIES
                        </span>

                        <h2>
                            आप किस क्षेत्र में
                            योगदान देना चाहते हैं?
                        </h2>

                        <p>
                            अपनी रुचि और skills के अनुसार volunteering
                            के लिए सही क्षेत्र चुनें।
                        </p>

                    </div>


                    <div className="join-opportunities-grid">

                        {volunteerOpportunities.map((item) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    className="join-opportunity-card"
                                    key={item.number}
                                >

                                    <div className="join-opportunity-card__top">

                                        <span>
                                            {item.number}
                                        </span>

                                        <div className="join-opportunity-card__icon">
                                            <Icon />
                                        </div>

                                    </div>


                                    <div className="join-opportunity-card__content">

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>


                                    <a href="#join-form">

                                        Join This Area

                                        <FiArrowRight />

                                    </a>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>



            {/* ==================================================
                HOW IT WORKS
            ================================================== */}

            <section className="join-process-section">

                <div className="join-container">

                    <div className="join-section-heading">

                        <span>
                            HOW IT WORKS
                        </span>

                        <h2>
                            हमारे साथ जुड़ना आसान है।
                        </h2>

                        <p>
                            केवल कुछ आसान steps में volunteering
                            के लिए अपनी जानकारी साझा करें।
                        </p>

                    </div>


                    <div className="join-process-grid">

                        {joinSteps.map((step) => (

                            <div
                                className="join-process-item"
                                key={step.number}
                            >

                                <span className="join-process-item__number">
                                    {step.number}
                                </span>

                                <div>

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

                </div>

            </section>



            {/* ==================================================
                REGISTRATION FORM
            ================================================== */}

            <section
                className="join-form-section"
                id="join-form"
            >

                <div className="join-container">

                    <div className="join-form-layout">


                        {/* LEFT */}
                        <div className="join-form-intro">

                            <span>
                                VOLUNTEER REGISTRATION
                            </span>

                            <h2>
                                आज ही हमारे
                                साथ जुड़ें।
                            </h2>

                            <p>
                                नीचे अपनी जानकारी साझा करें। आपकी
                                रुचि और skills के अनुसार volunteering
                                opportunities के बारे में हमारी team
                                आपसे संपर्क कर सकती है।
                            </p>


                            <div className="join-form-contact">

                                <div>

                                    <FiMapPin />

                                    <span>
                                        उत्तर प्रदेश, भारत
                                    </span>

                                </div>

                                <div>

                                    <FiUsers />

                                    <span>
                                        Community Volunteers
                                    </span>

                                </div>

                            </div>


                            <div className="join-form-social">

                                <span>
                                    FOLLOW OUR WORK
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


                        {/* FORM */}
                        <div className="join-form-card">

                            <div className="join-form-card__header">

                                <div>

                                    <span>
                                        JOIN US
                                    </span>

                                    <h3>
                                        Volunteer Registration
                                    </h3>

                                </div>

                                <span className="join-form-card__icon">
                                    <FiSend />
                                </span>

                            </div>


                            <form className="join-form">

                                <div className="join-form__row">

                                    <div className="join-form__field">

                                        <label htmlFor="join-name">
                                            Full Name
                                        </label>

                                        <input
                                            id="join-name"
                                            name="name"
                                            type="text"
                                            placeholder="Enter your full name"
                                            required
                                        />

                                    </div>


                                    <div className="join-form__field">

                                        <label htmlFor="join-phone">
                                            Mobile Number
                                        </label>

                                        <input
                                            id="join-phone"
                                            name="phone"
                                            type="tel"
                                            placeholder="Enter mobile number"
                                            required
                                        />

                                    </div>

                                </div>


                                <div className="join-form__row">

                                    <div className="join-form__field">

                                        <label htmlFor="join-email">
                                            Email Address
                                        </label>

                                        <input
                                            id="join-email"
                                            name="email"
                                            type="email"
                                            placeholder="Enter email address"
                                            required
                                        />

                                    </div>


                                    <div className="join-form__field">

                                        <label htmlFor="join-city">
                                            City / District
                                        </label>

                                        <input
                                            id="join-city"
                                            name="city"
                                            type="text"
                                            placeholder="Enter your city"
                                            required
                                        />

                                    </div>

                                </div>


                                <div className="join-form__field">

                                    <label htmlFor="join-interest">
                                        Area of Interest
                                    </label>

                                    <select
                                        id="join-interest"
                                        name="interest"
                                        defaultValue=""
                                        required
                                    >

                                        <option
                                            value=""
                                            disabled
                                        >
                                            Select volunteering area
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

                                </div>


                                <div className="join-form__field">

                                    <label htmlFor="join-message">
                                        Tell Us About Yourself
                                    </label>

                                    <textarea
                                        id="join-message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us about your skills, interests and how you would like to contribute..."
                                    />

                                </div>


                                <button
                                    type="submit"
                                    className="join-form__submit"
                                >

                                    <span>
                                        Submit Registration
                                    </span>

                                    <FiArrowRight />

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </section>



            {/* ==================================================
                FAQ
            ================================================== */}

            <section className="join-faq-section">

                <div className="join-container">

                    <div className="join-section-heading">

                        <span>
                            FREQUENTLY ASKED QUESTIONS
                        </span>

                        <h2>
                            Join Us से जुड़े सवाल
                        </h2>

                        <p>
                            Volunteer बनने से संबंधित कुछ सामान्य
                            सवालों के जवाब।
                        </p>

                    </div>


                    <div className="join-faq-list">

                        {joinFaqs.map((faq, index) => (

                            <details
                                className="join-faq-item"
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


                                <div className="join-faq-answer">

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
                DONATION CTA
            ================================================== */}

            <section className="join-cta-section">

                <div className="join-container">

                    <div className="join-cta">

                        <div>

                            <span>
                                SUPPORT THE MISSION
                            </span>

                            <h2>
                                समय नहीं दे सकते?
                                आप सहयोग भी कर सकते हैं।
                            </h2>

                            <p>
                                आपकी छोटी सी मदद भी हमारे सामाजिक
                                और शैक्षिक प्रयासों को आगे बढ़ाने में
                                योगदान दे सकती है।
                            </p>

                        </div>


                        <div className="join-cta__actions">

                            <Link
                                href="/donate-us"
                                className="join-cta__button join-cta__button--primary"
                            >
                                Donate Us
                                <FiArrowRight />
                            </Link>


                            <Link
                                href="/contact"
                                className="join-cta__button join-cta__button--secondary"
                            >
                                Contact Us
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