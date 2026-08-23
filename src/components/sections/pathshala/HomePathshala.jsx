import Link from "next/link";
import "../../../styles/pathshala.css";

export default function HomePathshala() {
    return (
        <section
            className="home-pathshala"
            id="pathshala"
            aria-labelledby="home-pathshala-title"
        >
            <div className="home-pathshala__container">

                {/* Section Heading */}
                <div className="home-pathshala__header">

                    <span className="home-pathshala__eyebrow">
                        OUR PATHSHALA
                    </span>

                    <h2
                        id="home-pathshala-title"
                        className="home-pathshala__title"
                    >
                        हर बच्चे तक
                        <span>शिक्षा का अवसर।</span>
                    </h2>

                    <p className="home-pathshala__intro">
                        जरूरतमंद और ग्रामीण क्षेत्रों के बच्चों को
                        शिक्षा से जोड़ने की दिशा में भीम सेवक समिति
                        का एक निरंतर प्रयास।
                    </p>

                </div>


                {/* Four Simple Highlights */}
                <div className="home-pathshala__highlights">

                    <div className="home-pathshala__item">
                        <span>01</span>
                        <strong>निःशुल्क शिक्षा</strong>
                    </div>

                    <div className="home-pathshala__item">
                        <span>02</span>
                        <strong>ग्रामीण पहुँच</strong>
                    </div>

                    <div className="home-pathshala__item">
                        <span>03</span>
                        <strong>अध्ययन सामग्री</strong>
                    </div>

                    <div className="home-pathshala__item">
                        <span>04</span>
                        <strong>स्वयंसेवक सहयोग</strong>
                    </div>

                </div>


                {/* Bottom Action */}
                <div className="home-pathshala__footer">

                    <span className="home-pathshala__footer-text">
                        शिक्षा को अवसर बनाना, हर बच्चे के लिए।
                    </span>

                    <Link
                        href="/pathshala"
                        className="home-pathshala__link"
                    >
                        <span>Explore Pathshala</span>
                        <span aria-hidden="true">↗</span>
                    </Link>

                </div>

            </div>
        </section>
    );
}