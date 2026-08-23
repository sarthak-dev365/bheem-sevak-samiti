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
  ArrowRight,
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
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pathshala", href: "/pathshala" },
  { name: "Examination", href: "/examination" },
  { name: "Gallery", href: "/gallery" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];


/* ==========================================================
   NGO INFORMATION
========================================================== */

const NGO = {
  name: "Bheem Sevak Samiti",

  phone: "+91 9627833744",

  email: "bhimsevaksamiti@gmail.com",

  shortLocation: "Saharanpur, U.P.",

  fullAddress:
    "Gram Kuralki Khurd, Post Dagheda, District Saharanpur, Uttar Pradesh",

  logo,

  registrationStatus: "Registered NGO",

  registrationNumber: "R/SAH/01358/2024-2025",
};


/* ==========================================================
   SOCIAL LINKS
========================================================== */

const SOCIAL = {
  facebook:
    "https://www.facebook.com/share/1E8c1c6nMV/",

  instagram:
    "https://www.instagram.com/bhimsevaksamiti/",

  youtube:
    "https://www.youtube.com/@BhimSevakSamiti",

  x:
    "https://twitter.com/BhimSevakSamiti",

  whatsapp:
    "https://wa.me/919627833744",
};


/* ==========================================================
   NAVBAR COMPONENT
========================================================== */

export default function Navbar() {

  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);


  /* ==========================================================
     SCROLL STATE
  ========================================================== */

  useEffect(() => {

    const handleScroll = () => {

      setIsScrolled(window.scrollY > 30);

    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  /* ==========================================================
     BODY SCROLL LOCK
  ========================================================== */

  useEffect(() => {

    if (menuOpen) {

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

  }, [menuOpen]);


  /* ==========================================================
     ESC KEY SUPPORT
  ========================================================== */

  useEffect(() => {

    if (!menuOpen) return;

    const handleKeyDown = (event) => {

      if (event.key === "Escape") {

        setMenuOpen(false);

      }

    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {

      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

    };

  }, [menuOpen]);


  /* ==========================================================
     CLOSE MOBILE MENU ON DESKTOP
  ========================================================== */

  useEffect(() => {

    const handleResize = () => {

      if (window.innerWidth > 992) {

        setMenuOpen(false);

      }

    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      window.removeEventListener(
        "resize",
        handleResize
      );

    };

  }, []);


  /* ==========================================================
     PHONE LINK
  ========================================================== */

  const phoneHref =
    `tel:${NGO.phone.replace(/\s+/g, "")}`;


  /* ==========================================================
     ACTIVE NAVIGATION
  ========================================================== */

  const isActiveRoute = (href) => {

    if (href === "/") {

      return pathname === "/";

    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );

  };


  /* ==========================================================
     RENDER
  ========================================================== */

  return (

    <header
      className={
        isScrolled
          ? "header scrolled"
          : "header"
      }
      role="banner"
    >


      {/* ======================================================
          TOP TRUST BAR
      ====================================================== */}

      <div className="topbar">

        <div className="container topbar-content">


          {/* ==================================================
              LEFT
          ================================================== */}

          <div className="topbar-left">

            <a
              href={phoneHref}
              className="topbar-link"
              aria-label="Call Bheem Sevak Samiti"
            >

              <Phone
                size={15}
                strokeWidth={2.2}
              />

              <span>
                {NGO.phone}
              </span>

            </a>


            <span
              className="topbar-divider"
              aria-hidden="true"
            />


            <a
              href={`mailto:${NGO.email}`}
              className="topbar-link"
              aria-label="Email Bheem Sevak Samiti"
            >

              <Mail
                size={15}
                strokeWidth={2.2}
              />

              <span>
                {NGO.email}
              </span>

            </a>

          </div>


          {/* ==================================================
              CENTER
          ================================================== */}

          <div className="topbar-center">

            <div className="topbar-location">

              <MapPin
                size={15}
                strokeWidth={2.2}
              />

              <span>
                {NGO.shortLocation}
              </span>

            </div>

          </div>


          {/* ==================================================
              RIGHT
          ================================================== */}

          <div className="topbar-right">


            {/* REGISTERED NGO */}

            <div className="ngo-badge">

              <ShieldCheck
                size={17}
                strokeWidth={2.2}
              />

              <div className="badge-content">

                <strong>
                  {NGO.registrationStatus}
                </strong>

                <small>
                  {NGO.registrationNumber}
                </small>

              </div>

            </div>


            {/* SOCIAL */}

            <div
              className="social-icons"
              aria-label="Social media links"
            >

              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Facebook"
              >
                <FaFacebookF />
              </a>


              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official Instagram"
              >
                <FaInstagram />
              </a>


              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official YouTube"
              >
                <FaYoutube />
              </a>


              <a
                href={SOCIAL.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official X"
              >
                <FaXTwitter />
              </a>


              <a
                href={SOCIAL.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Official WhatsApp"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

      </div>


      {/* ======================================================
          MAIN NAVBAR
      ====================================================== */}

      <nav
        className="navbar"
        role="navigation"
        aria-label="Main Navigation"
      >

        <div className="container navbar-content">


          {/* ==================================================
              LOGO
          ================================================== */}

          <Link
            href="/"
            className="logo"
            aria-label={`${NGO.name} Home`}
          >

            <Image
              src={NGO.logo}
              alt={`${NGO.name} Official Logo`}
              priority
              width={240}
              height={80}
              className={
                isScrolled
                  ? "logo-image shrink"
                  : "logo-image"
              }
            />

          </Link>


          {/* ==================================================
              DESKTOP NAVIGATION
          ================================================== */}

          <ul className="nav-links">

            {NAV_ITEMS.map((item) => (

              <li key={item.name}>

                <Link
                  href={item.href}
                  className={
                    isActiveRoute(item.href)
                      ? "active-link"
                      : ""
                  }
                >

                  {item.name}

                </Link>

              </li>

            ))}

          </ul>


          {/* ==================================================
              RIGHT ACTIONS
          ================================================== */}

          <div className="nav-actions">


            {/* JOIN US */}

            <Link
              href="/join-us"
              className="join-btn"
              aria-label="Join Bheem Sevak Samiti"
            >

              <Users
                size={18}
                strokeWidth={2.2}
              />

              <span>
                Join Us
              </span>

            </Link>


            {/* DONATE */}

            <Link
              href="/donate-us"
              className="donate-btn"
              aria-label="Donate to Bheem Sevak Samiti"
            >

              <Heart
                size={18}
                fill="currentColor"
                strokeWidth={2}
              />

              <span>
                Donate Now
              </span>

            </Link>


            {/* MOBILE MENU TOGGLE */}

            <button
              type="button"
              className="menu-toggle"
              aria-label={
                menuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() =>
                setMenuOpen((prev) => !prev)
              }
            >

              {menuOpen ? (

                <X
                  size={28}
                  strokeWidth={2.2}
                />

              ) : (

                <Menu
                  size={28}
                  strokeWidth={2.2}
                />

              )}

            </button>

          </div>

        </div>

      </nav>


      {/* ======================================================
          MOBILE DRAWER
      ====================================================== */}

      <aside
        id="mobile-navigation"
        className={
          menuOpen
            ? "mobile-menu active"
            : "mobile-menu"
        }
        aria-hidden={!menuOpen}
      >


        {/* ==================================================
            MOBILE HEADER
        ================================================== */}

        <div className="mobile-header">


          <Link
            href="/"
            className="mobile-logo-link"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <Image
              src={NGO.logo}
              alt={`${NGO.name} Official Logo`}
              width={170}
              height={70}
              priority
              className="mobile-logo"
            />

          </Link>


          {/* CLOSE BUTTON */}

          <button
            type="button"
            className="mobile-close"
            aria-label="Close navigation menu"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <X
              size={25}
              strokeWidth={2.2}
            />

          </button>

        </div>


        {/* ==================================================
            MOBILE NGO BADGE
        ================================================== */}

        <div className="mobile-ngo-badge">

          <ShieldCheck
            size={18}
            strokeWidth={2.2}
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


        {/* ==================================================
            MOBILE NAVIGATION
        ================================================== */}

        <ul className="mobile-nav-links">

          {NAV_ITEMS.map((item) => (

            <li key={item.name}>

              <Link
                href={item.href}
                className={
                  isActiveRoute(item.href)
                    ? "active-link"
                    : ""
                }
                onClick={() =>
                  setMenuOpen(false)
                }
              >

                <span>
                  {item.name}
                </span>

                <ArrowRight
                  size={18}
                  strokeWidth={1.8}
                />

              </Link>

            </li>

          ))}

        </ul>


        {/* ==================================================
            MOBILE ACTION BUTTONS
        ================================================== */}

        <div className="mobile-buttons">

          <Link
            href="/join-us"
            className="join-btn"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <Users
              size={18}
              strokeWidth={2.2}
            />

            <span>
              Join Us
            </span>

          </Link>


          <Link
            href="/donate-us"
            className="donate-btn"
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <Heart
              size={18}
              fill="currentColor"
            />

            <span>
              Donate Now
            </span>

          </Link>

        </div>


        {/* ==================================================
            CONTACT INFORMATION
        ================================================== */}

        <div className="mobile-contact">

          <h4>
            Contact Information
          </h4>


          <a href={phoneHref}>

            <Phone size={16} />

            <span>
              {NGO.phone}
            </span>

          </a>


          <a
            href={`mailto:${NGO.email}`}
          >

            <Mail size={16} />

            <span>
              {NGO.email}
            </span>

          </a>


          <div>

            <MapPin size={16} />

            <span>
              {NGO.fullAddress}
            </span>

          </div>

        </div>


        {/* ==================================================
            MOBILE SOCIAL
        ================================================== */}

        <div
          className="mobile-social"
          aria-label="Social media links"
        >

          <a
            href={SOCIAL.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>


          <a
            href={SOCIAL.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>


          <a
            href={SOCIAL.youtube}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>


          <a
            href={SOCIAL.x}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
          >
            <FaXTwitter />
          </a>


          <a
            href={SOCIAL.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

        </div>

      </aside>


      {/* ======================================================
          MOBILE OVERLAY
      ====================================================== */}

      <div
        className={
          menuOpen
            ? "mobile-overlay active"
            : "mobile-overlay"
        }
        aria-hidden="true"
        onClick={() =>
          setMenuOpen(false)
        }
      />

    </header>
  );
}