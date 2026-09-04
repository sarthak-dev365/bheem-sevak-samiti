import Link from "next/link";
import {
  FiBookOpen,
  FiUsers,
  FiGlobe,
  FiArrowRight,
} from "react-icons/fi";

import "../../../styles/services.css";

const services = [
  {
    title: "Education",
    icon: <FiBookOpen />,
  },
  {
    title: "Social Reform",
    icon: <FiUsers />,
  },
  {
    title: "Environment Protection",
    icon: <FiGlobe />,
  },
];

export default function HomeService() {
  return (
    <section className="home-service" id="services">
      <div className="home-service__container">

        {/* Heading */}
        <div className="home-service__heading">
          <span className="home-service__eyebrow">
            OUR SERVICES
          </span>

          <h2 className="home-service__title">
            Creating Positive Change
          </h2>
        </div>

        {/* Services */}
        <div className="home-service__grid">
          {services.map((service) => (
            <Link
              href="/services"
              className="home-service__card"
              key={service.title}
            >
              <span className="home-service__icon">
                {service.icon}
              </span>

              <span className="home-service__name">
                {service.title}
              </span>

              <span className="home-service__card-arrow">
                <FiArrowRight />
              </span>
            </Link>
          ))}
        </div>

        {/* Explore Button */}
        <div className="home-service__action">
          <Link href="/services" className="home-service__button">
            <span>Explore All Services</span>
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}