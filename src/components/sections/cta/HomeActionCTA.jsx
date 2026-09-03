import Link from "next/link";
import {
    ArrowUpRight,
    HandHeart,
    Mail,
    UsersRound,
} from "lucide-react";

import "../../../styles/contact-cta.css";

const actionItems = [
    {
        number: "01",
        label: "CONTACT US",
        title: "Let's Connect",
        description:
            "Have a question or want to know more about our work? We would be happy to hear from you.",
        href: "/contact",
        action: "Contact Us",
        icon: Mail,
    },
    {
        number: "02",
        label: "JOIN OUR MISSION",
        title: "Join Our Mission",
        description:
            "Become a part of our journey and contribute your time, skills and ideas towards meaningful change.",
        href: "/join-us",
        action: "Join Us",
        icon: UsersRound,
    },
    {
        number: "03",
        label: "SUPPORT OUR WORK",
        title: "Support Our Work",
        description:
            "Your support helps us create better opportunities through education, social service and community initiatives.",
        href: "/donate-us",
        action: "Support Us",
        icon: HandHeart,
    },
];

export default function HomeActionCTA() {
    return (
        <section
            className="home-action-cta"
            aria-labelledby="home-action-cta-title"
        >
            {/* Decorative background elements */}
            <div
                className="home-action-cta__orb home-action-cta__orb--one"
                aria-hidden="true"
            />

            <div
                className="home-action-cta__orb home-action-cta__orb--two"
                aria-hidden="true"
            />

            <div className="home-action-cta__container">

                {/* =========================================
                    SECTION HEADER
                ========================================= */}

                <header className="home-action-cta__header">

                    <span className="home-action-cta__eyebrow">
                        <span className="home-action-cta__eyebrow-line" />
                        LET&apos;S CONNECT
                        <span className="home-action-cta__eyebrow-line" />
                    </span>

                    <h2 id="home-action-cta-title">
                        Be a Part of
                        <span>Something Meaningful.</span>
                    </h2>


                </header>


                {/* =========================================
                    ACTION CARDS
                ========================================= */}

                <div className="home-action-cta__grid">

                    {actionItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                className="home-action-cta__card"
                                key={item.number}
                            >
                                {/* Decorative top design */}
                                <div
                                    className="home-action-cta__card-decoration"
                                    aria-hidden="true"
                                >
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                {/* Card top */}
                                <div className="home-action-cta__card-top">

                                    <div
                                        className="home-action-cta__icon"
                                        aria-hidden="true"
                                    >
                                        <Icon
                                            size={23}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <span className="home-action-cta__number">
                                        {item.number}
                                    </span>

                                    <span className="home-action-cta__label">
                                        {item.label}
                                    </span>

                                </div>


                                {/* Card content */}
                                <div className="home-action-cta__content">

                                    <h3>{item.title}</h3>

                                    <p>{item.description}</p>

                                </div>


                                {/* Card action */}
                                <Link
                                    href={item.href}
                                    className="home-action-cta__button"
                                    aria-label={`${item.action} - ${item.title}`}
                                >
                                    <span>{item.action}</span>

                                    <span
                                        className="home-action-cta__button-icon"
                                        aria-hidden="true"
                                    >
                                        <ArrowUpRight
                                            size={17}
                                            strokeWidth={2}
                                        />
                                    </span>
                                </Link>

                            </article>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}
