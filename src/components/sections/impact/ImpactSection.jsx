const impactStats = [
    {
        number: "50+",
        title: "ग्रामीण क्षेत्र",
    },
    {
        number: "5,000+",
        title: "विद्यार्थियों तक पहुँच",
    },
    {
        number: "2,000+",
        title: "पुस्तक / अध्ययन सामग्री",
    },
    {
        number: "500+",
        title: "स्वयंसेवक",
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

                {/* Section Heading */}
                <div className="impact-section__header">

                    <span className="impact-section__eyebrow">
                        OUR IMPACT
                    </span>

                    <h2
                        id="impact-title"
                        className="impact-section__title"
                    >
                        प्रयासों से
                        <span>सकारात्मक प्रभाव</span>
                    </h2>

                </div>


                {/* Impact Cards */}
                <div className="impact-section__stats">

                    {impactStats.map((item, index) => (
                        <article
                            className="impact-stat-card"
                            key={item.title}
                        >
                            <span className="impact-stat-card__number">
                                {String(index + 1).padStart(2, "0")}
                            </span>

                            <strong className="impact-stat-card__value">
                                {item.number}
                            </strong>

                            <h3 className="impact-stat-card__title">
                                {item.title}
                            </h3>
                        </article>
                    ))}

                </div>

            </div>
        </section>
    );
}