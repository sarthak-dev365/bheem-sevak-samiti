import Image from "next/image";
import "@/styles/examination/logo.css";

/* =========================================================
   EXAMINATION PORTAL — OFFICIAL LOGO
========================================================= */

export default function PortalLogo() {
  return (
    <span
      className="exam-portal-logo"
      aria-hidden="true"
    >
      <Image
        src="/icons/logo.png"
        alt="Bheem Sevak Samiti"
        width={1536}
        height={432}
        priority
        className="exam-portal-logo__image"
        sizes="
          (max-width: 380px) 190px,
          (max-width: 480px) 215px,
          (max-width: 768px) 235px,
          (max-width: 900px) 250px,
          (max-width: 1100px) 265px,
          292px
        "
      />
    </span>
  );
}