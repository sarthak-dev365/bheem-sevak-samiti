import Link from "next/link";
import Image from "next/image";
import "../../../styles/gallery.css";

const galleryItems = [
    {
        id: 1,
        src: "/images/gallery/gallery-01.png",
        alt: "Bheem Sevak Samiti educational activity",
        size: "large",
    },
    {
        id: 2,
        src: "/images/gallery/gallery-02.png",
        alt: "Students at free education programme",
        size: "small",
    },
    {
        id: 3,
        src: "/images/gallery/gallery-03.png",
        alt: "Educational programme activity",
        size: "small",
    },
    {
        id: 4,
        src: "/images/gallery/gallery-04.png",
        alt: "Social awareness programme",
        size: "medium",
    },
    {
        id: 5,
        src: "/images/gallery/gallery-05.jpg",
        alt: "Tree plantation programme",
        size: "medium",
    },
    {
        id: 6,
        src: "/images/gallery/gallery-06.jpg",
        alt: "Community service activity",
        size: "wide",
    },
];

export default function HomeGallery() {
    return (
        <section
            className="home-gallery"
            aria-labelledby="home-gallery-title"
        >

            <div className="home-gallery__container">

                {/* ==================================================
                   HEADER
                ================================================== */}

                <div className="home-gallery__header">

                    <div className="home-gallery__heading">

                        <span className="home-gallery__eyebrow">
                            OUR GALLERY
                        </span>

                        <h2 id="home-gallery-title">
                            Our Work,
                            <span>Through Moments.</span>
                        </h2>

                    </div>


                    <div className="home-gallery__intro">

                        <p>
                            शिक्षा, सामाजिक जागरूकता, पर्यावरण संरक्षण
                            और सामुदायिक सेवा से जुड़ी हमारी गतिविधियों
                            की कुछ यादगार झलकियाँ।
                        </p>

                    </div>

                </div>


                {/* ==================================================
                   PROFESSIONAL GALLERY GRID
                ================================================== */}

                <div className="home-gallery__grid">

                    {galleryItems.map((item) => (

                        <Link
                            href="/gallery"
                            className={`home-gallery__item home-gallery__item--${item.size}`}
                            key={item.id}
                            aria-label={`Open gallery photo ${item.id}`}
                        >

                            <Image
                                src={item.src}
                                alt={item.alt}
                                loading="lazy"
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />


                            <span className="home-gallery__overlay">

                                <span className="home-gallery__view">
                                    View Gallery
                                    <span aria-hidden="true">
                                        →
                                    </span>
                                </span>

                            </span>

                        </Link>

                    ))}

                </div>


                {/* ==================================================
                   BOTTOM ACTION
                ================================================== */}

                <div className="home-gallery__action">

                    <Link
                        href="/gallery"
                        className="home-gallery__button"
                    >

                        <span>
                            View Full Gallery
                        </span>

                        <span aria-hidden="true">
                            →
                        </span>

                    </Link>

                </div>

            </div>

        </section>
    );
}