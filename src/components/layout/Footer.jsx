import Link from "next/link";
import "../../styles/footer.css";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiArrowRight,
} from "react-icons/fi";


/* ==========================================================
   QUICK NAVIGATION
========================================================== */

const quickLinks = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "About Us",
        href: "/about",
    },
    {
        label: "Services",
        href: "/services",
    },
    {
        label: "Pathshala",
        href: "/pathshala",
    },
    {
        label: "Examination",
        href: "/examination",
    },
];


/* ==========================================================
   EXPLORE LINKS
========================================================== */

const exploreLinks = [
    {
        label: "Gallery",
        href: "/gallery",
    },
    {
        label: "Events",
        href: "/events",
    },
    {
        label: "Contact Us",
        href: "/contact",
    },
    {
        label: "Join Us",
        href: "/join-us",
    },
    {
        label: "Donate Us",
        href: "/donate-us",
    },
];


/* ==========================================================
   SERVICE LINKS
========================================================== */

const serviceLinks = [
    {
        label: "Education",
        href: "/services",
    },
    {
        label: "Social Reform",
        href: "/services",
    },
    {
        label: "Environment",
        href: "/services",
    },
    {
        label: "Public Awareness",
        href: "/services",
    },
    {
        label: "Community Service",
        href: "/services",
    },
];


/* ==========================================================
   IMPACT ITEMS
========================================================== */

const impactItems = [
    {
        number: "01",
        title: "Education",
        description: "शिक्षा के माध्यम से सशक्तिकरण",
    },
    {
        number: "02",
        title: "Social Development",
        description: "सामाजिक विकास के लिए निरंतर प्रयास",
    },
    {
        number: "03",
        title: "Environment",
        description: "प्रकृति और पर्यावरण का संरक्षण",
    },
    {
        number: "04",
        title: "Community",
        description: "समुदाय के लिए सेवा और सहयोग",
    },
];


/* ==========================================================
   FOOTER COMPONENT
========================================================== */

export default function Footer() {

    const currentYear = new Date().getFullYear();


    return (
        <footer className="site-footer">


            {/* ==================================================
                IMPACT STRIP
            ================================================== */}

            <div className="site-footer__impact">

                <div className="site-footer__container">

                    <div className="site-footer__impact-grid">

                        {impactItems.map((item) => (

                            <div
                                className="site-footer__impact-item"
                                key={item.number}
                            >

                                <span className="site-footer__impact-number">
                                    {item.number}
                                </span>


                                <div className="site-footer__impact-content">

                                    <strong>
                                        {item.title}
                                    </strong>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>



            {/* ==================================================
                MAIN FOOTER
            ================================================== */}

            <div className="site-footer__main">

                <div className="site-footer__container">

                    <div className="site-footer__grid">


                        {/* ==================================================
                            ORGANIZATION BRAND
                        ================================================== */}

                        <div className="site-footer__brand">

                            <Link
                                href="/"
                                className="site-footer__brand-link"
                                aria-label="भीम सेवक समिति - Home"
                            >

                                {/* BRAND MARK */}

                                <span
                                    className="site-footer__brand-mark"
                                    aria-hidden="true"
                                >
                                    भीम
                                </span>


                                {/* BRAND NAME */}

                                <span className="site-footer__brand-text">

                                    <strong>
                                        भीम सेवक समिति
                                    </strong>

                                    <small>
                                        उत्तर प्रदेश
                                    </small>

                                </span>

                            </Link>


                            {/* ORGANIZATION DESCRIPTION */}

                            <p className="site-footer__description">
                                भीम सेवक समिति एक सामाजिक एवं शैक्षिक
                                संस्था है, जो शिक्षा, सामाजिक सुधार,
                                पर्यावरण संरक्षण एवं जन-जागरूकता के
                                माध्यम से समाज के जरूरतमंद एवं वंचित
                                वर्गों के सशक्तिकरण के लिए कार्य करती है।
                            </p>


                            {/* SOCIAL MEDIA TITLE */}

                            <div className="site-footer__social-heading">
                                हमारे साथ जुड़ें
                            </div>


                            {/* SOCIAL MEDIA LINKS */}

                            <div className="site-footer__social">


                                {/* FACEBOOK */}

                                <a
                                    href="https://www.facebook.com/share/1E8c1c6nMV/"
                                    className="site-footer__social-link"
                                    aria-label="Facebook"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebookF />
                                </a>


                                {/* INSTAGRAM */}

                                <a
                                    href="https://www.instagram.com/bhimsevaksamiti/"
                                    className="site-footer__social-link"
                                    aria-label="Instagram"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaInstagram />
                                </a>


                                {/* YOUTUBE */}

                                <a
                                    href="#"
                                    className="site-footer__social-link"
                                    aria-label="YouTube"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaYoutube />
                                </a>


                                {/* WHATSAPP */}

                                <a
                                    href="https://wa.me/919627833744"
                                    className="site-footer__social-link"
                                    aria-label="WhatsApp"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp />
                                </a>


                                {/* X / TWITTER */}

                                <a
                                    href="https://twitter.com/BhimSevakSamiti"
                                    className="site-footer__social-link"
                                    aria-label="X (Twitter)"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaXTwitter />
                                </a>

                            </div>

                        </div>



                        {/* ==================================================
                            QUICK LINKS
                        ================================================== */}

                        <div className="site-footer__column">

                            <h3>
                                Quick Links
                            </h3>

                            <span className="site-footer__heading-line" />


                            <ul>

                                {quickLinks.map((link) => (

                                    <li key={link.label}>

                                        <Link href={link.href}>

                                            <FiArrowRight />

                                            <span>
                                                {link.label}
                                            </span>

                                        </Link>

                                    </li>

                                ))}

                            </ul>

                        </div>



                        {/* ==================================================
                            EXPLORE
                        ================================================== */}

                        <div className="site-footer__column">

                            <h3>
                                Explore
                            </h3>

                            <span className="site-footer__heading-line" />


                            <ul>

                                {exploreLinks.map((link) => (

                                    <li key={link.label}>

                                        <Link href={link.href}>

                                            <FiArrowRight />

                                            <span>
                                                {link.label}
                                            </span>

                                        </Link>

                                    </li>

                                ))}

                            </ul>

                        </div>



                        {/* ==================================================
                            SERVICES
                        ================================================== */}

                        <div className="site-footer__column">

                            <h3>
                                Our Services
                            </h3>

                            <span className="site-footer__heading-line" />


                            <ul>

                                {serviceLinks.map((link) => (

                                    <li key={link.label}>

                                        <Link href={link.href}>

                                            <FiArrowRight />

                                            <span>
                                                {link.label}
                                            </span>

                                        </Link>

                                    </li>

                                ))}

                            </ul>

                        </div>



                        {/* ==================================================
                            CONTACT INFORMATION
                        ================================================== */}

                        <div className="site-footer__contact">

                            <h3>
                                Contact Us
                            </h3>

                            <span className="site-footer__heading-line" />


                            {/* PHONE */}

                            <div className="site-footer__contact-item">

                                <span className="site-footer__contact-icon">
                                    <FiPhone />
                                </span>


                                <div>

                                    <small>
                                        PHONE
                                    </small>

                                    <a href="tel:+919627833744">
                                        +91 9627833744
                                    </a>

                                </div>

                            </div>


                            {/* EMAIL */}

                            <div className="site-footer__contact-item">

                                <span className="site-footer__contact-icon">
                                    <FiMail />
                                </span>


                                <div>

                                    <small>
                                        EMAIL
                                    </small>

                                    <a href="mailto:bhimsevaksamiti@gmail.com">
                                        bhimsevaksamiti@gmail.com
                                    </a>

                                </div>

                            </div>


                            {/* LOCATION */}

                            <div className="site-footer__contact-item">

                                <span className="site-footer__contact-icon">
                                    <FiMapPin />
                                </span>


                                <div>

                                    <small>
                                        ADDRESS
                                    </small>

                                    <strong>
                                        उत्तर प्रदेश, भारत
                                    </strong>

                                </div>

                            </div>


                            {/* CONTACT BUTTON */}

                            <Link
                                href="/contact"
                                className="site-footer__contact-button"
                            >

                                <span>
                                    Contact Organization
                                </span>

                                <FiArrowRight />

                            </Link>

                        </div>

                    </div>

                </div>

            </div>



            {/* ==================================================
                ORGANIZATION MESSAGE
            ================================================== */}

            <div className="site-footer__message">

                <div className="site-footer__container">

                    <div className="site-footer__message-inner">

                        <span>
                            शिक्षित बनो
                        </span>

                        <i>
                            •
                        </i>

                        <span>
                            संगठित रहो
                        </span>

                        <i>
                            •
                        </i>

                        <span>
                            संघर्ष करो
                        </span>

                    </div>

                </div>

            </div>



            {/* ==================================================
                COPYRIGHT & LEGAL
            ================================================== */}

            <div className="site-footer__bottom">

                <div className="site-footer__container">

                    <div className="site-footer__bottom-inner">


                        {/* COPYRIGHT */}

                        <p>
                            © {currentYear} Bheem Sevak Samiti,
                            Uttar Pradesh. All Rights Reserved.
                        </p>


                        {/* LEGAL LINKS */}

                        <div className="site-footer__legal">

                            <Link href="/privacy-policy">
                                Privacy Policy
                            </Link>

                            <span>
                                |
                            </span>

                            <Link href="/terms">
                                Terms & Conditions
                            </Link>

                            <span>
                                |
                            </span>

                            <Link href="/sitemap">
                                Sitemap
                            </Link>

                        </div>

                    </div>

                </div>

            </div>


        </footer>
    );
}