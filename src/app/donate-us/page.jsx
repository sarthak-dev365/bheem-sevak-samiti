"use client";

import Link from "next/link";
import Image from "next/image";
import {
    FiArrowRight,
    FiBookOpen,
    FiCheck,
    FiCreditCard,
    FiHeart,
    FiHelpCircle,
    FiShield,
    FiUsers,
} from "react-icons/fi";

import "@/styles/donate-us.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import CopyUpiButton from "@/components/donation/CopyUpiButton";
import DonationAmountSelector from "@/components/donation/DonationAmountSelector";
import SelectedDonationAmount from "@/components/donation/SelectedDonationAmount";


/* ==========================================================
   DONATE US PAGE
========================================================== */

export default function DonateUsPage() {

    return (
        <div className="donate-page">

            {/* ==================================================
                ORIGINAL WEBSITE NAVBAR
            ================================================== */}

            <Navbar />


            <main>

                {/* ==================================================
                    HERO
                ================================================== */}

                <section className="donate-hero">

                    <div className="donate-container donate-hero__inner">

                        <div className="donate-hero__content">

                            <span className="donate-eyebrow donate-eyebrow--light">
                                SUPPORT OUR MISSION
                            </span>

                            <h1>
                                Give with purpose.
                                <span>Create meaningful change.</span>
                            </h1>

                            <p>
                                Your contribution helps Bheem Sevak Samiti
                                support education, community welfare,
                                environmental awareness, and meaningful
                                social initiatives.
                            </p>

                            <div className="donate-hero__actions">

                                <a
                                    href="#donation-amount"
                                    className="donate-btn donate-btn--primary"
                                >
                                    Donate Now
                                    <FiArrowRight />
                                </a>

                                <Link
                                    href="/contact"
                                    className="donate-btn donate-btn--outline"
                                >
                                    Contact Us
                                </Link>

                            </div>

                            <div className="donate-hero__trust">

                                <span>
                                    <FiCheck />
                                    Official payment details
                                </span>

                                <span>
                                    <FiCheck />
                                    Every contribution matters
                                </span>

                            </div>

                        </div>


                        {/* HERO VISUAL */}

                        <div className="donate-hero__visual">

                            <div className="donate-orbit donate-orbit--one" />
                            <div className="donate-orbit donate-orbit--two" />

                            <div className="donate-hero-card">

                                <div className="donate-hero-card__top">
                                    <span>YOUR SUPPORT</span>

                                    <span className="donate-hero-card__heart">
                                        <FiHeart />
                                    </span>
                                </div>

                                <div className="donate-hero-card__icon">
                                    <FiHeart />
                                </div>

                                <p>
                                    Every contribution creates
                                    an opportunity to help.
                                </p>

                                <h3>
                                    Together,
                                    <br />
                                    we can make
                                    <span>a difference.</span>
                                </h3>

                                <div className="donate-hero-card__line" />

                            </div>

                            <div className="donate-floating-card donate-floating-card--top">
                                <FiShield />
                                <span>
                                    Trusted contribution
                                </span>
                            </div>

                            <div className="donate-floating-card donate-floating-card--bottom">
                                <FiHeart />
                                <span>
                                    Your support matters
                                </span>
                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    IMPACT
                ================================================== */}

                <section className="donate-section donate-impact">

                    <div className="donate-container">

                        <div className="donate-section-heading donate-section-heading--center">

                            <span className="donate-eyebrow">
                                WHERE YOUR SUPPORT GOES
                            </span>

                            <h2>
                                Your contribution can
                                <span> turn intention into action.</span>
                            </h2>

                            <p>
                                Your support can help strengthen meaningful
                                work across education, community welfare,
                                and environmental initiatives.
                            </p>

                        </div>


                        <div className="donate-impact-grid">

                            <article className="donate-impact-card donate-impact-card--orange">

                                <div className="donate-impact-card__icon">
                                    <FiBookOpen />
                                </div>

                                <span className="donate-card-number">
                                    01
                                </span>

                                <h3>
                                    Education
                                </h3>

                                <p>
                                    Support learning opportunities,
                                    educational resources, and initiatives
                                    that help students move forward.
                                </p>

                            </article>


                            <article className="donate-impact-card donate-impact-card--blue">

                                <div className="donate-impact-card__icon">
                                    <FiUsers />
                                </div>

                                <span className="donate-card-number">
                                    02
                                </span>

                                <h3>
                                    Community Welfare
                                </h3>

                                <p>
                                    Support community-focused initiatives
                                    and efforts that provide meaningful
                                    social assistance.
                                </p>

                            </article>


                            <article className="donate-impact-card donate-impact-card--green">

                                <div className="donate-impact-card__icon">
                                    <FiCheck />
                                </div>

                                <span className="donate-card-number">
                                    03
                                </span>

                                <h3>
                                    Environment
                                </h3>

                                <p>
                                    Support environmental awareness,
                                    conservation, and community-led
                                    sustainability efforts.
                                </p>

                            </article>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    DONATION AMOUNT
                ================================================== */}

                <section
                    id="donation-amount"
                    className="donate-section donate-amount-section"
                >

                    <div className="donate-container donate-amount-layout">

                        <div className="donate-amount-intro">

                            <span className="donate-eyebrow">
                                MAKE AN IMPACT
                            </span>

                            <h2>
                                Choose your
                                <span> contribution.</span>
                            </h2>

                            <p>
                                Select a suggested amount or choose a
                                custom contribution. Every amount can become
                                a meaningful part of the work.
                            </p>

                            <ul className="donate-check-list">

                                <li>
                                    <FiCheck />
                                    Flexible contribution amount
                                </li>

                                <li>
                                    <FiCheck />
                                    Simple donation process
                                </li>

                                <li>
                                    <FiCheck />
                                    Official payment options
                                </li>

                            </ul>

                        </div>


                        <div className="donate-amount-panel">

                            <div className="donate-panel-heading">

                                <div>
                                    <span>
                                        DONATION AMOUNT
                                    </span>

                                    <h3>
                                        Select your amount
                                    </h3>
                                </div>

                                <FiHeart />

                            </div>

                            <DonationAmountSelector />

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    PAYMENT OPTIONS
                ================================================== */}

                <section
                    id="payment-options"
                    className="donate-section donate-payment-section"
                >

                    <div className="donate-container">

                        <div className="donate-section-heading donate-section-heading--center">

                            <span className="donate-eyebrow">
                                OFFICIAL PAYMENT OPTIONS
                            </span>

                            <h2>
                                Simple, clear &
                                <span> official.</span>
                            </h2>

                            <p>
                                Use only the official payment details shown
                                below. Please verify the details carefully
                                before completing your donation.
                            </p>

                        </div>


                        <div className="donate-payment-grid">

                            {/* UPI */}

                            <article className="donate-payment-card donate-payment-card--upi">

                                <div className="donate-payment-card__header">

                                    <div>
                                        <span>
                                            OPTION 01
                                        </span>

                                        <h3>
                                            Scan & Donate
                                        </h3>

                                        <p>
                                            Scan the official UPI QR code
                                            using your preferred UPI app.
                                        </p>
                                    </div>

                                    <div className="donate-payment-icon">
                                        <FiCreditCard />
                                    </div>

                                </div>


                                <div className="donate-qr-wrap">

                                    <div className="donate-qr">
                                        <Image
                                            src="/donation/upi-qr.png"
                                            alt="Official Bheem Sevak Samiti UPI QR Code"
                                            width={220}
                                            height={220}
                                            priority
                                        />
                                    </div>

                                </div>


                                <div className="donate-upi-box">

                                    <div>
                                        <span>
                                            OFFICIAL UPI ID
                                        </span>

                                        <strong>
                                            9627833744m@pnb
                                        </strong>
                                    </div>

                                    <CopyUpiButton />

                                </div>

                                <p className="donate-payment-note">
                                    <FiCheck />
                                    Save your UTR / transaction reference
                                    after payment.
                                </p>

                            </article>


                            {/* BANK */}

                            <article className="donate-payment-card donate-payment-card--bank">

                                <div className="donate-payment-card__header">

                                    <div>
                                        <span>
                                            OPTION 02
                                        </span>

                                        <h3>
                                            Bank Transfer
                                        </h3>

                                        <p>
                                            Make a direct transfer using the
                                            official bank details below.
                                        </p>
                                    </div>

                                    <div className="donate-payment-icon">
                                        <FiCreditCard />
                                    </div>

                                </div>


                                <div className="donate-bank-details">

                                    <div className="donate-bank-row">
                                        <span>
                                            Bank Name
                                        </span>

                                        <strong>
                                            Punjab National Bank
                                        </strong>
                                    </div>

                                    <div className="donate-bank-row">
                                        <span>
                                            Account Holder
                                        </span>

                                        <strong>
                                            Bheem Sevak Samiti
                                        </strong>
                                    </div>

                                    <div className="donate-bank-row">
                                        <span>
                                            Account Number
                                        </span>

                                        <strong>
                                            6168002100001810
                                        </strong>
                                    </div>

                                    <div className="donate-bank-row">
                                        <span>
                                            IFSC Code
                                        </span>

                                        <strong>
                                            PUNB0616800
                                        </strong>
                                    </div>

                                </div>


                                <div className="donate-bank-warning">

                                    <FiShield />

                                    <div>
                                        <strong>
                                            Verify before you pay
                                        </strong>

                                        <span>
                                            Carefully check the account
                                            number and IFSC code before
                                            confirming your transfer.
                                        </span>
                                    </div>

                                </div>

                            </article>

                        </div>


                        {/* SELECTED AMOUNT */}

                        <div className="donate-selected-wrap">
                            <SelectedDonationAmount />
                        </div>

                    </div>

                </section>


                {/* ==================================================
                    HOW TO DONATE
                ================================================== */}

                <section className="donate-section donate-process-section">

                    <div className="donate-container">

                        <div className="donate-section-heading donate-section-heading--center">

                            <span className="donate-eyebrow">
                                HOW TO DONATE
                            </span>

                            <h2>
                                Three simple
                                <span> steps.</span>
                            </h2>

                            <p>
                                Complete your contribution in just a few
                                simple steps.
                            </p>

                        </div>


                        <div className="donate-process-grid">

                            <article className="donate-process-card">

                                <span>
                                    01
                                </span>

                                <div className="donate-process-icon">
                                    1
                                </div>

                                <h3>
                                    Choose Your Amount
                                </h3>

                                <p>
                                    Select a suggested amount or enter
                                    the contribution you would like to make.
                                </p>

                            </article>


                            <article className="donate-process-card">

                                <span>
                                    02
                                </span>

                                <div className="donate-process-icon">
                                    2
                                </div>

                                <h3>
                                    Make Your Donation
                                </h3>

                                <p>
                                    Complete your contribution using
                                    the official UPI or bank details.
                                </p>

                            </article>


                            <article className="donate-process-card">

                                <span>
                                    03
                                </span>

                                <div className="donate-process-icon">
                                    3
                                </div>

                                <h3>
                                    Save Your Reference
                                </h3>

                                <p>
                                    Keep your UTR or transaction reference
                                    safely for your records.
                                </p>

                            </article>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    DONATION SAFETY
                ================================================== */}

                <section className="donate-verification">

                    <div className="donate-container donate-verification__inner">

                        <div>

                            <span className="donate-eyebrow donate-eyebrow--light">
                                DONATION GUIDANCE
                            </span>

                            <h2>
                                Verify before
                                <span> you pay.</span>
                            </h2>

                            <p>
                                For your safety, always verify the official
                                payment details carefully before making a
                                transaction.
                            </p>

                        </div>


                        <div className="donate-verification-list">

                            <div>
                                <FiCheck />
                                <span>
                                    Verify your payment details
                                </span>
                            </div>

                            <div>
                                <FiCheck />
                                <span>
                                    Use only official UPI or bank details
                                </span>
                            </div>

                            <div>
                                <FiCheck />
                                <span>
                                    Keep your transaction reference
                                </span>
                            </div>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    FAQ
                ================================================== */}

                <section className="donate-section donate-faq-section">

                    <div className="donate-container donate-faq-layout">

                        <div className="donate-faq-intro">

                            <span className="donate-eyebrow">
                                FREQUENTLY ASKED QUESTIONS
                            </span>

                            <h2>
                                Donation
                                <span> questions, answered.</span>
                            </h2>

                            <p>
                                Find quick answers to common questions
                                about making a contribution.
                            </p>

                            <Link
                                href="/contact"
                                className="donate-support-link"
                            >
                                <FiHelpCircle />
                                Need help?
                                <FiArrowRight />
                            </Link>

                        </div>


                        <div className="donate-faq-list">

                            <details>
                                <summary>
                                    How can I donate?
                                    <span>+</span>
                                </summary>

                                <p>
                                    You can donate by scanning the official
                                    UPI QR code or by making a direct bank
                                    transfer using the payment details
                                    provided on this page.
                                </p>
                            </details>


                            <details>
                                <summary>
                                    Can I donate a custom amount?
                                    <span>+</span>
                                </summary>

                                <p>
                                    Yes. Choose one of the suggested
                                    contribution amounts or enter your own
                                    custom amount.
                                </p>
                            </details>


                            <details>
                                <summary>
                                    What details do I need for a bank transfer?
                                    <span>+</span>
                                </summary>

                                <p>
                                    Use the official account number and
                                    IFSC code displayed in the Bank Transfer
                                    section. Verify the details before
                                    confirming your payment.
                                </p>
                            </details>


                            <details>
                                <summary>
                                    What is the official UPI ID?
                                    <span>+</span>
                                </summary>

                                <p>
                                    The official UPI ID shown on this page is:
                                    <strong>
                                        {" "}9627833744m@pnb
                                    </strong>
                                </p>
                            </details>

                        </div>

                    </div>

                </section>


                {/* ==================================================
                    FINAL CTA
                ================================================== */}

                <section className="donate-final-cta">

                    <div className="donate-container donate-final-cta__inner">

                        <div className="donate-final-cta__icon">
                            <FiHeart />
                        </div>

                        <div>

                            <span>
                                BE PART OF THE CHANGE
                            </span>

                            <h2>
                                Together, we can support
                                meaningful community work.
                            </h2>

                            <p>
                                Your contribution can help support
                                meaningful efforts across education,
                                community welfare, and environmental work.
                            </p>

                        </div>

                        <a
                            href="#donation-amount"
                            className="donate-btn donate-btn--white"
                        >
                            Donate Now
                            <FiArrowRight />
                        </a>

                    </div>

                </section>

            </main>


            {/* ==================================================
                ORIGINAL WEBSITE FOOTER
            ================================================== */}

            <Footer />

        </div>
    );
}