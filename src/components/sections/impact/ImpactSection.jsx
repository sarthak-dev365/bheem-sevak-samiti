import {
    FiBookOpen,
    FiMapPin,
    FiUsers,
    FiHeart,
} from "react-icons/fi";

import "@/styles/impact.css";

const impactStats = [
    {
        number: "50+",
        title: "Rural Areas",
        description: "Communities reached",
        icon: FiMapPin,
    },
    {
        number: "5,000+",
        title: "Students Reached",
        description: "Supported through education",
        icon: FiBookOpen,
    },
    {
        number: "2,000+",
        title: "Books & Materials",
        description: "Educational resources provided",
        icon: FiBookOpen,
    },
    {
        number: "500+",
        title: "Volunteers",
        description: "People contributing to change",
        icon: FiUsers,
    },
];

export default function ImpactSection() {
    return (
        <section
            className="impact-section"
            id="impact"
            aria-labelledby="impact-title"
        >
            <div className="impact-section__container">

                {/* Header */}
                <div className="impact-section__header">
                    <span className="impact-section__eyebrow">
                        OUR IMPACT
                    </span>

                    <h2
                        id="impact-title"
                        className="impact-section__title"
                    >
                        Turning Efforts Into
                        <span>Positive Impact</span>
                    </h2>

                    <p className="impact-section__intro">
                        Every initiative creates an opportunity for education,
                        awareness and meaningful change in communities.
                    </p>
                </div>

                {/* Statistics */}
                <div className="impact-section__stats">
                    {impactStats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                className="impact-stat"
                                key={item.title}
                            >
                                <div className="impact-stat__top">
                                    <span className="impact-stat__icon">
                                        <Icon aria-hidden="true" />
                                    </span>
                                </div>

                                <strong className="impact-stat__value">
                                    {item.number}
                                </strong>

                                <h3 className="impact-stat__title">
                                    {item.title}
                                </h3>

                                <p className="impact-stat__description">
                                    {item.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom Message */}
                <div className="impact-section__message">
                    <span className="impact-section__message-icon">
                        <FiHeart aria-hidden="true" />
                    </span>

                    <p>
                        Together, small efforts can create lasting change.
                    </p>
                </div>

            </div>
        </section>
    );
}