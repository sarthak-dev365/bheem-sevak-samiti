"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheck, FiCopy } from "react-icons/fi";

/* ==========================================================
   OFFICIAL UPI ID
========================================================== */

const UPI_ID = "9627833744m@pnb";

/* ==========================================================
   COPY UPI BUTTON
========================================================== */

export default function CopyUpiButton() {
    const [status, setStatus] = useState("idle");

    const timeoutRef = useRef(null);

    /* ======================================================
       CLEANUP
    ====================================================== */

    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    /* ======================================================
       COPY UPI ID
    ====================================================== */

    const handleCopy = async () => {
        try {
            setStatus("copying");

            if (!navigator?.clipboard) {
                throw new Error("Clipboard API unavailable");
            }

            await navigator.clipboard.writeText(UPI_ID);

            setStatus("copied");

            timeoutRef.current = setTimeout(() => {
                setStatus("idle");
            }, 1800);
        } catch (error) {
            console.error("Unable to copy UPI ID:", error);

            setStatus("error");

            timeoutRef.current = setTimeout(() => {
                setStatus("idle");
            }, 1800);
        }
    };

    /* ======================================================
       BUTTON STATE
    ====================================================== */

    const isCopied = status === "copied";
    const isError = status === "error";
    const isCopying = status === "copying";

    return (
        <button
            type="button"
            className={`donate-upi-copy ${
                isCopied ? "is-copied" : ""
            } ${
                isError ? "is-error" : ""
            } ${
                isCopying ? "is-copying" : ""
            }`}
            onClick={handleCopy}
            disabled={isCopying}
            aria-label={
                isCopied
                    ? "UPI ID copied"
                    : isError
                    ? "Unable to copy UPI ID"
                    : "Copy official UPI ID"
            }
            title={
                isCopied
                    ? "UPI ID copied"
                    : isError
                    ? "Unable to copy UPI ID"
                    : "Copy official UPI ID"
            }
        >
            {isCopied ? (
                <FiCheck aria-hidden="true" />
            ) : (
                <FiCopy aria-hidden="true" />
            )}
        </button>
    );
}