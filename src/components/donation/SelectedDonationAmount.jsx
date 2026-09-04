"use client";

import { useEffect, useState } from "react";
import { FiHeart } from "react-icons/fi";

/* ==========================================================
   ORGANIZATION
========================================================== */

const ORGANIZATION_NAME = "Bheem Sevak Samiti";

/* ==========================================================
   GET VALID DONATION AMOUNT
========================================================== */

function getValidDonationAmount() {
    try {
        const savedAmount =
            sessionStorage.getItem("donationAmount");

        if (!savedAmount) {
            return null;
        }

        const numericAmount = Number(savedAmount);

        if (
            !Number.isFinite(numericAmount) ||
            numericAmount <= 0
        ) {
            return null;
        }

        const amount = Math.round(numericAmount);

        return amount > 0 ? amount : null;
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
    const [amount, setAmount] = useState(null);

    /* ======================================================
       LOAD DONATION AMOUNT
    ====================================================== */

    useEffect(() => {
        const updateAmount = () => {
            setAmount(getValidDonationAmount());
        };

        /*
            Load current value
        */

        updateAmount();

        /*
            Listen for changes from
            DonationAmountSelector
        */

        window.addEventListener(
            "donationAmountChanged",
            updateAmount
        );

        /*
            Cleanup
        */

        return () => {
            window.removeEventListener(
                "donationAmountChanged",
                updateAmount
            );
        };
    }, []);

    /* ======================================================
       PAYMENT SUMMARY
    ====================================================== */

    const formattedAmount = amount
        ? `₹${amount.toLocaleString("en-IN")}`
        : null;

    return (
        <div
            className={`donate-payment-selected ${
                amount
                    ? "donate-payment-selected--amount"
                    : "donate-payment-selected--organization"
            }`}
        >
            <div className="donate-payment-selected__icon">
                <FiHeart aria-hidden="true" />
            </div>

            <div className="donate-payment-selected__content">
                <span>
                    {amount
                        ? "YOUR SELECTED DONATION"
                        : "OFFICIAL DONATION"}
                </span>

                <strong>
                    {amount
                        ? formattedAmount
                        : ORGANIZATION_NAME}
                </strong>

                <small>
                    {amount
                        ? "This amount will be used as your selected contribution."
                        : "Thank you for supporting our community initiatives."}
                </small>
            </div>
        </div>
    );
}