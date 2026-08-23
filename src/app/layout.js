import "./globals.css";

/* ==========================================================
   WEBSITE METADATA
========================================================== */

export const metadata = {
  metadataBase: new URL(
    "https://www.bheemsevaksamiti.org"
  ),

  title: {
    default: "Bheem Sevak Samiti (Regd.)",
    template: "%s | Bheem Sevak Samiti",
  },

  description:
    "Bheem Sevak Samiti (Regd.) works for education, social reform, environmental protection and community development across India.",

  keywords: [
    "Bheem Sevak Samiti",
    "Bheem Sevak Samiti NGO",
    "NGO",
    "Education",
    "Free Education",
    "Social Reform",
    "Environmental Protection",
    "Pathshala",
    "Donation",
    "Volunteer",
  ],

  authors: [
    {
      name: "Bheem Sevak Samiti",
    },
  ],

  creator: "Bheem Sevak Samiti",

  publisher: "Bheem Sevak Samiti",

  applicationName: "Bheem Sevak Samiti",

  category: "nonprofit organization",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Bheem Sevak Samiti (Regd.)",

    description:
      "Shiksha • Samaj Sudhar • Paryavaran Sanrakshan",

    siteName: "Bheem Sevak Samiti",

    

    type: "website",

    locale: "en_IN",

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Bheem Sevak Samiti",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Bheem Sevak Samiti (Regd.)",

    description:
      "Shiksha • Samaj Sudhar • Paryavaran Sanrakshan",

    images: ["/icons/logo.png"],
  },

  twitter: {
    card: "summary_large_image",

    title: "Bheem Sevak Samiti (Regd.)",

    description:
        "Shiksha • Samaj Sudhar • Paryavaran Sanrakshan",

    images: ["/images/og-image.png"],
},

  icons: {
    icon: "/icons/logo.png",
    shortcut: "/icons/logo.png",
    apple: "/icons/logo.png",
  },
};


/* ==========================================================
   ROOT LAYOUT
========================================================== */

export default function RootLayout({ children }) {

  return (
    <html lang="en">

      <body>

        <div id="app">
          {children}
        </div>

      </body>

    </html>
  );
}