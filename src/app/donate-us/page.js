"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import "../../styles/donate-us.css";

import {
FiHeart,
FiArrowRight,
FiCheckCircle,
FiCreditCard,
FiSmartphone,
FiShield,
FiBookOpen,
FiUsers,
FiGlobe,
FiPhone,
} from "react-icons/fi";

import Footer from "../../components/layout/Footer";

import CopyUpiButton from "@/components/donation/CopyUpiButton";

import DonationAmountSelector from "../../components/donation/DonationAmountSelector";

import SelectedDonationAmount from "../../components/donation/SelectedDonationAmount";

/* ==========================================================
IMPACT AREAS
========================================================== */

const impactAreas = [
{
icon: FiBookOpen,
title: "Education",
description:
"जरूरतमंद विद्यार्थियों और शैक्षिक गतिविधियों को सहयोग।",
},
{
icon: FiUsers,
title: "Community",
description:
"समाज के जरूरतमंद वर्गों के लिए सेवा एवं सहयोग।",
},
{
icon: FiGlobe,
title: "Environment",
description:
"पर्यावरण संरक्षण और जागरूकता से जुड़े प्रयास।",
},
];

/* ==========================================================
DONATION PROCESS
========================================================== */

const donationSteps = [
{
number: "01",
title: "Choose Your Amount",
description:
"अपनी सुविधा के अनुसार donation amount चुनें।",
},
{
number: "02",
title: "Make Payment",
description:
"UPI QR या bank transfer के माध्यम से payment करें।",
},
{
number: "03",
title: "Keep Transaction Details",
description:
"Payment के बाद transaction/UTR details सुरक्षित रखें।",
},
];

/* ==========================================================
DONATION FAQ
========================================================== */

const donationFaqs = [
{
question: "मैं donation कैसे कर सकता हूँ?",
answer:
"आप official UPI QR code scan करके या दिए गए Punjab National Bank account में सीधे bank transfer करके donation कर सकते हैं।",
},
{
question: "क्या मैं अपनी पसंद की कोई भी amount donate कर सकता हूँ?",
answer:
"हाँ। Suggested donation amounts के अलावा आप अपनी सुविधा के अनुसार कोई भी amount donate कर सकते हैं।",
},
{
question: "Bank transfer के लिए कौन-कौन सी details जरूरी हैं?",
answer:
"Bank transfer के लिए Account Number और IFSC Code का उपयोग करें। Payment करने से पहले सभी details को ध्यानपूर्वक verify करें।",
},
{
question: "UPI से donation करने के लिए UPI ID क्या है?",
answer:
"Official UPI ID: 9627833744m@pnb",
},
];

/* ==========================================================
DONATE PAGE
========================================================== */

export default function DonateUsPage() {

    useEffect(() => {

        // Fresh Donate page load पर
        // previous/stale donation amount हटाएं.
        sessionStorage.removeItem("donationAmount");

        // SelectedDonationAmount को update करें.
        window.dispatchEvent(
            new Event("donationAmountChanged")
        );

    }, []);

    return (
        <main className="donate-page">  

        {/* ==================================================  
            HERO SECTION  
        ================================================== */}  

        <section className="donate-hero">  

            <div className="donate-container">  

                <div className="donate-hero__content">  

                    <span className="donate-hero__eyebrow">  
                        SUPPORT OUR MISSION  
                    </span>  

                    <h1>  
                        आपका सहयोग,  
                        <span> किसी की उम्मीद।</span>  
                    </h1>  

                    <p>  
                        आपका छोटा सा योगदान शिक्षा, सामाजिक सेवा,  
                        पर्यावरण संरक्षण और जरूरतमंद लोगों के  
                        लिए हमारे प्रयासों को आगे बढ़ाने में  
                        सहयोग कर सकता है।  
                    </p>  


                    <div className="donate-hero__actions">  

                        <a  
                            href="#donation-options"  
                            className="donate-button donate-button--primary"  
                        >  
                            <FiHeart />  

                            Donate Now  
                        </a>  


                        <Link  
                            href="/contact"  
                            className="donate-button donate-button--outline"  
                        >  
                            Contact Us  

                            <FiArrowRight />  
                        </Link>  

                    </div>  

                </div>  

            </div>  

        </section>  



        {/* ==================================================  
            IMPACT SECTION  
        ================================================== */}  

        <section className="donate-intro-section">  

            <div className="donate-container">  

                <div className="donate-section-heading">  

                    <span>  
                        YOUR SUPPORT MATTERS  
                    </span>  

                    <h2>  
                        आपके सहयोग से  
                        बेहतर बदलाव।  
                    </h2>  

                    <p>  
                        आपका योगदान संस्था के सामाजिक, शैक्षिक,  
                        पर्यावरण एवं सामुदायिक प्रयासों को  
                        मजबूत करने में सहायता करता है।  
                    </p>  

                </div>  


                <div className="donate-impact-grid">  

                    {impactAreas.map((item) => {  

                        const Icon = item.icon;  

                        return (  
                            <div  
                                className="donate-impact-card"  
                                key={item.title}  
                            >  

                                <div className="donate-impact-card__icon">  
                                    <Icon />  
                                </div>  

                                <div>  

                                    <h3>  
                                        {item.title}  
                                    </h3>  

                                    <p>  
                                        {item.description}  
                                    </p>  

                                </div>  

                            </div>  
                        );  

                    })}  

                </div>  

            </div>  

        </section>  



        {/* ==================================================  
            DONATION AMOUNT SECTION  
        ================================================== */}  

        <section  
            className="donate-options-section"  
            id="donation-options"  
        >  

            <div className="donate-container">  

                <div className="donate-section-heading">  

                    <span>  
                        CHOOSE YOUR CONTRIBUTION  
                    </span>  

                    <h2>  
                        अपनी सुविधा के अनुसार  
                        सहयोग करें।  
                    </h2>  

                    <p>  
                        Suggested amount चुनें या अपनी पसंद की  
                        custom amount के साथ donation करें।  
                    </p>  

                </div>  


                {/*   
                    Interactive amount selector  
                    Client Component  
                */}  

                <DonationAmountSelector />  

            </div>  

        </section>  



        {/* ==================================================  
            PAYMENT OPTIONS  
        ================================================== */}  

        <section  
            className="donate-payment-section"  
            id="payment-options"  
        >  

            <div className="donate-container">  


                <div className="donate-section-heading">  

                    <span>  
                        OFFICIAL PAYMENT OPTIONS  
                    </span>  

                    <h2>  
                        Donation करने के  
                        दो आसान तरीके।  
                    </h2>  

                    <p>  
                        भीम सेवक समिति के official payment  
                        details का उपयोग करके सीधे सहयोग करें।  
                    </p>  

                </div>  


                {/*   
                    Selected amount display  
                    Client Component  
                */}  

                <SelectedDonationAmount />  


                <div className="donate-payment-layout">  


                    {/* ==================================================  
                        UPI QR PAYMENT  
                    ================================================== */}  

                    <div className="donate-qr-card">  


                        <div className="donate-payment-card__header">  

                            <div>  

                                <span>  
                                    OPTION 01  
                                </span>  

                                <h3>  
                                    Scan & Donate  
                                </h3>  

                            </div>  


                            <div className="donate-payment-icon">  
                                <FiSmartphone />  
                            </div>  

                        </div>  



                        {/* QR CODE */}  

                        <div className="donate-qr-area">  

                            <div className="donate-qr-image-wrapper">  

                                <Image  
                                    src="/donation/upi-qr.png"  
                                    alt="Bheem Sevak Samiti official UPI donation QR code"  
                                    className="donate-qr-image"  
                                    width={300}  
                                    height={300}  
                                />  

                            </div>  

                        </div>  



                        {/* UPI ID */}  

                        <div className="donate-upi">  

                            <span>  
                                OFFICIAL UPI ID  
                            </span>  

                            <div>  

                                <strong>  
                                    9627833744m@pnb  
                                </strong>  

                                {/*   
                                    Copy button is handled  
                                    by CopyUpiButton component  
                                */}  

                                <CopyUpiButton />  

                            </div>  

                        </div>  



                        {/* PAYMENT NOTE */}  

                        <div className="donate-payment-success">  

                            <FiCheckCircle />  

                            <span>  
                                QR scan या UPI payment करने के बाद  
                                transaction/UTR details सुरक्षित रखें।  
                            </span>  

                        </div>  

                    </div>  



                    {/* ==================================================  
                        BANK TRANSFER  
                    ================================================== */}  

                    <div className="donate-bank-card">  


                        <div className="donate-payment-card__header">  

                            <div>  

                                <span>  
                                    OPTION 02  
                                </span>  

                                <h3>  
                                    Bank Transfer  
                                </h3>  

                            </div>  


                            <div className="donate-payment-icon">  
                                <FiCreditCard />  
                            </div>  

                        </div>  



                        <div className="donate-bank-details">  


                            {/* ACCOUNT HOLDER */}  

                            <div className="donate-bank-detail--full">  

                                <span>  
                                    ACCOUNT HOLDER  
                                </span>  

                                <strong>  
                                    Bheem Sevak Samiti  
                                </strong>  

                            </div>  



                            {/* BANK */}  

                            <div>  

                                <span>  
                                    BANK NAME  
                                </span>  

                                <strong>  
                                    Punjab National Bank  
                                </strong>  

                            </div>  



                            {/* ACCOUNT NUMBER */}  

                            <div>  

                                <span>  
                                    ACCOUNT NUMBER  
                                </span>  

                                <strong>  
                                    6168002100001810  
                                </strong>  

                            </div>  



                            {/* IFSC */}  

                            <div>  

                                <span>  
                                    IFSC CODE  
                                </span>  

                                <strong>  
                                    PUNB0616800  
                                </strong>  

                            </div>  

                        </div>  



                        {/* SECURITY NOTICE */}  

                        <div className="donate-bank-security">  

                            <FiShield />  

                            <div>  

                                <strong>  
                                    Before You Pay  
                                </strong>  

                                <span>  
                                    Payment करने से पहले Account  
                                    Number, IFSC और UPI ID को  
                                    ध्यानपूर्वक verify करें।  
                                    केवल इसी official Donate page  
                                    पर दिए गए payment details का  
                                    उपयोग करें।  
                                </span>  

                            </div>  

                        </div>  

                    </div>  

                </div>  

            </div>  

        </section>  



        {/* ==================================================  
            AFTER PAYMENT  
        ================================================== */}  

        <section className="donate-confirmation-section">  

            <div className="donate-container">  

                <div className="donate-confirmation">  


                    <div className="donate-confirmation__icon">  
                        <FiCheckCircle />  
                    </div>  


                    <div className="donate-confirmation__content">  

                        <span>  
                            AFTER PAYMENT  
                        </span>  

                        <h2>  
                            Donation के बाद transaction  
                            details सुरक्षित रखें।  
                        </h2>  

                        <p>  
                            किसी भी payment के बाद UTR/transaction  
                            number को सुरक्षित रखें। Donation से  
                            संबंधित सहायता के लिए हमारी contact  
                            team से संपर्क कर सकते हैं।  
                        </p>  

                    </div>  


                    <Link  
                        href="/contact"  
                        className="donate-confirmation__button"  
                    >  
                        Contact Support  

                        <FiArrowRight />  
                    </Link>  

                </div>  

            </div>  

        </section>  



        {/* ==================================================  
            HOW TO DONATE  
        ================================================== */}  

        <section className="donate-process-section">  

            <div className="donate-container">  


                <div className="donate-section-heading">  

                    <span>  
                        HOW TO DONATE  
                    </span>  

                    <h2>  
                        केवल 3 आसान steps।  
                    </h2>  

                </div>  



                <div className="donate-process-grid">  

                    {donationSteps.map((step) => (  

                        <div  
                            className="donate-process-item"  
                            key={step.number}  
                        >  

                            <span className="donate-process-number">  
                                {step.number}  
                            </span>  


                            <div>  

                                <h3>  
                                    {step.title}  
                                </h3>  

                                <p>  
                                    {step.description}  
                                </p>  

                            </div>  

                        </div>  

                    ))}  

                </div>  

            </div>  

        </section>  



        {/* ==================================================  
            TRUST / SECURITY  
        ================================================== */}  

        <section className="donate-trust-section">  

            <div className="donate-container">  

                <div className="donate-trust">  


                    <div className="donate-trust__icon">  
                        <FiShield />  
                    </div>  


                    <div>  

                        <span>  
                            OFFICIAL DONATION DETAILS  
                        </span>  

                        <h2>  
                            Payment करने से पहले  
                            details verify करें।  
                        </h2>  

                  <p>  
                            किसी भी payment से पहले इस page पर  
                            उपलब्ध official UPI और bank details  
                            को ध्यानपूर्वक verify करें। किसी  
                            अनजान account या payment link पर  
                            payment न करें।  
                        </p>  

                    </div>  


                    <Link  
                        href="/contact"  
                        className="donate-trust__button"  
                    >  
                        <FiPhone />  

                        Contact Support  
                    </Link>  

                </div>  

            </div>  

        </section>  



        {/* ==================================================  
            FAQ  
        ================================================== */}  

        <section className="donate-faq-section">  

            <div className="donate-container">  


                <div className="donate-section-heading">  

                    <span>  
                        DONATION FAQ  
                    </span>  

                    <h2>  
                        Donation से जुड़े सवाल  
                    </h2>  

                </div>  



                <div className="donate-faq-list">  

                    {donationFaqs.map((faq, index) => (  

                        <details  
                            className="donate-faq-item"  
                            key={faq.question}  
                        >  

                            <summary>  

                                <span>  
                                    {String(index + 1).padStart(2, "0")}  
                                </span>  

                                <strong>  
                                    {faq.question}  
                                </strong>  

                                <FiArrowRight />  

                            </summary>  


                            <div className="donate-faq-answer">  

                                <p>  
                                    {faq.answer}  
                                </p>  

                            </div>  

                        </details>  

                    ))}  

                </div>  

            </div>  

        </section>  



        {/* ==================================================  
            FINAL CTA  
        ================================================== */}  

        <section className="donate-cta-section">  

            <div className="donate-container">  

                <div className="donate-cta">  


                    <div>  

                        <span>  
                            BE A PART OF THE CHANGE  
                        </span>  

                        <h2>  
                            मिलकर समाज के लिए  
                            बेहतर कल बनाएं।  
                        </h2>  

                        <p>  
                            आपका सहयोग हमारे प्रयासों को  
                            आगे बढ़ाने की ताकत देता है।  
                        </p>  

                    </div>  



                    <div className="donate-cta__actions">  

                        <a  
                            href="#donation-options"  
                            className="donate-cta__button donate-cta__button--primary"  
                        >  
                            Donate Now  

                            <FiHeart />  
                        </a>  


                        <Link  
                            href="/contact"  
                            className="donate-cta__button donate-cta__button--secondary"  
                        >  
                            Contact Us  

                            <FiArrowRight />  
                        </Link>  

                    </div>  

                </div>  

            </div>  

        </section>  



        {/* ==================================================  
            FOOTER  
        ================================================== */}  

        <Footer />  

    </main>  
);

}