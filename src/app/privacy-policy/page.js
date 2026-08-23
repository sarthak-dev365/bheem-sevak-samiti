import Link from "next/link";
import "../../styles/legal.css";

import {
    FiArrowLeft,
    FiShield,
    FiMail,
    FiPhone,
} from "react-icons/fi";

import Footer from "../../components/layout/Footer";


export const metadata = {
  title: "Privacy Policy | Bheem Sevak Samiti",
  description:
    "Read the Privacy Policy of Bheem Sevak Samiti to understand how we collect, use, protect and manage information when you visit or use our website.",
};

export default function PrivacyPolicyPage() {

    return (
        <main className="legal-page">

            {/* ==================================================
                HERO
            ================================================== */}

            <section className="legal-hero">

                <div className="legal-container">

                    <Link
                        href="/"
                        className="legal-back-link"
                    >
                        <FiArrowLeft />
                        Back to Home
                    </Link>


                    <div className="legal-hero-content">

                        <div className="legal-hero-icon">
                            <FiShield />
                        </div>

                        <span>
                            WEBSITE POLICY
                        </span>

                        <h1>
                            Privacy Policy
                        </h1>

                        <p>
                            आपकी privacy और personal information
                            की सुरक्षा हमारे लिए महत्वपूर्ण है।
                        </p>

                    </div>

                </div>

            </section>


            {/* ==================================================
                CONTENT
            ================================================== */}

            <section className="legal-content-section">

                <div className="legal-container">

                    <article className="legal-content">

                        <div className="legal-updated">
                            Last Updated: August 2026
                        </div>


                        <section>

                            <h2>
                                1. Introduction
                            </h2>

                            <p>
                                भीम सेवक समिति, उत्तर प्रदेश
                                आपकी privacy का सम्मान करती है।
                                यह Privacy Policy बताती है कि
                                हमारी website का उपयोग करते समय
                                आपकी जानकारी किस प्रकार collect,
                                use और protect की जा सकती है।
                            </p>

                        </section>


                        <section>

                            <h2>
                                2. Information We May Collect
                            </h2>

                            <p>
                                जब आप हमारी website पर Contact Us,
                                Join Us या अन्य उपलब्ध forms का
                                उपयोग करते हैं, तो आवश्यक होने पर
                                आपका नाम, mobile number, email
                                address और आपके द्वारा submit की
                                गई अन्य जानकारी प्राप्त की जा सकती है।
                            </p>

                            <p>
                                Donation के मामले में payment
                                transaction से संबंधित जानकारी
                                केवल आवश्यकता और उपलब्ध payment
                                process के अनुसार प्राप्त की जा
                                सकती है।
                            </p>

                        </section>


                        <section>

                            <h2>
                                3. How We Use Information
                            </h2>

                            <p>
                                प्राप्त जानकारी का उपयोग मुख्यतः
                                निम्न उद्देश्यों के लिए किया जा
                                सकता है:
                            </p>

                            <ul>
                                <li>
                                    आपके queries का उत्तर देने के लिए।
                                </li>

                                <li>
                                    Join Us या अन्य submitted forms
                                    को process करने के लिए।
                                </li>

                                <li>
                                    संस्था की services और activities
                                    से संबंधित communication के लिए।
                                </li>

                                <li>
                                    Website और user experience को
                                    बेहतर बनाने के लिए।
                                </li>
                            </ul>

                        </section>


                        <section>

                            <h2>
                                4. Donation Information
                            </h2>

                            <p>
                                Website पर दिए गए donation options
                                के माध्यम से किए गए payment में
                                payment/transaction details संबंधित
                                banking या UPI service providers के
                                माध्यम से process हो सकती हैं।
                            </p>

                            <p>
                                Payment करने से पहले users को
                                official donation page पर उपलब्ध
                                Account Number, IFSC और UPI ID को
                                ध्यानपूर्वक verify करना चाहिए।
                            </p>

                        </section>


                        <section>

                            <h2>
                                5. Information Security
                            </h2>

                            <p>
                                हम उपलब्ध उचित उपायों के माध्यम से
                                प्राप्त information को unauthorized
                                access, misuse या disclosure से
                                सुरक्षित रखने का प्रयास करते हैं।
                                हालांकि internet पर किसी भी
                                information transmission को पूर्णतः
                                risk-free होने की guarantee नहीं दी
                                जा सकती।
                            </p>

                        </section>


                        <section>

                            <h2>
                                6. Sharing of Information
                            </h2>

                            <p>
                                हम आपकी personal information को
                                सामान्यतः बेचते या commercial
                                purpose के लिए trade नहीं करते।
                                आवश्यक परिस्थितियों में information
                                applicable law, legal requirements
                                या आवश्यक service providers के
                                अनुसार share की जा सकती है।
                            </p>

                        </section>


                        <section>

                            <h2>
                                7. Third-Party Services
                            </h2>

                            <p>
                                हमारी website पर कुछ third-party
                                services, social media platforms,
                                payment services या external links
                                उपलब्ध हो सकते हैं। उन services की
                                privacy practices संबंधित third-party
                                की policies के अधीन होंगी।
                            </p>

                        </section>


                        <section>

                            <h2>
                                8. Cookies
                            </h2>

                            <p>
                                Website functionality और user
                                experience को बेहतर बनाने के लिए
                                cookies या similar technologies का
                                उपयोग भविष्य में किया जा सकता है।
                                यदि ऐसी technologies का उपयोग किया
                                जाता है, तो उनका उपयोग applicable
                                requirements के अनुसार किया जाएगा।
                            </p>

                        </section>


                        <section>

                            <h2>
                                9. External Links
                            </h2>

                            <p>
                                हमारी website पर अन्य websites या
                                social media platforms के links हो
                                सकते हैं। हम उन external websites
                                की privacy policies या content के
                                लिए जिम्मेदार नहीं हैं।
                            </p>

                        </section>


                        <section>

                            <h2>
                                10. Children&apos;s Privacy
                            </h2>

                            <p>
                                हमारी website का उपयोग करते समय
                                किसी भी व्यक्ति को आवश्यक personal
                                information सावधानीपूर्वक submit
                                करनी चाहिए। यदि किसी minor की
                                information submit की जाती है, तो
                                उचित parental या guardian guidance
                                सुनिश्चित की जानी चाहिए।
                            </p>

                        </section>


                        <section>

                            <h2>
                                11. Changes to This Policy
                            </h2>

                            <p>
                                संस्था आवश्यकता के अनुसार इस Privacy
                                Policy को समय-समय पर update कर सकती
                                है। किसी भी महत्वपूर्ण बदलाव के बाद
                                updated policy इसी page पर उपलब्ध
                                कराई जा सकती है।
                            </p>

                        </section>


                        <section>

                            <h2>
                                12. Contact Us
                            </h2>

                            <p>
                                Privacy Policy से संबंधित किसी भी
                                प्रश्न के लिए आप हमारी Contact Us
                                page के माध्यम से संस्था से संपर्क
                                कर सकते हैं।
                            </p>


                            <div className="legal-contact-box">

                                <Link
                                    href="/contact"
                                >
                                    <FiMail />

                                    Contact Us
                                </Link>


                                <a
                                    href="tel:+919627833744"
                                >
                                    <FiPhone />

                                    +91 9627833744
                                </a>

                            </div>

                        </section>

                    </article>

                </div>

            </section>


            {/* ==================================================
                FOOTER
            ================================================== */}

            <Footer />

        </main>
    );
}