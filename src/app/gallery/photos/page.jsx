"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Images,
  Maximize2,
  Search,
  X,
} from "lucide-react";

import Navbar from "@/components/layout/Navbar";
import "@/styles/gallery-photos.css";

/* ==========================================================
   PHOTO DATA
   ----------------------------------------------------------
   Add new gallery photos to this array.
========================================================== */

const photoItems = [
  {
    id: 1,
    src: "/images/gallery/gallery-01.png",
    alt: "Bheem Sevak Samiti educational activity",
    category: "Education",
    title: "Educational Activities",
  },
  {
    id: 2,
    src: "/images/gallery/gallery-02.png",
    alt: "Students participating in a programme",
    category: "Pathshala",
    title: "Learning Together",
  },
  {
    id: 3,
    src: "/images/gallery/gallery-03.png",
    alt: "Community education programme",
    category: "Education",
    title: "Community Learning",
  },
  {
    id: 4,
    src: "/images/gallery/gallery-04.png",
    alt: "Social awareness activity",
    category: "Awareness",
    title: "Social Awareness",
  },
  {
    id: 5,
    src: "/images/gallery/gallery-05.jpg",
    alt: "Bheem Sevak Samiti environmental activity",
    category: "Environment",
    title: "Working For Nature",
  },
];

/* ==========================================================
   SEARCH CONFIGURATION
========================================================== */

const SEARCH_FIELDS = ["title", "category"];

/* ==========================================================
   PHOTO GALLERY PAGE
========================================================== */

export default function PhotoGalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  /* ========================================================
     FILTER PHOTOS
  ======================================================== */

  const filteredPhotos = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();

    if (!query) {
      return photoItems;
    }

    return photoItems.filter((photo) =>
      SEARCH_FIELDS.some((field) =>
        photo[field].toLowerCase().includes(query)
      )
    );
  }, [searchTerm]);

  /* ========================================================
     ACTIVE PHOTO
     --------------------------------------------------------
     If the current search removes the active photo, the
     lightbox simply won't render.
  ======================================================== */

  const visibleActivePhoto = useMemo(() => {
    if (!activePhoto) {
      return null;
    }

    return (
      filteredPhotos.find(
        (photo) => photo.id === activePhoto.id
      ) || null
    );
  }, [activePhoto, filteredPhotos]);

  /* ========================================================
     ACTIVE PHOTO INDEX
  ======================================================== */

  const activeIndex = useMemo(() => {
    if (!visibleActivePhoto) {
      return -1;
    }

    return filteredPhotos.findIndex(
      (photo) => photo.id === visibleActivePhoto.id
    );
  }, [visibleActivePhoto, filteredPhotos]);

  const hasPrevious = activeIndex > 0;

  const hasNext =
    activeIndex !== -1 &&
    activeIndex < filteredPhotos.length - 1;

  /* ========================================================
     LIGHTBOX CONTROLS
  ======================================================== */

  const closeLightbox = useCallback(() => {
    setActivePhoto(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (activeIndex <= 0) {
      return;
    }

    setActivePhoto(filteredPhotos[activeIndex - 1]);
  }, [activeIndex, filteredPhotos]);

  const showNext = useCallback(() => {
    if (
      activeIndex === -1 ||
      activeIndex >= filteredPhotos.length - 1
    ) {
      return;
    }

    setActivePhoto(filteredPhotos[activeIndex + 1]);
  }, [activeIndex, filteredPhotos]);

  /* ========================================================
     KEYBOARD CONTROLS + BODY SCROLL LOCK
  ======================================================== */

  useEffect(() => {
    if (!visibleActivePhoto) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      switch (event.key) {
        case "Escape":
          closeLightbox();
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

    document.addEventListener("keydown", handleKeyDown);

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = previousOverflow;
    };
  }, [
    visibleActivePhoto,
    closeLightbox,
    showPrevious,
    showNext,
  ]);

  /* ========================================================
     SEARCH HANDLERS
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
    <>
      <Navbar />

      <main className="photo-gallery-page">
        {/* ==================================================
            HERO
        ================================================== */}

        <section className="photo-gallery-hero">
          <div className="photo-gallery-container">
            <Link
              href="/gallery"
              className="photo-gallery-back"
              aria-label="Back to Gallery"
            >
              <ArrowLeft
                size={18}
                aria-hidden="true"
              />

              <span>Back to Gallery</span>
            </Link>

            <div className="photo-gallery-hero-content">
              <div
                className="photo-gallery-icon"
                aria-hidden="true"
              >
                <Images
                  size={34}
                  strokeWidth={1.8}
                />
              </div>

              <span className="photo-gallery-label">
                BHEEM SEVAK SAMITI
              </span>

              <h1>
                Photo <span>Gallery</span>
              </h1>

              <p>
                Explore memorable moments, programmes and
                activities of Bheem Sevak Samiti.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================
            COLLECTION
        ================================================== */}

        <section
          className="photo-gallery-collection"
          aria-labelledby="photo-gallery-heading"
        >
          <div className="photo-gallery-container">
            {/* ==================================================
                TOOLBAR
            ================================================== */}

            <div className="photo-gallery-toolbar">
              <div className="photo-gallery-heading">
                <span className="photo-gallery-small-label">
                  OUR COLLECTION
                </span>

                <h2 id="photo-gallery-heading">
                  Moments That Matter
                </h2>
              </div>

              {/* ==================================================
                  SEARCH
              ================================================== */}

              <div className="photo-gallery-search">
                <Search
                  size={18}
                  aria-hidden="true"
                />

                <label
                  htmlFor="photo-gallery-search"
                  className="sr-only"
                >
                  Search photos
                </label>

                <input
                  id="photo-gallery-search"
                  type="search"
                  name="photo-gallery-search"
                  placeholder="Search photos..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  autoComplete="off"
                  spellCheck="false"
                />

                {searchTerm && (
                  <button
                    type="button"
                    className="photo-gallery-search-clear"
                    onClick={clearSearch}
                    aria-label="Clear photo search"
                  >
                    <X
                      size={16}
                      aria-hidden="true"
                    />
                  </button>
                )}
              </div>
            </div>

            {/* ==================================================
                PHOTO COUNT
            ================================================== */}

            <div
              className="photo-gallery-count"
              aria-live="polite"
              aria-atomic="true"
            >
              <span>{filteredPhotos.length}</span>

              {filteredPhotos.length === 1
                ? "Photo Available"
                : "Photos Available"}
            </div>

            {/* ==================================================
                PHOTO GRID
            ================================================== */}

            {filteredPhotos.length > 0 ? (
              <div className="photo-gallery-grid">
                {filteredPhotos.map((photo) => (
                  <article
                    className="photo-gallery-card"
                    key={photo.id}
                  >
                    <button
                      type="button"
                      className="photo-gallery-image-button"
                      onClick={() =>
                        setActivePhoto(photo)
                      }
                      aria-label={`Open ${photo.title}`}
                    >
                      <div className="photo-gallery-image">
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw"
                        />

                        <div
                          className="photo-gallery-overlay"
                          aria-hidden="true"
                        >
                          <span className="photo-gallery-expand">
                            <Maximize2
                              size={19}
                              strokeWidth={2}
                            />
                          </span>
                        </div>
                      </div>
                    </button>

                    <div className="photo-gallery-card-content">
                      <span>{photo.category}</span>

                      <h3>{photo.title}</h3>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* ==================================================
                 EMPTY STATE
              ================================================== */

              <div
                className="photo-gallery-empty"
                role="status"
              >
                <Images
                  size={42}
                  aria-hidden="true"
                />

                <h3>No photos found</h3>

                <p>
                  Try searching with another keyword.
                </p>

                {searchTerm && (
                  <button
                    type="button"
                    className="photo-gallery-reset"
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
            LIGHTBOX
        ================================================== */}

        {visibleActivePhoto && activeIndex !== -1 && (
          <div
            className="photo-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby="photo-lightbox-title"
            aria-describedby="photo-lightbox-position"
            onMouseDown={(event) => {
              if (
                event.target === event.currentTarget
              ) {
                closeLightbox();
              }
            }}
          >
            {/* ==================================================
                CLOSE BUTTON
            ================================================== */}

            <button
              type="button"
              className="photo-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close photo preview"
            >
              <X
                size={24}
                aria-hidden="true"
              />
            </button>

            {/* ==================================================
                PREVIOUS BUTTON
            ================================================== */}

            <button
              type="button"
              className={`photo-lightbox-nav previous${
                !hasPrevious ? " disabled" : ""
              }`}
              onClick={showPrevious}
              disabled={!hasPrevious}
              aria-label="Previous photo"
            >
              <ChevronLeft
                size={28}
                aria-hidden="true"
              />
            </button>

            {/* ==================================================
                LIGHTBOX CONTENT
            ================================================== */}

            <div className="photo-lightbox-content">
              <div className="photo-lightbox-image">
                <Image
                  src={visibleActivePhoto.src}
                  alt={visibleActivePhoto.alt}
                  fill
                  sizes="100vw"
                  priority
                />
              </div>

              <div className="photo-lightbox-info">
                <span>
                  {visibleActivePhoto.category}
                </span>

                <h2 id="photo-lightbox-title">
                  {visibleActivePhoto.title}
                </h2>

                <p id="photo-lightbox-position">
                  {activeIndex + 1} of{" "}
                  {filteredPhotos.length}
                </p>
              </div>
            </div>

            {/* ==================================================
                NEXT BUTTON
            ================================================== */}

            <button
              type="button"
              className={`photo-lightbox-nav next${
                !hasNext ? " disabled" : ""
              }`}
              onClick={showNext}
              disabled={!hasNext}
              aria-label="Next photo"
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