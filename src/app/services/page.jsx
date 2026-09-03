import Link from "next/link";
import "../../styles/services-page.css";
import Navbar from "@/components/layout/Navbar";


export const metadata = {
  title: "Our Services | Bheem Sevak Samiti",
  description:
    "Explore the services and community programs of Bheem Sevak Samiti, focused on education, social welfare, community development, environmental protection and empowering underserved communities.",
};

const services = [
    {
        number: "01",
        icon: "education",
        title: "Education",
        hindi: "शिक्षा",
        description:
            "गरीब, वंचित एवं जरूरतमंद बच्चों को शिक्षा से जोड़ना तथा ग्रामीण क्षेत्रों में निःशुल्क शिक्षा के अवसर उपलब्ध कराना।",
        points: [
            "निःशुल्क शिक्षा",
            "ग्रामीण पाठशालाएँ",
            "पुस्तक एवं अध्ययन सामग्री",
            "शिक्षा के प्रति जागरूकता",
        ],
    },
    {
        number: "02",
        icon: "social",
        title: "Social Reform",
        hindi: "सामाजिक सुधार",
        description:
            "समाज में व्याप्त कुरीतियों और सामाजिक समस्याओं के विरुद्ध जागरूकता एवं सकारात्मक परिवर्तन के लिए कार्य।",
        points: [
            "बाल विवाह के विरुद्ध जागरूकता",
            "नशा मुक्ति अभियान",
            "सामाजिक कुरीतियों के विरुद्ध अभियान",
            "समानता एवं सामाजिक न्याय",
        ],
    },
    {
        number: "03",
        icon: "environment",
        title: "Environment Protection",
        hindi: "पर्यावरण संरक्षण",
        description:
            "पर्यावरण को सुरक्षित रखने और आने वाली पीढ़ियों के लिए बेहतर प्राकृतिक वातावरण बनाने की दिशा में प्रयास।",
        points: [
            "वृक्षारोपण कार्यक्रम",
            "पर्यावरण जागरूकता",
            "प्रकृति संरक्षण",
            "सामुदायिक सहभागिता",
        ],
    },
    {
        number: "04",
        icon: "awareness",
        title: "Public Awareness",
        hindi: "जन-जागरूकता",
        description:
            "शिक्षा, सामाजिक अधिकारों और महत्वपूर्ण सामाजिक विषयों के प्रति लोगों में जागरूकता उत्पन्न करना।",
        points: [
            "जागरूकता अभियान",
            "सामाजिक अधिकारों की जानकारी",
            "समुदाय आधारित कार्यक्रम",
            "जनभागीदारी",
        ],
    },
    {
        number: "05",
        icon: "youth",
        title: "Youth Empowerment",
        hindi: "युवा सशक्तिकरण",
        description:
            "युवाओं एवं स्वयंसेवकों को सामाजिक कार्यों से जोड़कर समाज में सकारात्मक बदलाव के लिए उनकी क्षमता का उपयोग करना।",
        points: [
            "युवा स्वयंसेवक नेटवर्क",
            "सामाजिक सहभागिता",
            "Leadership activities",
            "सामुदायिक कार्य",
        ],
    },
    {
        number: "06",
        icon: "community",
        title: "Community Service",
        hindi: "सामुदायिक सेवा",
        description:
            "जरूरतमंद परिवारों और समुदायों तक सेवा, सहयोग एवं सामाजिक विकास से जुड़ी गतिविधियाँ पहुँचाने का प्रयास।",
        points: [
            "जरूरतमंदों तक सहयोग",
            "सामुदायिक कार्यक्रम",
            "विद्यार्थी सहायता",
            "सामाजिक सेवा गतिविधियाँ",
        ],
    },
];


/* ==========================================================
   ICONS
========================================================== */

function ServiceIcon({ type }) {

    if (type === "education") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M3 9.5 12 5l9 4.5-9 4.5L3 9.5Z" />
                <path d="M7 11.5V16c2.8 2.2 7.2 2.2 10 0v-4.5" />
                <path d="M21 10v5" />
            </svg>
        );
    }

    if (type === "social") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 12h8" />
                <path d="M5 9.5 8.5 6 12 9.5 15.5 6 19 9.5" />
                <path d="M5 14.5 8.5 18 12 14.5 15.5 18 19 14.5" />
            </svg>
        );
    }

    if (type === "environment") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 20V10" />
                <path d="M12 13c-5 0-7-3-7-7 4 0 7 2 7 7Z" />
                <path d="M12 16c5 0 7-3 7-7-4 0-7 2-7 7Z" />
            </svg>
        );
    }

    if (type === "awareness") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m4 10 11-4v12L4 14v-4Z" />
                <path d="M15 10h4a2 2 0 0 1 0 4h-4" />
                <path d="M7 15v4" />
            </svg>
        );
    }

    if (type === "youth") {
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="9" r="2.5" />
                <path d="M3.5 19c.5-3 2.5-5 5.5-5s5 2 5.5 5" />
                <path d="M14 15c2.5-.5 5 1 5.5 4" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 21s-7-4.5-9-9c-1.5-3.5 1-6 4-6 2 0 3.5 1.2 5 3 1.5-1.8 3-3 5-3 3 0 5.5 2.5 4 6-2 4.5-9 9-9 9Z" />
        </svg>
    );
}


export default function ServicesPage() {

   

    return (
        <main className="services-page">

            {/* ==================================================
                NAVBAR
            ================================================== */}

                <Navbar />

            {/* ==================================================
               HERO
            ================================================== */}

            <section className="services-page__hero">

                <div className="services-page__container">

                    <div className="services-page__hero-content">

                        <span className="services-page__eyebrow">
                            OUR SERVICES
                        </span>

                        <h1>
                            Creating Change
                            <span>Through Action.</span>
                        </h1>

                        <p>
                            भीम सेवक समिति शिक्षा, सामाजिक सुधार,
                            पर्यावरण संरक्षण एवं जन-जागरूकता के माध्यम
                            से समाज के गरीब, वंचित एवं जरूरतमंद वर्गों
                            के सशक्तिकरण के लिए निरंतर कार्य कर रही है।
                        </p>

                        <div className="services-page__hero-actions">

                            <Link
                                href="/join-us"
                                className="services-page__primary-button"
                            >
                                Join Our Mission
                                <span>→</span>
                            </Link>

                            <Link
                                href="/contact"
                                className="services-page__secondary-button"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>


                    <div className="services-page__hero-side">

                        <span>
                            OUR FOCUS
                        </span>

                        <strong>
                            Education
                        </strong>

                        <strong>
                            Social Development
                        </strong>

                        <strong>
                            Environment
                        </strong>

                        <strong>
                            Community
                        </strong>

                    </div>

                </div>

            </section>


            {/* ==================================================
               INTRO
            ================================================== */}

            <section className="services-page__intro">

                <div className="services-page__container">

                    <div className="services-page__intro-grid">

                        <div>

                            <span className="services-page__section-label">
                                WHAT WE DO
                            </span>

                            <h2>
                                सेवा के माध्यम से
                                <span>सकारात्मक बदलाव।</span>
                            </h2>

                        </div>

                        <p>
                            संस्था का उद्देश्य केवल सहायता पहुँचाना नहीं,
                            बल्कि शिक्षा और जागरूकता के माध्यम से लोगों को
                            आत्मनिर्भर, जागरूक और समाज की मुख्यधारा से
                            जोड़ना है।
                        </p>

                    </div>

                </div>

            </section>


            {/* ==================================================
               SERVICES
            ================================================== */}

            <section className="services-page__list">

                <div className="services-page__container">

                    <div className="services-page__list-header">

                        <span>
                            OUR KEY AREAS
                        </span>

                        <p>
                            संस्था के प्रमुख कार्यक्षेत्र
                        </p>

                    </div>


                    <div className="services-page__grid">

                        {services.map((service) => (

                            <article
                                className="services-page__card"
                                key={service.number}
                            >

                                <div className="services-page__card-top">

                                    <span className="services-page__number">
                                        {service.number}
                                    </span>

                                    <div className="services-page__icon">
                                        <ServiceIcon
                                            type={service.icon}
                                        />
                                    </div>

                                </div>


                                <div className="services-page__card-content">

                                    <span className="services-page__hindi">
                                        {service.hindi}
                                    </span>

                                    <h3>
                                        {service.title}
                                    </h3>

                                    <p>
                                        {service.description}
                                    </p>


                                    <ul>

                                        {service.points.map((point) => (

                                            <li key={point}>
                                                <span>✓</span>
                                                {point}
                                            </li>

                                        ))}

                                    </ul>

                                </div>

                            </article>

                        ))}

                    </div>

                </div>

            </section>


            {/* ==================================================
               WORKING APPROACH
            ================================================== */}

            <section className="services-page__approach">

                <div className="services-page__container">

                    <div className="services-page__approach-grid">

                        <div>

                            <span className="services-page__section-label">
                                OUR APPROACH
                            </span>

                            <h2>
                                शिक्षा से जागरूकता,
                                <span>जागरूकता से बदलाव।</span>
                            </h2>

                            <p>
                                हमारा प्रयास है कि समाज के जरूरतमंद
                                वर्गों तक शिक्षा और अवसर पहुँचें और
                                सामुदायिक सहभागिता के माध्यम से
                                स्थायी सकारात्मक परिवर्तन को बढ़ावा मिले।
                            </p>

                        </div>


                        <div className="services-page__steps">

                            <div className="services-page__step">

                                <span>01</span>

                                <div>
                                    <h3>
                                        Identify
                                    </h3>

                                    <p>
                                        जरूरतमंद समुदायों और उनकी
                                        प्राथमिकताओं को समझना।
                                    </p>
                                </div>

                            </div>


                            <div className="services-page__step">

                                <span>02</span>

                                <div>
                                    <h3>
                                        Act
                                    </h3>

                                    <p>
                                        शिक्षा, जागरूकता और सेवा
                                        गतिविधियों के माध्यम से कार्य करना।
                                    </p>
                                </div>

                            </div>


                            <div className="services-page__step">

                                <span>03</span>

                                <div>
                                    <h3>
                                        Empower
                                    </h3>

                                    <p>
                                        लोगों को अवसर, ज्ञान और
                                        सहभागिता के माध्यम से सशक्त बनाना।
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* ==================================================
               CTA
            ================================================== */}

            <section className="services-page__cta">

                <div className="services-page__container">

                    <div className="services-page__cta-box">

                        <div>

                            <span>
                                BE A PART OF THE CHANGE
                            </span>

                            <h2>
                                बदलाव की इस यात्रा में
                                <strong>आप भी जुड़ें।</strong>
                            </h2>

                        </div>


                        <div className="services-page__cta-actions">

                            <Link
                                href="/join-us"
                                className="services-page__primary-button"
                            >
                                Join Us
                                <span>→</span>
                            </Link>

                            <Link
                                href="/donate-us"
                                className="services-page__donate-button"
                            >
                                Support Our Work
                            </Link>

                        </div>

                    </div>

                </div>

            </section>

        </main>
    );
}