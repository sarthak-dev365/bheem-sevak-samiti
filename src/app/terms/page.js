import Link from "next/link";
import "../../styles/legal.css";

import {
    FiArrowLeft,
    FiFileText,
    FiMail,
    FiPhone,
} from "react-icons/fi";

import Footer from "../../components/layout/Footer";


export const metadata = {
  title: "Terms & Conditions | Bheem Sevak Samiti",
  description:
    "Read the Terms & Conditions of Bheem Sevak Samiti to understand the rules, responsibilities and conditions for using our website, services and online resources.",
};


export default function TermsPage() {

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
                            <FiFileText />
                        </div>


                        <span>
                            WEBSITE POLICY
                        </span>


                        <h1>
                            Terms & Conditions
                        </h1>


                        <p>
                            हमारी website और उपलब्ध services
                            के उपयोग से संबंधित नियम एवं शर्तें।
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


                        {/* ==================================================
                            1
                        ================================================== */}

                        <section>

                            <h2>
                                1. Acceptance of Terms
                            </h2>

                            <p>
                                भीम सेवक समिति की website का
                                उपयोग करने पर आप इन Terms &
                                Conditions से सहमत माने जाएंगे।
                                यदि आप इन terms से सहमत नहीं हैं,
                                तो कृपया website का उपयोग न करें।
                            </p>

                        </section>



                        {/* ==================================================
                            2
                        ================================================== */}

                        <section>

                            <h2>
                                2. Website Usage
                            </h2>

                            <p>
                                Website का उपयोग केवल lawful और
                                उचित उद्देश्यों के लिए किया जाना
                                चाहिए। Website की functionality,
                                content या services का misuse,
                                unauthorized access या किसी प्रकार
                                की harmful activity की अनुमति नहीं है।
                            </p>

                        </section>



                        {/* ==================================================
                            3
                        ================================================== */}

                        <section>

                            <h2>
                                3. Website Content
                            </h2>

                            <p>
                                Website पर उपलब्ध text, images,
                                graphics, information और अन्य
                                content संस्था द्वारा information
                                और public awareness purposes के
                                लिए उपलब्ध कराया जा सकता है।
                            </p>

                            <p>
                                हम website की information को
                                accurate और updated रखने का
                                reasonable प्रयास करते हैं, लेकिन
                                प्रत्येक information की पूर्ण
                                accuracy या completeness की
                                guarantee नहीं दी जाती।
                            </p>

                        </section>



                        {/* ==================================================
                            4
                        ================================================== */}

                        <section>

                            <h2>
                                4. Services & Activities
                            </h2>

                            <p>
                                संस्था की services, activities,
                                programs, events और initiatives
                                समय, आवश्यकता और उपलब्ध resources
                                के अनुसार बदले, स्थगित या बंद किए
                                जा सकते हैं।
                            </p>

                        </section>



                        {/* ==================================================
                            5
                        ================================================== */}

                        <section>

                            <h2>
                                5. User Submitted Information
                            </h2>

                            <p>
                                Contact Us, Join Us या किसी अन्य
                                form के माध्यम से information
                                submit करते समय user को सही और
                                accurate information प्रदान करनी
                                चाहिए।
                            </p>

                            <p>
                                किसी अन्य व्यक्ति की personal
                                information बिना उचित permission
                                के submit नहीं करनी चाहिए।
                            </p>

                        </section>



                        {/* ==================================================
                            6
                        ================================================== */}

                        <section>

                            <h2>
                                6. Donation & Payment
                            </h2>

                            <p>
                                Website पर donation के लिए उपलब्ध
                                UPI और bank details का उपयोग करके
                                users स्वयं payment initiate करते
                                हैं।
                            </p>

                            <p>
                                Payment करने से पहले Account Number,
                                IFSC Code और UPI ID को ध्यानपूर्वक
                                verify करना user की जिम्मेदारी है।
                            </p>

                            <p>
                                Payment processing संबंधित bank,
                                UPI या payment service provider के
                                systems के माध्यम से हो सकती है।
                            </p>

                        </section>



                        {/* ==================================================
                            7
                        ================================================== */}

                        <section>

                            <h2>
                                7. Intellectual Property
                            </h2>

                            <p>
                                Website पर उपलब्ध संस्था के original
                                content, branding, logo, graphics,
                                text और अन्य materials पर applicable
                                intellectual property rights संस्था
                                या संबंधित rights holders के हो सकते हैं।
                            </p>

                            <p>
                                बिना prior permission के website
                                content को commercial purpose के
                                लिए copy, reproduce, modify या
                                distribute नहीं किया जाना चाहिए।
                            </p>

                        </section>



                        {/* ==================================================
                            8
                        ================================================== */}

                        <section>

                            <h2>
                                8. Third-Party Links
                            </h2>

                            <p>
                                Website पर third-party websites,
                                social media platforms या external
                                services के links उपलब्ध हो सकते हैं।
                            </p>

                            <p>
                                उन external websites की availability,
                                content, security या privacy practices
                                के लिए संस्था जिम्मेदार नहीं है।
                            </p>

                        </section>



                        {/* ==================================================
                            9
                        ================================================== */}

                        <section>

                            <h2>
                                9. Prohibited Activities
                            </h2>

                            <p>
                                Website का उपयोग निम्न प्रकार की
                                activities के लिए नहीं किया जाना चाहिए:
                            </p>


                            <ul>

                                <li>
                                    Website को damage या disrupt
                                    करने का प्रयास।
                                </li>

                                <li>
                                    Unauthorized access प्राप्त
                                    करने का प्रयास।
                                </li>

                                <li>
                                    False, misleading या fraudulent
                                    information submit करना।
                                </li>

                                <li>
                                    Website या उसके users को
                                    नुकसान पहुँचाने वाली activity।
                                </li>

                                <li>
                                    Applicable laws या regulations
                                    का उल्लंघन।
                                </li>

                            </ul>

                        </section>



                        {/* ==================================================
                            10
                        ================================================== */}

                        <section>

                            <h2>
                                10. Limitation of Liability
                            </h2>

                            <p>
                                Website को उपलब्ध और functional
                                रखने के लिए reasonable efforts किए
                                जाते हैं। हालांकि technical errors,
                                temporary downtime, third-party
                                service issues या अन्य circumstances
                                के कारण website हमेशा uninterrupted
                                उपलब्ध रहेगी, इसकी guarantee नहीं दी
                                जा सकती।
                            </p>

                        </section>



                        {/* ==================================================
                            11
                        ================================================== */}

                        <section>

                            <h2>
                                11. Changes to These Terms
                            </h2>

                            <p>
                                संस्था आवश्यकता के अनुसार इन Terms &
                                Conditions को समय-समय पर update या
                                modify कर सकती है। Updated version
                                इसी page पर प्रकाशित किया जा सकता है।
                            </p>

                        </section>



                        {/* ==================================================
                            12
                        ================================================== */}

                        <section>

                            <h2>
                                12. Governing Law
                            </h2>

                            <p>
                                इन Terms & Conditions से संबंधित
                                matters पर भारत में लागू applicable
                                laws लागू होंगे।
                            </p>

                        </section>



                        {/* ==================================================
                            13
                        ================================================== */}

                        <section>

                            <h2>
                                13. Contact Us
                            </h2>

                            <p>
                                इन Terms & Conditions से संबंधित
                                किसी भी प्रश्न या clarification के
                                लिए आप संस्था से संपर्क कर सकते हैं।
                            </p>


                            <div className="legal-contact-box">

                                <Link href="/contact">

                                    <FiMail />

                                    Contact Us

                                </Link>


                                <a href="tel:+919627833744">

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