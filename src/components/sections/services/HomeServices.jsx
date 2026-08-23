import Link from "next/link";
import "../../../styles/services.css";

const services = [
    {
        number: "01",
        name: "शिक्षा",
        english: "Education",
    },
    {
        number: "02",
        name: "सामाजिक सुधार",
        english: "Social Reform",
    },
    {
        number: "03",
        name: "पर्यावरण संरक्षण",
        english: "Environment Protection",
    },
    {
        number: "04",
        name: "जन-जागरूकता",
        english: "Public Awareness",
    },
    {
        number: "05",
        name: "युवा सशक्तिकरण",
        english: "Youth Empowerment",
    },
    {
        number: "06",
        name: "सामुदायिक सेवा",
        english: "Community Service",
    },
];

export default function HomeService() {
    return (
        <section
            className="home-service"
            id="services"
            aria-labelledby="home-service-title"
        >
            <div className="home-service__container">

                {/* ================================
                    HEADER
                ================================= */}

                <div className="home-service__header">

                    <span className="home-service__eyebrow">
                        OUR SERVICES
                    </span>

                    <h2
                        id="home-service-title"
                        className="home-service__title"
                    >
                        Explore Our
                        <span>Services</span>
                    </h2>

                    <p className="home-service__intro">
                        शिक्षा, सामाजिक सुधार, पर्यावरण संरक्षण और
                        जन-जागरूकता के माध्यम से समाज के जरूरतमंद
                        वर्गों के लिए हमारी प्रमुख सेवाएँ।
                    </p>

                </div>


                {/* ================================
                    SERVICE LIST
                ================================= */}

                <div className="home-service__list">

                    {services.map((service) => (
                        <Link
                            href="/services"
                            className="home-service__item"
                            key={service.number}
                            aria-label={`${service.name} service`}
                        >
                            <span className="home-service__number">
                                {service.number}
                            </span>

                            <div className="home-service__name">
                                <strong>
                                    {service.name}
                                </strong>

                                <span>
                                    {service.english}
                                </span>
                            </div>

                            <span
                                className="home-service__arrow"
                                aria-hidden="true"
                            >
                                →
                            </span>
                        </Link>
                    ))}

                </div>


                {/* ================================
                    MAIN SERVICES LINK
                ================================= */}

                <div className="home-service__footer">

                    <Link
                        href="/services"
                        className="home-service__button"
                    >
                        <span>
                            Explore All Services
                        </span>

                        <span aria-hidden="true">
                            →
                        </span>
                    </Link>

                </div>

            </div>
        </section>
    );
}