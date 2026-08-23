import Link from "next/link";
import "../../styles/events-page.css";

const eventCategories = [
    "All Events",
    "Education",
    "Social Awareness",
    "Environment",
    "Student Programmes",
    "Community Service",
];

const eventItems = [
    {
        id: 1,
        category: "Education",
        status: "ACTIVITY",
        title: "Free Education Programme",
        description:
            "गरीब एवं जरूरतमंद बच्चों को शिक्षा से जोड़ने के उद्देश्य से संचालित शैक्षिक गतिविधियाँ।",
    },
    {
        id: 2,
        category: "Education",
        status: "ACTIVITY",
        title: "Student Support Programme",
        description:
            "विद्यार्थियों को पुस्तकों, अध्ययन सामग्री और शैक्षिक अवसरों से जोड़ने की पहल।",
    },
    {
        id: 3,
        category: "Social Awareness",
        status: "ACTIVITY",
        title: "Social Awareness Campaign",
        description:
            "सामाजिक कुरीतियों, नशे और अन्य सामाजिक समस्याओं के प्रति जागरूकता फैलाने के प्रयास।",
    },
    {
        id: 4,
        category: "Environment",
        status: "ACTIVITY",
        title: "Tree Plantation Programme",
        description:
            "वृक्षारोपण एवं पर्यावरण संरक्षण के माध्यम से प्रकृति के प्रति जागरूकता बढ़ाने का प्रयास।",
    },
    {
        id: 5,
        category: "Student Programmes",
        status: "ACTIVITY",
        title: "Student Encouragement Programme",
        description:
            "प्रतिभाशाली एवं जरूरतमंद विद्यार्थियों को प्रोत्साहित और सम्मानित करने वाली गतिविधियाँ।",
    },
    {
        id: 6,
        category: "Community Service",
        status: "ACTIVITY",
        title: "Community Service",
        description:
            "समुदाय एवं जरूरतमंद परिवारों तक सामाजिक सहयोग और सेवा की गतिविधियाँ पहुँचाने का प्रयास।",
    },
];

export default function EventsPage() {
    return (
        <main className="events-page">

            {/* ==================================================
               HERO
            ================================================== */}

            <section className="events-page__hero">

                <div className="events-page__container">

                    <span className="events-page__eyebrow">
                        BHEEM SEVAK SAMITI
                    </span>

                    <h1>
                        Events &
                        <span>Activities.</span>
                    </h1>

                    <p>
                        शिक्षा, सामाजिक जागरूकता, पर्यावरण संरक्षण,
                        विद्यार्थी प्रोत्साहन और सामुदायिक सेवा से
                        जुड़ी संस्था की गतिविधियों की जानकारी।
                    </p>

                    <div className="events-page__hero-actions">

                        <a
                            href="#events-collection"
                            className="events-page__primary-button"
                        >
                            Explore Activities →
                        </a>

                        <Link
                            href="/"
                            className="events-page__secondary-button"
                        >
                            Back to Home
                        </Link>

                    </div>

                </div>

            </section>


            {/* ==================================================
               INTRODUCTION
            ================================================== */}

            <section className="events-page__intro">

                <div className="events-page__container">

                    <div className="events-page__intro-grid">

                        <div>

                            <span className="events-page__label">
                                OUR ACTIVITIES
                            </span>

                            <h2>
                                हर गतिविधि का
                                <span>एक उद्देश्य है।</span>
                            </h2>

                        </div>

                        <div>

                            <p>
                                भीम सेवक समिति द्वारा शिक्षा, सामाजिक
                                सुधार, पर्यावरण संरक्षण और जन-जागरूकता
                                के क्षेत्र में विभिन्न कार्यक्रम एवं
                                गतिविधियाँ संचालित की जाती हैं।
                            </p>

                            <p>
                                इस page पर संस्था की प्रमुख activities
                                और future में प्रकाशित किए जाने वाले
                                public events visitors को दिखाई देंगे।
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==================================================
               EVENTS COLLECTION
            ================================================== */}

            <section
                className="events-page__collection"
                id="events-collection"
            >

                <div className="events-page__container">

                    <div className="events-page__section-heading">

                        <span>
                            EVENTS & PROGRAMMES
                        </span>

                        <h2>
                            Explore Our
                            <strong>Activities</strong>
                        </h2>

                        <p>
                            संस्था के विभिन्न कार्यक्षेत्रों से जुड़ी
                            गतिविधियों को category के अनुसार देखें।
                        </p>

                    </div>


                    {/* ==================================================
                       FILTERS
                    ================================================== */}

                    <div
                        className="events-page__filters"
                        aria-label="Event categories"
                    >

                        {eventCategories.map((category, index) => (
                            <button
                                type="button"
                                className={`events-page__filter ${
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
                       EVENT CARDS
                    ================================================== */}

                    <div className="events-page__grid">

                        {eventItems.map((event) => (
                            <article
                                className="events-page__card"
                                key={event.id}
                            >

                                <div className="events-page__card-top">

                                    <span className="events-page__number">
                                        {String(event.id).padStart(2, "0")}
                                    </span>

                                    <span className="events-page__status">
                                        {event.status}
                                    </span>

                                </div>


                                <div className="events-page__card-content">

                                    <span className="events-page__category-label">
                                        {event.category}
                                    </span>

                                    <h3>
                                        {event.title}
                                    </h3>

                                    <p>
                                        {event.description}
                                    </p>

                                </div>


                                <div className="events-page__card-footer">

                                    <span>
                                        Activity
                                    </span>

                                    <span aria-hidden="true">
                                        →
                                    </span>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* ==================================================
               UPCOMING EVENTS PLACEHOLDER
            ================================================== */}

            <section className="events-page__upcoming">

                <div className="events-page__container">

                    <div className="events-page__upcoming-box">

                        <div className="events-page__upcoming-icon">
                            EVENTS
                        </div>

                        <span>
                            UPCOMING EVENTS
                        </span>

                        <h2>
                            नए कार्यक्रम
                            <strong>जल्द यहाँ दिखाई देंगे।</strong>
                        </h2>

                        <p>
                            जब संस्था की ओर से कोई आगामी कार्यक्रम
                            officially publish किया जाएगा, तो उसकी
                            तारीख, समय, स्थान और अन्य आवश्यक जानकारी
                            यहाँ visitors को दिखाई जाएगी।
                        </p>

                    </div>

                </div>

            </section>


            {/* ==================================================
               EVENT PROCESS
            ================================================== */}

            <section className="events-page__process">

                <div className="events-page__container">

                    <div className="events-page__section-heading">

                        <span>
                            HOW IT WORKS
                        </span>

                        <h2>
                            कार्यक्रमों की
                            <strong>जानकारी कैसे मिलेगी?</strong>
                        </h2>

                    </div>


                    <div className="events-page__steps">

                        <article className="events-page__step">

                            <span>01</span>

                            <h3>
                                Programme Published
                            </h3>

                            <p>
                                संस्था द्वारा कार्यक्रम की official
                                जानकारी प्रकाशित की जाएगी।
                            </p>

                        </article>


                        <article className="events-page__step">

                            <span>02</span>

                            <h3>
                                Event Details
                            </h3>

                            <p>
                                तारीख, समय, स्थान और programme से
                                संबंधित जानकारी दिखाई जाएगी।
                            </p>

                        </article>


                        <article className="events-page__step">

                            <span>03</span>

                            <h3>
                                Visitor Information
                            </h3>

                            <p>
                                Visitors programme की public details
                                आसानी से देख सकेंगे।
                            </p>

                        </article>


                        <article className="events-page__step">

                            <span>04</span>

                            <h3>
                                Activity Updates
                            </h3>

                            <p>
                                Programme complete होने के बाद
                                activities और gallery updates जोड़े
                                जा सकेंगे।
                            </p>

                        </article>

                    </div>

                </div>

            </section>


            {/* ==================================================
               CTA
            ================================================== */}

            <section className="events-page__cta">

                <div className="events-page__container">

                    <div>

                        <span>
                            BHEEM SEVAK SAMITI
                        </span>

                        <h2>
                            समाज से जुड़े रहें,
                            <strong>साथ मिलकर आगे बढ़ें।</strong>
                        </h2>

                    </div>

                    <Link
                        href="/contact"
                        className="events-page__cta-button"
                    >
                        Contact Us →
                    </Link>

                </div>

            </section>

        </main>
    );
}