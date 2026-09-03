import Link from "next/link";
import "../../styles/sitemap.css";

import {
    FiArrowRight,
    FiHome,
    FiInfo,
    FiBriefcase,
    FiBookOpen,
    FiFileText,
    FiImage,
    FiMap,
    FiMail,
    FiUsers,
    FiHeart,
    FiShield,
} from "react-icons/fi";

import Footer from "../../components/layout/Footer";


const mainPages = [
    {
        title: "Home",
        description: "Explore the main page of our website",
        href: "/",
        icon: FiHome,
    },
    {
        title: "About Us",
        description: "Learn more about our organization, vision, and mission",
        href: "/about",
        icon: FiInfo,
    },
    {
        title: "Services",
        description: "Discover our services, initiatives, and community activities",
        href: "/services",
        icon: FiBriefcase,
    },
    {
        title: "Pathshala",
        description: "Explore our educational programs, activities, and initiatives",
        href: "/pathshala",
        icon: FiBookOpen,
    },
    {
        title: "Examination",
        description: "Find examination-related information, updates, and resources",
        href: "/examination",
        icon: FiFileText,
    },
];


const discoverPages = [
    {
        title: "Gallery",
        description: "View photos and memories from our activities and events",
        href: "/gallery",
        icon: FiImage,
    },
    {
        title: "Our Journey",
        description: "Explore our journey, milestones, programs, and achievements",
        href: "/our-journey",
        icon: FiMap,
    },
    {
        title: "Join Us",
        description: "Become a part of our mission and make a meaningful difference",
        href: "/join-us",
        icon: FiUsers,
    },
    {
        title: "Contact Us",
        description: "Get in touch with us for questions, support, or inquiries",
        href: "/contact",
        icon: FiMail,
    },
];


const supportPages = [
    {
        title: "Donate Us",
        description: "Support our mission and help us create a positive impact in society",
        href: "/donate-us",
        icon: FiHeart,
    },
];


const legalPages = [
    {
        title: "Privacy Policy",
        description: "Learn how we collect, use, and protect your information",
        href: "/privacy-policy",
        icon: FiShield,
    },
    {
        title: "Terms & Conditions",
        description: "Read the terms and conditions governing the use of our website",
        href: "/terms",
        icon: FiFileText,
    },
];


function SitemapCard({ page }) {
    const Icon = page.icon;

    return (
        <Link
            href={page.href}
            className="sitemap-card"
        >
            <div className="sitemap-card__icon">
                <Icon />
            </div>

            <div className="sitemap-card__content">
                <h3>
                    {page.title}
                </h3>

                <p>
                    {page.description}
                </p>
            </div>

            <span className="sitemap-card__arrow">
                <FiArrowRight />
            </span>
        </Link>
    );
}


export default function SitemapPage() {
    return (
        <main className="sitemap-page">

            {/* ==================================================
                HERO
            ================================================== */}

            <section className="sitemap-hero">
                <div className="sitemap-container">

                    <Link
                        href="/"
                        className="sitemap-back-link"
                    >
                        <FiArrowRight />
                        Back to Home
                    </Link>


                    <div className="sitemap-hero-content">

                        <div className="sitemap-hero-icon">
                            <FiMap />
                        </div>

                        <span>
                            EXPLORE OUR WEBSITE
                        </span>

                        <h1>
                            Sitemap
                        </h1>

                        <p>
                            हमारी website के सभी महत्वपूर्ण
                            pages को एक ही जगह से आसानी से explore करें।
                        </p>

                    </div>

                </div>
            </section>


            {/* ==================================================
                MAIN CONTENT
            ================================================== */}

            <section className="sitemap-content-section">
                <div className="sitemap-container">


                    {/* ==================================================
                        MAIN PAGES
                    ================================================== */}

                    <div className="sitemap-group">

                        <div className="sitemap-group-heading">

                            <span>
                                01
                            </span>

                            <div>
                                <small>
                                    MAIN NAVIGATION
                                </small>

                                <h2>
                                    Main Pages
                                </h2>
                            </div>

                        </div>


                        <div className="sitemap-grid">

                            {mainPages.map((page) => (
                                <SitemapCard
                                    key={page.href}
                                    page={page}
                                />
                            ))}

                        </div>

                    </div>


                    {/* ==================================================
                        DISCOVER
                    ================================================== */}

                    <div className="sitemap-group">

                        <div className="sitemap-group-heading">

                            <span>
                                02
                            </span>

                            <div>
                                <small>
                                    DISCOVER
                                </small>

                                <h2>
                                    Explore More
                                </h2>
                            </div>

                        </div>


                        <div className="sitemap-grid">

                            {discoverPages.map((page) => (
                                <SitemapCard
                                    key={page.href}
                                    page={page}
                                />
                            ))}

                        </div>

                    </div>


                    {/* ==================================================
                        SUPPORT
                    ================================================== */}

                    <div className="sitemap-group">

                        <div className="sitemap-group-heading">

                            <span>
                                03
                            </span>

                            <div>
                                <small>
                                    SUPPORT OUR MISSION
                                </small>

                                <h2>
                                    Support
                                </h2>
                            </div>

                        </div>


                        <div className="sitemap-grid sitemap-grid--single">

                            {supportPages.map((page) => (
                                <SitemapCard
                                    key={page.href}
                                    page={page}
                                />
                            ))}

                        </div>

                    </div>


                    {/* ==================================================
                        LEGAL
                    ================================================== */}

                    <div className="sitemap-group">

                        <div className="sitemap-group-heading">

                            <span>
                                04
                            </span>

                            <div>
                                <small>
                                    INFORMATION
                                </small>

                                <h2>
                                    Legal & Policies
                                </h2>
                            </div>

                        </div>


                        <div className="sitemap-grid">

                            {legalPages.map((page) => (
                                <SitemapCard
                                    key={page.href}
                                    page={page}
                                />
                            ))}

                        </div>

                    </div>


                    {/* ==================================================
                        CTA
                    ================================================== */}

                    <div className="sitemap-cta">

                        <div className="sitemap-cta__icon">
                            <FiHeart />
                        </div>


                        <div className="sitemap-cta__content">

                            <span>
                                SUPPORT OUR MISSION
                            </span>

                            <h2>
                                समाज के लिए हमारे प्रयासों
                                का हिस्सा बनें।
                            </h2>

                            <p>
                                आपका छोटा सा सहयोग शिक्षा,
                                सामाजिक सेवा और सामुदायिक
                                विकास के प्रयासों को आगे बढ़ाने
                                में मदद कर सकता है।
                            </p>

                        </div>


                        <Link
                            href="/donate-us"
                            className="sitemap-cta__button"
                        >
                            Donate Now
                            <FiArrowRight />
                        </Link>

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

