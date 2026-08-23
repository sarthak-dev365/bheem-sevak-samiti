import Link from "next/link";
import "../../styles/gallery-page.css";

const galleryCategories = [
    "All",
    "Pathshala",
    "Education",
    "Social Awareness",
    "Environment",
    "Events",
];

const galleryItems = [
    {
        id: 1,
        category: "Pathshala",
        title: "Free Pathshala Activities",
        description:
            "ग्रामीण एवं जरूरतमंद बच्चों के साथ निःशुल्क शैक्षिक गतिविधियाँ।",
    },
    {
        id: 2,
        category: "Education",
        title: "Educational Material",
        description:
            "विद्यार्थियों को पुस्तकें एवं अध्ययन सामग्री उपलब्ध कराने की पहल।",
    },
    {
        id: 3,
        category: "Social Awareness",
        title: "Social Awareness Campaign",
        description:
            "सामाजिक जागरूकता एवं सकारात्मक परिवर्तन के लिए अभियान।",
    },
    {
        id: 4,
        category: "Environment",
        title: "Tree Plantation",
        description:
            "वृक्षारोपण एवं पर्यावरण संरक्षण से जुड़ी गतिविधियाँ।",
    },
    {
        id: 5,
        category: "Events",
        title: "Student Programme",
        description:
            "विद्यार्थियों के लिए आयोजित शैक्षिक एवं प्रोत्साहन कार्यक्रम।",
    },
    {
        id: 6,
        category: "Education",
        title: "Student Support",
        description:
            "जरूरतमंद विद्यार्थियों को शिक्षा से जोड़ने की पहल।",
    },
    {
        id: 7,
        category: "Social Awareness",
        title: "Community Awareness",
        description:
            "समुदाय के बीच सामाजिक जागरूकता से जुड़ी गतिविधियाँ।",
    },
    {
        id: 8,
        category: "Events",
        title: "Community Event",
        description:
            "संस्था द्वारा आयोजित सामुदायिक कार्यक्रमों की झलक।",
    },
];

export default function GalleryPage() {
    return (
        <main className="gallery-page">

            {/* ==================================================
               HERO
            ================================================== */}

            <section className="gallery-page__hero">

                <div className="gallery-page__container">

                    <span className="gallery-page__eyebrow">
                        BHEEM SEVAK SAMITI
                    </span>

                    <h1>
                        Our
                        <span>Gallery.</span>
                    </h1>

                    <p>
                        शिक्षा, सामाजिक जागरूकता, पर्यावरण संरक्षण,
                        विद्यार्थी गतिविधियों और सामुदायिक कार्यक्रमों
                        की कुछ महत्वपूर्ण झलकियाँ।
                    </p>

                    <div className="gallery-page__hero-actions">

                        <a
                            href="#gallery-collection"
                            className="gallery-page__primary-button"
                        >
                            Explore Gallery →
                        </a>

                        <Link
                            href="/"
                            className="gallery-page__secondary-button"
                        >
                            Back to Home
                        </Link>

                    </div>

                </div>

            </section>


            {/* ==================================================
               INTRO
            ================================================== */}

            <section className="gallery-page__intro">

                <div className="gallery-page__container">

                    <div className="gallery-page__intro-grid">

                        <div>

                            <span className="gallery-page__label">
                                OUR JOURNEY
                            </span>

                            <h2>
                                काम की
                                <span>हर झलक मायने रखती है।</span>
                            </h2>

                        </div>

                        <div>

                            <p>
                                भीम सेवक समिति द्वारा शिक्षा, सामाजिक
                                सुधार, पर्यावरण संरक्षण और जन-जागरूकता
                                के क्षेत्र में की जा रही गतिविधियों को
                                इस Gallery के माध्यम से प्रदर्शित किया
                                जाएगा।
                            </p>

                            <p>
                                यह section संस्था की यात्रा, कार्यक्रमों
                                और community activities को visitors तक
                                पहुँचाने के लिए बनाया गया है।
                            </p>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==================================================
               COLLECTION
            ================================================== */}

            <section
                className="gallery-page__collection"
                id="gallery-collection"
            >

                <div className="gallery-page__container">

                    <div className="gallery-page__section-heading">

                        <span>
                            PHOTO COLLECTION
                        </span>

                        <h2>
                            Explore Our
                            <strong>Activities</strong>
                        </h2>

                        <p>
                            अलग-अलग गतिविधियों के अनुसार संस्था की
                            photos यहाँ प्रदर्शित की जाएँगी।
                        </p>

                    </div>


                    {/* ==================================================
                       CATEGORY FILTER
                    ================================================== */}

                    <div
                        className="gallery-page__filters"
                        aria-label="Gallery categories"
                    >

                        {galleryCategories.map((category, index) => (
                            <button
                                type="button"
                                className={`gallery-page__filter ${
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
                       PHOTO GRID
                    ================================================== */}

                    <div className="gallery-page__grid">

                        {galleryItems.map((item) => (
                            <article
                                className="gallery-page__card"
                                key={item.id}
                            >

                                <div className="gallery-page__image">

                                    <div className="gallery-page__placeholder">

                                        <span>
                                            {item.category}
                                        </span>

                                        <strong>
                                            {String(item.id).padStart(2, "0")}
                                        </strong>

                                    </div>

                                    <div className="gallery-page__image-overlay">

                                        <span>
                                            View Photo
                                        </span>

                                    </div>

                                </div>


                                <div className="gallery-page__card-content">

                                    <span className="gallery-page__card-category">
                                        {item.category}
                                    </span>

                                    <h3>
                                        {item.title}
                                    </h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </div>

                            </article>
                        ))}

                    </div>

                </div>

            </section>


            {/* ==================================================
               GALLERY NOTE
            ================================================== */}

            <section className="gallery-page__note">

                <div className="gallery-page__container">

                    <div className="gallery-page__note-box">

                        <div>

                            <span>
                                GALLERY UPDATES
                            </span>

                            <h2>
                                संस्था की नई गतिविधियाँ
                                <strong>यहाँ जुड़ती रहेंगी।</strong>
                            </h2>

                            <p>
                                भविष्य में संस्था द्वारा आयोजित नए
                                कार्यक्रमों और गतिविधियों की photos
                                इस Gallery में जोड़ी जाएँगी।
                            </p>

                        </div>

                        <div className="gallery-page__note-mark">
                            GALLERY
                        </div>

                    </div>

                </div>

            </section>


            {/* ==================================================
               CTA
            ================================================== */}

            <section className="gallery-page__cta">

                <div className="gallery-page__container">

                    <div>

                        <span>
                            BHEEM SEVAK SAMITI
                        </span>

                        <h2>
                            हमारी गतिविधियों से
                            <strong>जुड़े रहें।</strong>
                        </h2>

                    </div>

                    <Link
                        href="/contact"
                        className="gallery-page__cta-button"
                    >
                        Contact Us →
                    </Link>

                </div>

            </section>

        </main>
    );
}