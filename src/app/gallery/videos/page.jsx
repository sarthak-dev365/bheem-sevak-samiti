"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

import {
ArrowLeft,
ChevronLeft,
ChevronRight,
Film,
Play,
Search,
Video,
X,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";

import "@/styles/video-gallery.css";

/* ==========================================================
VIDEO DATA
----------

Database / API Ready Structure

Future Admin Panel में इसी structure को API response
से replace किया जा सकता है.

thumbnail field intentionally नहीं रखा गया है.
Actual <video> element ही preview दिखाएगा.
========================================================== */

const videos = [
{
id: 1,
title: "Bheem Samiti 5th Foundation Day",
description:
"भीम समिति के 5वें स्थापना दिवस पर कार्यक्रम करते हुए बच्चों की यादगार झलकियाँ।",
category: "Foundation Day",
videoUrl: "/videos/foundation-day.mp4",
mimeType: "video/mp4",
published: true,
},

{
id: 2,
title: "Founder Teaching Children at Night",
description:
"भीम सेवक समिति के संस्थापक विकास कुमार जी द्वारा रात की ड्यूटी के बाद पाठशाला में बच्चों को पढ़ाते हुए।",
category: "Education",
videoUrl: "/videos/founder-teaching.mp4",
mimeType: "video/mp4",
published: true,
},
];

/* ==========================================================
SEARCHABLE FIELDS
========================================================== */

const SEARCH_FIELDS = ["title", "description", "category"];

/* ==========================================================
VIDEO GALLERY PAGE
========================================================== */

export default function VideoGalleryPage() {
const [selectedVideo, setSelectedVideo] = useState(null);
const [searchTerm, setSearchTerm] = useState("");

/* ========================================================
FILTER VIDEOS
======================================================== */

const filteredVideos = useMemo(() => {
const query = searchTerm.trim().toLowerCase();


if (!query) {
  return videos.filter((video) => video.published !== false);
}

return videos.filter((video) => {
  if (video.published === false) {
    return false;
  }

  return SEARCH_FIELDS.some((field) =>
    String(video[field] ?? "")
      .toLowerCase()
      .includes(query)
  );
});


}, [searchTerm]);

/* ========================================================
CURRENT VIDEO INDEX
======================================================== */

const selectedIndex = useMemo(() => {
if (!selectedVideo) {
return -1;
}


return filteredVideos.findIndex(
  (video) => video.id === selectedVideo.id
);


}, [selectedVideo, filteredVideos]);

const hasPrevious = selectedIndex > 0;

const hasNext =
selectedIndex !== -1 &&
selectedIndex < filteredVideos.length - 1;

/* ========================================================
CLOSE VIDEO
======================================================== */

const closeVideo = useCallback(() => {
setSelectedVideo(null);
}, []);

/* ========================================================
PREVIOUS VIDEO
======================================================== */

const showPrevious = useCallback(() => {
if (selectedIndex <= 0) {
return;
}


setSelectedVideo(filteredVideos[selectedIndex - 1]);


}, [selectedIndex, filteredVideos]);

/* ========================================================
NEXT VIDEO
======================================================== */

const showNext = useCallback(() => {
if (
selectedIndex === -1 ||
selectedIndex >= filteredVideos.length - 1
) {
return;
}


setSelectedVideo(filteredVideos[selectedIndex + 1]);


}, [selectedIndex, filteredVideos]);

/* ========================================================
KEYBOARD + BODY SCROLL LOCK
--------------------------------------------------------
This effect only synchronizes browser/DOM behaviour.
No synchronous state update is performed here.
======================================================== */

useEffect(() => {
if (!selectedVideo) {
return undefined;
}


const handleKeyDown = (event) => {
  switch (event.key) {
    case "Escape":
      closeVideo();
      break;

    case "ArrowLeft":
      showPrevious();
      break;

    case "ArrowRight":
      showNext();
      break;

    default:
      break;
  }
};

const previousOverflow = document.body.style.overflow;

document.body.style.overflow = "hidden";

window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);

  document.body.style.overflow = previousOverflow;
};


}, [
selectedVideo,
closeVideo,
showPrevious,
showNext,
]);

/* ========================================================
SEARCH HANDLER
======================================================== */

const handleSearchChange = (event) => {
setSearchTerm(event.target.value);
};

const clearSearch = () => {
setSearchTerm("");
};

/* ========================================================
RENDER
======================================================== */

return (
<> <Navbar />


  <main className="video-gallery">
    {/* ==================================================
        HERO
    ================================================== */}

    <section className="video-gallery__hero">
      <div className="video-gallery__container">
        <Link
          href="/gallery"
          className="video-gallery__back"
          aria-label="Back to Gallery"
        >
          <ArrowLeft
            size={17}
            aria-hidden="true"
          />

          <span>Back to Gallery</span>
        </Link>

        <div className="video-gallery__hero-content">
          <div className="video-gallery__eyebrow">
            <Video
              size={15}
              aria-hidden="true"
            />

            <span>VIDEO COLLECTION</span>
          </div>

          <h1>
            Our <span>Videos</span>
          </h1>

          <p>
            भीम सेवक समिति की गतिविधियों, कार्यक्रमों,
            शिक्षा और सामाजिक कार्यों की वीडियो झलकियाँ।
          </p>
        </div>
      </div>
    </section>

    {/* ==================================================
        VIDEO COLLECTION
    ================================================== */}

    <section
      className="video-gallery__content"
      aria-labelledby="video-gallery-heading"
    >
      <div className="video-gallery__container">
        {/* ==============================================
            HEADER
        =============================================== */}

        <div className="video-gallery__top">
          <div className="video-gallery__heading">
            <span className="video-gallery__label">
              WATCH OUR JOURNEY
            </span>

            <h2 id="video-gallery-heading">
              हमारी <strong>वीडियो झलकियाँ</strong>
            </h2>

            <p className="video-gallery__intro">
              हमारे कार्यों, कार्यक्रमों और समाज के लिए किए
              जा रहे प्रयासों की कुछ खास झलकियाँ।
            </p>
          </div>

          <div
            className="video-gallery__count"
            aria-live="polite"
          >
            <Film
              size={17}
              aria-hidden="true"
            />

            <span>
              {filteredVideos.length}{" "}
              {filteredVideos.length === 1
                ? "Video"
                : "Videos"}
            </span>
          </div>
        </div>

        {/* ==============================================
            SEARCH
        =============================================== */}

        {videos.length > 0 && (
          <div className="video-gallery__toolbar">
            <div className="video-gallery__search">
              <Search
                size={18}
                aria-hidden="true"
              />

              <label
                htmlFor="video-gallery-search"
                className="video-gallery__sr-only"
              >
                Search videos
              </label>

              <input
                id="video-gallery-search"
                type="search"
                name="video-gallery-search"
                value={searchTerm}
                onChange={handleSearchChange}
                placeholder="Search videos..."
                autoComplete="off"
                spellCheck="false"
              />

              {searchTerm && (
                <button
                  type="button"
                  className="video-gallery__search-clear"
                  onClick={clearSearch}
                  aria-label="Clear video search"
                >
                  <X
                    size={16}
                    aria-hidden="true"
                  />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ==============================================
            VIDEO GRID
        =============================================== */}

        {filteredVideos.length > 0 ? (
          <div className="video-gallery__grid">
            {filteredVideos.map((video) => (
              <article
                className="video-gallery__card"
                key={video.id}
              >
                {/* ======================================
                    ACTUAL VIDEO
                    ------------------------------------------------
                    NO THUMBNAIL
                    NO POSTER
                    NO IMAGE
                    NO COLOR FILTER
                ======================================= */}

                <div className="video-gallery__player">
                  <video
                    className="video-gallery__video"
                    controls
                    playsInline
                    preload="metadata"
                    controlsList="nodownload"
                    aria-label={video.title}
                  >
                    <source
                      src={video.videoUrl}
                      type={video.mimeType || "video/mp4"}
                    />

                    आपका browser इस video को
                    support नहीं करता।
                  </video>

                  {/* OPEN FULL PLAYER */}

                  <button
                    type="button"
                    className="video-gallery__open"
                    onClick={() =>
                      setSelectedVideo(video)
                    }
                    aria-label={`Open ${video.title}`}
                  >
                    <span>
                      <Play
                        size={15}
                        fill="currentColor"
                        aria-hidden="true"
                      />

                      <span>Open Video</span>
                    </span>
                  </button>
                </div>

                {/* ======================================
                    CARD INFORMATION
                ======================================= */}

                <div className="video-gallery__card-content">
                  <div className="video-gallery__meta">
                    <span className="video-gallery__category">
                      {video.category}
                    </span>

                    <span className="video-gallery__status">
                      <span
                        className="video-gallery__status-dot"
                        aria-hidden="true"
                      />

                      Video
                    </span>
                  </div>

                  <h3>{video.title}</h3>

                  <p>{video.description}</p>

                  <button
                    type="button"
                    className="video-gallery__watch"
                    onClick={() =>
                      setSelectedVideo(video)
                    }
                  >
                    <span>Watch Video</span>

                    <Play
                      size={14}
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          /* ==============================================
             EMPTY / NO SEARCH RESULT
          =============================================== */

          <div
            className="video-gallery__empty"
            role="status"
          >
            <div className="video-gallery__empty-icon">
              <Video
                size={30}
                aria-hidden="true"
              />
            </div>

            <h3>
              {searchTerm
                ? "No Videos Found"
                : "Videos Coming Soon"}
            </h3>

            <p>
              {searchTerm
                ? "कृपया कोई दूसरा keyword या category खोजें।"
                : "हमारे नए वीडियो जल्द ही यहाँ दिखाई देंगे।"}
            </p>

            {searchTerm && (
              <button
                type="button"
                className="video-gallery__reset"
                onClick={clearSearch}
              >
                Clear Search
              </button>
            )}
          </div>
        )}
      </div>
    </section>

    {/* ==================================================
        FULL VIDEO MODAL
    ================================================== */}

    {selectedVideo && (
      <div
        className="video-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="video-modal-title"
        onMouseDown={(event) => {
          if (event.target === event.currentTarget) {
            closeVideo();
          }
        }}
      >
        {/* CLOSE */}

        <button
          type="button"
          className="video-modal__close"
          onClick={closeVideo}
          aria-label="Close video player"
        >
          <X
            size={23}
            aria-hidden="true"
          />
        </button>

        {/* PREVIOUS */}

        <button
          type="button"
          className={`video-modal__nav video-modal__nav--previous${
            !hasPrevious ? " is-disabled" : ""
          }`}
          onClick={showPrevious}
          disabled={!hasPrevious}
          aria-label="Previous video"
        >
          <ChevronLeft
            size={28}
            aria-hidden="true"
          />
        </button>

        {/* ==============================================
            MODAL CONTENT
        =============================================== */}

        <div className="video-modal__content">
          <div className="video-modal__player">
            <video
              className="video-modal__video"
              controls
              autoPlay
              playsInline
              preload="metadata"
              controlsList="nodownload"
              aria-label={selectedVideo.title}
            >
              <source
                src={selectedVideo.videoUrl}
                type={
                  selectedVideo.mimeType ||
                  "video/mp4"
                }
              />

              आपका browser इस video को
              support नहीं करता।
            </video>
          </div>

          <div className="video-modal__details">
            <div className="video-modal__details-top">
              <span className="video-modal__tag">
                {selectedVideo.category}
              </span>

              <span className="video-modal__counter">
                {selectedIndex + 1} /{" "}
                {filteredVideos.length}
              </span>
            </div>

            <h2 id="video-modal-title">
              {selectedVideo.title}
            </h2>

            <p>{selectedVideo.description}</p>
          </div>
        </div>

        {/* NEXT */}

        <button
          type="button"
          className={`video-modal__nav video-modal__nav--next${
            !hasNext ? " is-disabled" : ""
          }`}
          onClick={showNext}
          disabled={!hasNext}
          aria-label="Next video"
        >
          <ChevronRight
            size={28}
            aria-hidden="true"
          />
        </button>
      </div>
    )}
  </main>
</>


);
}
