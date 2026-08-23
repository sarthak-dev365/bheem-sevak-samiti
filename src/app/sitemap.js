const routes = [
    "",
    "/about",
    "/services",
    "/pathshala",
    "/examination",
    "/gallery",
    "/events",
    "/contact",
    "/join-us",
    "/donate-us",
    "/privacy-policy",
    "/terms",
    "/sitemap",
];

export default function sitemap() {
    return routes.map((route) => ({
        url: route,
        lastModified: new Date(),
        changeFrequency:
            route === "" ? "weekly" : "monthly",
        priority:
            route === ""
                ? 1
                : route === "/donate-us"
                    ? 0.9
                    : route === "/contact" ||
                      route === "/join-us"
                        ? 0.8
                        : 0.7,
    }));
}

export const dynamic = "force-static";