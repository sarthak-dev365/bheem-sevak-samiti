import Link from "next/link";
import "../../../styles/home-our-journey.css";

const journeyItems = [
{
id: "01",
label: "THE BEGINNING",
title: "एक सोच से हुई शुरुआत",
description:
"समाज के जरूरतमंद लोगों तक शिक्षा, सहयोग और जागरूकता पहुँचाने के उद्देश्य से भीम सेवक समिति की यात्रा शुरू हुई।",
},
{
id: "02",
label: "EDUCATION",
title: "शिक्षा को बनाया प्राथमिकता",
description:
"बच्चों और विद्यार्थियों को बेहतर शैक्षिक अवसरों से जोड़ने तथा शिक्षा के प्रति जागरूकता बढ़ाने की दिशा में महत्वपूर्ण पहल की गई।",
},
{
id: "03",
label: "SOCIAL SERVICE",
title: "समाज के साथ आगे बढ़ते कदम",
description:
"सामाजिक जागरूकता, जनसेवा और सकारात्मक बदलाव के लिए संस्था ने समुदाय के साथ मिलकर विभिन्न गतिविधियों को आगे बढ़ाया।",
},
];

export default function HomeOurJourney() {
return ( <section
         className="home-journey"
         id="our-journey"
         aria-labelledby="home-journey-title"
     > <div className="home-journey__container">

```
            {/* Section Heading */}
            <header className="home-journey__header">
                <span className="home-journey__eyebrow">
                    OUR JOURNEY
                </span>

                <h2 id="home-journey-title">
                    एक उद्देश्य से शुरू हुई,
                    <span> बदलाव की यात्रा।</span>
                </h2>

                <p>
                    भीम सेवक समिति की यात्रा शिक्षा, समाज सेवा और
                    सकारात्मक परिवर्तन के लिए किए जा रहे निरंतर
                    प्रयासों की कहानी है।
                </p>
            </header>

            {/* Journey Cards */}
            <div className="home-journey__grid">
                {journeyItems.map((item) => (
                    <article
                        className="home-journey__card"
                        key={item.id}
                    >
                        <div className="home-journey__card-top">
                            <span className="home-journey__number">
                                {item.id}
                            </span>

                            <span className="home-journey__label">
                                {item.label}
                            </span>
                        </div>

                        <div className="home-journey__card-content">
                            <h3>{item.title}</h3>

                            <p>{item.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            {/* Compact CTA */}
            <div className="home-journey__action">
                <Link
                    href="/our-journey"
                    className="home-journey__button"
                    aria-label="Explore Our Journey"
                >
                    <span>Explore Our Journey</span>
                    <span
                        className="home-journey__button-arrow"
                        aria-hidden="true"
                    >
                        →
                    </span>
                </Link>
            </div>

        </div>
    </section>
);


}
