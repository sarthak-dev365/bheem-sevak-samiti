import Link from "next/link";
import Image from "next/image";
import "@/styles/gallery.css";

const galleryItems = [
    {
        id: 1,
        src: "/images/gallery/gallery-01.png",
        alt: "Educational activities by Bheem Sevak Samiti",
    },
    {
        id: 2,
        src: "/images/gallery/gallery-02.png",
        alt: "Free education programme by Bheem Sevak Samiti",
    },
    {
        id: 3,
        src: "/images/gallery/gallery-03.png",
        alt: "Community educational programme by Bheem Sevak Samiti",
    },
];

export default function HomeGallery() {
    return (
        <section
            className="home-gallery"
            aria-labelledby="home-gallery-title"
        >
            <div className="home-gallery__background-shape home-gallery__background-shape--one" />
            <div className="home-gallery__background-shape home-gallery__background-shape--two" />

            <div className="home-gallery__container">

                {/* HEADER */}

                <div className="home-gallery__header">

                    <div className="home-gallery__eyebrow-wrap">
                        <span className="home-gallery__line" />

                        <span className="home-gallery__eyebrow">
                            OUR GALLERY
                        </span>

                        <span className="home-gallery__line" />
                    </div>

                    <h2 id="home-gallery-title">
                        Our Work Through Moments.
                    </h2>

                </div>


                {/* FEATURED PHOTOS */}

                <div className="home-gallery__grid">

                    {galleryItems.map((item) => (
                        <Link
                            href="/gallery"
                            className="home-gallery__card"
                            key={item.id}
                            aria-label={`View gallery photo ${item.id}`}
                        >
                            <div className="home-gallery__image">

                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                                    priority={item.id === 1}
                                />

                            </div>

                            <div className="home-gallery__card-overlay">

                                <span className="home-gallery__view-icon">
                                    ↗
                                </span>

                                <span className="home-gallery__view-text">
                                    Explore
                                </span>

                            </div>

                        </Link>
                    ))}

                </div>


                {/* BUTTON */}

                <div className="home-gallery__action">

                    <Link
                        href="/gallery"
                        className="home-gallery__button"
                    >
                        <span>
                            View Full Gallery
                        </span>

                        <span
                            className="home-gallery__button-arrow"
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