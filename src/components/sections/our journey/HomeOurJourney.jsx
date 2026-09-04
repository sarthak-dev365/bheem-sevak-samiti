import Link from "next/link";
import {
  FiFlag,
  FiBookOpen,
  FiUsers,
  FiArrowRight,
} from "react-icons/fi";

import "../../../styles/home-our-journey.css";

const journeyItems = [
  {
    id: "01",
    icon: <FiFlag />,
    title: "The Beginning",
    description:
      "Bheem Sevak Samiti began with a vision to support communities through education, social service and awareness.",
  },
  {
    id: "02",
    icon: <FiBookOpen />,
    title: "Education First",
    description:
      "Education became a key priority, creating better learning opportunities and encouraging awareness among students.",
  },
  {
    id: "03",
    icon: <FiUsers />,
    title: "Growing Together",
    description:
      "The organization continues to work with communities through social initiatives and meaningful service.",
  },
];

export default function HomeOurJourney() {
  return (
    <section
      className="home-journey"
      id="our-journey"
      aria-labelledby="home-journey-title"
    >
      <div className="home-journey__container">

        {/* Heading */}
        <header className="home-journey__header">
          <span className="home-journey__eyebrow">
            OUR JOURNEY
          </span>

          <h2 id="home-journey-title">
            From an idea to a journey
            <span> of positive change.</span>
          </h2>
        </header>

        {/* Journey Cards */}
        <div className="home-journey__grid">
          {journeyItems.map((item) => (
            <article
              className="home-journey__card"
              key={item.id}
            >
              <div className="home-journey__top">
                <span className="home-journey__number">
                  {item.id}
                </span>

                <span className="home-journey__icon">
                  {item.icon}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <span className="home-journey__arrow">
                <FiArrowRight />
              </span>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="home-journey__action">
          <Link
            href="/our-journey"
            className="home-journey__button"
          >
            <span>Explore Our Journey</span>
            <FiArrowRight />
          </Link>
        </div>

      </div>
    </section>
  );
}