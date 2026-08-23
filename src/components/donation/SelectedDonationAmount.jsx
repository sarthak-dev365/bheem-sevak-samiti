"use client";

import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";


/* ==========================================================
   ORGANIZATION
========================================================== */

const ORGANIZATION_NAME =
    "Bheem Sevak Samiti";


/* ==========================================================
   VALIDATE DONATION AMOUNT
========================================================== */

function getValidDonationAmount() {

    try {

        const savedAmount =
            sessionStorage.getItem(
                "donationAmount"
            );


        if (!savedAmount) {
            return null;
        }


        const numericAmount =
            Number(savedAmount);


        if (
            !Number.isFinite(
                numericAmount
            ) ||
            numericAmount <= 0
        ) {

            return null;
        }


        return Math.round(
            numericAmount
        );

    } catch (error) {

        console.error(
            "Unable to read donation amount:",
            error
        );

        return null;
    }
}


/* ==========================================================
   SELECTED DONATION AMOUNT
========================================================== */

export default function SelectedDonationAmount() {

    const [amount, setAmount] =
        useState(null);


    /* ======================================================
       LOAD CURRENT AMOUNT
    ====================================================== */

    useEffect(() => {

        const loadAmount = () => {

            const validAmount =
                getValidDonationAmount();


            setAmount(
                validAmount
            );

        };


        /*
            Initial state
        */

        loadAmount();


        /*
            Listen for amount selection
        */

        window.addEventListener(
            "donationAmountChanged",
            loadAmount
        );


        /*
            Cleanup
        */

        return () => {

            window.removeEventListener(
                "donationAmountChanged",
                loadAmount
            );

        };

    }, []);


    /* ======================================================
       NO AMOUNT SELECTED
    ====================================================== */

    if (!amount) {

        return (

            <div className="donate-payment-selected donate-payment-selected--organization">

                <div className="donate-payment-selected__icon">

                    <FiHeart />

                </div>


                <div>

                    <span>
                        OFFICIAL DONATION
                    </span>


                    <strong>
                        {ORGANIZATION_NAME}
                    </strong>

                </div>

            </div>

        );

    }


    /* ======================================================
       AMOUNT SELECTED
    ====================================================== */

    return (

        <div className="donate-payment-selected donate-payment-selected--amount">

            <div className="donate-payment-selected__icon">

                <FiHeart />

            </div>


            <div>

                <span>
                    YOUR SELECTED DONATION
                </span>


                <strong>
                    ₹
                    {amount.toLocaleString(
                        "en-IN"
                    )}
                </strong>

            </div>

        </div>

    );

}