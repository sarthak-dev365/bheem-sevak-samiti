import Link from "next/link";

import {
ArrowRight,
BookOpen,
HeartHandshake,
Users,
Target,
Sparkles,
GraduationCap,
Quote,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";

import "../../styles/our-journey-page.css";

const journeyMilestones = [
{
number: "01",
icon: Sparkles,
category: "THE BEGINNING",
title: "एक उद्देश्य के साथ शुरुआत",
description:
"भीम सेवक समिति की यात्रा समाज के प्रति जिम्मेदारी और सकारात्मक बदलाव की सोच के साथ शुरू हुई। हमारा उद्देश्य लोगों तक सहयोग, जागरूकता और बेहतर अवसर पहुँचाना है।",
},
{
number: "02",
icon: GraduationCap,
category: "EDUCATION",
title: "शिक्षा की दिशा में कदम",
description:
"शिक्षा को सामाजिक विकास की मजबूत नींव मानते हुए विद्यार्थियों और युवाओं को बेहतर शैक्षिक अवसरों से जोड़ने की दिशा में प्रयास किए गए।",
},
{
number: "03",
icon: HeartHandshake,
category: "SOCIAL SERVICE",
title: "समाज के साथ, समाज के लिए",
description:
"सामाजिक सेवा, जागरूकता और जरूरतमंद लोगों तक सहयोग पहुँचाने के उद्देश्य से संस्था ने समुदाय के साथ मिलकर निरंतर कार्य करना शुरू किया।",
},
{
number: "04",
icon: Users,
category: "COMMUNITY",
title: "लोगों को जोड़ती एक पहल",
description:
"संस्था की यात्रा केवल कार्यक्रमों तक सीमित नहीं रही। लोगों को एक साथ जोड़कर समाज में सहयोग और सकारात्मक भागीदारी की भावना को मजबूत किया गया।",
},
{
number: "05",
icon: BookOpen,
category: "PATHSHALA",
title: "ज्ञान और अवसरों की ओर",
description:
"Pathshala के माध्यम से शिक्षा और सीखने के अवसरों को आगे बढ़ाने की दिशा में एक महत्वपूर्ण पहल की गई।",
},
{
number: "06",
icon: Target,
category: "THE FUTURE",
title: "यात्रा अभी जारी है",
description:
"भीम सेवक समिति का लक्ष्य आने वाले समय में शिक्षा, सामाजिक सेवा और सकारात्मक परिवर्तन के क्षेत्र में और अधिक लोगों तक पहुँचना है।",
},
];

const values = [
{
icon: HeartHandshake,
title: "सेवा",
description:
"समाज और जरूरतमंद लोगों के लिए जिम्मेदारी और सहयोग की भावना।",
},
{
icon: Users,
title: "सहयोग",
description:
"लोगों को जोड़कर एक मजबूत और सकारात्मक समुदाय बनाना।",
},
{
icon: GraduationCap,
title: "शिक्षा",
description:
"ज्ञान और अवसरों के माध्यम से बेहतर भविष्य की दिशा में प्रयास।",
},
{
icon: Target,
title: "परिवर्तन",
description:
"छोटे लेकिन सार्थक प्रयासों से सकारात्मक सामाजिक बदलाव।",
},
];

export default function OurJourneyPage() {
return (
<> <Navbar />

```
        <main className="journey-page">

            {/* ==================================================
                HERO
            ================================================== */}

            <section className="journey-hero">

                <div
                    className="journey-hero__orb journey-hero__orb--one"
                    aria-hidden="true"
                />

                <div
                    className="journey-hero__orb journey-hero__orb--two"
                    aria-hidden="true"
                />

                <div className="journey-container">

                    <div className="journey-hero__content">

                        <div className="journey-hero__eyebrow">
                            <span className="journey-hero__eyebrow-line" />
                            <Sparkles size={14} aria-hidden="true" />
                            <span>OUR JOURNEY</span>
                            <span className="journey-hero__eyebrow-line" />
                        </div>

                        <h1>
                            एक सोच से शुरू हुई,
                            <span>बदलाव की यात्रा।</span>
                        </h1>

                        <p>
                            भीम सेवक समिति की यात्रा समाज, शिक्षा और
                            सकारात्मक परिवर्तन के लिए किए जा रहे
                            निरंतर प्रयासों की कहानी है।
                        </p>

                    </div>

                    <div className="journey-hero__highlight">

                        <div className="journey-hero__quote-icon">
                            <Quote size={28} aria-hidden="true" />
                        </div>

                        <p>
                            “सकारात्मक बदलाव की शुरुआत
                            एक छोटे प्रयास से होती है।”
                        </p>

                        <span>BHEEM SEVAK SAMITI</span>

                    </div>

                </div>
            </section>


            {/* ==================================================
                OUR STORY
            ================================================== */}

            <section className="journey-intro">

                <div className="journey-container">

                    <div className="journey-intro__grid">

                        <div className="journey-intro__content">

                            <span className="journey-section-label">
                                OUR STORY
                            </span>

                            <h2>
                                हमारा उद्देश्य केवल आगे बढ़ना नहीं,
                                <span>
                                    बल्कि साथ लेकर आगे बढ़ना है।
                                </span>
                            </h2>

                            <p>
                                भीम सेवक समिति का विश्वास है कि समाज में
                                वास्तविक परिवर्तन तभी संभव है जब शिक्षा,
                                सहयोग और सामाजिक जिम्मेदारी एक साथ आगे
                                बढ़ें।
                            </p>

                            <p>
                                हमारी यात्रा लोगों से जुड़ने, उनकी
                                आवश्यकताओं को समझने और अपनी क्षमता के
                                अनुसार सकारात्मक योगदान देने के निरंतर
                                प्रयास की यात्रा है।
                            </p>

                        </div>


                        <div className="journey-intro__card">

                            <div className="journey-intro__icon">
                                <HeartHandshake
                                    size={27}
                                    aria-hidden="true"
                                />
                            </div>

                            <span>OUR COMMITMENT</span>

                            <h3>
                                समाज के लिए,
                                <strong> समाज के साथ।</strong>
                            </h3>

                            <p>
                                हमारा हर प्रयास सहयोग, सम्मान और
                                सकारात्मक बदलाव की भावना से प्रेरित है।
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* ==================================================
                MILESTONES
            ================================================== */}

            <section
                className="journey-timeline-section"
                id="journey-timeline"
            >

                <div className="journey-container">

                    <div className="journey-section-header">

                        <span className="journey-section-label">
                            OUR MILESTONES
                        </span>

                        <h2>
                            हमारी यात्रा के
                            <span>महत्वपूर्ण पड़ाव।</span>
                        </h2>

                        <p>
                            हर कदम हमें एक बेहतर और अधिक सकारात्मक
                            भविष्य की दिशा में आगे बढ़ाता है।
                        </p>

                    </div>


                    <div className="journey-timeline">

                        {journeyMilestones.map((item, index) => {

                            const Icon = item.icon;

                            return (
                                <article
                                    className="journey-timeline__item"
                                    key={item.number}
                                >

                                    <div className="journey-timeline__line">
                                        <span className="journey-timeline__number">
                                            {item.number}
                                        </span>
                                    </div>


                                    <div className="journey-timeline__card">

                                        <div className="journey-timeline__top">

                                            <div className="journey-timeline__icon">
                                                <Icon
                                                    size={22}
                                                    aria-hidden="true"
                                                />
                                            </div>

                                            <span>
                                                {item.category}
                                            </span>

                                        </div>

                                        <h3>{item.title}</h3>

                                        <p>{item.description}</p>

                                    </div>


                                    {index <
                                        journeyMilestones.length - 1 && (
                                        <div
                                            className="journey-timeline__connector"
                                            aria-hidden="true"
                                        />
                                    )}

                                </article>
                            );
                        })}

                    </div>

                </div>
            </section>


            {/* ==================================================
                CORE VALUES
            ================================================== */}

            <section className="journey-values">

                <div className="journey-container">

                    <div className="journey-values__top">

                        <div>

                            <span className="journey-section-label">
                                WHAT DRIVES US
                            </span>

                            <h2>
                                हमारी यात्रा के
                                <span>मूल मूल्य।</span>
                            </h2>

                        </div>

                        <p>
                            यही मूल्य हमारे हर प्रयास और हर पहल को
                            सही दिशा देने का काम करते हैं।
                        </p>

                    </div>


                    <div className="journey-values__grid">

                        {values.map((value) => {

                            const Icon = value.icon;

                            return (
                                <article
                                    className="journey-value-card"
                                    key={value.title}
                                >

                                    <div className="journey-value-card__icon">
                                        <Icon
                                            size={22}
                                            aria-hidden="true"
                                        />
                                    </div>

                                    <h3>{value.title}</h3>

                                    <p>{value.description}</p>

                                </article>
                            );
                        })}

                    </div>

                </div>
            </section>


            {/* ==================================================
                FUTURE
            ================================================== */}

            <section className="journey-future">

                <div
                    className="journey-future__orb"
                    aria-hidden="true"
                />

                <div className="journey-container">

                    <div className="journey-future__content">

                        <span>THE JOURNEY CONTINUES</span>

                        <h2>
                            अभी बहुत कुछ
                            <strong>करना बाकी है।</strong>
                        </h2>

                        <p>
                            हमारी यात्रा निरंतर जारी है। हम आने वाले समय
                            में शिक्षा, सामाजिक सहयोग और सकारात्मक बदलाव
                            के लिए और अधिक प्रभावी प्रयास करते रहेंगे।
                        </p>

                        <div className="journey-future__actions">

                            <Link
                                href="/join-us"
                                className="journey-future__join"
                            >
                                <span>Join Our Mission</span>
                                <ArrowRight
                                    size={17}
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link
                                href="/contact"
                                className="journey-future__contact"
                            >
                                Contact Us
                            </Link>

                        </div>

                    </div>

                </div>
            </section>

        </main>
    </>
);


}
