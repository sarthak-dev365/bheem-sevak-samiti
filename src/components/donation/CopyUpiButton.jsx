"use client";

import { useState } from "react";
import {
    FiCheck,
    FiCopy,
} from "react-icons/fi";


/* ==========================================================
   OFFICIAL UPI ID
========================================================== */

const UPI_ID =
    "9627833744m@pnb";


/* ==========================================================
   COPY UPI BUTTON
========================================================== */

export default function CopyUpiButton() {

    const [copied, setCopied] =
        useState(false);

    const [copyError, setCopyError] =
        useState(false);


    /* ======================================================
       COPY HANDLER
    ====================================================== */

    const handleCopy = async () => {

        try {

            setCopyError(false);


            /*
                Clipboard API
            */

            await navigator.clipboard.writeText(
                UPI_ID
            );


            /*
                Success state
            */

            setCopied(true);


            /*
                Reset after 1.8 seconds
            */

            setTimeout(() => {

                setCopied(false);

            }, 1800);


        } catch (error) {

            console.error(
                "Unable to copy UPI ID:",
                error
            );


            /*
                Error state
            */

            setCopyError(true);


            setTimeout(() => {

                setCopyError(false);

            }, 1800);

        }

    };


    return (

        <button
            type="button"

            className={`donate-upi-copy ${
                copied
                    ? "is-copied"
                    : ""
            } ${
                copyError
                    ? "is-error"
                    : ""
            }`}

            aria-label={
                copied
                    ? "UPI ID copied"
                    : "Copy UPI ID"
            }

            title={
                copied
                    ? "UPI ID Copied"
                    : copyError
                    ? "Unable to copy UPI ID"
                    : "Copy UPI ID"
            }

            onClick={handleCopy}
        >

            {copied ? (
                <FiCheck />
            ) : (
                <FiCopy />
            )}

        </button>

    );

}