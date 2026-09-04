"use client";

import { useState } from "react";
import { FiArrowRight, FiCheck } from "react-icons/fi";

/* ==========================================================
   SUGGESTED DONATION AMOUNTS
========================================================== */

const amounts = [
    {
        amount: 500,
        title: "Education Support",
        description: "Support education and learning initiatives.",
    },
    {
        amount: 1000,
        title: "Community Support",
        description: "Support community welfare activities.",
    },
    {
        amount: 1500,
        title: "Campaign Support",
        description: "Support awareness and social campaigns.",
    },
];

/* ==========================================================
   DONATION AMOUNT SELECTOR
========================================================== */

export default function DonationAmountSelector() {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [customAmount, setCustomAmount] = useState("");

    /* ======================================================
       ACTIVE AMOUNT
    ====================================================== */

    const activeAmount =
        customAmount !== ""
            ? Number(customAmount)
            : selectedAmount;

    /* ======================================================
       PRESET AMOUNT SELECT
    ====================================================== */

    const handleAmountSelect = (amount) => {
        setSelectedAmount(amount);
        setCustomAmount("");
    };

    /* ======================================================
       CUSTOM AMOUNT
    ====================================================== */

    const handleCustomAmount = (event) => {
        const value = event.target.value;

        if (value === "") {
            setCustomAmount("");
            setSelectedAmount(null);
            return;
        }

        /*
            Digits only
        */

        if (!/^\d+$/.test(value)) {
            return;
        }

        const numericValue = Number(value);

        if (!Number.isSafeInteger(numericValue) || numericValue <= 0) {
            return;
        }

        setCustomAmount(value);
        setSelectedAmount(null);
    };

    /* ======================================================
       CONTINUE TO PAYMENT
    ====================================================== */

    const handleContinue = () => {
        const amount = Math.round(Number(activeAmount));

        if (!Number.isSafeInteger(amount) || amount <= 0) {
            return;
        }

        /*
            Save selected donation amount
        */

        sessionStorage.setItem(
            "donationAmount",
            String(amount)
        );

        /*
            Notify payment summary component
        */

        window.dispatchEvent(
            new Event("donationAmountChanged")
        );

        /*
            Scroll to payment section
        */

        const paymentSection =
            document.getElementById("payment-options");

        if (paymentSection) {
            paymentSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <div className="donation-selector">

            {/* ==================================================
                SUGGESTED AMOUNTS
            ================================================== */}

            <div className="donate-amount-grid">

                {amounts.map((item) => {
                    const isSelected =
                        selectedAmount === item.amount;

                    return (
                        <button
                            key={item.amount}
                            type="button"
                            className={`donate-amount-card ${
                                isSelected
                                    ? "is-selected"
                                    : ""
                            }`}
                            onClick={() =>
                                handleAmountSelect(item.amount)
                            }
                            aria-pressed={isSelected}
                        >

                            <div className="donate-amount-card__top">

                                <span className="donate-amount-card__radio">
                                    {isSelected && (
                                        <FiCheck />
                                    )}
                                </span>

                                <span className="donate-amount-card__arrow">
                                    <FiArrowRight />
                                </span>

                            </div>

                            <span className="donate-amount-card__amount">
                                ₹{item.amount.toLocaleString("en-IN")}
                            </span>

                            <strong>
                                {item.title}
                            </strong>

                            <small>
                                {item.description}
                            </small>

                        </button>
                    );
                })}

            </div>

            {/* ==================================================
                CUSTOM CONTRIBUTION
            ================================================== */}

            <div className="donate-custom-box">

                <div className="donate-custom-content">

                    <span className="donate-custom-label">
                        CUSTOM CONTRIBUTION
                    </span>

                    <h3>
                        Enter your own amount
                    </h3>

                    <p>
                        Choose any contribution amount that
                        works for you.
                    </p>

                </div>

                <div className="donate-custom-input">

                    <span aria-hidden="true">
                        ₹
                    </span>

                    <input
                        type="number"
                        min="1"
                        step="1"
                        inputMode="numeric"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder="Enter amount"
                        aria-label="Custom donation amount"
                    />

                </div>

            </div>

            {/* ==================================================
                SELECTED DONATION SUMMARY
            ================================================== */}

            <div className="donate-selected-amount">

                <div className="donate-selected-amount__info">

                    <span>
                        YOUR CONTRIBUTION
                    </span>

                    <strong>
                        {activeAmount
                            ? `₹${Number(activeAmount).toLocaleString(
                                "en-IN"
                            )}`
                            : "Select an amount"}
                    </strong>

                </div>

                <button
                    type="button"
                    className="donate-selected-amount__button"
                    onClick={handleContinue}
                    disabled={
                        !activeAmount ||
                        Number(activeAmount) <= 0
                    }
                >
                    Continue to Payment
                    <FiArrowRight />
                </button>

            </div>

        </div>
    );
}