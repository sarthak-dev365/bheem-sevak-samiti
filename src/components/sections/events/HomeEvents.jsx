import Link from "next/link";
import "../../../styles/events.css"
const eventItems = [
    {
        id: "01",
        date: "UPCOMING",
        title: "Educational Programme",
        category: "Education",
        description:
            "विद्यार्थियों को शिक्षा एवं शैक्षिक अवसरों से जोड़ने के उद्देश्य से आयोजित कार्यक्रम।",
    },
    {
        id: "02",
        date: "ACTIVITY",
        title: "Social Awareness Programme",
        category: "Social Awareness",
        description:
            "सामाजिक जागरूकता एवं सकारात्मक सामाजिक परिवर्तन के लिए आयोजित गतिविधियाँ।",
    },
    {
        id: "03",
        date: "ACTIVITY",
        title: "Environment Programme",
        category: "Environment",
        description:
            "वृक्षारोपण एवं पर्यावरण संरक्षण के प्रति जागरूकता बढ़ाने वाली गतिविधियाँ।",
    },
];

const eventCategories = [
    "All Events",
    "Education",
    "Social Awareness",
    "Environment",
];

export default function HomeEvents() {
    return (
        <section
            className="home-events"
            id="events"
            aria-labelledby="home-events-title"
        >

            <div className="home-events__container">

                {/* ==================================================
                   HEADER
                ================================================== */}

                <header className="home-events__header">

                    <div className="home-events__heading">

                        <span className="home-events__eyebrow">
                            EVENTS & ACTIVITIES
                        </span>

                        <h2 id="home-events-title">
                            हमारे कार्यक्रम,
                            <span>हमारा प्रयास।</span>
                        </h2>

                        <p>
                            शिक्षा, सामाजिक जागरूकता, पर्यावरण संरक्षण
                            और सामुदायिक सेवा से जुड़ी संस्था की
                            महत्वपूर्ण गतिविधियाँ।
                        </p>

                    </div>


                    <Link
                        href="/events"
                        className="home-events__view-button"
                    >
                        View All Events →
                    </Link>

                </header>


                {/* ==================================================
                   CATEGORY NAVIGATION
                ================================================== */}

                <div
                    className="home-events__categories"
                    aria-label="Event categories"
                >

                    {eventCategories.map((category, index) => (
                        <button
                            type="button"
                            className={`home-events__category ${
                                index === 0
                                    ? "is-active"
                                    : ""
                            }`}
                            key={category}
                        >
                            {category}
                        </button>
                    ))}

                </div>


                {/* ==================================================
                   EVENTS GRID
                ================================================== */}

                <div className="home-events__grid">

                    {eventItems.map((event) => (
                        <article
                            className="home-events__card"
                            key={event.id}
                        >

                            <div className="home-events__card-top">

                                <span className="home-events__number">
                                    {event.id}
                                </span>

                                <span className="home-events__status">
                                    {event.date}
                                </span>

                            </div>


                            <div className="home-events__card-content">

                                <span className="home-events__category-label">
                                    {event.category}
                                </span>

                                <h3>
                                    {event.title}
                                </h3>

                                <p>
                                    {event.description}
                                </p>

                            </div>


                            <div className="home-events__card-footer">

                                <span>
                                    Event Details
                                </span>

                                <span aria-hidden="true">
                                    →
                                </span>

                            </div>

                        </article>
                    ))}

                </div>


                {/* ==================================================
                   BOTTOM CTA
                ================================================== */}

                <div className="home-events__bottom">

                    <div>

                        <span>
                            STAY CONNECTED
                        </span>

                        <p>
                            संस्था के आगामी कार्यक्रमों और गतिविधियों
                            की जानकारी यहाँ मिलती रहेगी।
                        </p>

                    </div>

                    <Link
                        href="/events"
                        className="home-events__bottom-button"
                    >
                        Explore All Events →
                    </Link>

                </div>

            </div>

        </section>
    );
}