import Link from "next/link";
import Navbar from "@/components/layout/Navbar";

import {
  Camera,
  Video,
  ArrowRight,
  Images,
  Play,
} from "lucide-react";

import "@/styles/gallery-page.css";


export default function GalleryPage() {
  return (
    <>
      <Navbar />

      <main className="media-gallery-page">

        {/* =========================================
            HERO
        ========================================= */}

        <section className="media-gallery-hero">

          <div className="media-gallery-container">

            <div className="media-gallery-hero-content">

              <span className="media-gallery-eyebrow">
                BHEEM SEVAK SAMITI
              </span>

              <h1>
                Our <span>Gallery</span>
              </h1>

              <p>
                हमारे सामाजिक कार्यों, कार्यक्रमों और गतिविधियों
                की यादगार झलकियाँ।
              </p>

            </div>

          </div>

        </section>


        {/* =========================================
            GALLERY OPTIONS
        ========================================= */}

        <section className="media-gallery-options">

          <div className="media-gallery-container">

            <div className="media-gallery-heading">

              <span>
                EXPLORE OUR MEDIA
              </span>

              <h2>
                Moments That
                <strong> Tell Our Story.</strong>
              </h2>

            </div>


            <div className="media-gallery-grid">


              {/* =================================
                  PHOTO GALLERY
              ================================= */}

              <Link
                href="/gallery/photos"
                className="media-card media-card-photo"
              >

                <div className="media-card-top">

                  <div className="media-card-icon">

                    <Camera
                      size={30}
                      strokeWidth={1.8}
                    />

                  </div>

                  <div className="media-card-number">
                    01
                  </div>

                </div>


                <div className="media-card-content">

                  <span className="media-card-label">
                    PHOTO COLLECTION
                  </span>

                  <h2>
                    Photo Gallery
                  </h2>

                  <p>
                    संस्था के कार्यक्रमों, गतिविधियों और सामाजिक
                    कार्यों की तस्वीरें देखें।
                  </p>

                </div>


                <div className="media-card-footer">

                  <span>
                    Explore Photos
                  </span>

                  <div className="media-card-arrow">

                    <ArrowRight
                      size={20}
                      strokeWidth={2}
                    />

                  </div>

                </div>


                <div className="media-card-decoration">

                  <Images
                    size={150}
                    strokeWidth={1}
                  />

                </div>

              </Link>



              {/* =================================
                  VIDEO GALLERY
              ================================= */}

              <Link
                href="/gallery/videos"
                className="media-card media-card-video"
              >

                <div className="media-card-top">

                  <div className="media-card-icon">

                    <Video
                      size={30}
                      strokeWidth={1.8}
                    />

                  </div>

                  <div className="media-card-number">
                    02
                  </div>

                </div>


                <div className="media-card-content">

                  <span className="media-card-label">
                    VIDEO COLLECTION
                  </span>

                  <h2>
                    Video Gallery
                  </h2>

                  <p>
                    संस्था की गतिविधियों, कार्यक्रमों और विशेष
                    पलों के वीडियो देखें।
                  </p>

                </div>


                <div className="media-card-footer">

                  <span>
                    Explore Videos
                  </span>

                  <div className="media-card-arrow">

                    <ArrowRight
                      size={20}
                      strokeWidth={2}
                    />

                  </div>

                </div>


                <div className="media-card-decoration">

                  <Play
                    size={150}
                    strokeWidth={1}
                  />

                </div>

              </Link>

            </div>

          </div>

        </section>


        {/* =========================================
            BOTTOM INFO
        ========================================= */}

        <section className="media-gallery-bottom">

          <div className="media-gallery-container">

            <div className="media-gallery-bottom-content">

              <div>

                <span className="media-gallery-bottom-label">
                  OUR JOURNEY
                </span>

                <h2>
                  हर गतिविधि,
                  <span> एक यादगार कहानी।</span>
                </h2>

              </div>


              <p>
                यहाँ संस्था द्वारा आयोजित कार्यक्रमों और गतिविधियों
                की तस्वीरें एवं वीडियो समय-समय पर जोड़े जाते रहेंगे।
              </p>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}