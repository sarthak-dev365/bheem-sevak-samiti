"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
    Menu,
    X,
    Phone,
    Mail,
    MapPin,
    Users,
    Heart,
    ShieldCheck,
    ChevronDown,
    Images,
    Video,
    ArrowRight,
    Home,
    Info,
    BriefcaseBusiness,
    GraduationCap,
    ClipboardCheck,
    Route,
    ContactRound,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaYoutube,
    FaWhatsapp,
    FaXTwitter,
} from "react-icons/fa6";

import "../../styles/navbar.css";

import logo from "../../../public/icons/logo.png";

/* ==========================================================
   NAVIGATION
========================================================== */

const NAV_ITEMS = [
    {
        name: "Home",
        href: "/",
        icon: Home,
    },
    {
        name: "About",
        href: "/about",
        icon: Info,
    },
    {
        name: "Services",
        href: "/services",
        icon: BriefcaseBusiness,
    },
    {
        name: "Pathshala",
        href: "/pathshala",
        icon: GraduationCap,
    },
    {
        name: "Examination",
        href: "/examination",
        icon: ClipboardCheck,
    },
    {
        name: "Gallery",
        href: "/gallery",
        icon: Images,
        dropdown: [
            {
                name: "Photo Gallery",
                href: "/gallery/photos",
                icon: Images,
                description: "Explore our activities in photos",
            },
            {
                name: "Video Gallery",
                href: "/gallery/videos",
                icon: Video,
                description: "Watch our activities and programmes",
            },
        ],
    },
    {
        name: "Our Journey",
        href: "/our-journey",
        icon: Route,
    },
    {
        name: "Contact",
        href: "/contact",
        icon: ContactRound,
    },
];

/* ==========================================================
   NGO INFORMATION
========================================================== */

const NGO = {
    name: "Bheem Sevak Samiti",

    phone: "+91 9627833744",

    email: "bhimsevaksamiti@gmail.com",

    location: "Saharanpur, U.P.",

    address:
        "Gram Kuralki Khurd, Post Dagheda, District Saharanpur, Uttar Pradesh",

    logo,

    registrationStatus: "Registered NGO",

    registrationNumber: "R/SAH/01358/2024-2025",
};

/* ==========================================================
   SOCIAL LINKS
========================================================== */

const SOCIAL_LINKS = [
    {
        name: "Facebook",
        href: "https://www.facebook.com/share/1E8c1c6nMV/",
        icon: FaFacebookF,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/bhimsevaksamiti/",
        icon: FaInstagram,
    },
    {
        name: "YouTube",
        href: "https://www.youtube.com/@BhimSevakSamiti",
        icon: FaYoutube,
    },
    {
        name: "X",
        href: "https://twitter.com/BhimSevakSamiti",
        icon: FaXTwitter,
    },
    {
        name: "WhatsApp",
        href: "https://wa.me/919627833744",
        icon: FaWhatsapp,
    },
];

/* ==========================================================
   CONSTANTS
========================================================== */

const MOBILE_BREAKPOINT = 992;

const MOBILE_DRAWER_ID = "mobile-navigation-drawer";

const MOBILE_GALLERY_ID = "mobile-gallery-submenu";

const DESKTOP_GALLERY_ID = "gallery-dropdown-menu";

/* ==========================================================
   NAVBAR COMPONENT
========================================================== */

export default function Navbar() {
    const pathname = usePathname();

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [galleryOpen, setGalleryOpen] = useState(false);

    /* ======================================================
       HELPERS
    ====================================================== */

    const isActive = (href) => {
        if (href === "/") {
            return pathname === "/";
        }

        return (
            pathname === href ||
            pathname.startsWith(`${href}/`)
        );
    };

    const closeMenu = () => {
        setMobileOpen(false);
        setGalleryOpen(false);
    };

    const toggleMobileMenu = () => {
        setMobileOpen((current) => !current);
    };

    const toggleGallery = () => {
        setGalleryOpen((current) => !current);
    };

    const phoneHref = `tel:${NGO.phone.replace(/\s+/g, "")}`;

    const galleryIsActive =
        pathname === "/gallery" ||
        pathname.startsWith("/gallery/");

    /* ======================================================
       SCROLL EFFECT
    ====================================================== */

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    /* ======================================================
       BODY SCROLL LOCK
    ====================================================== */

    useEffect(() => {
        if (mobileOpen) {
            document.body.classList.add(
                "navbar-menu-open"
            );
        } else {
            document.body.classList.remove(
                "navbar-menu-open"
            );
        }

        return () => {
            document.body.classList.remove(
                "navbar-menu-open"
            );
        };
    }, [mobileOpen]);

    /* ======================================================
       ESCAPE KEY
    ====================================================== */

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setMobileOpen(false);
                setGalleryOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);

        return () => {
            window.removeEventListener(
                "keydown",
                handleEscape
            );
        };
    }, []);

    /* ======================================================
       CLOSE MOBILE MENU ON DESKTOP
    ====================================================== */

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            `(min-width: ${MOBILE_BREAKPOINT + 1}px)`
        );

        const handleMediaChange = (event) => {
            if (event.matches) {
                setMobileOpen(false);
                setGalleryOpen(false);
            }
        };

        mediaQuery.addEventListener(
            "change",
            handleMediaChange
        );

        return () => {
            mediaQuery.removeEventListener(
                "change",
                handleMediaChange
            );
        };
    }, []);

    /* ======================================================
       RENDER
    ====================================================== */

    return (
        <header
            className={`site-header ${
                isScrolled ? "is-scrolled" : ""
            }`}
        >
            {/* ==================================================
                TOP BAR
            ================================================== */}

            <div className="navbar-topbar">
                <div className="navbar-container navbar-topbar-inner">

                    {/* LEFT */}

                    <div className="navbar-top-left">

                        <a
                            href={phoneHref}
                            className="navbar-contact-link"
                            aria-label={`Call ${NGO.name}`}
                        >
                            <Phone
                                size={15}
                                aria-hidden="true"
                            />

                            <span>{NGO.phone}</span>
                        </a>

                        <span
                            className="navbar-top-divider"
                            aria-hidden="true"
                        />

                        <a
                            href={`mailto:${NGO.email}`}
                            className="navbar-contact-link"
                            aria-label={`Email ${NGO.name}`}
                        >
                            <Mail
                                size={15}
                                aria-hidden="true"
                            />

                            <span>{NGO.email}</span>
                        </a>

                    </div>

                    {/* CENTER */}

                    <div className="navbar-top-center">

                        <div className="navbar-location">

                            <MapPin
                                size={15}
                                aria-hidden="true"
                            />

                            <span>{NGO.location}</span>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="navbar-top-right">

                        <div
                            className="navbar-registration"
                            title={`${NGO.registrationStatus} - ${NGO.registrationNumber}`}
                        >
                            <ShieldCheck
                                size={17}
                                aria-hidden="true"
                            />

                            <div>
                                <strong>
                                    {NGO.registrationStatus}
                                </strong>

                                <small>
                                    {NGO.registrationNumber}
                                </small>
                            </div>
                        </div>

                        <div
                            className="navbar-social"
                            aria-label="Social media links"
                        >
                            {SOCIAL_LINKS.map(
                                ({
                                    name,
                                    href,
                                    icon: Icon,
                                }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={name}
                                    >
                                        <Icon
                                            aria-hidden="true"
                                        />
                                    </a>
                                )
                            )}
                        </div>

                    </div>

                </div>
            </div>

            {/* ==================================================
                MAIN NAVBAR
            ================================================== */}

            <nav
                className="main-navbar"
                aria-label="Main Navigation"
            >
                <div className="navbar-container navbar-main-inner">

                    {/* LOGO */}

                    <Link
                        href="/"
                        className="navbar-logo"
                        aria-label={`${NGO.name} Home`}
                        onClick={closeMenu}
                    >
                        <Image
                            src={NGO.logo}
                            alt={`${NGO.name} Official Logo`}
                            width={240}
                            height={80}
                            priority
                            className="navbar-logo-image"
                        />
                    </Link>

                    {/* DESKTOP NAVIGATION */}

                    <ul
                        className="desktop-nav"
                        aria-label="Primary navigation"
                    >
                        {NAV_ITEMS.map((item) => {

                            if (!item.dropdown) {
                                const active = isActive(
                                    item.href
                                );

                                const Icon = item.icon;

                                return (
                                    <li key={item.name}>
                                        <Link
                                            href={item.href}
                                            className={
                                                active
                                                    ? "nav-link active"
                                                    : "nav-link"
                                            }
                                            aria-current={
                                                active
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            <Icon
                                                className="nav-link-icon"
                                                size={17}
                                                strokeWidth={2}
                                                aria-hidden="true"
                                            />

                                            <span>
                                                {item.name}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            }

                            {/* GALLERY */}

                            const GalleryIcon = item.icon;

                            return (
                                <li
                                    key={item.name}
                                    className={`gallery-dropdown ${
                                        galleryOpen
                                            ? "dropdown-open"
                                            : ""
                                    }`}
                                >
                                    <div className="gallery-trigger">

                                        <Link
                                            href={item.href}
                                            className={
                                                galleryIsActive
                                                    ? "nav-link active"
                                                    : "nav-link"
                                            }
                                            aria-current={
                                                galleryIsActive
                                                    ? "page"
                                                    : undefined
                                            }
                                        >
                                            <GalleryIcon
                                                className="nav-link-icon"
                                                size={17}
                                                strokeWidth={2}
                                                aria-hidden="true"
                                            />

                                            <span>
                                                {item.name}
                                            </span>
                                        </Link>

                                        <button
                                            type="button"
                                            className="gallery-toggle"
                                            onClick={
                                                toggleGallery
                                            }
                                            aria-label={
                                                galleryOpen
                                                    ? "Close Gallery menu"
                                                    : "Open Gallery menu"
                                            }
                                            aria-expanded={
                                                galleryOpen
                                            }
                                            aria-haspopup="menu"
                                            aria-controls={
                                                DESKTOP_GALLERY_ID
                                            }
                                        >
                                            <ChevronDown
                                                size={15}
                                                aria-hidden="true"
                                            />
                                        </button>

                                    </div>

                                    {/* DROPDOWN */}

                                    <div
                                        id={
                                            DESKTOP_GALLERY_ID
                                        }
                                        className="gallery-menu"
                                        role="menu"
                                    >
                                        {item.dropdown.map(
                                            (subItem) => {

                                                const Icon =
                                                    subItem.icon;

                                                const active =
                                                    isActive(
                                                        subItem.href
                                                    );

                                                return (
                                                    <Link
                                                        key={
                                                            subItem.name
                                                        }
                                                        href={
                                                            subItem.href
                                                        }
                                                        className={
                                                            active
                                                                ? "gallery-menu-item active"
                                                                : "gallery-menu-item"
                                                        }
                                                        role="menuitem"
                                                        aria-current={
                                                            active
                                                                ? "page"
                                                                : undefined
                                                        }
                                                    >
                                                        <span className="gallery-menu-icon">
                                                            <Icon
                                                                size={18}
                                                                aria-hidden="true"
                                                            />
                                                        </span>

                                                        <span className="gallery-menu-content">
                                                            <strong>
                                                                {
                                                                    subItem.name
                                                                }
                                                            </strong>

                                                            <small>
                                                                {
                                                                    subItem.description
                                                                }
                                                            </small>
                                                        </span>

                                                        <ArrowRight
                                                            size={15}
                                                            className="gallery-menu-arrow"
                                                            aria-hidden="true"
                                                        />
                                                    </Link>
                                                );
                                            }
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>

                    {/* ACTIONS */}

                    <div className="navbar-actions">

                        <Link
                            href="/join-us"
                            className="join-button"
                            onClick={closeMenu}
                        >
                            <Users
                                size={18}
                                aria-hidden="true"
                            />

                            <span>Join Us</span>
                        </Link>

                        <Link
                            href="/donate-us"
                            className="donate-button"
                            onClick={closeMenu}
                        >
                            <Heart
                                size={18}
                                fill="currentColor"
                                aria-hidden="true"
                            />

                            <span>Donate Now</span>
                        </Link>

                        <button
                            type="button"
                            className="mobile-menu-button"
                            onClick={toggleMobileMenu}
                            aria-label={
                                mobileOpen
                                    ? "Close navigation menu"
                                    : "Open navigation menu"
                            }
                            aria-expanded={
                                mobileOpen
                            }
                            aria-controls={
                                MOBILE_DRAWER_ID
                            }
                        >
                            {mobileOpen ? (
                                <X
                                    size={27}
                                    aria-hidden="true"
                                />
                            ) : (
                                <Menu
                                    size={27}
                                    aria-hidden="true"
                                />
                            )}
                        </button>

                    </div>

                </div>
            </nav>

            {/* ==================================================
                MOBILE OVERLAY
            ================================================== */}

            <div
                className={`mobile-overlay ${
                    mobileOpen ? "active" : ""
                }`}
                onClick={closeMenu}
                aria-hidden="true"
            />

            {/* ==================================================
                MOBILE DRAWER
            ================================================== */}

            <aside
                id={MOBILE_DRAWER_ID}
                className={`mobile-drawer ${
                    mobileOpen ? "active" : ""
                }`}
                aria-hidden={!mobileOpen}
                aria-label="Mobile navigation"
            >
                {/* HEADER */}

                <div className="mobile-drawer-header">

                    <Link
                        href="/"
                        onClick={closeMenu}
                        aria-label={`${NGO.name} Home`}
                    >
                        <Image
                            src={NGO.logo}
                            alt={`${NGO.name} Logo`}
                            width={180}
                            height={70}
                            priority
                            className="mobile-logo"
                        />
                    </Link>

                    <button
                        type="button"
                        className="mobile-close-button"
                        onClick={closeMenu}
                        aria-label="Close navigation menu"
                    >
                        <X
                            size={24}
                            aria-hidden="true"
                        />
                    </button>

                </div>

                {/* REGISTRATION */}

                <div className="mobile-registration">

                    <ShieldCheck
                        size={19}
                        aria-hidden="true"
                    />

                    <div>
                        <strong>
                            {NGO.registrationStatus}
                        </strong>

                        <small>
                            {NGO.registrationNumber}
                        </small>
                    </div>

                </div>

                {/* MOBILE NAV */}

                <ul
                    className="mobile-nav"
                    aria-label="Mobile navigation links"
                >
                    {NAV_ITEMS.map((item) => {

                        if (!item.dropdown) {
                            const active = isActive(
                                item.href
                            );

                            const Icon = item.icon;

                            return (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        onClick={closeMenu}
                                        className={
                                            active
                                                ? "active"
                                                : ""
                                        }
                                        aria-current={
                                            active
                                                ? "page"
                                                : undefined
                                        }
                                    >
                                        <span className="mobile-nav-left">

                                            <Icon
                                                size={19}
                                                aria-hidden="true"
                                            />

                                            <span>
                                                {item.name}
                                            </span>

                                        </span>

                                        <ArrowRight
                                            size={17}
                                            aria-hidden="true"
                                        />
                                    </Link>
                                </li>
                            );
                        }

                        return (
                            <li
                                key={item.name}
                                className={`mobile-gallery ${
                                    galleryOpen
                                        ? "open"
                                        : ""
                                }`}
                            >
                                <div className="mobile-gallery-row">

                                    <Link
                                        href="/gallery"
                                        onClick={closeMenu}
                                        className={
                                            galleryIsActive
                                                ? "active"
                                                : ""
                                        }
                                    >
                                        <span className="mobile-nav-left">

                                            <Images
                                                size={19}
                                                aria-hidden="true"
                                            />

                                            <span>
                                                Gallery
                                            </span>

                                        </span>
                                    </Link>

                                    <button
                                        type="button"
                                        onClick={
                                            toggleGallery
                                        }
                                        aria-label={
                                            galleryOpen
                                                ? "Collapse Gallery submenu"
                                                : "Expand Gallery submenu"
                                        }
                                        aria-expanded={
                                            galleryOpen
                                        }
                                    >
                                        <ChevronDown
                                            size={20}
                                            aria-hidden="true"
                                        />
                                    </button>

                                </div>

                                {/* SUBMENU */}

                                <div
                                    id={
                                        MOBILE_GALLERY_ID
                                    }
                                    className="mobile-gallery-submenu"
                                >
                                    <div className="mobile-gallery-submenu-inner">

                                        {item.dropdown.map(
                                            (subItem) => {

                                                const Icon =
                                                    subItem.icon;

                                                const active =
                                                    isActive(
                                                        subItem.href
                                                    );

                                                return (
                                                    <Link
                                                        key={
                                                            subItem.name
                                                        }
                                                        href={
                                                            subItem.href
                                                        }
                                                        onClick={
                                                            closeMenu
                                                        }
                                                        className={
                                                            active
                                                                ? "active"
                                                                : ""
                                                        }
                                                    >
                                                        <Icon
                                                            size={18}
                                                            aria-hidden="true"
                                                        />

                                                        <span>
                                                            {
                                                                subItem.name
                                                            }
                                                        </span>

                                                        <ArrowRight
                                                            size={15}
                                                            aria-hidden="true"
                                                        />
                                                    </Link>
                                                );
                                            }
                                        )}

                                    </div>
                                </div>
                            </li>
                        );
                    })}
                </ul>

                {/* MOBILE ACTIONS */}

                <div className="mobile-actions">

                    <Link
                        href="/join-us"
                        className="join-button"
                        onClick={closeMenu}
                    >
                        <Users
                            size={18}
                            aria-hidden="true"
                        />

                        <span>Join Us</span>
                    </Link>

                    <Link
                        href="/donate-us"
                        className="donate-button"
                        onClick={closeMenu}
                    >
                        <Heart
                            size={18}
                            fill="currentColor"
                            aria-hidden="true"
                        />

                        <span>Donate Now</span>
                    </Link>

                </div>

                {/* CONTACT */}

                <div className="mobile-contact-box">

                    <h4>Contact Information</h4>

                    <a
                        href={phoneHref}
                        aria-label={`Call ${NGO.name}`}
                    >
                        <Phone
                            size={16}
                            aria-hidden="true"
                        />

                        <span>{NGO.phone}</span>
                    </a>

                    <a
                        href={`mailto:${NGO.email}`}
                        aria-label={`Email ${NGO.name}`}
                    >
                        <Mail
                            size={16}
                            aria-hidden="true"
                        />

                        <span>{NGO.email}</span>
                    </a>

                    <div>
                        <MapPin
                            size={16}
                            aria-hidden="true"
                        />

                        <span>{NGO.address}</span>
                    </div>

                </div>

                {/* SOCIAL */}

                <div
                    className="mobile-social"
                    aria-label="Social media links"
                >
                    {SOCIAL_LINKS.map(
                        ({
                            name,
                            href,
                            icon: Icon,
                        }) => (
                            <a
                                key={name}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                            >
                                <Icon
                                    aria-hidden="true"
                                />
                            </a>
                        )
                    )}
                </div>

            </aside>
        </header>
    );
}

