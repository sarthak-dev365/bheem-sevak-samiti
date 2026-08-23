import Link from "next/link";
import "../../../styles/contact-cta.css";

const actionItems = [
    {
        number: "01",
        label: "CONTACT US",
        title: "हमसे संपर्क करें",
        description:
            "संस्था के कार्यों, कार्यक्रमों और अन्य जानकारी के लिए हमसे संपर्क करें।",
        href: "/contact",
        action: "Contact Us",
    },
    {
        number: "02",
        label: "JOIN OUR MISSION",
        title: "हमसे जुड़ें",
        description:
            "स्वयंसेवक के रूप में जुड़कर शिक्षा और सामाजिक कार्यों में अपना योगदान दें।",
        href: "/join-us",
        action: "Join Us",
    },
    {
        number: "03",
        label: "SUPPORT OUR WORK",
        title: "हमारा सहयोग करें",
        description:
            "आपका सहयोग जरूरतमंद बच्चों और समुदाय तक शिक्षा एवं सामाजिक सहायता पहुँचाने में मदद कर सकता है।",
        href: "/donate-us",
        action: "Donate Us",
    },
];

export default function HomeActionCTA() {
    return (
        <section
            className="home-action-cta"
            aria-labelledby="home-action-cta-title"
        >
            <div className="home-action-cta__container">

                {/* ==================================================
                   HEADER
                ================================================== */}

                <div className="home-action-cta__header">

                    <span className="home-action-cta__eyebrow">
                        BE A PART OF THE CHANGE
                    </span>

                    <h2 id="home-action-cta-title">
                        बदलाव की इस यात्रा में
                        <span>आप भी भागीदार बनें।</span>
                    </h2>

                    <p>
                        चाहे आप संस्था से संपर्क करना चाहते हों,
                        सामाजिक कार्यों से जुड़ना चाहते हों या
                        संस्था के कार्यों में सहयोग करना चाहते हों —
                        आपके लिए एक रास्ता यहाँ है।
                    </p>

                </div>


                {/* ==================================================
                   ACTION CARDS
                ================================================== */}

                <div className="home-action-cta__grid">

                    {actionItems.map((item) => (
                        <article
                            className="home-action-cta__card"
                            key={item.number}
                        >

                            <div className="home-action-cta__card-top">

                                <span className="home-action-cta__number">
                                    {item.number}
                                </span>

                                <span className="home-action-cta__label">
                                    {item.label}
                                </span>

                            </div>


                            <div className="home-action-cta__card-content">

                                <h3>
                                    {item.title}
                                </h3>

                                <p>
                                    {item.description}
                                </p>

                            </div>


                            <Link
                                href={item.href}
                                className="home-action-cta__button"
                            >
                                <span>
                                    {item.action}
                                </span>

                                <span aria-hidden="true">
                                    →
                                </span>
                            </Link>

                        </article>
                    ))}

                </div>


                {/* ==================================================
                   CLOSING MESSAGE
                ================================================== */}

                <div className="home-action-cta__closing">

                    <span>
                        SHIKSHIT BANO · SANGATHIT RAHO · SANGHARSH KARO
                    </span>

                    <p>
                        “शिक्षित बनो, संगठित रहो, संघर्ष करो”
                    </p>

                </div>

            </div>
        </section>
    );
}