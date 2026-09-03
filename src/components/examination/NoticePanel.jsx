import Link from "next/link";

import "@/styles/examination/notices.css";


/* =========================================================
   EXAMINATION PORTAL — NOTICE PANEL
========================================================= */

const notices = [
  {
    id: "important-examination-update-2026",
    category: "IMPORTANT NOTICE",
    title:
      "Important information regarding the upcoming examination process",
  },
  {
    id: "application-guidelines-2026",
    category: "APPLICATION UPDATE",
    title:
      "Application guidelines and instructions for eligible candidates",
  },
  {
    id: "official-announcement-2026",
    category: "OFFICIAL ANNOUNCEMENT",
    title:
      "Latest official announcement from the Examination Department",
  },
];


export default function NoticePanel() {
  return (
    <section className="exam-notices">

      <div className="exam-notices__container">


        {/* =============================================
            SECTION HEADING
        ============================================== */}

        <header className="exam-notices__heading">

          <span className="exam-notices__eyebrow">
            Official Updates
          </span>

          <h2>
            Latest Notices
          </h2>

        </header>


        {/* =============================================
            NOTICE LIST
        ============================================== */}

        <div className="exam-notices__list">

          {notices.map((notice, index) => (

            <Link
              key={notice.id}
              href={`/examination/notices/${notice.id}`}
              className="exam-notice"
            >

              {/* NOTICE NUMBER */}

              <span className="exam-notice__number">

                {String(index + 1).padStart(2, "0")}

              </span>


              {/* NOTICE CONTENT */}

              <div className="exam-notice__content">

                <span className="exam-notice__category">
                  {notice.category}
                </span>

                <h3>
                  {notice.title}
                </h3>

              </div>


              {/* NOTICE ACTION */}

              <span className="exam-notice__action">

                <span className="exam-notice__action-text">
                  View Notice
                </span>

                <span
                  className="exam-notice__arrow"
                  aria-hidden="true"
                >
                  →
                </span>

              </span>

            </Link>

          ))}

        </div>


        {/* =============================================
            VIEW ALL NOTICES
        ============================================== */}

        <div className="exam-notices__footer">

          <Link
            href="/examination/notices"
            className="exam-notices__view-all"
          >

            <span>
              View All Notices
            </span>

            <span
              aria-hidden="true"
            >
              →
            </span>

          </Link>

        </div>

      </div>

    </section>
  );
}