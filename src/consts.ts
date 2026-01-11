// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

interface SocialLink {
  href: string;
  label: string;
}

interface Site {
  website: string;
  author: string;
  profile: string;
  desc: string;
  title: string;
  ogImage: string;
  lightAndDarkMode: boolean;
  postPerIndex: number;
  postPerPage: number;
  scheduledPostMargin: number;
  showArchives: boolean;
  showBackButton: boolean;
  editPost: {
    enabled: boolean;
    text: string;
    url: string;
  };
  dynamicOgImage: boolean;
  lang: string;
  timezone: string;
}

// Site configuration
export const SITE: Site = {
  website: "https://hilucas.de/",
  author: "Lucas Kleipödszus",
  profile: "https://hilucas.de/about",
  desc: "Fullstack Developer aus Deutschland. Spezialist für Webdesign, SEO und innovative digitale Lösungen. Jedes Projekt ist Open Source auf GitHub.",
  title: "Lucas Kleipödszus",
  ogImage: "livvux-avatar.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000,
  showArchives: false,
  showBackButton: false,
  editPost: {
    enabled: true,
    text: "Auf GitHub bearbeiten",
    url: "https://github.com/Livvux/hilucas.de/edit/main/",
  },
  dynamicOgImage: true,
  lang: "de",
  timezone: "Europe/Berlin",
};

export const SITE_TITLE = SITE.title;
export const SITE_DESCRIPTION = SITE.desc;

// Navigation links
export const NAV_LINKS: SocialLink[] = [
  {
    href: "/",
    label: "Blog",
  },
  {
    href: "/about",
    label: "Über mich",
  },
];

// Social media links
export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/Livvux",
    label: "GitHub",
  },
  {
    href: "https://x.com/Livvux",
    label: "X",
  },
  {
    href: "https://www.linkedin.com/in/lucas-kleipoedszus/",
    label: "LinkedIn",
  },
  {
    href: "/rss.xml",
    label: "RSS",
  },
];

// Icon map for social media
export const ICON_MAP: Record<string, string> = {
  GitHub: "github",
  Twitter: "twitter",
  BlueSky: "bsky",
  RSS: "rss",
  Email: "mail",
};
