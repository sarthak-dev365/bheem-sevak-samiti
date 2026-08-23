"use client";

import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";


/* ==========================================================
   SUGGESTED DONATION AMOUNTS
========================================================== */

const amounts = [
    {
        amount: 500,
        title: "Education Support",
        description:
            "शैक्षिक गतिविधियों में सहयोग",
    },
    {
        amount: 1000,
        title: "Community Support",
        description:
            "सामुदायिक सेवा में सहयोग",
    },
    {
        amount: 1500,
        title: "Campaign Support",
        description:
            "जागरूकता अभियानों में सहयोग",
    },
    // {
        
    //     title: "Mission Support",
    //     description:
    //         "संस्था के व्यापक कार्यों में सहयोग",
    // },
];


/* ==========================================================
   DONATION AMOUNT SELECTOR
========================================================== */

export default function DonationAmountSelector() {

    const [
        selectedAmount,
        setSelectedAmount,
    ] = useState(null);


    const [
        customAmount,
        setCustomAmount,
    ] = useState("");


    /*
        Custom amount को priority दी जाएगी।
    */

    const activeAmount =
        customAmount !== ""
            ? customAmount
            : selectedAmount;


    /* ======================================================
       PRESET AMOUNT SELECT
    ====================================================== */

    const handleAmountSelect = (amount) => {

        setSelectedAmount(amount);

        setCustomAmount("");

    };


    /* ======================================================
       CUSTOM AMOUNT CHANGE
    ====================================================== */

    const handleCustomAmount = (event) => {

        const value =
            event.target.value;


        /*
            Empty input
        */

        if (value === "") {

            setCustomAmount("");

            setSelectedAmount(null);

            return;
        }


        /*
            Positive numbers only
        */

        const numericValue =
            Number(value);


        if (
            !Number.isFinite(
                numericValue
            ) ||
            numericValue <= 0
        ) {

            return;
        }


        /*
            Custom amount selected
        */

        setCustomAmount(value);

        setSelectedAmount(null);

    };


    /* ======================================================
       CONTINUE TO PAYMENT
    ====================================================== */

    const handleContinue = () => {

        /*
            No amount selected
        */

        if (
            !activeAmount ||
            Number(activeAmount) <= 0
        ) {

            return;
        }


        /*
            Convert to valid integer amount
        */

        const amount =
            Math.round(
                Number(activeAmount)
            );


        /*
            Safety validation
        */

        if (
            !Number.isFinite(amount) ||
            amount <= 0
        ) {

            return;
        }


        /*
            Save current donation amount
        */

        sessionStorage.setItem(
            "donationAmount",
            String(amount)
        );


        /*
            Notify SelectedDonationAmount
        */

        window.dispatchEvent(
            new Event(
                "donationAmountChanged"
            )
        );


        /*
            Scroll to payment section
        */

        const paymentSection =
            document.getElementById(
                "payment-options"
            );


        if (paymentSection) {

            paymentSection.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

        }

    };


    return (

        <>

            {/* ==================================================
                SUGGESTED AMOUNTS
            ================================================== */}

            <div className="donate-amount-grid">

                {amounts.map((item) => {

                    const isSelected =
                        Number(
                            selectedAmount
                        ) === item.amount;


                    return (

                        <button
                            type="button"

                            key={item.amount}

                            className={`donate-amount-card ${
                                isSelected
                                    ? "is-selected"
                                    : ""
                            }`}

                            onClick={() =>
                                handleAmountSelect(
                                    item.amount
                                )
                            }

                            aria-pressed={
                                isSelected
                            }
                        >

                            <span className="donate-amount-card__amount">

                                ₹
                                {item.amount.toLocaleString(
                                    "en-IN"
                                )}

                            </span>


                            <strong>
                                {item.title}
                            </strong>


                            <small>
                                {item.description}
                            </small>


                            <span className="donate-amount-card__arrow">

                                <FiArrowRight />

                            </span>

                        </button>

                    );

                })}

            </div>



            {/* ==================================================
                CUSTOM AMOUNT
            ================================================== */}

            <div className="donate-custom-box">

                <div>

                    <span>
                        CUSTOM CONTRIBUTION
                    </span>


                    <h3>
                        अपनी राशि दर्ज करें
                    </h3>

                </div>


                <div className="donate-custom-input">

                    <span>
                        ₹
                    </span>


                    <input
                        type="number"

                        min="1"

                        step="1"

                        inputMode="numeric"

                        value={
                            customAmount
                        }

                        onChange={
                            handleCustomAmount
                        }

                        placeholder="Enter amount"

                        aria-label="Custom donation amount"
                    />

                </div>

            </div>



            {/* ==================================================
                SELECTED DONATION SUMMARY
            ================================================== */}

            <div className="donate-selected-amount">

                <div>

                    <span>
                        SELECTED DONATION
                    </span>


                    <strong>

                        {activeAmount
                            ? `₹${Number(
                                activeAmount
                            ).toLocaleString(
                                "en-IN"
                            )}`
                            : "Amount not selected"}

                    </strong>

                </div>


                <button
                    type="button"

                    className="donate-selected-amount__button"

                    onClick={
                        handleContinue
                    }

                    disabled={
                        !activeAmount ||
                        Number(activeAmount) <= 0
                    }
                >

                    Continue to Payment

                    <FiArrowRight />

                </button>

            </div>

        </>

    );

}